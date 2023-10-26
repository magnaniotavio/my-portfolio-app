import React, { useState } from "react";
import { Button, Card, Col, Row, Modal } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

export default function ProjectCard(props) {
    const [isExpanded, setisExpanded] = useState(false);

    const handleDropdownToggle = () => {
        setisExpanded(!isExpanded);
    };

    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setShowModal(true);
    };

    return (
        <div className="card-dropdown">
            <Button
                variant="outline-secondary"
                onClick={handleDropdownToggle}
                aria-expanded={isExpanded}
                aria-controls="card-content"
                id="card-dropdown-button"
            >
                <h4 className="project-title">{props.name}</h4>
            </Button>
            {isExpanded && (
                <div class="card-content">
                    <Carousel>
                        {props.imageSequence.map((p) => (
                            <Carousel.Item key={p.imageUrl}>
                                <Col md={10}>
                                    <div className="project-images">
                                        <img
                                            src={p.imageUrl}
                                            alt={p.description}
                                            onClick={() => handleImageClick(p.imageUrl)} />
                                    </div>
                                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                                        <Modal.Body>
                                            <img src={selectedImage} alt="Enlarged View" style={{ width: '100%' }} />
                                        </Modal.Body>
                                    </Modal>
                                    <div className="project-description" >
                                        <div className="project-description">
                                            <h7>{p.description}</h7>
                                        </div>
                                    </div>
                                </Col>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            )}
        </div>
    );
}
