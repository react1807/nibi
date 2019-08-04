import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Publish from '../publishpage'
import Linke from '../likepages'
export default class index extends Component {
    render() {
        return (
            <BrowserRouter>
                <main>
                    <Switch>
                        <Route path='/' exact component={Publish} />
                        <Route path='/likepage' component={Linke} />
                    </Switch>
                </main>
            </BrowserRouter>
        )
    }
}
