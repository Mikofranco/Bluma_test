import About from "./pages/about/About";
import LandingPage from "./pages/landingPage/landingPage";
import { Routes, Route } from "react-router-dom";
import Post from "./pages/post/post";
import Product from "./pages/product/product";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import PostView from "./pages/post/postView";
import PageNotFound from "./pages/pageNotFound/pageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="post" element={<Post />} />
        <Route path="product" element={<Product />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="post-view" element={<PostView />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
