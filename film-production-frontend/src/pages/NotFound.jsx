import {Link} from "react-router-dom";
import pageStyle from "../styles/pageStyle";
import {cardStyle} from "../styles/components";

function NotFound() {
    return (
        <div style = {pageStyle}>
            <div style={{
                ...cardStyle,
                maxWidth: "500px",
                margin: "100px auto",
                textAlign: "center",
            }}>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p style={{color: "#aaa"}}>The page you are looking for does not exist.</p>
                <Link to="/"><button>Go Home</button></Link>
            </div>
        </div>
    );
}

export default NotFound;