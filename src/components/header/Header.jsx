import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss';

class Header extends Component{
        constructor(){
            super()
            this.state = {
                categories: []
            }
        }
        componentDidMount(){
            fetch("http://eshop.test/api/category")
                .then(response => response.json())
                .then(data =>{
                    this.setState({
                        categories:data
                    })
                })
        }
        render(){
        const catData = this.state.categories.map(category => <li className="nav-item" key={category.id}><a className="nav-link" href={`category/${category.id}`}>{category.name}</a></li>)
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/"><i class="fab fa-stumbleupon-circle"></i></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                            {catData}
                    </ul>
                </div>
                <div className="cart d-flex justify-content-end">
                    <a className="nav-link" href="#"><i className="fas fa-shopping-cart"></i><span className="sr-only">(current)</span></a>
                </div>
            </nav>
        </header>
    );
}
}

export default Header;
