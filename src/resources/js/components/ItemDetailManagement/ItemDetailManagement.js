import React, {useContext, useEffect, useRef, useState} from "react";
import axios from 'axios';
import Box from '@mui/material/Box';
import ViewName from "./ViewItem/ViewName";
import ViewMemo from "./ViewItem/ViewMemo";
import {NoticeContext} from "../common/Notification";
import {useNavigate} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Grid from "@mui/material/Grid";
import {getBoxWidth} from "../ItemManagement/tool/tool";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const ItemDetailManagement = ({itemId, folderId}) => {

    const BoxWidth = getBoxWidth();
    const [name, setName] = useState();
    const [memo, setMemo] = useState();
    const [reRender, setReRender] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [notice_state, notice_dispatch] = useContext(NoticeContext);
    const navigate = useNavigate();
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        const getItem = async () => {
            const item = await fetchItem();
            setName(item.name);
            setMemo(item.memo);
            setIsLoading(false);
        }
        if (isMounted.current) {
            getItem();
        }
    }, [])


    const handleReRender = () => {
        setReRender(true);
    }

    const handleReload = () => {
        if (isLoading || !isMounted.current) {
            return;
        }
        setIsLoading(true);
        setName('');
        setMemo('');
        handleReRender();
    }

    const failedToLoad = () => {
        notice_dispatch({type: "update_message", payload: "アニメ詳細の読み込みに失敗しました"});
        notice_dispatch({type: "handleNoticeOpen"});
        navigate('/app/home', {replace: true});
    }

    const loader = (
        <Grid container direction="column" alignItems={'center'} justifyContent={'center'}>
            <Grid><CircularProgress color="inherit"/></Grid>
            <Grid><Typography color="inherit">ロード中</Typography></Grid>
        </Grid>
    );

    const fetchItem = async () => {
        const abortCtrl = new AbortController();
        const timeout = setTimeout(() => abortCtrl.abort(), 10000);
        let item = null;

        try {
            const res = await axios.get(`/api/folders/${folderId}/items/${itemId}`, {signal: abortCtrl.signal});
            item = {name: res.data.name, memo: res.data.memo};
        } catch {
            failedToLoad();
        } finally {
            clearTimeout(timeout);
        }

        return item;
    }

    const ViewItem = () => {
        return (
            <Box>
                <ViewName name={name}/>
                <ViewMemo memo={memo}/>
            </Box>
        );
    }

    return (
        <Grid>
            {(isLoading) ? (loader) : <ViewItem/>}
        </Grid>
    );
}

export default ItemDetailManagement;
