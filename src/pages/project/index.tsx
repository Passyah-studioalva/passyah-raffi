import * as React from "react";
import { Box, Container, Text, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import CardProject from "@src/components/global/cardProject";

const ProjectPage = () => {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const images = [
    {
      url: "https://source.unsplash.com/6000x2000/?programming",
    },
    {
      url: "https://source.unsplash.com/6000x2000/?programmer",
    },
    {
      url: "https://source.unsplash.com/6000x2000/?coding",
    },
  ];
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Box mt={["71px", "71px", "71px", "86px"]} overflow={"hidden"}>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
          {images.map((item, idx) => {
            return (
              <Box key={idx}>
                <Image
                  display={item && "flex"}
                  width={"100%"}
                  height={["300px", "300px", "300px", "400px"]}
                  objectFit={"cover"}
                  src={item.url}
                  alt={`img(${idx}`}
                  className="skeleton-box"
                />
              </Box>
            );
          })}
        </Slider>
      </Box>
      <Container maxW={"container.xl"} mb={20}>
        <Text
          as="h4"
          textAlign={"center"}
          my={["50px"]}
          fontSize={25}
          color={"gray.600"}
        >
          SOME OF MY LATEST WORK
        </Text>
        <CardProject />
      </Container>
    </>
  );
};

export default ProjectPage;
