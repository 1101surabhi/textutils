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

  const copyTextHandler = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "Success");
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
            id="mytextbox"
            rows="10"
            value={text}
            onChange={textChangeHandler}
            style={{
              backgroundColor: props.mode === "dark" ? "#313131" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          onClick={uppercaseHandler}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={lowercaseHandler}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={clearTextHandler}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          onClick={copyTextHandler}
          className="btn btn-primary mx-1 my-1"
        >
          Copy Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {
            text.split(/\s+/).filter((ele) => {
              return ele.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters.
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((ele) => {
              return ele.length !== 0;
            }).length}{" "}
          minutes read
        </p>
        <h3>Preview</h3>
        <p>
          {text.split(" ").filter((ele) => {
            return ele.length !== 0;
          }).length > 0
            ? text
            : "Nothing to preview."}
        </p>
      </div>
    </>
  );
};

export default FormInput;
