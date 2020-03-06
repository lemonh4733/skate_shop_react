import React, {Component} from 'react';
import './category.scss';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from "react-router-dom";

class Category extends Component{
    constructor(){
        super()
        this.state = {
            items: [],
            loading: true
        }
    }
    componentDidMount(){
        fetch(`http://eshop.test/api/category/${this.props.items}`)
            .then(response => response.json())
            .then(data =>{
                this.setState({
                    items:data,
                    loading: false
                })
            })
    }
    render(){
        if(this.state.loading) {
            return(
            <p>Loading</p>
            )
        }
        const itemData = this.state.items.map(item =>
            /*CARD*/
            <div key={item.id} className="item col-xl-3 col-md-6">
                <div className="card">
                    <div className="d-flex justify-content-center">
                        <img className="card-img-top" src={"http://eshop.test/storage/"+item.img} alt="Card image cap" />
                    </div>
                    <div className="card-body">
                            <div className="arrow-up"></div>
                        <h5 className="card-title"><Link className="nav-link" to={"/item/"+item.id}>{item.title}</Link></h5>
                        <div className="border-top"></div>
                        <p className="card-text text">{item.description}</p>
                        <p><span>Kaina:</span> {item.price}€</p>
                    </div>
                </div>
            </div>
            /*-------*/
        )
    return (
        <main className="cat">
            <div className="row">
            {itemData}
            </div>
        </main>
    )
    }
}
        export default Category;