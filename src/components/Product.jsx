import React, { useState, useEffect } from "react";
import AxiosInstance from '../config/axiorsInstance';
import { storage } from '../config/Firebase';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const [posts, setPosts] = useState([]);
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [modalState, setModalState] = useState(false);
    const [selectedPostId, setSelectedPostId] = useState('');
    const [updateTitle, setUpdateTitle] = useState('');
    const [updateContent, setUpdateContent] = useState('');
    const [updateImage, setUpdateImage] = useState(null);

    const [expandedPostId, setExpandedPostId] = useState(null); // State to track expanded post

    const navigate = useNavigate();

    useEffect(() => {
        findAllPosts();
    }, []);

    const handleFile = (event) => {
        setImage(event.target.files[0]);
    };

    const findAllPosts = async () => {
        const response = await AxiosInstance.get('/posts/find-all?searchText=&page=1&size=10');
        setPosts(response.data);
    };

    const deleteProduct = async (id) => {
        await AxiosInstance.delete(`/posts/delete-by-id/${id}`);
        findAllPosts();
    };

    const saveProduct = async () => {
        let imageUrl = 'https://cdn.4imprint.com/qtz/homepage/categories/images21/drinkware0222.jpg';
        try {
            await AxiosInstance.post('/posts/create', { title, content, image: imageUrl });
            setTitle('');
            setContent('');
            findAllPosts();
        } catch (e) {
            console.log(e);
        }
    };

    const loadModal = async (id) => {
        const response = await AxiosInstance.get('/posts/find-by-id/' + id);
        const post = response.data;
        setSelectedPostId(post._id);
        setUpdateTitle(post.title);
        setUpdateContent(post.content);
        setUpdateImage(null);
        setModalState(true);
    };

    const updatePost = async () => {
        let imageUrl = 'https://cdn.4imprint.com/qtz/homepage/categories/images21/drinkware0222.jpg';
        try {
            await AxiosInstance.put('/posts/update/' + selectedPostId, {
                content: updateContent,
                title: updateTitle,
                image: imageUrl
            });
            setModalState(false);
            findAllPosts();
        } catch (e) {
            console.log(e);
        }
    };

    const toggleExpandPost = (id) => {
        setExpandedPostId(expandedPostId === id ? null : id);
    };

    return (
        <>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <div className="form-group">
                            <label htmlFor="productName">Title</label>
                            <input value={title} type="text" onChange={(e) => setTitle(e.target.value)} className='form-control' id='productName' />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <div className="form-group">
                            <label htmlFor="image">Product Image</label>
                            <input onChange={handleFile} type="file" className='form-control' id='image' />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={5} className='form-control' id='description' />
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-12">
                        <button className='btn btn-primary col-12' onClick={saveProduct}>Save Post</button>
                    </div>
                </div>
                <hr />


                <div className="row">
                    {posts.map((post) => (
                        <div key={post._id} className="col-md-4 mb-4">
                            <div className="card" onClick={() => toggleExpandPost(post._id)}>
                                <img src={post.image} className="card-img-top" alt={post.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    {expandedPostId === post._id && (
                                        <>
                                            <p className="card-text">{post.content}</p>

                                            <button className='btn btn-outline-success btn-sm ml-2 button-spacing' onClick={() => loadModal(post._id)}>Update  </button>
                                            <button className='btn btn-outline-danger btn-sm ml-2' onClick={(e) => {
                                                e.stopPropagation();
                                                if (confirm('Are you sure?')) {
                                                    deleteProduct(post._id);
                                                }
                                            }}>Delete</button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal show={modalState} onHide={() => setModalState(false)}>
                <div className='p-4'>
                    <h2>Update Post</h2>
                    <hr />
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="updateTitle">Title</label>
                            <input type="text" value={updateTitle} onChange={(e) => setUpdateTitle(e.target.value)} className='form-control' id="updateTitle" />
                        </div>
                        <br />
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="updateContent">Content</label>
                            <textarea rows={5} value={updateContent} onChange={(e) => setUpdateContent(e.target.value)} className='form-control' id="updateContent" />
                        </div>
                        <br />
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="updateImage">Product Image</label>
                            <input type="file" onChange={(e) => setUpdateImage(e.target.files[0])} className='form-control' id="updateImage" />
                        </div>
                        <br />
                    </div>
                    <div className="col-12">
                        <button type='button' className='btn btn-success col-12' onClick={updatePost}>Update Post</button>
                        <br />
                        <br />
                        <button type='button' className='btn btn-secondary col-12' onClick={() => setModalState(false)}>Close Modal</button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Product;