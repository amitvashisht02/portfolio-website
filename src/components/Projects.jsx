import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";

export default function Projects() {
    return (
        <div className="section" id="projects">
            <h2>Projects</h2>

            <div className="project-box">
                <img src={thumbnail1} alt="Todo App" className="project-thumb"/>
                <div>
                <h3>Project 1- Todo App</h3>
                <p>A simple todo app built in React.</p>
                <div className="project-buttons">
                    <a 
                    href="https://your-news-live-demo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                    >
                        Live Demo
                    </a>
                    <a
                    href="https://github.com/yourusername/news-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                    >
                        Github Repo
                    </a>
                </div>
                </div>
            </div>

            <div className="project-box">
                <img src={thumbnail2} alt="News App" className="project-thumb"/>
                <div>
                <h3>Project 2 - News App</h3>
                <p>Displays live news using API + React hooks.</p>
                <div className="project-buttons">
                    <a
                    href="https://your-news-live-demo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn project-btn"
                    >
                        Live Demo
                    </a>
                    <a
                    href="https://github.com/yourusername/news-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn project-btn"
                    >
                        Github Repo
                    </a>
                </div>
                </div>
            </div>

                <div className="project-box">
                <img src={thumbnail3} alt="Todo App" className="project-thumb"/>
                <div>
                <h3>Project 3- Kanban App</h3>
                <p> A minimal Kanban board built with React.</p>
                <div className="project-buttons">
                    <a 
                    href="https://your-news-live-demo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                    >
                        Live Demo
                    </a>
                    <a
                    href="https://github.com/yourusername/news-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                    >
                        Github Repo
                    </a>
                </div>
                </div>
            </div>
        </div>
    );
}