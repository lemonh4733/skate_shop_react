import React from 'react';
import './app.scss';
import Header from '../header/Header.jsx';
import Main from '../main/Main.jsx';
import Footer from '../footer/Footer.jsx';

function App() {
    return (
        <div className="App">
                <Header/>
                <Main/>
                <Footer/>
        </div>
    );
}

export default App;
