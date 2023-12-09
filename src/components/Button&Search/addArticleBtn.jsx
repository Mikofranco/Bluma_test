import React from "react";
import pen from "../assets/pen 1.svg";
import "./addarticle.css"

function AddArticleBtn() {
  return (
    <div className="add-article">
      <button>
        <img src={pen} alt="" style={{ display: "block" }} />
        <span style={{ display: "block" }}>Add article</span>
      </button>
    </div>
  );
}

export default AddArticleBtn;
