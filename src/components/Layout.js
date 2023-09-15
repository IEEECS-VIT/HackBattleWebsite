// Layout.js
import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import styles from "../styles/Layout.css"

const Layout = ({children}) => {
  return (
    <div>
      {children}
      <div
        className="fixed bottom-7 right-7"
        style={{
          zIndex: 999, 
        }}
      >
        <a
          href="https://discord.gg/GG4SVWyb"
          target="_blank"
          rel="noopener noreferrer"
          className="discord-button"
        >
          <FaDiscord className="text-5xl" />
        </a>
      </div>
    </div>
  );
};

export default Layout;
