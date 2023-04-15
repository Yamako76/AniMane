import React from 'react';
import Box from "@mui/material/Box";
import {useParams} from "react-router-dom";
import ItemDetailManagement from "../components/ItemDetailManagement/ItemDetailManagement";
import BackButton from "../components/ItemDetailManagement/BackButton";
import Grid from "@mui/material/Grid";

const Item = () => {
    const {itemId} = useParams();
    const {folderId} = useParams()
    const itemSx = {
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    };

    return (
        <Box>
            <Box sx={{position: 'absolute', left: 50}}>
                <BackButton folderId={folderId}/>
            </Box>
            <Box sx={itemSx}>
                <Grid>
                    <ItemDetailManagement itemId={itemId} folderId={folderId}/>
                </Grid>
            </Box>
        </Box>
    );
};

export default Item;
