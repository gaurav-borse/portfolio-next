// import dynamic from "next/dynamic";
import Image from "next/image"
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import ParticlesBackground from "../src/components/ParticlesBackground";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
// const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
//   ssr: false,
// });
const IndexParticles = () => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <ParticlesBackground />
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-10">
                <div className="type-box">
                  <h6>Hello, I&apos;m</h6>
                  <h1 className="font-alt ">Gaurav Rajendra Borse</h1>
                  <p className="lead">
                    I am Passionate <TypingAnimation />
                  </p>
                  <p className="desc">
                    India-based developer who&apos;s into web development and open to
                    work as a full stack web developer.
                  </p>
                  <div className="btn-bar">
                    <a
                      target="_blank" rel="noreferrer"
                      className="px-btn px-btn-theme"
                      href="https://drive.google.com/file/d/1ijlnAHdcr7OEEbKej4Tw5o-cn2-b4GbI/view?usp=drive_link"

                    >
                      Donwload CV
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-6">
                <div className="hb-img">
                  <Image src="/static/img/profile.png" title="" alt="" width={420} height={420} layout="intrinsic" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <About />
      {/* <Portfolio /> */}
      <Blog />
      <Contact />
    </Layout>
  );
};
export default IndexParticles;
