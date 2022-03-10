import React, { Component } from 'react';
import { Button, Collapse, Card, CardHeader, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import update from 'react-addons-update';

class Family extends Component{

    constructor(props){
        super(props);

        this.state = {
            isOpen : [false, false, false, false, false, false, false, false, false],
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(dataId){
        this.setState(update(this.state, {
            isOpen: {
                [dataId]: {
                    $set: !this.state.isOpen[dataId]
                }
            }
        }))
    }


    render(){
        var paternalData = this.props.familyData.filter((data)=> data.side === 'paternal').map((data) => {
            return(
                <div key={data.id} className="row m-3">
                    <div className="col-5 col-md-5 text-center align-self-center">
                        <img src={data.img} className="media-image img-fluid" alt={data.name}/>
                    </div>
                    <div className="col-5 col-md-7">
                        <div>
                            <h5>{data.name}</h5>
                            <h6>{data.relation}</h6>
                        </div>
                        <p className="d-none d-md-block">{data.description}</p>
                    </div>
                    <div className="col-2">
                        <Button className="d-block d-md-none btn-light" onClick={() => this.toggle(data.id)}><span class="fa fa-angle-down arrow"></span></Button>
                    </div>
                    <Collapse isOpen={this.state.isOpen[data.id]}>
                        <p className="d-block d-md-none m-2">{data.description}</p>
                    </Collapse>
                </div>
            );
        });
        var maternalData = this.props.familyData.filter((data)=> data.side === 'maternal').map((data) => {
            return(
                <div key={data.id} className="row m-3">
                    <div className="col-5 col-md-5 text-center align-self-center">
                        <img src={data.img} className="media-image img-fluid" alt={data.name}/>
                    </div>
                    <div className="col-5 col-md-7">
                        <div>
                            <h5>{data.name}</h5>
                            <h6>{data.relation}</h6>
                        </div>
                        <p className="d-none d-md-block">{data.description}</p>
                    </div>
                    <div className="col-2">
                        <Button className="d-block d-md-none btn-light" onClick={() => this.toggle(data.id)}><span class="fa fa-angle-down arrow"></span></Button>
                    </div>
                    <Collapse isOpen={this.state.isOpen[data.id]}>
                        <p className="d-block d-md-none m-2">{data.description}</p>
                    </Collapse>
                </div>
            );
        });
        var roleModelData = this.props.familyData.filter((data) => data.side === 'rolemodel').map((data) => {
            return(
                <div key={data.id} className="col-4">
                    <div className="align-self-center text-center">
                        <img src={data.img} className="media-image img-fluid mb-1 mt-1" alt={data.name}/>
                        <h5>{data.name}</h5>
                        <h6>{data.relation}</h6>
                    </div>
                    
                </div>
            );
        });
        return(
            <>
            <div className="row row-header">
                    <div className="col-12 text-center mt-4 mb-2">
                        <h2>My Pillars of Strength : My Family</h2>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-12 col-md-6">
                        <Card>
                            <CardHeader><h5>Paternal</h5></CardHeader>
                            <CardBody>
                                {paternalData}
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12">
                                <Card className="mt-2-xs mt-0-md">
                                    <CardHeader><h5>Maternal</h5></CardHeader>
                                    <CardBody>
                                        {maternalData}
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-12">
                                <Card className="mt-2">
                                    <CardHeader>
                                        <div className="row">
                                            <div className="col-6">
                                                <h5>My Role Models</h5>
                                            </div>
                                            <div className="col-6">
                                                <Link to="/rolemodels" className="pull-right"><span className="fa fa-arrow-right"></span></Link>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="row">
                                        {roleModelData}
                                        <div className="col-12">
                                        Read more about these amazing people by clicking the arrow above.
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </>
        );
    }
}

export default Family;