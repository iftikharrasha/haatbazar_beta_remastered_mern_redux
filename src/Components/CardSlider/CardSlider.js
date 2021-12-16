import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Card from '../Card/Card';    
import { useDispatch, useSelector } from 'react-redux';
import { fetchOutlets } from '../../Redux/Slices/outletSlice';

const CardSlider = (props) => {
    const relCat = props.relatedCat;
    // const first5 = outletData.slice(0,5);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchOutlets());
    }, [dispatch])

    const outlet = useSelector((state) => state.outlets.outletsList);

    var settings = {
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        infinite: false,    
        speed: 1800,
        dots: true,
        arrows: true,
        responsive: [
          {
              breakpoint: 2100,
              settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
              breakpoint: 1500,
              settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
              breakpoint: 1028,
              settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 770,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            },  
          },
          {
              breakpoint: 525,
              settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }, 
          },
        ],
      };

    return (
        <>

        <Container fluid>
            <Row>
                <Col lg={10} className="offset-lg-1">
                    <div className="products-slick" data-nav="#slick-nav-1">

                        <Slider {...settings}>

                                {
                                    outlet.map(outlet => <Card outlet={outlet} key={outlet._id} category={relCat}></Card>)
                                }

                        </Slider>
                        
                    </div>

                    <div id="slick-nav-1" className="products-slick-nav"></div>

                </Col>

            </Row>
        </Container>
            
        </>
    );
};

export default CardSlider;