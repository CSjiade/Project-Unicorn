import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useBlogCardStyles } from './blog_card_style';


export default function BlogCard(props) {
  const classes = useBlogCardStyles();
  
  return (
    <Grid item className={classes.blogItem}>
      <Link className={classes.blogButton} to={props.url}>
        <div className={classes.gradient}>
          <img className={classes.blogImage} src={props.displayImage} alt={props.title}/>
        </div>
        <div className={classes.blogDescription}>
          <Typography className={classes.blogText} variant='h5' >{props.title}</Typography>
          <Typography className={classes.blogText} color='textPrimary'>{props.description}</Typography>
        </div>
      </Link>

    </Grid>
  )
}