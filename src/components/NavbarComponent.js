import React, { Component } from 'react';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem, Dropdown, DropdownToggle, DropdownMenu, Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import Pdf from '../shared/Resume.pdf'
import MyForm from './FormComponent';

class Navigation extends Component{

    constructor(props){
        super(props);

        this.state={
            isNavOpen: false,
            isDropdownOpen: false,
            isModalOpen: false,
            form: null
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleDropdownClick = this.handleDropdownClick.bind(this);
        this.handleNavclick = this.handleNavclick.bind(this);
        this.toggleModal = this.toggleModal.bind(this);


    }


    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleDropdown(){
        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleDropdownClick(){
        this.toggleDropdown();
        if(this.state.isNavOpen){
            this.toggleNav();
        }
    }

    handleNavclick(){
        if(this.state.isNavOpen){
            this.toggleNav();
        }
    }
        

    render(){
        const allPlaces = this.props.travelogues.map((travelogue) => {
            return(
                <NavLink onClick={this.handleDropdownClick} className="dropdown-item" key={travelogue.id} to={"/travelogues/"+travelogue.link}>
                    {travelogue.place}
                </NavLink>
            );
        });
        return(
            <>
            <Navbar dark expand="md" className="fixed-top">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav}/>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem onClick={this.handleNavclick}>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem onClick={this.handleNavclick}>
                                <NavLink className="nav-link" to="/about">
                                    <span className="fa fa-info fa-lg"></span> About
                                </NavLink>
                            </NavItem>
                            <NavItem onClick={this.handleNavclick}>
                                <NavLink className="nav-link" to="/projects">
                                    <span className="fa fa-wrench fa-lg"></span> Projects
                                </NavLink>
                            </NavItem>
                            <Dropdown nav isOpen={this.state.isDropdownOpen} toggle={this.toggleDropdown}>
                                <DropdownToggle nav caret><span className="fa fa-suitcase fa-lg"></span> Travelogues</DropdownToggle>
                                <DropdownMenu>
                                    <Link onClick={this.handleDropdownClick} className="dropdown-item" to="/travelogues">Home</Link>
                                    {allPlaces}
                                </DropdownMenu>
                            </Dropdown>
                            <NavItem>
                                <a className="nav-link" href={Pdf} target="_blank" rel="noopener noreferrer"><span className="fa fa-file fa-lg"></span> Resume</a>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}>
                                    <span className="fa fa-comments-o fa-lg"></span> Contact Me!
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    Contact Me!
                </ModalHeader>
                <ModalBody>
                    <MyForm/>
                </ModalBody>
            </Modal>
            </>
        );
    }
}

export default Navigation;