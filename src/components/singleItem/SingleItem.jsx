import React, {Component} from 'react';
import './singleItem.scss';
import OrderForm from '../orderForm/OrderForm'

class SingleItem extends Component{
    constructor(){
        super()
        this.state = {
            items: ""
        }
    }
    componentDidMount(){
        fetch(`http://eshop.test/api/item/${this.props.items.id}`)
            .then(response => response.json())
            .then(data =>{
                this.setState({
                    items:data
                })
            })
    }
    render(){
    const item = this.state.items;
    console.log(this.state.items)
    return (
        <div className="Single container">
            <div className="row">
                <div className="col-lg-6">
                    <img src={`http://eshop.test/storage/${item.img}`} alt=""/>
                </div>
                <div className="col-lg-6">
                    <h2>{item.title}</h2>
                        <p>{item.kategorija}</p>
                        <div className="border-top"></div>
                        <p><span className="font-weight-bold">Kaina: </span>{item.price}€</p>
                        <p><span className="font-weight-bold">Kiekis: </span>{item.count}</p>
                </div>
                <div className="col-12 border-top">
                    <h3>Aprašymas:</h3>
                    <p>{item.description}</p>
                </div>
                <div className="col-12">
                    <OrderForm item_id = {item.id}
                                quantity = {item.count}/>
                </div>
            </div>
        </div>
    );
}
}

export default SingleItem;
