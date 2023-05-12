import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ClearButton from './ClearButton';

/**
 * itemの追加・編集をする画面
 * itemの追加・編集ボタンを押すと新しいitemを作成する画面が表示される
 * 閉じるまたは追加・編集ボタンを押すと新しいitem作成のキャンセルまたは新しいitem作成が完了する
 */

const EditItemDialog = ({
                            taskName,
                            id,
                            label,
                            open,
                            error,
                            errorText,
                            handleChange,
                            handleClose,
                            handleSubmit,
                            handleRefresh,
                            nameValue,
                            submitButtonName,
                            memoId,
                            memoLabel,
                            memoValue,
                            memoHandleChange,

                        }) => {
    return (
        <Box>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{taskName}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id={id}
                        label={label}
                        fullWidth
                        variant="outlined"
                        helperText={errorText}
                        error={error}
                        onChange={handleChange}
                        value={nameValue}
                        InputProps={{
                            endAdornment: (nameValue === "") ? null :
                                <ClearButton title="入力のクリア" handleRefresh={handleRefresh} fontSize="small"/>
                        }}
                    />
                    <TextField
                        margin="dense"
                        id={memoId}
                        multiline
                        rows={5}
                        label={memoLabel}
                        fullWidth
                        variant="outlined"
                        onChange={memoHandleChange}
                        value={memoValue}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>閉じる</Button>
                    <Button onClick={handleSubmit}>{submitButtonName}</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default EditItemDialog;
