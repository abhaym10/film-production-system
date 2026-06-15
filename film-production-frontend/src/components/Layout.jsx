import Sidebar from "./Sidebar";
import {useState} from "react";



function Layout({ children }) {
    const [isOpen , setIsOpen] = useState(false);
    return (
        <div style={{ display: "flex" ,}}>
            {window.innerWidth <= 768 && (
                <button onClick={() => setIsOpen(true)}
                style={{
                    position: "fixed",
                    top: "75px",
                    left: "15px",
                    zIndex: 1100,
                    background: "#1a1a1a",
                    color: "white",
                    border: "1px solid #333",
                    borderRadius: "8px",
                    padding: "10px 12px",
                    cursor: "pointer",
                }}
                >
                    ☰
                </button>
            )}

            {isOpen && window.innerWidth <= 768 && (
                <div onClick={() => setIsOpen(false)}
                     style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0,0,0,0.5)",
                        zIndex: 999,
                     }}
                />
            )}

            <Sidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <div style={{ marginLeft: window.innerWidth > 768 ? "220px" : "0" , width: "100%", padding: "20px" }}>
                {children}
            </div>
        </div>
    );
}

export default Layout;