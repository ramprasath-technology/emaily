import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';


const Landing = () => { return <div> Landing </div>}
const Survey = () => { return <div> Survey </div>}

const App = () => {
    return(
        <div>   
            <BrowserRouter>          
                <div>
                    <Header />
                    <Route path="/" component={Landing} />
                    <Route exact path="/surveys" component={Survey} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;