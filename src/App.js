import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FormInput from "./components/FormInput";
// import About from "./components/About";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled!", "Success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#181e41";
      showAlert("Dark mode has been enabled!", "Success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        {/* <Routes>
          <Route
            exact path="/"
            element={ */}
              <FormInput
                heading="Enter text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            {/* }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/home"
            element={
              <FormInput
                heading="Enter text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            }
          ></Route>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
