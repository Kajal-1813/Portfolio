import {Link} from "react-router-dom"
const Header = () => {
   return (
    <div className="header">
        <Link to ="/"> <h3>Home </h3></Link>
        <Link to ="/About"> <h3>About </h3></Link>
        <Link to ="/Contact"><h3>Contact</h3></Link>
        <h3>🌙</h3>
    </div>
   )
}

export default Header;