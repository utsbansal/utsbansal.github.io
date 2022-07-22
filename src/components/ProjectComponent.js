import React from "react";
import Header from "./HeaderComponent";
import { Card, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Projects = (props) => {
    const projects = props.projectData.map((project) => {
        const points = project.points.map((point) => {
            return(
                <li>{point}</li>
            );
        });
        return(
            <div className="col-12 col-md-6 p-2" key={project.id}>
                <Card className="fancy_card">
                    <CardBody>
                        <CardTitle>
                            {project.title}&nbsp;
                            {project.link?<a style={{color:'inherit'}} rel="noopener noreferrer" target="_blank" href={project.link}><span className="fa fa-globe"></span></a>:<></>}
                        </CardTitle>
                        <CardText>
                            <p><b>Languages/Tools:</b> {project.tools}</p>
                            <ul>
                                {points}
                            </ul>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    });
    return(
        <>
            <Header projectPage={true}/>
            <div className="container mt-0 mb-4">
                <div className="row">
                    <Breadcrumb className="col-12">
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Projects</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h2>Projects</h2>
                    </div>
                </div>
                <div className="row align-items-center">
                    {projects}
                </div>
            </div>
        </>
    );
}

export default Projects;