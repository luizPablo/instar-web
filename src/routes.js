import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import ReactLoading from 'react-loading'
import { auth } from './services/auth'
import { colors } from './styles/global/colors';

import AuthScreen from './screens/authentication'
import HomeScreen from './screens/home';
import ProjectScreen from './screens/project';
import ProfileScreen from './screens/profile';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [checked, setChecked] = useState(false)
    
    useEffect(() => {
        let mounted = true
        auth.verifyAuth().then(() => {
            if(mounted){
                setChecked(true)
            }
        })
        
        return () => {
            mounted = false
        }
    }, [checked])
    

    return (
        <Route
            {...rest}
            render={props => {
                if (!checked) {
                    return (
                        <ReactLoading type={'spin'} color={colors.green03} height={'30px'} width={'30px'} />
                    )
                } else if (auth.isAuthenticated) {
                    return (
                        <Component {...props} />
                    )
                } else {
                    return (
                        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                    )
                }
            }}
        />
    )
}

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={AuthScreen} />
            <PrivateRoute exact path='/home' component={HomeScreen}/>
            <PrivateRoute exact path='/project' component={ProjectScreen}/>
            <PrivateRoute exact path='/profile' component={ProfileScreen}/>
        </Switch>
    </BrowserRouter>
)

export default Routes