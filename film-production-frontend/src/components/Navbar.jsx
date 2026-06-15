import { Link } from "react-router-dom";
import theme from "../styles/theme";

function Navbar() {
    const token = localStorage.getItem("token");
    function handleLogout() {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }

    return (
        <div style={styles.nav}>
            <h3 style={styles.logo}>🎬 FPMS</h3>
            <div style={styles.links}>
                {token ? (
                    <>
                        <Link to="/projects" style={styles.link}>Projects</Link>
                        <Link to="/create" style={styles.link}>Create</Link>
                        <button onClick={handleLogout}
                                style={styles.logoutBtn}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" style={styles.link}>Login</Link>
                        <Link to="/register" style={styles.link}>Register</Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;

const styles = {
    nav: {
        height: "60px",
        background: "rgba(13, 13, 13, 0.8)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 12px",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #222",
    },
    logo: {
        margin: 0,
        fontSize: "18px",
    },
    links: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },
    link: {
        color: "#aaa",
        textDecoration: "none",
        fontWeight: "500",
        fontSize: "14px",
    },
    logoutBtn: {
        padding: "5px 10px",
        background: "#e74c3c",
        border: "none",
        borderRadius: "6px",
        color: "white",
        cursor: "pointer",
    },
};