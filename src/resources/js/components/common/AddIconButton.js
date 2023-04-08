import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import EditItemDialog from "./EditItemDialog";

// Objectを追加するためのDialogを表示するボタン
// Objectの追加ボタンを押すと新しいObject作成する画面が表示され
// 閉じるまたは追加ボタンを押すと新しいObject作成のキャンセルまたは新しいObject作成が完了する
const AddIconButton = ({
                           taskName,
                           id,
                           label,
                           open,
                           error,
                           errorText,
                           handleClickOpen,
                           handleChange,
                           handleClose,
                           handleSubmit,
                           handleRefresh,
                           nameValue,
                           submitButtonName,
                           sx,
                           memoId,
                           memoLabel,
                           memoValue,
                           memoHandleChange,
                           memoHandleRefresh
                       }) => {
    return (
        <Box>
            <Tooltip title={taskName}>
                <IconButton
                    onClick={handleClickOpen}
                    disableFocusRipple={true}
                    sx={sx}
                >
                    <AddIcon/>
                </IconButton>
            </Tooltip>

            <EditItemDialog
                taskName={taskName}
                id={id}
                label={label}
                open={open}
                error={error}
                errorText={errorText}
                handleChange={handleChange}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                handleRefresh={handleRefresh}
                nameValue={nameValue}
                submitButtonName={submitButtonName}
                memoLabel={memoLabel}
                memoValue={memoValue}
                memoId={memoId}
                memoHandleChange={memoHandleChange}
                memoHandleRefresh={memoHandleRefresh}
            />
        </Box>
    );
}

export default AddIconButton;
