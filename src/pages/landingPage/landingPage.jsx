import { NavLink } from "react-router-dom";
import React from "react";
import NavBar from "../../components/navbar";
import HeroSection from "../../components/HeroSection";
import Card from "../../components/landingPageCard/Card";
import postImg from "../../components/assets/rectangle2.svg";
import userPic from "../../components/assets/profileImg.svg";
import "./landingpage.css";
import AddArticleBtn from "../../components/Button&Search/addArticleBtn";
import Footer from "../../components/footer";
import FestivalSlideShow from "../../components/festivalsSlide/FestivalSlideShow";
import Tour from "../../components/comingSoon/Tour";

function LandingPage() {
  return (
    <div className="landing-page">
      <NavBar />
      <HeroSection />
      <AddArticleBtn />
      <Tour />
      <div className="card-section">
        <Card
          class="card-item"
          coverPic={postImg}
          heading="A brief stroy about nigeria"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
         printer took a galley of type and scrambled it to make a type specimen book. It has"
          summary="It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
          to using 'Content here, content here',
          making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their"
          userPic={userPic}
          userName="John Ebubu Ehni"
          date="22th November 2017"
        />
        <Card
          class="card-item"
          coverPic={postImg}
          heading="A brief stroy about nigeria"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
         printer took a galley of type and scrambled it to make a type specimen book. It has"
          summary="It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
          to using 'Content here, content here',
          making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their"
          userPic={userPic}
          userName="John Ebubu Ehni"
          date="22th November 2017"
        />
        <Card
          class="card-item"
          coverPic={postImg}
          heading="A brief stroy about nigeria"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
         printer took a galley of type and scrambled it to make a type specimen book. It has"
          summary="It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
          to using 'Content here, content here',
          making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their"
          userPic={userPic}
          userName="John Ebubu Ehni"
          date="22th November 2017"
        />
        <Card
          class="card-item"
          coverPic={postImg}
          heading="A brief stroy about nigeria"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
         printer took a galley of type and scrambled it to make a type specimen book. It has"
          summary="It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
          to using 'Content here, content here',
          making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their"
          userPic={userPic}
          userName="John Ebubu Ehni"
          date="22th November 2017"
        />
        {/* <Card
          class="card-item"
          coverPic={postImg}
          heading="A brief stroy about nigeria"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
         printer took a galley of type and scrambled it to make a type specimen book. It has"
          summary="It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
          to using 'Content here, content here',
          making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their"
          userPic={userPic}
          userName="John Ebubu Ehni"
          date="22th November 2017"
        /> */}
      </div>
      <FestivalSlideShow />
      <Footer />
    </div>
  );
}

export default LandingPage;
