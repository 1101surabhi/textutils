import React, { useState } from "react";

const FormInput = (props) => {
  const uppercaseHandler = () => {
    if (text.length < 1) {
      props.showAlert("Enter some text first!", "Warning");
      return;
    }
    if (text === text.toUpperCase()) {
      props.showAlert("Text already in Uppercase!", "Warning");
      return;
    }
    setText(text.toUpperCase());
    props.showAlert("Text converted to Uppercase.", "Success");
  };

  const lowercaseHandler = () => {
    if (text.length < 1) {
      props.showAlert("Enter some text first!", "Warning");
      return;
    }
    if (text === text.toLowerCase()) {
      props.showAlert("Text already in Lowercase!", "Warning");
      return;
    }
    setText(text.toLowerCase());
    props.showAlert("Text converted to Lowercase.", "Success");
  };

  const clearTextHandler = () => {
    if (text.length < 1) {
      props.showAlert("There is no text to clear!", "Warning");
      return;
    }
    setText("");
    props.showAlert("Text has been cleared.", "Success");
  };

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={textChangeHandler}
            style={{
              backgroundColor: props.mode === "dark" ? "#313131" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <div className="btn btn-primary" onClick={uppercaseHandler}>
          Convert to Uppercase
        </div>
        <div className="btn btn-primary mx-2" onClick={lowercaseHandler}>
          Convert to Lowercase
        </div>
        <div className="btn btn-primary mx-1" onClick={clearTextHandler}>
          Clear Text
        </div>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here."}
        </p>
      </div>
    </>
  );
};

export default FormInput;
