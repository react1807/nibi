import React, { Component } from 'react'
import { NavLink, BrowserRouter } from 'react-router-dom'
import './index.scss'

export default class HeaderLink extends Component {
    constructor(props) {
        super(props)
        this.state={}
    }
    render() {
        return (
            <BrowserRouter>

                <header>
                    <div className='flex'>
                        <div className='header-li' onClick={this.props.hideshowClick}>喜欢的文章
                            <span>▼</span>
                            {
                                this.props.isShow ? <ul className='header-ul'>
                                    <li>
                                        <NavLink to='/home' activeClassName='navlinkclick'>LOFTER首页</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/home/liked' activeClassName='navlinkclick'>喜欢的文章</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='find' activeClassName='navlinkclick'>发现</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='boke' activeClassName='navlinkclick'>关注的博客</NavLink>
                                    </li>
                                </ul> : ''
                            }
                        </div>


                        <div className='header-li' onClick={this.props.hideshowClickAgain}>发布文字
                            <span>▼</span>
                            {
                                this.props.istwoShow ? <ul className='nav-two-ul'>
                                    <li>
                                        <NavLink to='publishtext'>发布文字</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='publishphoto'>发布图片</NavLink>

                                    </li>
                                </ul> : ''
                            }
                        </div>
                    </div>
                </header>


            </BrowserRouter>
        )
    }
}
