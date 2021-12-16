import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import haatbazar from '../../Image/haatbazar.png'; 
import { Container, Row, Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
        useEffect(() => {
            AOS.init();
            AOS.refresh();
        }, []);

        return (
                <>
                    <section className="hero">
                        <Container className="c_custom">
                            <Row className="pt-4">
                                <Col sm={2} className="order-sm-1 order-1 d-sm-block d-none">
                                    <div className="sticky-el stick-pad pb-0">
                                        <svg className="svg-red" viewBox="0 0 44 578" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="fade-down" data-aos-duration="1000">
                                            <rect width="44" height="578" rx="22" fill="#DF313C"/>
                                        </svg>
                                    </div>
                                </Col>
                                <Col sm={4} className="order-sm-2 order-3">
                                    <Row>
                                        <Col sm={12} className="h-740">
                                            <div className="sticky-el stick-pad text-sm-left pb-5">
                                                <p className="reg-25 mb-0">Countries largest</p>
                                                <h1 className="semi-50 mb-0">Entrepreneurship</h1>
                                                <p className="reg-25">Simulation is now LIVE.</p>
                                                <Button className="px-4 my-2">
                                                    Learn More
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>
                                            <div>
                                                <svg className="svg-yel" viewBox="0 0 115 297" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="fade-up" data-aos-duration="1000">
                                                    <rect width="115" height="297" rx="57.5" fill="#FCDC3D"/>
                                                </svg>
                                            </div>
                                        </Col>
                                        <Col sm={6} className="d-none d-sm-block">
                                            <div className="sticky-el pt-300">
                                                <svg className="svg-org" viewBox="0 0 182 638" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="fade-up" data-aos-duration="1000">
                                                    <rect width="182" height="638" rx="91" fill="#E83E03"/>
                                                </svg>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={3} className="h-1570 order-sm-3 order-2">
                                    <div className="sticky-el stick-pad">
                                        <LazyLoadImage effect="blur" className="svg-pic" src={haatbazar} alt="haatbazar"/>
                                    </div>
                                </Col>
                                <Col sm={2} className="order-sm-4 order-4 d-none d-sm-block">
                                    <div>
                                        <svg className="svg-blu" viewBox="0 0 182 632" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="fade-down" data-aos-duration="1000">
                                            <rect width="182" height="632" rx="91" fill="#052FD3"/>
                                        </svg>
                                    </div>
                                </Col>
                                <Col sm={1} className="order-sm-5 order-5 d-none d-sm-block">
                                    <div className="pt-650">
                                        <svg className="svg-tom" viewBox="0 0 26 554" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="fade-up" data-aos-duration="1000">
                                            <rect width="26" height="554" rx="13" fill="#E83E03"/>
                                        </svg>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </>
        );
};

export default Hero;