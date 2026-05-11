import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer({ darkMode }) {
  return (
    <footer className="mt-10">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col items-center gap-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-5 text-xl text-gray-500 dark:text-gray-400">
          <a
            href="https://www.facebook.com/profile.php?id=100074353927718"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-purple-400"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/isack-bahati-b603a9364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-purple-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="http://github.com/isack44"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-purple-400"
          >
            <FaGithub />
          </a>
          <a
            href="http://instagram.com/isack_bahati"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-purple-400"
          >
            <FaInstagram />
          </a>
          <a
            href="http://discord.com/isack1114"
            aria-label="Discord"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-purple-400"
          >
            <FaDiscord />
          </a>
          <a
            href="mailto:bahatiisack61@gmail.com"
            aria-label="Gmail"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-purple-400"
          >
            <MdEmail />
          </a>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Isack Bahati All rights reserved.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Designed by Isack</p>
      </div>
    </footer>
  );
}

export default Footer;
