import React from "react";
import "./App.css";
import profilePic from "/personal.jpeg"; // replace with your image

export default function App() {
  const links = [
    { label: "GitHub", href: "https://github.com/oladipupostephen" },
    {
      label: "Portfolio Website",
      href: "https://stephenoladipupo.netlify.app/",
    },
    { label: "LinkedIn", href: "https://linkedin.com/in/oladipupo-stephen" },
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
  ];

  return (
    <div className="container">
      <div className="card">
        <img src={profilePic} alt="Profile" className="avatar" />
        <h1 className="name">Oladipupo Stephen </h1>
        <p className="location">Lagos, Nigeria</p>
        <p className="bio">"Software developer and STEM instructor"</p>
        <div className="links">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="btn" target="_blank">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
