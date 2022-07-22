import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import Header from './HeaderComponent';
import Courses from './CourseComponent';
// import Projects from './ProjectComponent';

function Home(props){

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === props.carouselData.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? props.carouselData.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    var carouselItem = props.carouselData.map(item => {
        return(
            <CarouselItem className="carousel-section" onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.id}>
                <img src={item.image} alt={item.author} className="w-100 img-fluid"/>
                <div className="carousel-caption">
                    <div className="card card-body bg-dark">
                        <blockquote className="blockquote mb-0">
                            <p className="mb-0">{item.caption}</p>
                            <footer className="blockquote-footer">{item.author}</footer>
                        </blockquote>
                    </div>
                </div>
            </CarouselItem>
        );
    });
    return(
        <div>
            <Header mainPage={true}/>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 text-center mt-4">
                        <h2>My Life Principles</h2>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                            <CarouselIndicators items={props.carouselData} activeIndex={activeIndex} onClickHandler={goToIndex} />
                            {carouselItem}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                        </Carousel>
                    </div>
                </div>
                <Courses courseData={props.courseData}/>
                {/* <Projects projectData={props.projectData}/> */}
                
                
            </div>
        </div>
    );
}

export default Home;