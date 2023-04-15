import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Link} from 'react-router-dom';
import {grey} from "@mui/material/colors";

const BackButton = ({folderId}) => {

    const typo_sx = {
        fontWeight: "bold",
        fontSize: 30,
        color: grey[900],
        textDecoration: "none",
        "&:hover": {color: grey[900]},
    };

    return (
        <Box>
            <Typography component={Link} to={"/app/home/folders/" + folderId + "/items/"} sx={typo_sx}>戻る</Typography>
        </Box>
    );
}

export default BackButton;
