import {
  BrowserRouter as Router,
  renderMatches,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import "./App.css";
import ChooseLang from "./components/choose-lang/ChooseLang";
import Register from "./components/Login/Register";
import Form from "./components/form/Form";
import Form_success from "./components/form/Form_success";
import { useState } from "react";
import Login from "./components/Login/Login";
import JobDeets from "./components/job-details/JobDeets";

function App() {
  const [state, setState] = useState({
    name: "",
    email: "",
    cover_note: "",
    isSubmitted: false,
  });
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/choose-lang" element={<ChooseLang />}></Route>
          <Route path="/job-details" element={<JobDeets />}></Route>
          <Route
            path="/application-form"
            element={<Form setState={setState} />}
          ></Route>
          <Route
            path="/application-success"
            element={<Form_success user_name={state.name} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

{
  /* <div class="use-fetch-container">
          {loading && <h1>Loading..</h1>}
          {error && <h1>Error.Try refreshing;</h1>}
          {<h1>{jobs.length}</h1>}
        </div>*/
}
