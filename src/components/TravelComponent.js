import React from 'react';
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './HeaderComponent';


function Travel(props){
    if(props.place){
        return(
            <>
                <Header destination={props.place}/>
                <div className="container mt-0 mb-4">
                    <div className="row">
                        <Breadcrumb className="col-12">
                            <BreadcrumbItem><Link to="/travelogues">Travelogues</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.place.heading}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p dangerouslySetInnerHTML={{__html: props.place.para1}}>
                                
                            </p>
                        </div>
                        <div className="col-12 col-md-6 text-center">
                            <img src={props.place.image2} alt={props.place.place} className="img-fluid img-thumbnail image"/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-md-6 order-last order-md-first text-center">
                            <img src={props.place.image3} alt={props.place.place} className="img-fluid img-thumbnail image"/>
                        </div>
                        <div className="col-12 col-md-6">
                            <p dangerouslySetInnerHTML={{__html: props.place.para2}}>
                                
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    else{
        const cardItems = props.travelogues.map((travelogue) => {
            return(
                <div className="col-12 col-md-6 p-2">
                    <Card>
                        <Link style={{ textDecoration: 'none' }} to={`/travelogues/${travelogue.link}`} >
                            <Card>
                                <CardImg width="100%" src={travelogue.image1} alt={travelogue.place} />
                                <CardBody>
                                    <CardTitle>{travelogue.place}</CardTitle>
                                    <CardText>{travelogue.description}</CardText>
                                </CardBody>
                            </Card>
                        </Link>
                    </Card>
                </div>
                
            );
        });
        return(
            <>
                <Header mainPage={true}/>
                <div className="container mt-0 mb-4">
                    <div className="row">
                        <Breadcrumb className="col-12">
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem>Travelogues</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="row align-items-center">
                        {cardItems}
                    </div>

                </div>
            </>
            
        );
    }
}

export default Travel;