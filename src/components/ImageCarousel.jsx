import React from "react";
import { Typography, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "./data";
import ImageCard from "./imageCard";
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper/modules";

const ImageCarousel = ({ title }) => {
  return (
    <Container maxWidth="lg" sx={{ my: "50px" }}>
      <Typography variant="h5" sx={{ m: "20px" }}>
        {title}
      </Typography>
      <Swiper
        slidesPerView={5}
        spaceBetween={2}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <ImageCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ImageCarousel;
