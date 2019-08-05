import React, { Component } from 'react'
import Headers from './headers'

import Publish from '../publishpage'

import './home.scss'
import { Route, Switch} from 'react-router-dom'
export default class Html extends Component {
    render() {
        return (
            <div>
                <main>
                    <Switch>
                         <Route path='/home/publish' component={Publish} />
                         <Route path='/home'  component={Headers} />
                    </Switch>
                </main>
            </div>
        )
    }
}