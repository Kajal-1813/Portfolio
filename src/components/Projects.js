import untitled from '../Untitled.png';
import swiggy from '../swiggy.png';
import body from '../body.png';


const Projects = () => {
   
    return (
        <div className="p">
            <h1 className="projects">Projects</h1>
            <div className="p-one in-viewport">
            <img className="p-img" src={untitled} />
            <div className="p-one-i">
            <p className="p-text">✨ Crafted using React with the power of useState, our Notes website offers a simple yet powerful note-taking experience. Seamlessly manage and organize your thoughts with the ease of stateful components. The intuitive UI ensures a smooth and efficient note-taking journey. Elevate your productivity with our React-powered Notes app! 📝🚀
</p>
            <a className="p-link"href="https://crud-react-ten-ecru.vercel.app/" target="_blank">Click here!</a>
            </div>
            </div>
            <div className="p-one in-viewport">
            <img className="p-img" src={swiggy} />
            <div className="p-one-i">
            <p className="p-text">🚀 Built with React, Redux, and Tailwind CSS, our app seamlessly integrates the Swiggy API for a dynamic and immersive restaurant experience. Enjoy a sleek UI with Shimmer effects for smooth loading, lazy loading for optimal performance, and modular code organization with Higher Order Components (HOC). Explore a user-friendly interface that brings the world of food right to your fingertips! 🍔🌮🥗
</p>
            <a className="p-link"href="https://good-food-pr2r.vercel.app/" target="_blank">Click here!</a>
            </div>
            </div>
        </div>
    )
}
export default Projects;