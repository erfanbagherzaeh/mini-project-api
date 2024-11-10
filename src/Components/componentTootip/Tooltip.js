import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles, Tooltip, Fab, Modal, Container, Typography, TextField, Button, Snackbar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    modalContainer: {
        width: '400px',
        padding: theme.spacing(4),
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: theme.shadows[5],
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    tooltip: {
        position: 'fixed',
        bottom: theme.spacing(4),
        right: theme.spacing(4),
    },
    formField: {
        marginBottom: theme.spacing(2),
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(3),
    },
}));

function UploadTooltip() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        img: null,
    });
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, img: e.target.files[0] });
    };

    const handleUpload = () => {
        const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('img', formData.img);

        axios.post('http://localhost:5000/articles', data)
            .then(() => {
                setSnackbarOpen(true); // نمایش پیام موفقیت
                setOpen(false); // بستن مودال
                setFormData({ name: '', description: '', img: null }); // بازنشانی فرم
            })
            .catch(error => console.error('Upload failed:', error));
    };

    const handleClose = () => {
        setOpen(false);
        setFormData({ name: '', description: '', img: null });
    };

    return (
        <>
            <Tooltip title="افزودن پست جدید" className={classes.tooltip}>
                <Fab color="secondary" onClick={() => setOpen(true)}>
                    <AddIcon />
                </Fab>
            </Tooltip>

            <Modal open={open} onClose={handleClose}>
                <Container className={classes.modalContainer}>
                    <Typography variant="h6" gutterBottom>
                        ایجاد پست جدید
                    </Typography>

                    <TextField
                        label="نام"
                        variant="outlined"
                        fullWidth
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={classes.formField}
                    />

                    <TextField
                        label="توضیحات"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={3}
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className={classes.formField}
                    />

                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="upload-button-file"
                        type="file"
                        onChange={handleFileChange}
                    />
                    <label htmlFor="upload-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                        {formData.img && <span>{formData.img.name}</span>}
                    </label>

                    <div className={classes.buttonContainer}>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<ClearIcon />}
                            onClick={handleClose}
                        >
                            کنسل
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<CloudUploadIcon />}
                            onClick={handleUpload}
                            disabled={!formData.name || !formData.description || !formData.img} // غیر فعال در صورت ناقص بودن فرم
                        >
                            آپلود
                        </Button>
                    </div>
                </Container>
            </Modal>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <MuiAlert onClose={() => setSnackbarOpen(false)} severity="success" style={{ backgroundColor: '#4caf50', color: '#ffffff' }}>
                    پست با موفقیت آپلود شد!
                </MuiAlert>
            </Snackbar>
        </>
    );
}

export default UploadTooltip;
