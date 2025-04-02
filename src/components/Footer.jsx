import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaSnowflake } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#4b5563", color: "white", padding: "20px 0" }}>
      <div className="container text-center">
        <div className="d-flex justify-content-center mb-3">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", fontSize: "1.5rem", margin: "0 15px" }}
          >
            <FaXTwitter className="hover-opacity" />
          </a>
          <a
            href="https://github.com/aniketsingh6712"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", fontSize: "1.5rem", margin: "0 15px" }}
          >
            <FaGithub className="hover-opacity" />
          </a>
          <a
            href="https://www.linkedin.com/in/aniket-singh-872284227"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", fontSize: "1.5rem", margin: "0 15px" }}
          >
            <FaLinkedin className="hover-opacity" />
          </a>
        </div>
        <p style={{ fontSize: "14px" }}><FaSnowflake/> VOL-LINK, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;