import my from "../my.png";
import Projects from "./Projects";
const Body = () => {
    return (
        <>
        <div className="body">
        <div className="b-img">
        <img className="img" src={my}></img>
        </div>
        <div className="b-text">
        <h1>Hi, I am Kajal</h1>
        <p>I'm a software developer and I love to watch movies at home when I'm free.</p>
        </div>
        </div>
         <Projects/>
         </>
    )
}

export default Body;