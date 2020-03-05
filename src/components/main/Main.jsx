import React, {Component} from 'react';
import './main.scss';
import AllItems from '../allItems/AllItems';
import SingleItem from '../singleItem/SingleItem';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from "react-router-dom";
import Category from '../category/Category';

class Main extends Component{
    constructor(){
        super()
        this.state = {
            items: []
        }
    }
    componentDidMount(){
        fetch(`http://eshop.test/api/item`)
            .then(response => response.json())
            .then(data =>{
                this.setState({
                    items:data
                })
            })
    }
    render(){
        console.log(this.state.items)
        const itemRoute = this.state.items.map(item => <Route key={item.id} path={`/item/${item.id}`} exact ><SingleItem items = {item}/></Route>)
        const categoryRoute = this.state.items.map(item => <Route path={`/category/${item.cat_id}`} exact ><Category items = {item}/></Route>)
    return (
        <main className="main">
            <Router>
                <Route path="/" exact>
                    <h1>Geriausios sporto prekės</h1>
                        <AllItems items={this.state.items}/>
                </Route>
                {itemRoute}
                {categoryRoute}
                
            </Router>
          
        </main>
    );
}
}

export default Main;
