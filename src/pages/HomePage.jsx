import React from "react";
import HeroSlide from "../components/HeroSlide";
import Container from "../components/Container";
import MediaSlider from "../components/MediaSlider";

function HomePage() {
  return (
    <>
      <HeroSlide />
      <div className="bg-black flex flex-col justify-center items-center">
        <Container header={"Phim phổ biến"}>
          <MediaSlider />
        </Container>

        <Container header={"Series Phổ biến"}>
          <MediaSlider />
        </Container>

        <Container header={"Phim được đánh giá cao"}>
          <MediaSlider />
        </Container>

        <Container header={"Series được đánh giá cao"}>
          <MediaSlider />
        </Container>
      </div>
    </>
  );
}

export default HomePage;
