import React from 'react';
import Box from '@mui/material/Box';
import {IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import EditItemDialog from './EditItemDialog';

// Objectの編集を行う画面を表するためのボタン
// ボタンを押すと編集画面を表示し
// 再度, ボタンを押すと閉じる
const EditItemButton = ({
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
                            ariaLabel,
                            size,
                            sx,
                            memoId,
                            memoValue,
                            memoLabel,
                            memoHandleChange,
                            memoHandleRefresh


                        }) => {
    return (
        <Box>
            <IconButton
                onClick={handleClickOpen}
                aria-label={ariaLabel}
                disableFocusRipple={true}
                size={size}
                sx={sx}
            >
                <EditIcon/>
            </IconButton>
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
                memoId={memoId}
                memoValue={memoValue}
                memoLabel={memoLabel}
                memoHandleChange={memoHandleChange}
                memoHandleRefresh={memoHandleRefresh}
            />
        </Box>
    );
}

export default EditItemButton;
