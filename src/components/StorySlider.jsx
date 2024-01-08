import React from "react";
import { Container, Avatar } from "@mui/material";
import { images } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";

const StorySlider = () => {
  return (
    <Container maxWidth="lg">
      <Swiper
        slidesPerView={8}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <Avatar
              key={index}
              alt="Remy Sharp"
              src={item.imageUrl}
              sx={{ width: 100, height: 100, border: "2px solid white" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default StorySlider;
