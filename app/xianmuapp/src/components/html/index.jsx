import React, { Component } from 'react'
import './html.scss'
import Tankuang from '../tankuang'
import Login from '../login'
import Home from '../home/index'
<<<<<<< HEAD
=======

>>>>>>> b82a14b669bdba68dc359c537860264a5b50d8e8
import { Switch, Route } from 'react-router-dom'

export default class index extends Component {
    componentDidMount() {
        const fromData = {
            user: 'lxp123',
            password: '123456'
        }
    }
    render() {
        return (
            <div className="html-box">
                <Switch>
                    <Route path='/' exact component={Tankuang} />
                    <Route path='/login' component={Login} />
                    <Route path='/home' component={Home} />
                </Switch>
            </div>
        )
    }
}
