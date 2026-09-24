import { Rss, Globe, MessageCircle, Users } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            {/* Top Navigation */}
            <div className="footer-top">

                <nav className="footer-nav">

                    <a href="#">PRIVACY POLICY</a>
                    <a href="#">TERMS OF SERVICE</a>
                    <a href="#">COOKIE POLICY</a>
                    <a href="#">HELP</a>
                    <a href="#">JOBS</a>
                    <a href="#">APP INTEGRATIONS</a>
                    <a href="#">PARTNER PROGRAM</a>

                </nav>

            </div>


            {/* Bottom */}
            <div className="footer-bottom">

                {/* Logo */}
                <div className="footer-logo">

                    <div className="footer-logo-mark">
                        <span></span>
                        <span></span>
                    </div>

                    <span className="footer-logo-text">
                        ynkra
                    </span>

                </div>


                {/* Social + Copyright */}
                <div className="footer-right">

                    <div className="social-icons">

                        <a href="#" aria-label="X">
                            𝕏
                        </a>

                        <a href="#" aria-label="LinkedIn">
                            <Globe size={18} />
                        </a>

                        <a href="#" aria-label="Facebook">
                            <FaFacebook size={18} />
                        </a>

                        <a href="#" aria-label="RSS">
                            <Rss size={18} />
                        </a>

                    </div>

                    <p>
                        © 2026 Synkra Inc.
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;