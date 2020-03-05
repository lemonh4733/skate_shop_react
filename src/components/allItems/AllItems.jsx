import React, {Component} from 'react';
import './allItems.scss';

class allItems extends Component{
    render() {
        const itemData = this.props.items.map(item => <div key={item.id} className="item col-xl-3 col-md-6">
            <div className="card"> 
                <div className="d-flex justify-content-center">
                    <img className="card-img-top" src={"http://eshop.test/storage/"+item.img} alt="Card image cap" />
                </div>
        <div className="card-body">
                <div className="arrow-up"></div>
        <h5 className="card-title"><a className="nav-link" href={"/item/"+item.id}>{item.title}</a></h5>
        <div className="border-top"></div>
        <p className="card-text text">{item.description}</p>
        <p><span>Kaina:</span> {item.price}€</p>
        </div>
    </div>
            </div>)
    console.log(this.props.items)
    return (
        <main>
            <div className="row">
            {itemData}
            </div>
        </main>
    )
    }
}
        export default allItems;