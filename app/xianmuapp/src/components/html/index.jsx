import React, { Component } from 'react'
import './html.scss'
import Tankuang from '../tankuang'
import Login from '../login'
import Home from '../home/index'
import { Switch, Route } from 'react-router-dom'

export default class index extends Component {
    componentDidMount() {
<<<<<<< HEAD
        const fromData = {
            user: 'lxp123',
            password: '123456'
        }
=======
        // const fromData = {
        //     user: 'lxp123',
        //     password: '123456'
        // }
>>>>>>> 6e681f92f73de794851c671f614e6bb39efa098f
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
