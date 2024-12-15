import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Evaluation from './components/Evaluation';
import Methodology from './components/Methodology';
import Contacts from './components/Contacts';
import Reports from './components/Reports';
import SensorDashboard from './components/SensorDashboard';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/evaluation" component={Evaluation} />
                    <Route path="/methodology" component={Methodology} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/reports" component={Reports} />
                    <Route path="/sensor-dashboard" component={SensorDashboard} />
                </Switch>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
