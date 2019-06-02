import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Layout from '@/components/layout/index';
import NotFound from '@/components/error/notFound';
import NotPermission from '@/components/error/notPermission';

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/app/index" push />} />
                    <Route path="/app" component={Layout} />
                    <Route exact path="/401" component={NotPermission} />
                    <Route path="/404" component={NotFound} />
                    {/* <Route path="/login" component={Login} /> */}
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default AppRouter;
