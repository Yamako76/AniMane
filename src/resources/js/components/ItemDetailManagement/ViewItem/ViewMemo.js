import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";

const ViewMemo = ({memo}) => {
    return (
        <Grid container direction="column">
            <Box>
                <Typography>メモ</Typography>
                <Typography>{memo}</Typography>
            </Box>
        </Grid>

    );
}

export default ViewMemo;
