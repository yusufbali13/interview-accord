import "./App.css";
import InterviewAccord from "./components/InterviewAccord";
import data from "./helper/data";
import logo from "./helper/react.png";

function App() {
  return (
    <>
      <div className="header">
        <img style={{ width: "100px" }} src={logo} alt="" />
        <h2>REACT Interview Ouestions And Answers</h2>
      </div>
      <div className="app">
        <div className="main">
          <InterviewAccord data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
