import {Radio , FormLabel, FormControlLabel, RadioGroup, makeStyles, Tooltip, Fab, Modal, Typography, Container, TextField, MenuItem, Button } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
   
    modCon: {
        width: '500px',
        height: '550px',
        backgroundColor: '#ffff',
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        margin: 'auto',
    },
    onvan:{
        marginTop:"20px",
        marginBottom:"10px",
        textAlign:"right",
    },
    texfild:{
        marginTop:"20px",
        marginBottom:"6px",
        fontFamily:"font1",

    },
    item:{
        marginTop:"10px",
        marginBottom:"20px",
    },
    items:{
         width:"250px"

    },
    // but:{
    //     marginRight:"300px",
    //     marginTop:"20px",
    // },
    // radio:{
    //     marginTop:"30px",
    // },
    tool:{
        marginTop:"-350px",
        marginLeft:"750px"
    }, 
  
}));


function Tooltipp() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <>
            
            <Tooltip className={classes.tool} title="افزودن پست"  aria-label="add" onClick={() => setOpen(true)}>
                <Fab color="secondary" className={classes.Fab} >
                    <AddIcon />
                </Fab> 
            </Tooltip>


            <Modal open={open}  dir='rtl' >
                <Container className={classes.modCon}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <div className={classes.onvan}>
                            <TextField id="standard-basic" label="عنوان" style={{ width: '100%' }} />
                        </div>
                        <div className={classes.texfild}>
                            <TextField id="outlined-multiline-static"
                                label="پیام شما"
                                multiline
                                rows={4}
                                defaultValue="داستان خودت را بگو"
                                variant="outlined" style={{ width: '100%' }} />

                        </div>
                        <div className={classes.item}>
                            <TextField select label="نوع دسترسی" className={classes.items}>
                                <MenuItem defaultValue="pablic "> عمومی </MenuItem>
                                <MenuItem defaultValue="private "> خصوصی </MenuItem>
                                <MenuItem defaultValue="friend "> نمایش برای دوستان </MenuItem>
                            </TextField>
                        </div>
                        <div className={classes.radio}>
                        <FormLabel component="legend">دسترسی کامنت گزاری</FormLabel>
                            <RadioGroup >
                                <FormControlLabel value="برای همه" control={<Radio />} label="برای همه" />
                                <FormControlLabel value="برای دوستان" control={<Radio />} label="برای دوستان" />
                                <FormControlLabel value="هیچکس" control={<Radio />} label="هیچکس" />
                                <FormControlLabel value="سفارشی  " disabled control={<Radio />} label="(اکانت های طلای)دسترسی ویژه" />
                            </RadioGroup>
                        </div>
                        <div className={classes.but}>
                            <Button  color='primary' variant="contained" style={{marginLeft:'10px'}}> ارسال </Button>
                            <Button  color='secondary'  variant="contained" onClick={()=> setOpen(false)}> انصراف  </Button>

                        </div>
                    </form>
                </Container>
            </Modal>


        </>
    );
}
export default Tooltipp;