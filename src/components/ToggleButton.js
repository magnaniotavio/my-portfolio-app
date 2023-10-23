import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function ToggleButton(props) {
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
                }}
            >
                <h3 className="m-0 mr-2"><h2 style={{ fontWeight: "bold" }}>| {props.name}</h2></h3>
            </Button>            {isExpanded && props.content}
        </div>
    )
}
