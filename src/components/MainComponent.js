import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { travelogues } from '../shared/travelogues';
import { carouselData } from '../shared/carouselData';
import { courseData } from '../shared/courseData';
import { projectData } from '../shared/projects';
import Travel from './TravelComponent';
import Navigation from './NavbarComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Footer from './FooterComponent';
import Projects from './ProjectComponent';

class Main extends Component{

    constructor(props){
        super(props);

        this.state = {
            travelogues: travelogues,
            carouselData: carouselData,
            courseData: courseData,
            projectData: projectData
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
                    <Route path="/home" component={() => <Home carouselData={this.state.carouselData} courseData={this.state.courseData} projectData={this.state.projectData}/>}/>
                    <Route path="/about" component={About}/>
                    <Route path="/projects" component={() => <Projects projectData={this.state.projectData}/>}/>
                    <Route exact path="/travelogues" component={() => <Travel travelogues={this.state.travelogues}/>}/>
                    <Route path="/travelogues/:destination" component={specificTravel}/>
                    <Redirect to="/home" />
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(Main);