import React, { Component } from 'react'
import Header from './header'
import Images from './img'
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
                        <Route path='/home/publish' component={() => <div>艰苦奋斗积分</div>} />
                        <Route path='/home/liked' component={() => <div>没得空房间贷款</div>} />
                        <Redirect to='/home/lofter' />
                    </Switch>

                </main>
            </div>
        )
    }
}
