import React, { useRef } from 'react';
import useAuth from '../../Hooks/useAuth';

const Profile = () => {
    const {loggedInUser} = useAuth();

    const addedBy = loggedInUser.name;
    const date = new Date().toISOString().slice(0, 10);
    const titleRef = useRef();
    const catRef = useRef();
    const thumbRef = useRef();
    const imgRef = useRef();
    const descRef = useRef();
    const priceRef = useRef();
    const courtesyRef = useRef();
    const linkRef = useRef();

    const handleAddOutlet = e => {
        const title = titleRef.current.value;
        const category = catRef.current.value;
        const thumb = thumbRef.current.value;
        const img = imgRef.current.value;
        const desc = descRef.current.value;
        const price = priceRef.current.value;
        const courtesy = courtesyRef.current.value;
        const link = linkRef.current.value;

        const newOutlet = {date, title, category, img, desc, price, addedBy, thumb, courtesy, link};
        fetch('https://thawing-inlet-67169.herokuapp.com/add-outlet', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOutlet)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                document.getElementById('success').style.display = 'block';
                e.target.reset();
            }else{
                document.getElementById('error').style.display = 'block';
            }
        })
        e.preventDefault();
    }
    return (
        <>
        <div className="main-content">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center py-4">
                            <div className="col-lg-12">
                                <div className="login content-form">
                                    <div className="text-center">
                                        <h2 className="reg-bod-56"> <strong>Add Your Outlet</strong></h2>
                                    </div>
                                    <div className="text-center mb-4">
                                        <p style={{color: 'green', display: 'none'}} id="success">Successfully added the outlet!</p>
                                        <p style={{color: 'red', display: 'none'}} id="error">There is a problem adding the outlet!</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="login-form bg-tag-1">
                                            <form className="form" onSubmit={handleAddOutlet}>
                                                <div className="inputs my-4">
                                                    <div className="input-field">
                                                        <input className="px-4 py-3 mb-2 text-black border border-transparent rounded lit--14" type="text" ref={titleRef} name="title" placeholder="Enter Outlet Title" autoComplete="on" required/>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-envelope" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <div className="input-field my-3">
                                                        <input type="text" ref={catRef} className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="cat" placeholder="Enter Category: popular, extensions etc." autoComplete="on" required/>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <div className="input-field my-3">
                                                        <input type="text" ref={thumbRef} className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="img" placeholder="Enter Thumbnail Link" autoComplete="on" required/>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <div className="input-field my-3">
                                                        <input type="text" ref={imgRef} className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="img" placeholder="Enter Image Link" autoComplete="on" required/>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <div className="input-field my-3">
                                                        <input type="text" ref={priceRef} className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="price" placeholder="Enter Offer Starting Price" autoComplete="on" required/>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <div className="input-field my-3">
                                                        <input type="text" ref={courtesyRef} className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="price" placeholder="Post Courtesy(optional)" autoComplete="on"/>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <div className="input-field my-3">
                                                        <input type="text" ref={linkRef} className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="price" placeholder="External Link(optional)" autoComplete="on"/>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <div className="input-field my-3">
                                                        <textarea rows="4" cols="40" ref={descRef} className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="desc" placeholder="Enter Outlet Description" autoComplete="on" required></textarea>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <button className="signin-btn">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;