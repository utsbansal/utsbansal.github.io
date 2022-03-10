import React from 'react';
import { Breadcrumb, BreadcrumbItem, CardBody, Card, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './HeaderComponent';
import Pdf from '../shared/Resume.pdf';

function About(props){
    return(
        <div>
            <Header aboutPage={true}/>
            <div className="container mt-0 mb-4">
                <div className="row">
                    <Breadcrumb className="col-12">
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h2>About Me</h2>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12 col-md-6">
                        <p>
                            Hello reader, I, Utkarsh Bansal, am glad that you have visited my website. I was born and brought up in a middle class family in Ambala Cantt, 
                            Haryana. With the nature of my father's work in designing, printing and packaging, I was introduced to computers at a very early stage in my 
                            life. Playing video games on the internet and making masterpieces in MS-Paint were a great pass time for me. Giving this much time to computers 
                            got me interested in studying about computers and today I am studying Computer Science Engineering.
                        </p>
                        <p>
                            With my father's family belonging to Kasauli, Himachal Pradesh and my mother's family belonging to Kota, Rajasthan. I have travelled for countless hours in 
                            my life. No surprise I love travelling. Hills and mountains are my favourite destinations to go to. Although I would go to any place if I get a chance.
                        </p>
                        <p>
                            To see more of my professional qualifications, you can check out my <a href={Pdf} rel="noopener noreferrer" target="_blank">resume</a>.
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <Card>
                            <CardHeader className="bg-primary text-white">
                                <h3>Info at a glance</h3>
                            </CardHeader>
                            <CardBody>
                                <dl className="row">
                                    <dt className="col-6">Born on</dt>
                                    <dd className="col-6">24 Oct. 1999</dd>
                                    <dt className="col-6">Residence</dt>
                                    <dd className="col-6">Buffalo, NY</dd>
                                    <dt className="col-6">Professional Qualification</dt>
                                    <dd className="col-6">Master of Science</dd>
                                    <dt className="col-6">Field</dt>
                                    <dd className="col-6">Computer Science</dd>
                                    <dt className="col-6">Batch</dt>
                                    <dd className="col-6">2021-22</dd>
                                    <dt className="col-6">University</dt>
                                    <dd className="col-6"><a rel="noopener noreferrer" href="https://www.buffalo.edu" target="_blank">The State University of New York at Buffalo</a></dd>
                                </dl>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;