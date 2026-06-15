import ProjectCard from "../components/ProjectCard";
import pageStyle from "../styles/pageStyle";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { authFetch } from "../utils/authFetch";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        loadProjects();
    }, []);

    async function loadProjects() {
        try {
            const res = await authFetch("https://fpms-backend-19w5.onrender.com/api/projects");

            const data = await res.json();
            setProjects(data);
        } catch (err) {
            console.error(err);
        }
    }

    async function deleteProject(projectId) {
        try {
            await authFetch(`https://fpms-backend-19w5.onrender.com/api/projects/${projectId}`,
                {
                    method: "DELETE",
                }
            );

            setProjects(
                projects.filter((p) => p._id !== projectId)
            );
        } catch (err) {
            console.error(err);
        }

    }

    return (
        <Layout>
            <div style={pageStyle}>
                <h2>My Projects</h2>
                {projects.length == 0 &&
                    <div style={{ textAlign: "center", marginTop: "60px", maxWidth: "700px", margin: "0 auto" }}>
                        <h3>No projects yet 🎬</h3>
                        <p style={{ color: "#aaa" }}>
                            Start your first film production project
                        </p>

                        <Link to="/create">
                            <button style={styles.button}>
                                + Create Project
                            </button>
                        </Link>
                    </div>
                }
                {projects.map((project) => (
                    <ProjectCard key={project._id} project={project} onDelete={deleteProject} />
                ))}
            </div>
        </Layout>
    );
}

const styles = {
    button: {
        marginTop: "16px",
        padding: "10px 16px",
        background: "#2ecc71",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "600",
    }
}

export default Projects;

