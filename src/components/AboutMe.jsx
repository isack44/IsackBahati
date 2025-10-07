import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { MdWeb, MdBuild, MdOutlineRocketLaunch } from "react-icons/md";

function AboutMe() {
  return (
    <div className="about-me">
      <p>
        Hello! I'm a dedicated and enthusiastic self-taught Front-End Developer
        with a solid foundation in creating modern, user-friendly web
        applications. My journey into web development is fueled by a genuine
        passion for problem-solving and a commitment to continuous learning. I
        specialize in building dynamic interfaces using React, HTML, JavaScript,
        and Tailwind CSS, focusing on delivering clean, efficient, and
        responsive code. My foundational project, DreamCarNoteList, demonstrates
        my ability to bring ideas to life, from conceptualization to deployment,
        while leveraging modern front-end tools. Currently, I'm immersed in
        expanding my expertise to become a Full-Stack Developer, eager to master
        back-end technologies and build comprehensive web solutions from
        end-to-end. I thrive on new challenges and am always seeking
        opportunities to learn and grow within a collaborative environment.
        Beyond core development, I also possess experience with Content
        Management Systems like WordPress. This allows me to offer versatile web
        solutions, from custom development to efficient content management,
        catering to diverse client and company needs.
      </p>
      <h3>Skills & Tools</h3>
      <ul>
        <li>
          <MdWeb style={{ marginRight: 8 }} />
          <span>
            <strong>Languages:</strong>
            <span style={{ marginLeft: 8 }}>
              <FaHtml5
                title="HTML"
                style={{ color: "#e34c26", marginRight: 4 }}
              />
              <FaCss3Alt
                title="CSS"
                style={{ color: "#2965f1", marginRight: 4 }}
              />
              <FaJs
                title="JavaScript"
                style={{ color: "#f7df1e", marginRight: 4 }}
              />
              HTML, CSS, JavaScript (ES6+)
            </span>
          </span>
        </li>
        <li>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginRight: 8,
            }}
          >
            <FaReact style={{ color: "#61dafb", marginRight: 4 }} />
            <SiTailwindcss style={{ color: "#38bdf8", marginRight: 4 }} />
          </span>
          <span>
            <strong>Frameworks/Libraries:</strong>
            <span style={{ marginLeft: 8 }}>React, Tailwind CSS</span>
          </span>
        </li>
        <li>
          <MdBuild style={{ marginRight: 8 }} />
          <span>
            <strong>Tools/Platforms:</strong>
            <span style={{ marginLeft: 8 }}>
              <FaGitAlt style={{ color: "#f34f29", marginRight: 4 }} />
              <FaGithub style={{ color: "#333", marginRight: 4 }} />
              Git, GitHub
            </span>
          </span>
        </li>
        <li>
          <FaWordpress style={{ marginRight: 8, color: "#21759b" }} />
          <span>
            <strong>Content Management:</strong>
            <span style={{ marginLeft: 8 }}>WordPress</span>
          </span>
        </li>
        <li>
          <MdOutlineRocketLaunch style={{ marginRight: 8 }} />
          <span>
            <strong>Future Focus:</strong>
            <span style={{ marginLeft: 8 }}>Full-Stack Development</span>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default AboutMe;
