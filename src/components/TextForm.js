import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCase = () => {
    // console.log("You clicked this text"+text)
    if (text === text.toUpperCase() && text !== text.toLowerCase())
      props.showAlert("Texts are already converted to uppercase.", "success");
    else if (text.length !== 0) {
      let upperText = text.toUpperCase();
      setText(upperText);
      props.showAlert("Text Converted to UpperCase", "success");
    } else
      props.showAlert(
        "Box is empty, Nothing to convert in UpperCase",
        "success"
      );
  };

  const handleLowerCase = () => {
    if (text === text.toLowerCase() && text !== text.toUpperCase())
      props.showAlert("Texts are already in lowercase.", "success");
    else if (text.length !== 0) {
      let lowerText = text.toLowerCase();
      setText(lowerText);
      props.showAlert("Text Converted to LowerCase", "success");
    } else
      props.showAlert(
        "Box is empty. Nothing to convert in LowerCase",
        "success"
      );
  };

  const handleClear = () => {
    if (text.length !== 0) {
      let newText = "";
      setText(newText);
      props.showAlert("All Text in the box is cleared", "success");
    } else
      props.showAlert("Box is already cleared. Nothing to clear.", "success");
  };

  const handleCopy = () => {
    // console.log(text)
    if (text.length !== 0) {
      let newText = document.getElementById("textForm");
      newText.select();
      navigator.clipboard.writeText(newText.value);
      props.showAlert("All text in the box is copied to clipboard", "success");
    } else props.showAlert("Box is empty. Nothing to copy.", "success");
  };

  const handleSpace = () => {
    if (text.split(" ").length > 1) {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("All Spaces are removed", "success");
    } else if (text.split(" ").length === 1)
      props.showAlert(
        "There is only one word in the box. No Space can be removed.",
        "success"
      );
    else props.showAlert("Box is empty. No Spaces removed.", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="textForm"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
            rows="8"
          ></textarea>
        </div>

        <button
          className={`btn btn-${props.mode === "light" ? "primary" : "dark"}`}
          onClick={handleUpperCase}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "primary" : "dark"
          } m-2`}
          onClick={handleLowerCase}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "primary" : "dark"
          } m-2`}
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "primary" : "dark"
          } m-2`}
          onClick={handleCopy}
        >
          Click to Copy
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "primary" : "dark"
          } m-2`}
          onClick={handleSpace}
        >
          Remove Extra Space
        </button>
      </div>

      <div className="container my-2">
        <h3>Your Text Summary</h3>
        <p className="lead">
          <b>{text.split(" ").length - 1}</b> word and <b>{text.length}</b>{" "}
          characters
        </p>
        <p className="lead">
          {" "}
          <b>{0.008 * text.split(" ").length}</b> minute it will take to read
        </p>
        <p className="lead">
          <b>{text.split(". ").length - 1}</b> Sentences
        </p>
        <p className="lead">
          <b>{text.split("\n").length - 1}</b> Paragraphs
        </p>
        <h3>Your Text Preview</h3>
        <p className="lead">
          {text.length > 0
            ? text
            : "Enter your text in the above box for preview"}
        </p>
      </div>
    </>
  );
}
