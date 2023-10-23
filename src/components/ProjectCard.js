import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
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
                id="card-dropdwon-button"
                style={{
                    background: "transparent",
                    border: "none",
                    boxShadow: "none",
                    padding: "0",
                    color: "white",
                }}
            >
                <h4 className="m-0 mr-2"><h3 style={{ color: "white", fontWeight: "bold" }}>| {props.name}</h3></h4>
            </Button>            {isExpanded && (
                <div id="card-content">
                    <Card>
                        <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}><h1>{props.name}</h1></Card.Header>
                        <Carousel>
                            {props.imageSequence.map((p) => (
                                <Carousel.Item key={p.imageUrl}>
                                    <div style={{ display: 'flex' }}>
                                        <Col md={6}>
                                            <img src={p.imageUrl} alt={p.description} fluid style={{ width: '90%', maxHeight: '700px' }} />
                                        </Col>
                                        <Col md={5} style={{ paddingTop: '15px', width: '20%' }}>
                                            <h4>{p.description}</h4>
                                        </Col>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Card>
                </div>
            )}
        </div>
    );
}