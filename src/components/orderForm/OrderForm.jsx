import React, {Component} from 'react';
import './orderForm.scss';

class OrderForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: "",
            address: "",
            quantity: "",
            status: "Naujas",
            item_id: this.props.item_id,
        }
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePhone = this.handleChangePhone.bind(this)
        this.handleChangeAddress = this.handleChangeAddress.bind(this)
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChangeName(event) {
        this.setState({name: event.target.value});
    }
    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }
    handleChangePhone(event) {
        this.setState({phone: event.target.value});
    }
    handleChangeAddress(event) {
        this.setState({address: event.target.value});
    }
    handleChangeQuantity(event) {
        this.setState({quantity: event.target.value});
    }
    handleSubmit(event) {
        if(this.state.quantity > this.props.quantity) {
            document.querySelector('.error').innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">Tiek šios prekės sandėlyje nėra!</div>"
        }
        if(document.querySelector('.name').value != "" &&
            document.querySelector('.email').value != "" &&
            document.querySelector('.phone').value != "" &&
            document.querySelector('.address').value != "" &&
            document.querySelector('.kiekis').value != "" &&
            this.state.quantity <= this.props.quantity ){
                document.querySelector('.form').innerHTML = "<div class=\"alert alert-success\" role=\"alert\">Užsakymas vykdomas!</div>"
                fetch('http://eshop.test/api/order', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: this.state.name,
                        email: this.state.email,
                        phone: this.state.phone,
                        address: this.state.address,
                        quantity: this.state.quantity,
                        status: this.state.status,
                        item_id: this.props.item_id,
                    })
                    })
        }
        else {
            document.querySelector('.error').innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">Privaloma užpildyti visus laukelius!</div>"
        }
        console.log(this.props.quantity)
        
        event.preventDefault();
        
        }
    render (){
        if(this.props.quantity > 0) {
                return (
            <div className="form border-top">
                <div className="error"></div>
                <h4>Užsakymas:</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label><span className="font-weight-bold">Užsakovas</span><br/>(Vardas Pavardė/Įmonės pavadinimas)</label>
                            <input value={this.state.name} onChange={this.handleChangeName} className="form-control name" type="text"/>
                        <label className="font-weight-bold">El.Paštas</label>
                            <input value={this.state.email} onChange={this.handleChangeEmail} className="form-control email" type="text"/>
                        <label className="font-weight-bold">Tel.Nr</label>
                            <input value={this.state.phone} onChange={this.handleChangePhone} className="form-control phone" type="number"/>
                        <label><span className="font-weight-bold">Adresas</span><br/>(Miestas, Gatvė)</label>
                            <input value={this.state.address} onChange={this.handleChangeAddress} className="form-control address" type="text"/>
                        <label className="font-weight-bold">Kiekis</label>
                            <input value={this.state.quantity} onChange={this.handleChangeQuantity} className="form-control kiekis" type="number"/>
                            <br/>
                        <input className="btn btn-primary" type="submit" value="Užsakyti"/>
                    </div>
                </form>
            </div>
            );
        }
        else {
            return (
            <p className="border-top">Šiuo metu prekės sandėlyje nėra</p>
            )
        }
    
}
}

export default OrderForm;
