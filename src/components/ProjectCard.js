import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

export default function ProjectCard(props) {
    const [isExpanded, setisExpanded] = useState(false);

    const handleDropdownToggle = () => {
        setisExpanded(!isExpanded);
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
                                        <img src={p.imageUrl} alt={p.description} />
                                    </div>
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
