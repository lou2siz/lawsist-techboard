import React from "react";
import "./App.css";

const privateLinks = [
    {
        id: 1,
        label: "Lawsist Folder",
        url: "https://github.com/lou2siz/lawsistfolder",
    },
    {
        id: 2,
        label: "WWW3 Repository",
        url: "https://github.com/lou2siz/www3",
    },
    {
        id: 3,
        label: "WWW4 Repository",
        url: "https://github.com/lou2siz/www4",
    },
    {
        id: 4,
        label: "Final Form WWW Repository",
        url: "https://github.com/lou2siz/FinalFormwww",
    },
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
    return (
        <div className="app-container">
            <header className="header-container">
                <h1 className="header-title glitch" data-text="Hi Dad/Coach/Tenant/Boss">
                    Hi Dad/Coach/Tenant/Boss
                </h1>
                <h2 className="header-subtitle">Here is the Lawsist code!</h2>
                <p className="header-description">
                    All these links are private, so enjoy:
                </p>
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
                <h3 className="operations-title">Current Order of Operations</h3>
                <ul className="operations-list">
                    {operations.map((operation, index) => (
                        <li key={index} className="operation-item">
                            <span className="operation-number">{index + 1}.</span> {operation}
                        </li>
                    ))}
                </ul>
            </header>
            <footer className="footer-container">
                <p>&copy; {new Date().getFullYear()} Lawsist Automation. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default App;
