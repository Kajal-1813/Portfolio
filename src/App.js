import {Link} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <a className="github" href= "https://github.com/" target="_blank" >Github</a>
      <a className="linkedin"href="https://www.linkedin.com/in/kajalsingh1813/" target="_blank">LinkedIn</a> */}
      <Body/>
    </div>
  );
}

export default App;
