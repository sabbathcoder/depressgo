import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {goodQuotes} from "../QuotesApiData/goodQuotes"

function GreenBtn() {
    // const randomNumber = Math.floor(Math.random() * 3)
    const randomNumber = Math.floor(Math.random() * goodQuotes.length)

    console.log(Math.random())
    console.log (Math.floor(Math.random()))
    console.log(randomNumber)
    console.log(goodQuotes.length)

    
  return (

    <div>
      GreenBtn
      <Header />
      <div>
        <h3>Based on how you are feeling right now lets try... </h3>
        <p>{goodQuotes[randomNumber].quote}</p>
        <p>{goodQuotes[randomNumber].author}</p>

        {/* <Routes>
          <Route path="/GreenBtn" element={<GreenBtn />} />
        </Routes> */}
      </div>
      <Footer />
    </div>
  );
}

export default GreenBtn;
