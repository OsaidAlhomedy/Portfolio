/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg1 from "assets/img/theme/ChocoPizza.png";
import cardImg2 from "assets/img/theme/SalmonCookies.png";
import cardImg3 from "assets/img/theme/saveMe.png";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        WHAT MAKES ME A TECH-WORM ?
                      </h1>
                      <p className="lead text-white">
                        Technology is increasingly taking over every aspect of
                        our life. Technology is always updated and requires you
                        to be updated too. Technology always makes sense, not
                        like people. I LOVE TECHNOLOGY 😍
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <h1 className="display-2 text-white">Completed Courses</h1>
              </Row>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid mt-5">
                    <Col lg="3">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Code 101 , Code 102
                          </h6>
                          <p className="description mt-3">
                            Getting started in HTML, CSS, and JavaScript with
                            beginner-level courses
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              Web Development
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              JavaScript Programming
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Collaboration
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://www.codefellows.org/courses/code-102/intro-to-software-development/"
                            target="_blank"
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="3">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-danger rounded-circle mb-4">
                            <i className="fa fa-code" />
                          </div>
                          <h6 className="text-danger text-uppercase">
                            Code 201
                          </h6>
                          <p className="description mt-3">
                            Getting used to writing syntax and pushing code as
                            you learn the basics of web development through
                            HTML, CSS, Javascript, and the tools and best
                            practices used by software developers around the
                            world.
                          </p>
                          <div>
                            <Badge color="danger" pill className="mr-1">
                              Concepts
                            </Badge>
                            <Badge color="danger" pill className="mr-1">
                              Languages
                            </Badge>
                            <Badge color="danger" pill className="mr-1">
                              Environments and Tools
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="danger"
                            href="https://www.codefellows.org/courses/code-201/foundations-of-software-development/"
                            target="_blank"
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="3">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="fa fa-terminal" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Code 301
                          </h6>
                          <p className="description mt-3">
                            Create and deploy web apps in the “MERN” stack with
                            Mongo, Express, React, and Node.js, with the help of
                            third-party APIs and libraries from around the web.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              Data Structures
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Languages
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Environments and Tools
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://www.codefellows.org/courses/code-301/intermediate-software-development/"
                            target="_blank"
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="3">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Code 401
                          </h6>
                          <p className="description mt-3">
                            Advanced training in a specific programming language
                            and land a high-paying job in the industry such as
                            Python and Java.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              launch
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://www.codefellows.org/courses/code-400/"
                            target="_blank"
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={ill2}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-black">Modern Interface</h4>
                      <p className="text-default">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever.
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Awesome Support
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className="text-success"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            Modular Components
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className="text-warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning pb-5">
            <Container>
              <Row className="row-grid align-items-center justify-content-center">
                <h2 className="display-2 font-weight-bold text-white">
                  My Projects Showcase
                </h2>
              </Row>
              <Row className="row-grid align-items-stretch">
                <Col md="4">
                  <Card className="bg-default shadow border-0">
                    <CardImg alt="..." src={cardImg1} top />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-4 font-weight-bold text-white">
                        Chocolate-Pizza
                      </h4>
                      <p className="lead text-italic text-white">
                        A food blog website page for the delicious famous
                        Chocolate-pizza that contains the recipe and information
                        about the chief (the owner)
                      </p>
                      <Button
                        className="mt-4"
                        color="secondary"
                        href="https://osaidalhomedy.github.io/chocolate-pizza/"
                        target="_blank"
                      >
                        Go to website
                      </Button>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="bg-default shadow border-0">
                    <CardImg alt="..." src={cardImg2} top />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-4 font-weight-bold text-white">
                        Salmon Cookies
                      </h4>
                      <p className="lead text-italic text-white">
                        A shop website that has two pages one for the shop and
                        information about the work time and the other is for the
                        sales that is only accessible by the admin.
                      </p>
                      <Button
                        className="mt-4"
                        color="secondary"
                        href="https://osaidalhomedy.github.io/cookie-stand/"
                        target="_blank"
                      >
                        Go to website
                      </Button>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="bg-default shadow border-0">
                    <CardImg alt="..." src={cardImg3} top />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-4 font-weight-bold text-white">
                        SaveMe
                      </h4>
                      <p className="lead text-italic text-white">
                        A blood donation platform that focuses of the idea of
                        anonymous blood donation for both the donors and the
                        requestors of the blood donation.
                      </p>
                      <Button
                        className="mt-4"
                        color="secondary"
                        href="https://pro-fellows.github.io/SaveMe/"
                        target="_blank"
                      >
                        Go to website
                      </Button>
                    </blockquote>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Landing;
