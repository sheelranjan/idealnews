import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {

  const [mode, setMode] = useState("light");
  const [progress, setProgress] = useState(0);

  const toggleMode = ()=> {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "rgb(44,49,75)"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "rgb(245, 245, 245)"
    }
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              key="general"
              pageSize={12}
              country="in"
              category="general"
              mode={mode}
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setProgress}
              key="business"
              pageSize={12}
              country="in"
              category="business"
              mode={mode}
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              key="entertainment"
              pageSize={12}
              country="in"
              category="entertainment"
              mode={mode}
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              key="health"
              pageSize={12}
              country="in"
              category="health"
              mode={mode}
            />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              key="science"
              pageSize={12}
              country="in"
              category="science"
              mode={mode}
            />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              key="sports"
              pageSize={12}
              country="in"
              category="sports"
              mode={mode}
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              key="technology"
              pageSize={12}
              country="in"
              category="technology"
              mode={mode}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;