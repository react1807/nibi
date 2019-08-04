import React, { Component } from 'react'
import './login.scss'
import {NavLink,Route,Switch} from "react-router-dom"
import Zuce from './zhuce'
import Denglu from './denglu'
export default class index extends Component {
    render() {
        console.log(this.props)
        const { match} = this.props
        return (
            <div className='login-box'>
                <div className='img-box'>
                    <img src="http://www.lofter.com/mobile/src/images/wap2/login/lofter@2x.png" alt=""/>
                </div>
                <nav className='login-nav'>
                    <NavLink to={`${match.url}/zu`}>注册</NavLink>
                    <NavLink to={`${match.url}/den`}>登录</NavLink>
                </nav>
                <main>
                    <Switch>
                        <Route path={`${match.path}/zu`} component={Zuce} />
                        <Route path={`${match.path}/den`} component={Denglu} />
                    </Switch>
                </main>
            </div>
        )
    }
}
