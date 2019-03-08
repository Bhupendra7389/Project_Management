import React, { Component } from "react";
import "./CSS/nivo-slider-theme.css";
import "./CSS/responsive.css";
import "./CSS/style.css";

class View extends Component {
  render() {
    return (
      <div>
        <body data-spy="scroll" data-target="#navbar-example">
          <header>
            <div id="sticker" className="header-area">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <nav className="navbar navbar-default">
                      <div className="navbar-header">
                        <button
                          type="button"
                          className="navbar-toggle collapsed"
                          data-toggle="collapse"
                          data-target=".bs-example-navbar-collapse-1"
                          aria-expanded="false"
                        >
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                        </button>

                        <a
                          className="navbar-brand page-scroll sticky-logo"
                          href="index.html"
                        >
                          <h1>
                            <span>e</span>Business
                          </h1>
                        </a>
                      </div>

                      <div
                        className="collapse navbar-collapse main-menu bs-example-navbar-collapse-1"
                        id="navbar-example"
                      >
                        <ul className="nav navbar-nav navbar-right">
                          <li className="active">
                            <a className="page-scroll" href="#home">
                              Home
                            </a>
                          </li>
                          <li>
                            <a className="page-scroll" href="#about">
                              About
                            </a>
                          </li>
                          <li>
                            <a className="page-scroll" href="#services">
                              Services
                            </a>
                          </li>
                          <li>
                            <a className="page-scroll" href="#team">
                              Team
                            </a>
                          </li>
                          <li>
                            <a className="page-scroll" href="#portfolio">
                              Portfolio
                            </a>
                          </li>

                          <li className="dropdown">
                            <a
                              href="#"
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Drop Down
                              <span className="caret" />
                            </a>
                            <ul className="dropdown-menu" role="menu">
                              <li>
                                <a href="#">Drop Down 1</a>
                              </li>
                              <li>
                                <a href="#">Drop Down 2</a>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a className="page-scroll" href="#blog">
                              Blog
                            </a>
                          </li>
                          <li>
                            <a className="page-scroll" href="#contact">
                              Contact
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </body>
      </div>
    );
  }
}

export default View;
