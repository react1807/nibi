import React, { Component } from 'react'
import { NavLink, BrowserRouter } from 'react-router-dom'
import './index.scss'

export default class HeaderLink extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <BrowserRouter>

                <header>
                    <div className='flex'>
                        <div className='header-li' onClick={this.props.hideshowClick}>喜欢的文章
                            <span>▼</span>
                        </div>
                        {
                            this.props.isShow ? <ul className='header-ul'>
                                <li>
                                    <NavLink to='shouye' activeClassName='navlinkclick'>LOFTER首页</NavLink>
                                </li>
                                <li>
                                    <NavLink to='likepage' activeClassName='navlinkclick'>喜欢的文章</NavLink>
                                </li>
                                <li>
                                    <NavLink to='find' activeClassName='navlinkclick'>发现</NavLink>
                                </li>
                                <li>
                                    <NavLink to='boke' activeClassName='navlinkclick'>关注的博客</NavLink>
                                </li>
                            </ul> : ''
                        }
                        <div className='header-li' onClick={this.props.hideshowClickAgain}>发布文字
                            <span>▼</span>
                            {
                                this.props.istwoShow ? <ul className='nav-two-ul'>
                                    <NavLink to='publishtext'>发布文字</NavLink>
                                    <NavLink to='publishphoto'>发布图片</NavLink>
                                </ul> : ''
                            }
                        </div>
                    </div>
                </header>


            </BrowserRouter>
        )
    }
}
