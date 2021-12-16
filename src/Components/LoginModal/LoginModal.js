import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import { Container, Row, Col } from 'react-bootstrap';
import google from '../../Image/google.svg';
import useAuth from '../../Hooks/useAuth';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};
  
Modal.setAppElement('#root');

const LoginModal = ({modalIsOpen, closeModal}) => {
    const { loggedInUser, signInWithGoogle } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    //google login
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal} type="button" className="close">
                    <span aria-hidden="true">×</span>
                </button>
                <div className="text-center">
                    <h2 className="text-center reg-25">Login to 
                        <b className="font-bold"> Haatbazar</b>
                    </h2>
                </div>

                <Container className="my-5">
                    <Row>
                        <Col md={12}>
                            <Row>
                                <Col md={12}>
                                    <div className="social-login d-block">
                                        <button onClick={handleGoogleSignIn}>
                                            <img src={google} alt="google"/>
                                            <span className="ml-2">Continue with Google</span> 
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </Modal>
        </>
    );
};

export default LoginModal;