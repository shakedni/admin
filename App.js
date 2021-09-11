import React, { Component } from 'react'
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux"


export class App extends Component {
    render() {
        const{uid}= this.props
        return (
            <div>
                <BrowserRouter>
                    {uid ? <Switch>
                        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
                        <Redirect from="/" to="/admin" />
                    </Switch> : <Switch>
                        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
                        <Redirect from="/" to="/auth/login" />
                    </Switch>}

                </BrowserRouter>
            </div>
        )
    }
}

export function mapStateToProps(state) {
    return {
        uid: state.login.uid
    };
}

export function mapDispatchToProps(dispatch) {
    return {
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
