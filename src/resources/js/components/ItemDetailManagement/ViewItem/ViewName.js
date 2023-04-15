import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ViewName = ({name}) => {
    return (
        <Box>
            <Typography fontSize={30} fontWeight={'bold'}>{name}</Typography>
        </Box>
    );
}

export default ViewName;
