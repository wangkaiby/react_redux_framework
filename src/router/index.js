import {  Route, Redirect, Switch } from 'react-router-dom'
import React from 'react'
import TodoApp from '../containers/Home'
import Login from '../containers/Login'
import Koa from '../containers/Koa'
// import Hoc from '../containers/Hoc'
import {RefsH1} from '../containers/Hoc'
import Parent from '../containers/extend'






export default () => {
    return (
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/todos" component={TodoApp}/>
            <Route path="/login" component={Login}/>
            <Route path="/koa" component={Koa}/>
            <Route path="/hoc" component={RefsH1}/>
            <Route path="/extends" component={Parent}/>

            <Redirect to="/"/>
        </Switch>   
    )
}