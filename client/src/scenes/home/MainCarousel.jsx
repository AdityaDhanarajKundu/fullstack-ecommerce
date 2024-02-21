/* eslint-disable no-unused-vars */
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// function to import all required images at once
async function importAll(context) {
  const images = {};
  for await (const [filePath, module] of Object.entries(context)) {
    const imageModule = await module();
    images[filePath.replace("./", "")] = imageModule.default;
  }
  return images;
}

// context for the imported module
// const imagesContext = import.meta.glob("../../assets/*.{png,jpg,jpeg,svg}");

// object to store all the images of the carousel
// export const heroTextureImports = importAll(imagesContext);

function MainCarousel() {
  const isNonMobile = useMediaQuery("(min-width:600px)"); 
  const [heroTextureImports, setHeroTextureImports] = useState({}); 

  useEffect(()=>{
    async function fetchImages() {
      const context = import.meta.glob(`../../assets/*.{png,jpg,jpeg,svg}`);
      const images = await importAll(context);
      console.log(images);
      setHeroTextureImports(images);
    }

    fetchImages();
  },[]);  // empty array to run the effect only once when the component first renders
    
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {Object.values(heroTextureImports).map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-image-${index}`}
            style={{
              width: "100%",
              height: "700px",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
          {/* this particular box will contain the text of the carousel */}
          <Box
            color={"white"}
            padding={"20px"}
            borderRadius="1px"
            textAlign="left"
            backgroundColor="rgb(0, 0, 0, 0.4)"
            position="absolute"
            top="46%"
            left={isNonMobile ? "10%" : "0"}
            right={isNonMobile ? undefined : "0"}
            margin={isNonMobile ? undefined : "0 auto"}
            maxWidth={isNonMobile ? undefined : "240px"}
          >
            <Typography color={shades.secondary[200]}>-- NEW ITEMS</Typography>
            <Typography variant="h1">Summer Sale</Typography>
            <Typography
              fontWeight="bold"
              color={shades.secondary[300]}
              sx={{ textDecoration: "underline" }}
            >
              Discover More
            </Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
}

export default MainCarousel;
