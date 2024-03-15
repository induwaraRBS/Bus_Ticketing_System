import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { Button } from "@mui/material";
const Cards = () => {
  return (
    <Card sx={{ maxWidth: 345 ,border: '1px solid black' }} elevation={3}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.newswire.lk/wp-content/uploads/2020/12/Screenshot_20201231-150645_Facebook.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            New Content
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" sx={{}}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
