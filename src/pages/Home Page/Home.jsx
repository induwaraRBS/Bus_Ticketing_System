import React from "react";
import "react-slideshow-image/dist/styles.css";
import NavBar from "../../components/NavBar/NavBar";
import Image_slider from "../../components/Image_Slider/Image_slider";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./Home.css";
import NewsCard from "../../components/Cards/Cards"
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className="Home_Page">
      <div className="Navigation_Bar">
        <NavBar />
      </div>
      <div className="Home_Header">
        <Image_slider />
      </div>
      <div className="Home_Body_section1">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              width: 500,
              height: 300,
            },
          }}
        >
          <Paper elevation={4}>
            <h1>Our Mission</h1>
            <hr />
            <p>
              To provide the public a safe, dependable and comfortable road
              passenger transport at a reasonable fare system through a staff
              dedicated to service and obtain the optimum utilization of all
              resources functioning as a financially viable organization.
            </p>
          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              width: 500,
              height: 300,
            },
          }}
        >
          <Paper elevation={4}>
            <h1>Our vision</h1>
            <hr />
            <p>To be the excellent provider of passenger transport.</p>
          </Paper>
        </Box>
      </div>
      <div className="Home_Body_section2">
            <div className="Section2_Title">
                <h2>Latest News</h2>
            </div>
            <div className="Section2_Content">
                  <NewsCard  />
                  <NewsCard  />
                  <NewsCard  />
            </div>
      </div>
      <div className="Footer">
           <Footer/>
      </div>
    </div>
  );
};

export default Home;
