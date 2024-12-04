import React, { useState } from "react";
import "./App.css";

const privateLinks = [
    { id: 1, label: "Lawsist Folder", url: "https://github.com/lou2siz/lawsistfolder" },
    { id: 2, label: "WWW3 Repository", url: "https://github.com/lou2siz/www3" },
    { id: 3, label: "WWW4 Repository", url: "https://github.com/lou2siz/www4" },
    { id: 4, label: "Final Form WWW Repository", url: "https://github.com/lou2siz/FinalFormwww" },
];

const operations = [
    "PhoneCallSofware.py",
    "Phone Call Google Sheet",
    "Load COGS Automation Google Sheet",
    "Lawsist.py",
    "ComplaintGeneration.py",
    "EmailGeneration.py",
    "Email Generation2.py",
    "Email Generation3.py",
    "Using 0001 Google Sheet manually to CSV to www3",
    "Manual Dropbox link entry",
    "WWW3 Dashboard",
    "Push WWW3",
    "Send link to WWW3 deployed site to lawyer",
    "Inefficient paralegal for Demandinator",
    "Load COGS Automation Google Sheet",
    "DemandGeneration.py",
    "WWW4 Dashboard",
    "Push WWW4",
    "Send link to WWW4 deployed site to lawyer",
];

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (email.toLowerCase() === "eaweinhaus@gmail.com" && password === "18SundayA!") {
            setIsAuthenticated(true);
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="app-container">
            {!isAuthenticated ? (
                <div className="login-container">
                    <h1 className="header-title">Login</h1>
                    <div className="login-form">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="login-input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login-input"
                        />
                        <button className="login-button" onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <header className="header-container">
                        <h1 className="header-title">Lawsist Dashboard</h1>
                        <p className="header-subtitle">Here are your private links and operations:</p>
                    </header>

                    <section className="links-section">
                        <h2 className="section-title">Private Links</h2>
                        <div className="links-container">
                            {privateLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-button"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </section>

                    <section className="operations-section">
                        <h2 className="section-title">Current Order of Operations</h2>
                        <ul className="operations-list">
                            {operations.map((operation, index) => (
                                <li key={index} className="operation-item">
                                    <span className="operation-number">{index + 1}.</span> {operation}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <footer className="footer-container">
                        <p>&copy; {new Date().getFullYear()} Lawsist Automation. All Rights Reserved.</p>
                    </footer>
                </div>
            )}
        </div>
    );
};

export default App;
