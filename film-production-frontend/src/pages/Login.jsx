import {useState} from "react";
import {useNavigate} from "react-router-dom";
import pageStyle from "../styles/pageStyle";
import {cardStyle} from "../styles/components";
import {toast} from "react-toastify";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    async function handleLogin(e) {
        e.preventDefault();

        console.log("1. Login clicked");

        try {
            console.log("2. Before fetch");
            const res = await fetch("https://fpms-backend-19w5.onrender.com/api/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email , password}),
            });

            console.log("3. Fetch completed");

            let data = {};
            try {
                data = await res.json();
                console.log("4. JSON parsed");
            } catch (JsonErr) {
                console.error("JSON error:", jsonErr);
            }

            console.log("5. Status:", res.status);
            console.log("6. Data", data);

            if(!res.ok) {
                console.log("7. Entered error block");
                toast.error(data.error || "Invalid email or password");
                return;
            }

            console.log("8. Login success");

            localStorage.setItem("token" , data.token);
            
            toast.success("Login successful");
            window.location.href = "/projects";
        } catch (err) {
            console.error("9.FETCH ERROR:" , err);
            toast.error("Server error");
            setError("Server Error");
        }
    }

    return (
        <div style={pageStyle}>
            <div style={{...cardStyle, maxWidth: "400px", margin: "80px auto"}}>
                <h2>🔐 Login</h2>

                {error && <p style={{color: "red"}}>{error}</p>}

                <form onSubmit={handleLogin}>
                    <input
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                    />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

const styles={
    input: {
        width: "100%",
        padding: "10px",
        marginBottom: "12px",
    },
};

export default Login;