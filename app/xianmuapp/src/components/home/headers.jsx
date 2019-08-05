import React, { Component } from 'react'
import Header from './header'
import Images from './img'
import Linke from '../likepages'
import './home.scss'
import { Route, Switch, Redirect } from 'react-router-dom'
export default class Html extends Component {
    render() {
        return (
            <div>
                <div className=''>
                    <Header></Header>
                </div>
                <main style={{ background: '#31373B' }}>
                    <Switch>
                        <Route path='/home/lofter' component={() => <Images></Images>} />
                        <Route path='/home/liked' component={() => <Linke></Linke>} />
                        <Redirect to='/home/lofter' />
                    </Switch>
                </main>
            </div>
        )
    }
}