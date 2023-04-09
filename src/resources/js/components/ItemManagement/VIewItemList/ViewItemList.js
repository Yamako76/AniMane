import React from 'react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import EditItem from '../tool/EditItem';
import DeleteItem from '../tool/DeleteItem';
import {getBoxWidth} from '../tool/tool';
import {grey} from "@mui/material/colors";

// アイテムの一覧表示
const ViewItemList = ({folderId, items, handleReload}) => {
    const BoxWidth = getBoxWidth();
    const titleWidth = BoxWidth - 90;

    // 各アイテムを表示するための枠組み
    // - アイテムのタイトルの表示
    // - アイテムの編集ボタン
    // - アイテムの削除ボタン の作成
    const PaperContent = ({item}) => {
        const contentList = [
            {
                "body": <Tooltip title={item.name + "の詳細"} placement="bottom-end">
                    <Box
                        textOverflow="ellipsis"
                        overflow="hidden"
                        fontSize={20}
                        component={Link}
                        to={"/app/home/folders/" + folderId + "/items/" + item.id}
                        sx={{
                            margin: "0px 5px",
                            width: titleWidth - 10,
                            color: grey[900],
                            textDecoration: "none",
                            "&:hover": {color: grey[900]}
                        }}
                    >
                        {item.name}
                    </Box>
                </Tooltip>,
                "sx": {width: titleWidth, display: "flex", justifyContent: "flex-start", alignItems: "flex-end"}
            },
            {
                "body": <EditItem folderId={folderId} item={item} handleReload={handleReload}/>,
                "sx": {width: "40px", display: "flex", justifyContent: "center", alignItems: "flex-end"}
            },
            {
                "body": <DeleteItem folderId={folderId} item={item} handleReload={handleReload}/>,
                "sx": {width: "40px", display: "flex", justifyContent: "center", alignItems: "flex-end"}
            }
        ];

        return (
            <Paper variant="outlined"
                   sx={{
                       width: "100%",
                       height: "50px",
                       display: "flex",
                       alignItems: "center",
                       color: grey[900],
                       textDecoration: "none",
                       "&:hover": {color: grey[900], outline: 'solid', outlineColor: grey[900]},
                   }}
            >
                <Grid container>
                    {
                        contentList.map((content, index) => {
                            return (
                                <Grid key={index} container item sx={content.sx}>
                                    {content.body}
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Paper>
        );
    }

    // アイテム一覧
    const ItemList = () => {
        return (
            <Box sx={{width: "100%", display: "flex", justifyContent: "center", marginTop: "10px"}}>
                <Grid container direction="column" spacing={1}>
                    {
                        items.map((item, index) => (
                            <Grid key={index} container item>
                                <PaperContent item={item}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        );
    }

    return (
        <Box>
            <ItemList/>
        </Box>
    );
}

export default ViewItemList;
