import Image from "next/image"
const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <Image src="/static/img/MyPhoto.png" title="" alt="" width={450} height={470} layout="intrinsic" style={{ borderRadius: "7px" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`I'm`} a Full Stack Web Developer with over 4 years of
                  experience.
                </h3>
                <p>
                  As a full stack web developer, I have experience in creating
                  custom dashboards that allow users to easily manage their
                  dynamic websites. With a strong background in latest frontend
                  and backend technologies. As a web developer, I enjoy working
                  on a variety of projects and collaborating with clients to
                  bring their vision to life. My passion is to create
                  user-friendly solutions that make it easy for clients to
                  manage their online presence.
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">35+</span>
                      <div className="media-body">
                        Projects <br />
                        Completed.
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">12+</span>
                      <div className="media-body">
                        Satisfied <br />
                        Clients.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#contactus">
                    <span>Contact Me</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div
          className="title"
          id="education"
          data-nav-tooltip="Edu. &amp; Skills"
        >
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>Jun 2021 – Aug 2024</span>
                <h6>B.E. - Information Technology</h6>
                <p>Zeal College of Engineering and Research</p>
              </li>
              <li>
                <span>Mar 2017 – Mar 2021</span>
                <h6>Diploma - Computer Engineering</h6>
                <p>Government Polytechnic, Nashik</p>
              </li>
              <li>
                <span>2016 - 2017</span>
                <h6>10th</h6>
                <p>G. S. High School, Amalner</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                {`I'm`} a Full Stack Web Developer with over 4 years of
                experience. I code and create web elements for amazing people
                around the world. I like work with new people. New people new
                Experiences.
              </p>
              <div className="skill-lt">
                <h6>
                  <b>Languages:</b> Python, PHP, C, C++, DSA, OOPs
                </h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "78%" }}>
                    <span data-toggle="tooltip" title="78%" />
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>
                  <b>Frontend Development:</b> React.js, HTML5, CSS3, Bootstrap 5,
                  Tailwind CSS, JavaScript, jQuery, TypeScript
                </h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }}>
                    <span data-toggle="tooltip" title="90%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>
                  <b>Backend Development:</b> Python&mdash;Django,
                  PHP&mdash;Codeigniter, NodeJs
                </h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "85%" }}>
                    <span data-toggle="tooltip" title="85%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>
                  <b>Database Management:</b> MySQL, PhpMyAdmin, MongoDB
                </h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "80%" }}>
                    <span data-toggle="tooltip" title="80%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>
                  <b>CICD Deployment:</b> TeamCity, Octopus
                </h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }}>
                    <span data-toggle="tooltip" title="90%" />
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>
                  <b>Web Hosting</b>
                </h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "99%" }}>
                    <span data-toggle="tooltip" title="99%" />
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>
                  <b>Wordpress, Shopify</b>
                </h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "85%" }}>
                    <span data-toggle="tooltip" title="85%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title" id="experience" data-nav-tooltip="Experience">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <Image src="/static/img/evolvingx-logo.jpeg" title="" alt="" width={120} height={120} layout="intrinsic" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Full Stack Web Development Intern @EvolvingX</h6>
                  <label>Remote | Jul 2023 - Present</label>
                  <div className="rb-time">Part Time</div>
                  <div legacyBehavior>
                    <ul>
                      <li>
                        Currently intern at EvolvingX, where I am actively learning and
                        implementing EvolvingX methodologies.

                      </li>
                      <li>
                        Engaging in Design Thinking practices to solve complex problems and
                        improve user experiences.
                      </li>
                      <li>
                        Gaining practical experience in System Design, contributing to the
                        development of efficient and scalable software solutions.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <Image src="/static/img/shout-logo.png" title="" alt="" width={100} height={100} layout="intrinsic" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Full Stack Web Development Intern @Shout In&Out</h6>
                  <label>Remote | Sep 2021 - Jan 2023</label>
                  <div className="rb-time">Part Time</div>
                  <div legacyBehavior>
                    <ul>
                      <li>
                        Successfully completed over 6 projects, demonstrating
                        proficiency in HTML, CSS, JS, Bootstrap, &
                        PHP-CodeIgniter.
                      </li>
                      <li>
                        Contributed to both front-end and back-end development
                        efforts, ensuring responsive and user-friendly web
                        applications.
                      </li>
                      <li>
                        Collaborated with cross-functional teams to gather
                        requirements, design solutions, and deliver high-quality
                        software.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <Image src="/static/img/dds_logo.png" title="" alt="" width={100} height={100} layout="intrinsic" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Web Development Intern @Dream Designers</h6>
                  <label>Remote | Sep 2020 - Jan 2021</label>
                  <div className="rb-time">Part Time</div>
                  <div legacyBehavior>
                    <ul>
                      <li>
                        Gained hands-on experience in front-end and back-end
                        development.
                      </li>
                      <li>
                        Worked on multiple projects, enhancing skills in HTML,
                        CSS, Bootstrap, JavaScript, and PHP.
                      </li>
                      <li>
                        Contributed to the development of websites with a focus
                        on user experience and performance.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
