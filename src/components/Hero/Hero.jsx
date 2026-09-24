import "./Hero.css";
import heroImage from "../../assets/Container.png";
import Features from "../Features/Features";

function Hero() {
    return (
        <>
            <section className="hero">

                {/* LEFT SIDE */}
                <div className="hero-left">

                    <div className="hero-badge">
                        ✨ INTRODUCING THE OPS ARCHITECT FRAMEWORK
                    </div>

                    <h1 classname="hero-enterprises">
                        Your Ops Brain
                        <br />
                        for <span>Enterprise</span>
                        <br />
                        SaaS Teams.
                    </h1>

                    <p className="hero-description">
                        Synkra watches events across your stack, catches the work
                        that falls between tools, and runs it automatically without a
                        full-time ops engineer to babysit it.
                    </p>

                    <div className="hero-buttons">

                        <button className="primary-button">
                            Get early access ↗
                        </button>

                        <button className="secondary-button">
                            Watch <b>Synkra</b> in action
                        </button>

                    </div>

                    <p className="hero-note">
                        *No setup fee · Onboarding in under 18 minutes · Cancel anytime
                    </p>

                </div>


                <div className="hero-right">

                    <div className="hero-image">

                        {/* MAIN IMAGE */}
                        <img
                            src={heroImage}
                            alt="Synkra"
                        />


                        {/* EFFICIENCY CARD */}


                    </div>

                </div>

            </section>
            <section className="trust-section">

                <p>
                    TRUSTED BY GLOBAL VISIONARIES
                </p>

                <div className="trust-logos">

                    <span>VOLT</span>
                    <span>SPHERE</span>
                    <span>LUMINA</span>
                    <span>ORBIT</span>
                    <span>NEXUS</span>

                </div>

            </section>
            <Features />
        </>
    );
}

export default Hero;