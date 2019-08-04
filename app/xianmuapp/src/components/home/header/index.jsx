import React, { Component } from 'react'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import './header.scss'
export default class Public extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
            text: 'LOFTER首页'
        }
    }
    onHandleChange = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    btn = (item) => {
        this.setState({
            text: item
        })

    }
    render() {
        const arr = [{ text: 'LOFTER首页', path: '/home/lofter' },
            { text: '发布的文章', path: '/home/publish' }, { text: '喜欢的文章', path: '/home/liked' }]
        return (

            <div className='header-box flex '>
                <div className='header-imgbox1'>
                    <img src="http://www.lofter.com/mobile/src/images/wap2/login/lofter@2x.png" alt="" />
                </div>
                <div className='header-form' onClick={this.onHandleChange}>
                    <div className='header-hed'>
                        <div className='flex'>
                            <div className='header-input'>{this.state.text}</div>
                            <div className='sanjiao' >▼</div>
                        </div>

                        {
                            this.state.isShow ? <div className='header-text' >
                                {
                                    arr.map((item, index) => {
                                        return <p key={index}><NavLink to={item.path} onClick={() => { this.btn(item.text) }}>{item.text}</NavLink></p>
                                    })
                                }
                            </div> : ''
                        }
                    </div>


                </div>
            </div>

        )
    }
}
