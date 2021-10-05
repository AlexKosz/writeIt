import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import ProjectListing from "./ProjectListing"

const testProj = {
    name: "test",
}

const sampleProjects = [
    testProj,
    testProj,
    testProj,
    testProj,
    testProj,
    testProj,
    testProj,
    testProj,
    testProj,
    testProj,
    testProj,
    testProj,
    testProj,
    testProj
]

const Dashboard = () => {
    const [userInfo, setUserInfo] = useState(null)
    const [projects, setProjects] = useState(sampleProjects)

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/loggedin", { withCredentials: true })
            .then(res => {
                console.log(res)
                setUserInfo(res.data)
            })
            .catch(err => {
                console.log(err)
                navigate("/")
            })
    }, [])

    const logout = (e) => {
        axios.get("http://localhost:8000/api/users/logout", { withCredentials: true })
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => { console.log(err) })
    }

    return (
        userInfo ?
            <div className="light1">
                <h3 className="nav light1">Nav here</h3>
                <div className="logoSection light2"></div>
                <div className="projects light1">
                    <h3>Your Projects</h3>
                    <div className="projBar">
                        {projects.map((project) => (
                            <ProjectListing project={project} />
                        ))}
                    </div>


                </div>






                {/* <h1>Welcome {userInfo.firstName}</h1>
                <button onClick={logout}>Logout</button> */}
            </div> :










            <div>
                <h1>Loading</h1>
            </div>
    )
};

export default Dashboard;