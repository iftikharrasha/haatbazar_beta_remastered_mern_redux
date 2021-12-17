import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import LoginModal from '../LoginModal/LoginModal';
import { useDispatch } from 'react-redux';
import { postReacts } from '../../Redux/Slices/outletSlice';

const Card = (props) => {
    const { loggedInUser } = useAuth();
    const {_id, outlet, title, img, react, views} = props.outlet;

    const dispatch = useDispatch();
    //love react
    const handleReact = (id) => {
        const loading = toast.loading('Please wait ...');
        let liked = false;

        const alreadyLiked = addToStorage(id, liked);

        if(alreadyLiked){
            toast.dismiss(loading);
            toast("You've already liked it!", {
                icon: '👏',
            });
        }else{
            if(dispatch(postReacts(props.outlet))){
                document.getElementById('icon-heart').style.color = 'red';
                toast.dismiss(loading);
                toast.success('Thanks for the appreciation! 😃');
            }else{
                toast.dismiss(loading);
                toast("You've already liked it!", {
                    icon: '👏',
                });
            }
        }
    }

    //local storage utilities
    const addToStorage = (id, liked) => {
        const exists = getStorage();
        
        let react_cart = {};
        if (!exists) {
          react_cart[id] = 1;
          liked = false;
        }
        else {
          react_cart = JSON.parse(exists);
          if (react_cart[id]) {
            const newCount = react_cart[id] + 1;
            react_cart[id] = newCount;
            liked = true;
          }
          else {
            react_cart[id] = 1;
            liked = false;
          }
        }
        updateStorage(react_cart);
        return liked;
    }
    
    const getStorage = () => localStorage.getItem('liked_id');

    const updateStorage = cart => {
        localStorage.setItem('liked_id', JSON.stringify(cart));
    }

    //login modal
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <div className="cards d-flex justify-content-center">
                       <div className="card_in">
                           <div className="card_top">
                                <Link to={"/outlet/"+_id}>
                                    <figure className="outlet-avatar">
                                        <LazyLoadImage effect="blur" src={img}/>
                                    </figure>
                                </Link>
                           </div>
                           <div className="card_below">
                                   <h4>{outlet}</h4>
                                   <p>
                                   {title}
                                   </p>
                                   <div className="reactions">
                                        <div className="chart-1">
                                            {
                                                 loggedInUser.isSignedIn ? 
                                                    <button type="button" className="react" onClick={() => handleReact(_id)} >
                                                        <i className="fa fa-heart" id="icon-heart"></i> {react}
                                                    </button>
                                                 :
                                                    <button type="button" className="react" onClick={openModal}>
                                                        <i className="fa fa-heart" id="icon-heart"></i> {react}
                                                    </button>
                                            }
                                        </div>
                                        <div className="chart-2">
                                            <div className="view">
                                                <i className="fa fa-eye"></i> {views}
                                            </div>
                                        </div>
                                    </div>
                           </div>
                       </div>
            </div>

            <LoginModal modalIsOpen={modalIsOpen} closeModal={closeModal}></LoginModal>
        </>
    );
};

export default Card;