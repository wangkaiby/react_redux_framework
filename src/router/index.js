import {  Route, Redirect, Switch } from 'react-router-dom'
import React from 'react'
import  TodoApp from '../containers/Home'
import  Login from '../containers/Login'
import  Koa from '../containers/Koa'


export default () => {
    return (
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/todos" component={TodoApp}/>
            <Route path="/login" component={Login}/>
            <Route path="/koa" component={Koa}/>
            <Redirect to="/"/>
        </Switch>   
    )
}