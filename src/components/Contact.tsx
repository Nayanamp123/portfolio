import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa"

const Contact: React.FC = () => {
  return (
<section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-links">
        <a href="mailto:nayanamp137@gmail.com" target="_blank">
          <FaEnvelope className="icon" />
          nayanamp137@gmail.com
        </a>

        <a href="https://instagram.com/nayana__bhaskaran" target="_blank">
          <FaInstagram className="icon" />
          Instagram
        </a>

        <a href="https://linkedin.com/in/nayana-mp-b8b32b285" target="_blank">
          <FaLinkedin className="icon" />
          LinkedIn
        </a>
        <a href="https://leetcode.com/Nayana_mp_/" target="_blank">
          <FaLinkedin className="icon" />
          Leetcode
        </a>
      </div>
    </section>
  )
}

export default Contact
