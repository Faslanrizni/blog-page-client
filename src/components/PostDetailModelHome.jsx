import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PostDetailsModalHome = ({ show, onHide, post, onEdit, onDelete }) => {
    if (!post) return null;

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{post.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={post.image} className="img-fluid" alt={post.title} />
                <p>{post.content}</p>
            </Modal.Body>
            
        </Modal>
    );
};

export default PostDetailsModalHome;
