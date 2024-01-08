import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Box,
  Button,
} from "@mui/material";

import { styled } from "@mui/material/styles";

const ArtCardContainer = styled(Box)({
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const ImageCard = ({ item }) => {
  return (
    <ArtCardContainer
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Card sx={{ maxWidth: 270, backgroundColor: "rgb(65 63 63)" }}>
        <CardMedia
          component="img"
          height="194"
          image={item.imageUrl}
          alt="Paella dish"
        />
        <CardContent
          sx={{ fontWeight: "bold", color: "white" }}
          className="flex"
        >
          <Typography variant="body2">{item.title} # ...</Typography>
          <Typography variant="subtitle2">{item.price}</Typography>
        </CardContent>
        <CardActions className="flex" sx={{ mx: "8px" }}>
          <Typography color="white">14 EHT</Typography>
          <Button sx={{ backgroundColor: "#c2ff74", color: "black" }}>
            Buy now
          </Button>
        </CardActions>
      </Card>
    </ArtCardContainer>
  );
};

export default ImageCard;
