import React from "react";
import "./GoodItem.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const GoodItem = ({ full_background, description, image, name, price }) => {
  return (
    <li className="item">
      <Card sx={{ height: "100%", width: "100%" }}>
        <CardMedia
          component="img"
          alt={name}
          height="320"
          image={full_background}
          sx={{ objectPosition: "center" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant={"h4"}>{price} $</Typography>
          <Button variant="contained" size="medium" color="success">
            Buy
          </Button>
        </CardActions>
      </Card>
    </li>
  );
};

export default GoodItem;
