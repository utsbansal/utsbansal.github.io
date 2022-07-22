import React from 'react';

const Courses = (props) => {
    const courses = props.courseData.map((course, i) => {
        return(
            <li key={i}><h5>{course}</h5></li>
        )
    })
    return(
        <div>
            <div className="row row-header">
                <div className="col-12 text-center mt-4 mb-2">
                    <h2>Courses</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ul>
                        {courses}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Courses;