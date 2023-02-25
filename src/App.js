import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import Banner from "./components//Banner";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Moving from "./components/Moving";
import Carousel from "react-elastic-carousel";

import ananas1 from "./assets/ananas1.jpg";
import ananas2 from "./assets/ananas2.jpeg";
import ananas3 from "./assets/ananas3.jpg";
import ananas4 from "./assets/ananas4.jpeg";
import ananas5 from "./assets/ananas5.jpg";
import ananas6 from "./assets/ananas6.jpg";
import ananas7 from "./assets/ananas7.jpg";
import ananas8 from "./assets/ananas8.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <Banner />
          <Section />
          <Carousel itemsToShow={4} breakPoints={breakPoints}>
            <img src={ananas1} alt=''/>
            <img src={ananas2} alt=''/>
            <img src={ananas3} alt=''/>
            <img src={ananas4} alt=''/>
            <img src={ananas5} alt=''/>
            <img src={ananas6} alt=''/>
            <img src={ananas7} alt=''/>
            <img src={ananas8} alt=''/>
          </Carousel>
          <Grid />
          <Moving />
          
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
