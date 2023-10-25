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
            >
                <h3 className="card-dropdown-project-title"><h2>{props.name}</h2></h3>
            </Button>            {isExpanded && props.content}
        </div>
    )
}
