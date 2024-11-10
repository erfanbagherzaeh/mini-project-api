import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import './Card.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  likeButton: {
    color: 'gray',
    '&.liked': {
      color: 'red',
    },
  },
  deleteButton: {
    marginLeft: 'auto',
  },
});

function MediaCard(props) {
  const classes = useStyles();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [itemDeleted, setItemDeleted] = useState(false);
  const [cardVisible, setCardVisible] = useState(true); // برای مدیریت نمایش کارت

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleDeleteClick = () => {
    setItemDeleted(true);
    setCardVisible(false); // کارت را پنهان می‌کنیم
    setSnackbarOpen(true);

    // تنظیم تایمر برای بسته شدن Snackbar بعد از 20 ثانیه
    setTimeout(() => {
      setSnackbarOpen(false);
    }, 10000);
  };

  const handleUndoDelete = () => {
    setItemDeleted(false);
    setCardVisible(true); // کارت را دوباره نمایش می‌دهیم
    setSnackbarOpen(false);
  };

  return (
    <>
      {cardVisible && (
        <div className='cont-card'>
          <div className='item'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={props.img}
                  title={props.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {props.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <ArrowBackIosIcon />
                  <ArrowBackIosIcon />
                </Button>
                <Button size="small" color="primary">
                  Continue
                </Button>
                <Button
                  size="small"
                  onClick={handleLikeClick}
                  className={`${classes.likeButton} ${liked ? 'liked' : ''}`}
                >
                  <FavoriteIcon />
                  <Typography variant="body2" style={{ marginLeft: 4 }}>
                    {likeCount}
                  </Typography>
                </Button>
                {/* دکمه حذف */}
                <Button
                  size="small"
                  className={classes.deleteButton}
                  onClick={handleDeleteClick}
                >
                  <DeleteIcon />
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      )}

      {/* نمایش Snackbar برای پشیمانی از حذف */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={20000} // Snackbar به مدت 20 ثانیه نمایش داده می‌شود
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <MuiAlert
          onClose={() => setSnackbarOpen(false)}
          severity="error"
          action={
            <Button
              color="secondary"
              size="small"
              onClick={handleUndoDelete}
              style={{
                backgroundColor: 'red',   // بک‌گراند قرمز
                color: 'white',           // رنگ متن سفید
                border: '1px solid black', // مرز مشکی
                '&:hover': {
                  backgroundColor: 'darkred', // رنگ پس‌زمینه هنگام هاور (hover)
                },
              }}
            >
              UNDO
            </Button>

          }
        >
          Item deleted! You can undo this action.
        </MuiAlert>
      </Snackbar>
    </>
  );
}

export default MediaCard;
