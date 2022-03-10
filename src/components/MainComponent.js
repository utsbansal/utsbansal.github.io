import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { travelogues } from '../shared/travelogues';
import { carouselData } from '../shared/carouselData';
import { familyData } from '../shared/familyData';
import Travel from './TravelComponent';
import Navigation from './NavbarComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Footer from './FooterComponent';
import RoleModel from './RoleModelComponent';

class Main extends Component{

    constructor(props){
        super(props);

        this.state = {
            travelogues: travelogues,
            carouselData: carouselData,
            familyData: familyData
        }
    }

    render(){

        const specificTravel = ({match}) => {
            return(
                <Travel place={this.state.travelogues.filter((travelogue) => travelogue.link === match.params.destination)[0]} />
            );
        }

        return(
            <div>
                <Navigation travelogues={this.state.travelogues}/>
                <Switch>
                    <Route path="/home" component={() => <Home carouselData={this.state.carouselData} familyData={this.state.familyData}/>}/>
                    <Route path="/about" component={About}/>
                    <Route exact path="/travelogues" component={() => <Travel travelogues={this.state.travelogues}/>}/>
                    <Route path="/travelogues/:destination" component={specificTravel}/>
                    <Route path="/rolemodels" component={() => <RoleModel familyData={this.state.familyData}/>}/>
                    <Redirect to="/home" />
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(Main);