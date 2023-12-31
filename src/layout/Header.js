import Link from "next/link";
import Image from "next/image"
import { Fragment, useEffect, useState } from "react";
// import { activeSection } from "../utilits";
const Header = ({ blog }) => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  // useEffect(() => {
  //   if (!blog) {
  //     activeSection();
  //   }
  // }, []);
  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <Link href="/" legacyBehavior>
              <a className="logo-text">Gaurav Borse</a>
            </Link>
          </div>
          <button
            className={`toggler-menu ${sideBarToggle ? "open" : ""}`}
            onClick={() => setSideBarToggle(!sideBarToggle)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {/* End Header */}
      {/* nav bar */}
      <header
        className={`header-left ${sideBarToggle ? "menu-open menu-open-desk" : ""
          }`}
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <div className="img">
                <Image src="/static/img/profile2.png" title="" alt="" width={100} height={100} layout="intrinsic" />
              </div>
              <h5>Gaurav Borse</h5>
            </div>
          </div>
          {blog ? <MenuWithBlog /> : <MenuWithOutBlog />}
        </div>
        <div className="nav justify-content-center social-icons">
          <a href="https://www.linkedin.com/in/gaurav-borse/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="https://github.com/gaurav-borse/" target="_blank" rel="noreferrer">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.instagram.com/gaurav.borse_" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://dev.to/gauravborse" target="_blank" rel="noreferrer">
            <i className="fab fa-dev" />
          </a>
          <a href="https://www.facebook.com/Gaurav.Borsee" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f" />
          </a>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;

const MenuWithOutBlog = () => {
  return (
    <ul className="nav nav-menu" id="pp-menu">
      <li data-menuanchor="home" className="active">
        <a className="nav-link" href="#home">
          <i className="ti-home" />
          <span>Home</span>
        </a>
      </li>
      <li data-menuanchor="about">
        <a className="nav-link" href="#about">
          <i className="ti-id-badge" />
          <span>About Me</span>
        </a>
      </li>
      <li data-menuanchor="education">
        <a className="nav-link" href="#education">
          <i className="ti-book" />
          <span>Edu. &amp; Skills</span>
        </a>
      </li>
      <li data-menuanchor="experience">
        <a className="nav-link" href="#experience">
          <i className="ti-briefcase" />
          <span>Experience</span>
        </a>
      </li>
      {/* <li data-menuanchor="services">
        <a className="nav-link" href="#services">
          <i className="ti-panel" />
          <span>Services</span>
        </a>
      </li> */}
      <li data-menuanchor="work">
        <a className="nav-link" href="#work">
          <i className="ti-desktop" />
          <span>Projects</span>
        </a>
      </li>
      {/* <li data-menuanchor="blog" className="blog">
        <a className="nav-link" href="#blog">
          <i className="ti-layout-media-overlay-alt-2" />
          <span>Blogs</span>
        </a>
      </li> */}
      <li data-menuanchor="contactus">
        <a className="nav-link" href="#contactus">
          <i className="ti-map-alt" />
          <span>Contact Me</span>
        </a>
      </li>
    </ul>
  );
};

const MenuWithBlog = () => {
  useEffect(() => {
    window.addEventListener("scroll", () =>
      document.querySelector(".blog").classList.add("active")
    );
  });

  return (
    <Fragment>
      <ul className="nav nav-menu" id="pp-menu">
        <li data-menuanchor="home">
          <Link href="/#home" legacyBehavior>
            <a className="nav-link">
              <i className="ti-home" />
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="about">
          <Link href="/#about" legacyBehavior>
            <a className="nav-link">
              <i className="ti-id-badge" />
              <span>About Me</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="services">
          <Link href="/#services" legacyBehavior>
            <a className="nav-link">
              <i className="ti-panel" />
              <span>Services</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="work">
          <Link href="/#work" legacyBehavior>
            <a className="nav-link">
              <i className="ti-bookmark-alt" />
              <span>Portfolio</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="blog" className="blog active">
          <Link href="/#blog" legacyBehavior>
            <a className="nav-link">
              <i className="ti-layout-media-overlay-alt-2" />
              <span>Blogs</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="contactus">
          <Link href="/#contactus" legacyBehavior>
            <a className="nav-link">
              <i className="ti-map-alt" />
              <span>Contact Me</span>
            </a>
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};
