import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom'
import Header from './HeaderComponent';

function RoleModel(props){

    const rolemodeldata = props.familyData.filter((data) => data.side === 'rolemodel').map((data) => {
        return(
            <div className="col-12 col-md-4">
                <Card>
                    <CardBody className="text-center">
                        <img src={data.img} className="media-image img-fluid mb-2" alt={data.name}/>
                        <h5>{data.name}</h5>
                        <h6>{data.relation}</h6>
                        <div className="row">
                            <div className="col-12">
                                {data.description}
                            </div>
                        </div>
                    </CardBody>
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
                        <BreadcrumbItem active>Role Models</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    {rolemodeldata}
                </div>
            </div>
        </>
    );
}

export default RoleModel;