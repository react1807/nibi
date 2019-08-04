import React, { Component } from 'react'
import Header from './header'
import Images from './img'
import Publish from '../publishpage'
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
                <main>
                    <Switch>
                        <Route path='/home/lofter' component={() => <Images></Images>} />
                        <Route path='/home/publish' component={() => <Publish></Publish>} />
                        <Route path='/home/liked' component={() => <Linke></Linke>} />
                        <Redirect to='/home/lofter' />
                    </Switch>

                </main>
            </div>
        )
    }
}
