import React from 'react';

function Footer(props){
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h5>My Address</h5>
                        <address>
                            179B, Old Lyme Dr, Apt#8<br/>
                            Williamsville-14221<br/>
                            New York<br/>
                            Email: <a href="mailto:utkarshbansal210@gmail.com">utkarshbansal210@gmail.com</a><br/>
                        </address>
                    </div>
                    <div className="col-6">
                        <h5>Find me at</h5>
                        <div>
                            <a rel="noopener noreferrer" className="btn btn-social-icon btn-linkedin social-icon" href="https://www.linkedin.com/in/utkarsh-bansal-5a406815a/" target="_blank"><i className="fa fa-linkedin fa-lg"></i></a>
                            <a rel="noopener noreferrer" className="btn btn-social-icon btn-twitter social-icon" href="https://twitter.com/utsbansal" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                            <a rel="noopener noreferrer" className="btn btn-social-icon btn-github social-icon" href="https://github.com/utsbansal" target="_blank"><i className="fa fa-github fa-lg"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <p>Designed & Developed by Utkarsh Bansal</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;