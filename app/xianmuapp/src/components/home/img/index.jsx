import React, { Component } from 'react'

export default class Images extends Component {
    render() {
        return (
            <div className='header-imgBox'>
                <img src={process.env.PUBLIC_URL + '/img1/1.png'} alt="" />
                <img src={process.env.PUBLIC_URL + '/img1/2.png'} alt="" />
                <img src={process.env.PUBLIC_URL + '/img1/3.png'} alt="" />
                <img src={process.env.PUBLIC_URL + '/img1/4.png'} alt="" />
                <img src={process.env.PUBLIC_URL + '/img1/5.png'} alt="" />
            </div>
        )
    }
}
