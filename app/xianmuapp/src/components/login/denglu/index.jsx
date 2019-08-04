import React, { Component } from 'react'

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                value: '',
                isshow: false,
            },

            pwd: {
                value: '',
                isshow: false,
            },
            zu: false,
        }
    }

    onBtnInput = ({ target }) => {
        const { name, value } = target;
        this.state[name] = { ...this.state[name], value: value }
        this.setState({
            [name]: this.state[name]
        })


    }



    befor = ({ target }) => {
        const { name } = target;
        const value = this.state[name].value
        let isShow
        // 手机号验证
        if (name === 'user') {
            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(value)) {
                isShow = true
            } else {
                isShow = false;
            }
        }
        // 密码
        if (name === 'pwd') {
            if (value.length < 6) {
                isShow = true
            } else {
                isShow = false;
            }
        }
        // 存储
        this.state[name] = { ...this.state[name], isshow: isShow }
        this.setState({
            [name]: this.state[name]
        })
        let keys = []
        let kep = []
        for (var key in this.state) {
            if (typeof (this.state[key]) === 'object') {
                if (this.state[key].value.length < 6) {
                    kep = [...kep, true]

                } else {
                    kep = [...kep, false]
                }

                keys = [...keys, this.state[key].isshow]
            }
        }
        let isyan = [...keys, ...kep]
        const ss = isyan.every(item => item == false)
        this.setState({
            zu: ss
        })
    }
    zuce = () => {
        alert('登录成功')
        console.log(this.props.history.push('/home'))
    }
    render() {
        const { user, pwd, zu } = this.state
        return (
            <div className='zhuce-con'>
                <form className='form-box'>
                    <div className='form-item'>
                        <input className='inp'
                            type="text" name='user'
                            value={user.value}
                            placeholder='手机号（中国大陆'
                            onChange={this.onBtnInput}
                            onBlur={this.befor}
                        />
                        <div className='tishi'>
                            <span className={user.isshow ? 'show-span' : ''}>手机号码格式错误</span>
                        </div>
                    </div>

                    <div className='form-item'>
                        <input className='inp'
                            type="password" name='pwd'
                            value={pwd.value}
                            placeholder='设置密码（6~16位）'
                            onChange={this.onBtnInput}
                            onBlur={this.befor}
                        />
                        <div className='tishi'>
                            <span className={pwd.isshow ? 'show-span' : ''}>密码格式错误</span>
                        </div>
                    </div>
                </form>
                <div className='zuche-box'>
                    <div className={zu ? 'tijiao de tibg' : 'tijiao de'} onClick={zu ? this.zuce : ''}>

                        登录
                    </div>

                </div>
            </div>
        )
    }
}
