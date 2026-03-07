import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Top gradient line */}
      <div className="footer__line" />

      <div className="footer__inner">

        {/* Name */}
        <p className="footer__name">Krishna Chavda</p>

        {/* Role */}
        <p className="footer__role">
          Aspiring Full Stack Developer &nbsp;·&nbsp; UI-Focused Designer
        </p>

        {/* Social icons */}
        <div className="footer__socials">
          <a
            href="https://github.com/k021104"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon footer__icon--github"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/krishna-chavda-589b13313/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon footer__icon--linkedin"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:krishnachavda1104@gmail.com"
            className="footer__icon footer__icon--email"
            title="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Copyright */}
        <p className="footer__copy">
          © {new Date().getFullYear()} Krishna Chavda. All rights reserved.
        </p>

      </div>
    </motion.footer>
  );
}