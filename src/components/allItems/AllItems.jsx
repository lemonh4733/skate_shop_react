import React, {Component, ReactDOM} from 'react';
import './allItems.scss';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from "react-router-dom";

class allItems extends Component{
    cart(id, item, price, descr) {
        localStorage.setItem(`cart-${id}`, `${item} ${price} ${descr}`);

    }

    render() {
        var key = "";
        var i = 0;
        let list = ""
        //For a more advanced feature, you can set a cap on max items in the cart.
        for (i = 0; i <= localStorage.length-1; i++) {
            key = localStorage.key(i);
            list += "<li>"+localStorage.getItem(key)+"</li>";
        }
        console.log(list)
        window.onload = function listas() {
            document.querySelector('.list').innerHTML = list
        }
        const itemData = this.props.items.map(item =>
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
                    <div className="row">
                        <div className="col-6">
                            <p><span>Kaina:</span> {item.price}€</p>
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            <button className="btn btn-primary m-2" onClick={() => this.cart(item.id, item.title, item.price, item.description)}><i className="fas fa-shopping-cart"></i></button>
                        </div>

                    </div>

                    </div>
                </div>
            </div>
            /*-----*/
        )
    return (
        <main>
            <div className="row">
            {itemData}

            <ul className="list">

            </ul>
            </div>
        </main>
    )
    }
}
        export default allItems;