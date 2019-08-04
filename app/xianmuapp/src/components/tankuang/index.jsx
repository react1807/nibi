import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './tankuang.scss'
export default class index extends Component {
    render() {
        return (
            <div className='tan-box'>
                <div className="tan-imgbox">
                    <img src="http://www.lofter.com/mobile/src/images/newlogo.png?005" alt="" />

                </div>
                <div className='tan-btn'>
                    <div className='divbtn'>
                        <img src="http://www.lofter.com//mobile/src/images/appdown/applebtn.png" alt=""/>
                    </div>
                    <NavLink to='/login' className='divbtn w-bbtn5'>登录/注册</NavLink>
                    <div className='divbtn'>
                        Wallpaper from SONGTSE
                    </div>
                </div>
            </div>
        )
    }
}
