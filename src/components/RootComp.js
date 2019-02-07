import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import History from './history';
import Content from './content';
import HomeComp from './HomeComp';
import '../styles/App.scss';
import '../styles/home.scss';

class RootComp extends React.Component {
    render() {
        return (
            <div>
            <div>
                <Router>
                    <div>
                        <ul>
                            <li> <Link className="textColor"  to="/history">History </Link></li>
                            <li> <Link className="textColor" to="/content"> Content </Link></li>
                        </ul>
                        <Route path="/" strict exact component={HomeComp} />
                        <Route path="/history" strict exact component={History} />
                        <Route path="/content" strict exact component={Content} />
                    </div>
                </Router>
            </div>
            </div>
        )
    }
}

export default RootComp;
