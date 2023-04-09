import React from 'react';
import Box from "@mui/material/Box";
import {useParams} from "react-router-dom";

const Item = () => {
    const { itemId } = useParams();
    return (
        <Box>
            {itemId}
        </Box>
    );
};

export default Item;
