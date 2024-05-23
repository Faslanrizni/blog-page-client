import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PostDetailsModal = ({ show, onHide, post, onEdit, onDelete }) => {
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
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="success" onClick={() => onEdit(post._id)}>
                    Edit
                </Button>
                <Button variant="danger" onClick={() => onDelete(post._id)}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PostDetailsModal;
