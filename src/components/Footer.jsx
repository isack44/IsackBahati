import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="social-icons">
          <a
            href="http://facebook.com/isack.bahati"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="http://linkedin.com/in/isack-bahati-4b0a1b1b6/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="http://github.com/isack44"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="http://instagram.com/isack_bahati"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="http://discord.com/isack1114"
            aria-label="Discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord />
          </a>
          <a
            href="mailto:bahatiisack61@gmail.com"
            aria-label="Gmail"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail />
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Isack Bahati All rights reserved.
        </p>
        <p>Designed by Isack</p>
      </div>
    </footer>
  );
}

export default Footer;
