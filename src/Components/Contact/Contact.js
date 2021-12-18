import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

const Contact = () => {
    const [contactModalShow, setContactModalShow] = React.useState(false);

    function MyVerticallyCenteredModal2(props) {
        return (
          <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body>
                <div className="text-center">
                    <h5>Thanks for your submission.</h5>
                    <div className="pt-2">
                        <Button onClick={props.onHide}>Close</Button>
                    </div>
                </div>
            </Modal.Body>
          </Modal>
        );
      }

    return (
        <>
            <section className="contact">
                <div className="cover">
                    <svg className="cover-svg" viewBox="0 0 1920 381" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H1920V196.068L0 381V0Z" fill="#CCDEE2"/>
                        <path d="M1566.38 204.187C1557.89 206.463 1552.85 215.195 1555.12 223.69V223.69C1557.4 232.186 1566.13 237.227 1574.62 234.951L1712.95 197.888C1721.44 195.611 1726.48 186.879 1724.21 178.384V178.384C1721.93 169.889 1713.2 164.848 1704.7 167.124L1566.38 204.187Z" fill="#FCDC3D"/>
                        <rect width="27.6171" height="210.235" rx="13.8086" transform="matrix(-0.258819 -0.965926 -0.965926 0.258819 1786.57 132.438)" fill="#FCC8DF"/>
                        <rect width="24.3105" height="135.045" rx="12.1553" transform="matrix(-0.258819 -0.965926 -0.965926 0.258819 1745.73 103.482)" fill="#77E0B5"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M1550.93 93.5804C1553.72 95.5931 1556.51 99.126 1557.13 101.435C1557.75 103.744 1547.86 122.65 1535.16 143.447C1522.45 164.246 1507.6 188.766 1502.15 197.939C1490.65 217.282 1485.37 222.172 1477.17 221.041C1473.93 220.593 1446.98 209.876 1417.27 197.226C1383.95 183.036 1362.08 175.14 1360.19 176.621C1357.7 178.574 1358.27 182.127 1363.29 195.832C1374.44 226.279 1403.73 293.868 1408.27 299.644L1412.73 305.309L1512.73 279.886C1583.29 261.948 1613.74 255.118 1616.15 256.685C1618.03 257.907 1619.78 261.144 1620.02 263.879C1620.45 268.624 1615.69 270.166 1516.11 297.528L1411.75 326.204L1403.35 320.756C1393.12 314.122 1390.63 309.131 1357.76 229.647C1330.82 164.486 1328.97 157.071 1337.41 148.414C1339.5 146.278 1382.19 133.777 1443.38 117.381C1539.73 91.5638 1546.16 90.1394 1550.93 93.5804ZM1379.07 155.141C1377.55 156.33 1376.94 158.283 1377.71 159.475C1380.6 163.939 1471.21 200.468 1476.12 199.152C1481.45 197.723 1526.37 128.118 1526.92 120.431C1527.08 118.168 1525.88 115.843 1524.24 115.266C1520.84 114.064 1383.27 151.85 1379.07 155.141Z" fill="#77E0B5"/>
                    </svg>
                </div>

                <Container className="c_custom">
                        <div className="outlet-top mt--250-div">
                                <Row className="pt-4">
                                    <Col sm={12}>
                                        <h2 className="semi-50 text-left">Contact Us</h2> 
                                        <span className="bottom-line bl-cat"></span>
                                    </Col>
                                </Row>
                        </div>

                        <div className="outlet-below mt-150-div">
                                <Row className="pt-5">
                                    <Col lg={8} className="pb-5 offset-lg-2">
                                        <Container>
                                            <div className="pt-180 main text-center" id="contact">
                                                <h2>Let's Connect?</h2>
                                                <p className="pt-3">info@nsuhaatbazar.com</p>
                                            </div>
                                            <form method="post" action="">
                                                    <Row>
                                                        <Col lg={5} className="py-3">
                                                            <input type="text" name="name" className="textInput" placeholder="Your Name" required=""/>
                                                        </Col>
                                                        <Col lg={7} className="py-3">
                                                            <input type="text" name="email" className="textInput" placeholder="Your Email" required=""/>
                                                        </Col>
                                                        <Col lg={12} className="py-3">
                                                            <textarea type="text" name="message" className="queryInput" placeholder="Your Query"></textarea>
                                                        </Col>
                                                        <Col lg={12}>
                                                            <div className="text-center">
                                                                <Button variant="outlined" color="secondary" className="px-4" onClick={() => setContactModalShow(true)}>
                                                                    Submit
                                                                </Button>

                                                                <MyVerticallyCenteredModal2
                                                                    show={contactModalShow}
                                                                    onHide={() => setContactModalShow(false)}
                                                                />
                                                            </div>
                                                            <div className="pt-80"></div>
                                                        </Col>
                                                    </Row>
                                            </form>
                                        </Container>
                                    </Col>
                                </Row>
                        </div>
                </Container>  
            </section>
        </>
    );
};

export default Contact;