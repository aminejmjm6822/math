import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Quiz from './pages/Quiz';
import './styles/global.css';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/lessons" component={Lessons} />
                    <Route path="/quiz" component={Quiz} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;