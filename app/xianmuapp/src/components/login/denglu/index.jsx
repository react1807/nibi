import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div>
                <form className='form-box'>
                    <div className='form-item'>
                        <input className='inp' type="text" placeholder='手机号（中国大陆）' />

                        <div className='tishi'>
                            <span >手机号码格式错误</span>
                        </div>
                    </div>
                    <div className='form-item'>
                        <input className='inp' type="text" placeholder='密码（6~16位）' />
                        <div className='tishi'>
                            <span>手机号码格式错误</span>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}
