import React, {Component} from 'react';
import './app.scss';
import Header from '../header/Header.jsx';
import AllItems from '../allItems/AllItems';
import SingleItem from '../singleItem/SingleItem';
import Category from '../category/Category';
import Footer from '../footer/Footer.jsx';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from "react-router-dom";

class App extends Component {
    constructor() {
        super()
        this.state = {
            items: [],
            categories: [],
            loading: true
        }
    }
    componentDidMount() {
        fetch(`http://eshop.test/api/item`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    items: data,
                    loading: false
                })
            })
        fetch(`http://eshop.test/api/category`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    categories: data,
                    loading: false
                })
            })
    }
    render() {
        const itemRoute = this.state.items.map(item => <Route key={item.id} path={`/item/${item.id}`} exact ><SingleItem items = {item}/></Route>)
        const catRoute = this.state.categories.map(cat => <Route key={cat.id} path={`/category/${cat.id}`} exact ><Category items = {cat.id}/></Route>)
        if(this.props.loading) {
            return(
                <p>Loading</p>
            )
        }
        return (
            <div className="App">
                    <Router>
                        <Header categories={this.state.categories}/>
                        <div className="main">
                        <Switch>
                            {itemRoute}
                            {catRoute}
                            <Route path="/" exact>
                                <h1>Geriausios sporto prekės</h1>
                                <AllItems items={this.state.items}/>
                            </Route>
                        </Switch>
                        </div>
                    </Router>
                <Footer/>
            </div>
        );
    }
}

export default App;
