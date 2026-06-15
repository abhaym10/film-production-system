import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

function Sidebar({isOpen , setIsOpen}) {
    const { pathname } = useLocation();
    const { projectId } = useParams();

    if (!projectId) return null;

    const menu = [{ name: "Dashboard", path: `/dashboard/${projectId}` },
    { name: "Scenes", path: `/projects/${projectId}/scenes` },
    { name: "Budget", path: `/projects/${projectId}/budget` },
    { name: "Schedule", path: `/projects/${projectId}/schedule` },
    { name: "Crew", path: `/projects/${projectId}/crew` },
    { name: "Analytics", path: `/projects/${projectId}/analytics` },
    ];

    return (
        <div style={{ ...styles.sidebar, left: window.innerWidth <=768 ? (isOpen ? "0" : "-220px") : "0",}}>
            <h2 style={{ marginBottom: "30px", fontWeight: "700", letterSpacing: "1px" }}>🎬 FPMS</h2>
            
            {menu.map((item) => (
                <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                        if (window.innerWidth <= 768) {
                            setIsOpen(false);
                        }
                    }}
                    style={{
                        ...styles.link,
                        background: pathname.includes(item.path)
                            ? "#1f1f1f"
                            : "transparent",
                        color: pathname.includes(item.path)
                            ? "#2ecc71"
                            : "#aaa",
                    }}
                >
                    {item.name}
                </Link>
            ))}


        </div>
    );
}

const styles = {
    sidebar: {
        transition: "all 0.3s ease",
        height: "100vh",
        background: "#0d0d0d",
        padding: "20px",
        position: "fixed",
        top: 0,
        zIndex: 1000,
        borderRight: "1px solid #222",
    },
    link: {
        display: "block",
        padding: "12px",
        borderRadius: "8px",
        color: "#aaa",
        textDecoration: "none",
        marginBottom: "10px",
    },
};

export default Sidebar;