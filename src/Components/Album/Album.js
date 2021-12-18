import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import album_six from '../../Image/album-six.jpg'; 
import album_five from '../../Image/album-five.jpg'; 
import album_four from '../../Image/album-four.jpg'; 
import album_three from '../../Image/album-one.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Album = () => {
    return (
        <>
            <section className="album stick-pad my-5" id="learnmore">
                <Container className="c_custom">
                    <Row className="pt-4">
                        <Col sm={5} className="album-height">
                            <div className="alb-one sticky-el sticky-el-sm sm-top-1 stick-pad pl-5">
                                    <LazyLoadImage effect="blur" className="img-fluid" src={album_six} alt="album-one"/>
                            </div>
                            <div className="alb-two sticky-el sticky-el-sm sm-top-2 stick-pad pl-5">
                                <LazyLoadImage effect="blur" className="img-fluid two-img" src={album_five} alt="album-two"/>
                            </div>
                            <div className="alb-three sticky-el sticky-el-sm sm-top-3 stick-pad pl-5">
                                <LazyLoadImage effect="blur" className="img-fluid three-img" src={album_four} alt="album-three"/>
                            </div>
                            <div className="alb-four sticky-el sticky-el-sm sm-top-4 stick-pad pl-5">
                                <LazyLoadImage effect="blur" className="img-fluid three-img" src={album_three} alt="album-three"/>
                            </div>
                        </Col>
                        <Col sm={7}>
                            <div className="px-0 px-sm-5">
                                <div className="story-height">
                                    <div className="sticky-el sticky-el-sm stick-pad pl-5 bg-white">
                                        <h2 className="semi-50 text-right"><span className="c-tag-1">Background</span> Story</h2>
                                        <span className="bottom-line bl-story"></span>
                                    </div>
                                    <div className="rel-el rel-pad z-down">
                                        <p className="light-28">Haat Bazar was the Biggest Entrepreneurship Simulation event of the Nation hosted by NSU School of Business and Economics, CPC and NSUYES.</p> 
                                    </div>
                                    <div className="rel-el rel-pad z-down">
                                        <p className="light-28">Young Entrepreneurs used to take part on the day of the event with festivities and gathering.</p> 
                                    </div>
                                    <div className="rel-el rel-pad rel-pad-2 z-down">
                                        <p className="light-28">The event is designed in a way that provides an opportunity and platform for the Entrepreneurship students to get a first hand real life experience of the world of Entrepreneurship.</p> 
                                    </div>
                                    <div className="rel-el rel-pad rel-pad-3 z-down">
                                        <p className="light-28">Our objective is to find the young entrepreneurs and bring back the legacy of NSU Haatbazar on our digital platform.
                                        </p> 
                                    </div>
                                    <div className="rel-el rel-pad rel-pad-4 z-down">
                                            <h5 className="text-right med-50">We help your brands grow and be seen in 5 easy <a href="#"><Button className="light-28 px-4">Steps!</Button></a>
                                            </h5> 
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Album;