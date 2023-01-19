import "./styles/App.css";
import NavBar from "./components/NavBar";
import womenExercise from "./assets/62757.png";
import womenTreadmil from "./assets/275589-P5W2I5-913.png"

function App() {
  return (
    <div>
      <NavBar />
      <div className="homePageDiv">
        <div className="homeFirst">
          <img className="homePagePic" src={womenExercise} alt="women exercise" />
          <h1 className="font homePageTitle">A New Perspective of Health</h1>
        </div>
        <div className="homeSecond">
          <h1 className=" font homePageTitle">Modern Workout Techniques</h1>
          <img className="homePagePic" src={womenTreadmil} alt="womenTreadmil" />
        </div>
      </div>
    </div>
  );
}

export default App;
