import git from '../git.png'
import linkin from '../linkin.png'
const Contact = () => {
    return (
        <div className="contact">
            <h3>kajalsingh1813@gmail.com</h3>
            <div className="logos">
            <a className="link" href = "http://www.linkedin.com/in/kajalsingh1813" target="_blank"><img className="logo" src = {linkin}></img></a>
            <a  className="link" href = "https://github.com/Kajal-1813" target="_blank"><img className="logo" src = {git}></img></a>
            </div>

        </div>
    )
}

export default Contact;