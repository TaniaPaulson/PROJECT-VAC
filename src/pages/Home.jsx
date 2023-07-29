import React from "react";
import '../styles/Home.css'
const Home = () => {
  const GetMeal = async () => {
    let res = await fetch(
      "https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata",
      {
        method: "GET",
      }
    );

    let mealData = await res.text();
    console.log(mealData);
  };

  return (
    <div>
  <div class="enclosed">
    <div class="left">
      <h1>👋Hi, I'm tania Paulson </h1>
      <p>I’m a Product Designer with a passion for participate in every<br></br>stage of digital product, from discovery to delivery. <br></br>Helping to focus the business goals on users.</p>
      <div class="small1">
        <p>I’m looking for new opportunities<br></br> Previously I worked at <span class="tan">Multiplica Talent Chile</span></p>
        <p>Santiago de Chile<br></br> mailto:<span class="tan">sonyj@gamail.com</span></p>
      </div>
      <p>👇Check some projects</p>
    </div>
    
    <div class="right">
      
        <img
          src="/girl.jpg"
          alt=""
          className={`image`}
          style={{ width: 120, height: 120, margin:58}}
        />
        <div class="child">
          <div class="one">
          <img
            src="/img1.jpg"
            alt=""
            className={`image`}
            style={{ width: 20, height: 20}}
          />
          </div>
          <div class="two">
          <img
            src="/img2.png"
            alt=""
            className={`image`}
            style={{ width: 20, height: 20}}
          />
          </div>
          <div class="three">
          <img
            src="/img3.jpg"
            alt=""
            className={`image`}
            style={{ width: 20, height: 20}}
          />
          </div>
          <div class="four">
          <img
            src="/four.png"
            alt=""
            className={`image`}
            style={{ width: 70, height: 15}}
          />
        </div>
        <div class="five">
          <img
            src="/five.png"
            alt=""
            className={`image`}
            style={{ width: 60, height: 15}}
          />
        </div>
        <div class="six">
          <img
            src="/six.png"
            alt=""
            className={`image`}
            style={{ width: 60, height: 15}}
          />
        </div>
        <div class="seven">
          <img
            src="/seven.png"
            alt=""
            className={`image`}
            style={{ width: 90, height: 15}}
          />
        </div>
        <div class="eight">
          <img
            src="/eight.png"
            alt=""
            className={`image`}
            style={{ width: 80, height: 18}}
          />
        </div>
      </div>
    </div>
    
    
  </div>
  <div class="tan1">
    <img
            src="/tan1.png"
            alt=""
            className={`image`}
            style={{ width: 400, height: 300}}
          />
      <img
            src="/tan2.png"
            alt=""
            className={`image`}
            style={{ width: 400, height: 300}}
          />
          <img
            src="/tan3.png"
            alt=""
            className={`image`}
            style={{ width: 400, height: 300}}
          />
    </div>
  
  </div>
  
  );
};

export default Home;
