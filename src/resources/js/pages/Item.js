import React from 'react';
import Box from "@mui/material/Box";
import {useParams} from "react-router-dom";
import ItemDetailManagement from "../components/ItemDetailManagement/ItemDetailManagement";

/**
 * /app/home/:folderId/items/:itemIdの画面へ出力する要素
 *  itemIdによって選択されたアイテムの詳細画面を表示
 */
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
