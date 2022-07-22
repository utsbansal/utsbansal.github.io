import React from 'react';
import { Jumbotron } from 'reactstrap';

function Header(props){
    if(props.mainPage || props.aboutPage || props.projectPage){
        return(
            <Jumbotron className="mb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-4 text-center">
                            <img src="assets/images/uts.jpeg" alt="Utkarsh Bansal" height="250" width="250" className="rounded-circle img-thumbnail"/>
                        </div>
                        <div className="col-12 col-sm-7 align-self-center text-sm-left text-center">
                            <h2>Utkarsh Bansal</h2>
                            <p>A Computer Science enthusiast who loves to travel.</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    }
    else{
        return(
            <Jumbotron>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <img src={props.destination.image1} alt={props.destination.place} className="img-fluid img-thumbnail header-image"/>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <h2>{props.destination.heading}</h2>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    }
}

export default Header;