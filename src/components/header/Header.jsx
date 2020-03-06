import React, {Component} from 'react';
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from "react-router-dom";

class Header extends Component{
    constructor(){
        super()
        this.state = {
            categories: []
        }
    }
    componentDidMount(){
        fetch(`http://eshop.test/api/category`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    categories: data
                })
            })
    }
        render(){
            const categories = this.state.categories.map(category => ( <li key={category.id} className="nav-item"><Link className="nav-link" to={`/category/${category.id}`}>{category.name}</Link></li>));
    return (
        <header>
            <Navbar className="navigation" bg="dark" expand="lg">
                <Link className="navbar-brand" to="/"><i class="fab fa-stumbleupon-circle"></i></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {categories}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="cart d-flex justify-content-end">
                <a data-toggle="modal" data-target=".bd-example-modal-lg" className="nav-link" href="#"><i className="fas fa-shopping-cart"></i><span id="cartL">{localStorage.length}</span></a>

            </div>
        </header>
    );
}
}

export default Header;

