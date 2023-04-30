import React from 'react';
import Box from "@mui/material/Box";
import {useParams} from "react-router-dom";
import ItemDetailManagement from "../components/ItemDetailManagement/ItemDetailManagement";

const Item = () => {
    const {itemId} = useParams();
    const {folderId} = useParams();

    return (
        <Box sx={{
            width: "100%",
        }}>
            <ItemDetailManagement itemId={itemId} folderId={folderId}/>
        </Box>
    );
};

export default Item;
