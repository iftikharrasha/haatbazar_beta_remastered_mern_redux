import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import youtube from '../../Image/youtube.svg';
import rasha from '../../Image/rasha.svg';
import arif from '../../Image/arif.svg';
import diti from '../../Image/diti.svg';
import phone from '../../Image/phone.svg';
import mail from '../../Image/mail.svg';
import facebook from '../../Image/facebook.svg';
import instagram from '../../Image/instagram.svg';
import linkedin from '../../Image/linkedin.svg';
import caset from '../../Image/caset.svg';

const About = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                NSU Haatbazar
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/lPOyaHAItAw" id="video"  allowFullScreen="always" allow="autoplay"></iframe>
                </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

    return (
        <>
            <section className="about">
                <div className="cover">
                    <svg className="cover-svg" viewBox="0 0 1920 381" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                        <path d="M0 0H1920V196.068L0 381V0Z" fill="#CCDEE2"/>
                        <path d="M1520 321C1520 354.137 1493.14 381 1460 381V381C1426.86 381 1400 354.137 1400 321L1400 -22C1400 -55.1371 1426.86 -82 1460 -82V-82C1493.14 -82 1520 -55.1371 1520 -22L1520 321Z" fill="#77E0B5"/>
                        <rect x="1550" y="-361" width="98" height="659" rx="49" fill="#FCC8DF"/>
                        <rect x="1678" y="-510" width="56" height="659" rx="28" fill="#FCDC3D"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="1920" height="381" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>

                <Container className="c_custom">
                        <div className="outlet-top mt--250-div">
                                <Row className="pt-4">
                                    <Col sm={12}>
                                        <h2 className="semi-50 text-left">About Us</h2> 
                                        <span className="bottom-line bl-cat"></span>
                                    </Col>
                                </Row>
                        </div>
                </Container>  

                <Container>
                        <div className="outlet-below mt-150-div">
                                <Row className="pt-5">
                                    <Col sm={12} className="pb-5">
                                        <Row>
                                            <Col sm={7} className="d-flex align-items-center"> 
                                                <h2 className="semi-50 c-tag-2">NSU Haatbazar</h2>
                                            </Col>
                                            <Col sm={5} className="d-sm-block d-none text-right">
                                                    <Button className="btn-tag-2" onClick={() => setModalShow(true)}>
                                                        <img className="img-fluid pr-3" src={youtube} alt="youtube"/>
                                                        Watch
                                                    </Button>

                                                    <MyVerticallyCenteredModal
                                                        show={modalShow}
                                                        onHide={() => setModalShow(false)}
                                                    />
                                            </Col>
                                            <Col>
                                                <div className="pt-4">
                                                    <p className="light-28">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam beatae nostrum voluptas qui repellat necessitatibus quam impedit.</p>
                                                </div>
                                                <ul className="pl-0">
                                                    <li className="list-unstyled d-inline-block pr-4">
                                                        <p className="c-tag-2 medi-20">
                                                            <i className="fas fa-check pr-1"></i> Checked 1
                                                        </p>
                                                    </li>
                                                    <li className="list-unstyled d-inline-block pr-4">
                                                        <p className="c-tag-2 medi-20">
                                                            <i className="fas fa-check pr-1"></i> Checked 2
                                                        </p>
                                                    </li>
                                                    <li className="list-unstyled d-inline-block pr-4">
                                                        <p className="c-tag-2 medi-20">
                                                            <i className="fas fa-check pr-1"></i> Checked 3
                                                        </p>
                                                    </li>
                                                    <li className="list-unstyled d-inline-block pr-4">
                                                        <p className="c-tag-2 medi-20">
                                                            <i className="fas fa-check pr-1"></i> Checked 4
                                                        </p>
                                                    </li>
                                                </ul>
                                            </Col>

                                            <Col sm={12} className="d-sm-none d-block pt-3">
                                                    <Button className="btn-tag-2" onClick={() => setModalShow(true)}>
                                                        <img className="img-fluid pr-3" src={youtube} alt="youtube"/>
                                                        Watch
                                                    </Button>

                                                    <MyVerticallyCenteredModal
                                                        show={modalShow}
                                                        onHide={() => setModalShow(false)}
                                                    />
                                            </Col>
                                        </Row>
                                        <Row className="pt-5">
                                            <Col>
                                                <h2 className="semi-50 c-tag-2">The Team</h2>
                                                <p className="light-28">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam beatae nostrum voluptas qui repellat necessitatibus quam impedit.</p>
                                            </Col>
                                        </Row>
                                        <Row className="py-5">
                                            <Col md={6}>
                                                <div className="members-list">
                                                    <div className="member py-3">
                                                        <div className="member-img">
                                                            <img className="img-fluid" src={rasha} alt="rasha"/>
                                                        </div>
                                                        <div className="member-info mt-lg-5 mt-sm-3">
                                                            <span className="medi-20 pl-5">Iftikhar Rasha</span>
                                                            <ul className="list-unstyled pl-5">
                                                                <li className="mt-2">
                                                                    <ul className="list-inline social-icons">
                                                                        <li className="list-inline-item">
                                                                            <a href=""><img className="img-fluid pr-3" src={facebook} alt="facebook"/></a>
                                                                        </li>
                                                                        <li className="list-inline-item">
                                                                            <a href=""><img className="img-fluid pr-3" src={instagram} alt="instagram"/></a>
                                                                        </li>
                                                                        <li className="list-inline-item">
                                                                            <a href=""><img className="img-fluid pr-3" src={linkedin} alt="linkedin"/></a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="member py-3">
                                                            <div className="member-img">
                                                                <img className="img-fluid" src={arif} alt="rasha"/>
                                                            </div>
                                                            <div className="member-info mt-lg-5 mt-3">
                                                                <span className="medi-20 pl-5">Arif Jawad</span>
                                                                <ul className="list-unstyled pl-5">
                                                                    <li className="mt-2">
                                                                        <ul className="list-inline social-icons">
                                                                            <li className="list-inline-item">
                                                                                <a href=""><img className="img-fluid pr-3" src={facebook} alt="facebook"/></a>
                                                                            </li>
                                                                            <li className="list-inline-item">
                                                                                <a href=""><img className="img-fluid pr-3" src={instagram} alt="instagram"/></a>
                                                                            </li>
                                                                            <li className="list-inline-item">
                                                                                <a href=""><img className="img-fluid pr-3" src={linkedin} alt="linkedin"/></a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                    </div>
                                                    <div className="member py-3">
                                                            <div className="member-img">
                                                                <img className="img-fluid" src={diti} alt="rasha"/>
                                                            </div>
                                                            <div className="member-info mt-lg-5 mt-sm-3">
                                                                    <span className="medi-20 pl-5">Roksana Diti</span>
                                                                    <ul className="list-unstyled pl-5">
                                                                        <li className="mt-2">
                                                                            <ul className="list-inline social-icons">
                                                                                <li className="list-inline-item">
                                                                                    <a href=""><img className="img-fluid pr-3" src={facebook} alt="facebook"/></a>
                                                                                </li>
                                                                                <li className="list-inline-item">
                                                                                    <a href=""><img className="img-fluid pr-3" src={instagram} alt="instagram"/></a>
                                                                                </li>
                                                                                <li className="list-inline-item">
                                                                                    <a href=""><img className="img-fluid pr-3" src={linkedin} alt="linkedin"/></a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                            </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6} className="d-flex justify-content-center align-items-center">
                                                <img className="img-fluid" src={caset} alt="caset"/>
                                            </Col>
                                        </Row>
                                        {/* <Row>
                                            <Col>
                                                <p className="light-28">And you.</p>
                                            </Col>
                                        </Row> */}
                                        <Row className="py-5 contact-field">
                                            <Col md={5} className="d-flex justify-content-center align-items-center">
                                                <div className="address">
                                                    <p className="c-tag-7 semi-25 pt-3 mb-0">
                                                        North South University
                                                    </p>
                                                    <h4 className="c-tag-7 medi-20 pb-4">
                                                        Dhaka, Bangladesh
                                                    </h4>
                                                    <div className="contacts pb-5 pb-md-0">
                                                        <p className="c-tag-7 medi-20 py-1">
                                                            <img className="img-fluid pr-2" src={phone} alt="phone"/> 041 720 18 08
                                                        </p>
                                                        <p className="c-tag-7 medi-20 py-1">
                                                            <img className="img-fluid pr-2" src={mail} alt="mail"/> info@nsuhaatbazar.com
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={7} className="padding-zero iframe">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.097973575444!2d90.42336961536348!3d23.815114892216982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c64c103a8093%3A0xd660a4f50365294a!2sNorth%20South%20University!5e0!3m2!1sen!2sbd!4v1619974237033!5m2!1sen!2sbd" allowFullScreen="" loading="lazy"></iframe>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                        </div>
                </Container>

            </section>
            
        </>
    );
};

export default About;