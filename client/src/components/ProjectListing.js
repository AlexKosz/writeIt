import React, { useState } from 'react';

const ProjectListing = (props) => {
    return (
        <div className="projectListing stack light2">
            <div>
                <div className="stack1 light2" />
                <div className="stack2 light2" />
            </div>
            <div className="light2 stackTop">
                <p>{props.project.name}</p>
            </div>


        </div>
    )
}

export default ProjectListing;