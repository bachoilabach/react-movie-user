import React from "react";
import HeroSlide from "../components/HeroSlide";
import Container from "../components/Container";
import MediaSlider from "../components/MediaSlider";

function HomePage() {
	return (
		<>
			<HeroSlide />
      <div className='bg-black px-52'>
        <Container header={'Phim phổ biến'}>
          <MediaSlider title = {'Phim mới ra mắt'}/>
        </Container>

        <Container header={'Phim mới ra mắt'}>
          <MediaSlider title = {'Phim mới ra mắt'}/>
        </Container>

        <Container header={'Phim được đánh giá cao'}>
          <MediaSlider title={'Phim được đánh giá cao'}/>
        </Container>
      </div>
    </>
  );
}

export default HomePage;
