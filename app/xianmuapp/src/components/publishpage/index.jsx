import React, { Component } from 'react'
import { NavLink, BrowserRouter } from 'react-router-dom'
import HeaderLink from './headerlink'
import './index.scss'
import One from './1.png'
export default class Html extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
            istwoShow: false
        }
    }
    hideshowClick = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    hideshowClickAgain = () => {
        this.setState({
            istwoShow: !this.state.istwoShow
        })
    }
    handleClick = () => {
        alert('发布成功')
    }
    render() {
        return (
            <BrowserRouter>
                <div className='bgbox'>
                    <HeaderLink hideshowClick={this.hideshowClick}
                        hideshowClickAgain={this.hideshowClickAgain}
                        isShow={this.state.isShow}
                        istwoShow={this.state.istwoShow}
                    />
                    <main className='mains'>
                        <div className='inputbox'>
                            <input type="text" placeholder='文章标题' />
                        </div>
                        <div className='tetxarea-box'>
                            <textarea name="" id="" cols="20" rows="10">正文</textarea>
                        </div>
                        <div className='imgbox'>
                            <img src={One} alt="" />
                        </div>
                        <div>
                            <button className='btn' onClick={this.handleClick}>发布</button>
                        </div>
                    </main>
                </div>
            </BrowserRouter>
        )
    }
}
