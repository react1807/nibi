import React, { Component } from 'react'
import './html.scss'
import Tankuang from '../tankuang'
import Login from '../login'
import Home from '../home/index'
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
