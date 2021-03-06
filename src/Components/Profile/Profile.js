import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { postCreate } from '../../Redux/Slices/outletSlice';

const Profile = () => {
    const [postData, setPostData] = useState({ outlet: '', title: '', owner: '', category: '', description: '', selectedFile: '' }); 

    const dispatch = useDispatch();
    const handleAddOutlet = e => {
        dispatch(postCreate(postData));
        e.preventDefault();
    }

    const clear = () => {
        setPostData({ outlet: '', title: '', owner: '', category: '', description: '', selectedFile: '' });
    };

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
                                            <form className="form" onSubmit={handleAddOutlet} autoComplete="off">
                                                <div className="inputs my-4">
                                                    <div className="input-field">
                                                        <input className="px-4 py-3 mb-2 text-black border border-transparent rounded lit--14" type="text" value={postData.outlet} onChange={(e) => setPostData({ ...postData, outlet: e.target.value })} name="name" placeholder="Enter Outlet Name"/>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-envelope" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <div className="input-field my-3">
                                                        <input type="text" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" value={postData.category} onChange={(e) => setPostData({ ...postData, category: e.target.value })} name="category" placeholder="Enter Category: food, clothing etc." autoComplete="on"/>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <div className="input-field my-3">
                                                        <input type="text" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} name="title" placeholder="Enter Fancy Title" autoComplete="on"/>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <div className="input-field my-3">
                                                        <input type="text" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="owner" value={postData.owner} onChange={(e) => setPostData({ ...postData, owner: e.target.value })}  placeholder="Enter Owner Name" autoComplete="on"/>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <span className="lit--14">Enter Outlet Image:</span>
                                                    <div className="input-field mb-3">
                                                        <input type="file" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="image" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} placeholder="Enter The Outlet Image"/>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <div className="input-field my-3">
                                                        <textarea rows="4" cols="40" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="desc"  value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} placeholder="Enter Outlet Description" autoComplete="on"></textarea>
                                                        <div className="input-icon">
                                                            <i className="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    {/* <div className="input-field my-3">
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
                                                    */}
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <Button type="submit" className="signin-btn">Submit</Button>
                                                    <Button type="submit" className="signin-btn" onClick={clear}>Reset</Button>
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