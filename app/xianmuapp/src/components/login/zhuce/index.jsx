import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
               value:'',
               isshow: false,
            },
            imgyan: {
                value: '',
                isshow: false,
            },
            sends: {
                value: '',
                isshow: false,
            },
            pwd: {
                value: '',
                isshow: false,
            },
            yanzheng: '',
            sendyan:'',
            zu:false,
        }
    }
    random() {
        const random = Math.floor(Math.random() * (1000 - 10000)) + 10000;
        this.setState({
            yanzheng: random
        })
    }
    onBtnInput = ({target})=>{
        const { name, value } = target;
        this.state[name] = { ...this.state[name], value: value}
        this.setState({
            [name]: this.state[name]
        })


    }

    gaiYan=()=>{
        this.random()
    }

    befor=({target})=>{
        const {name} = target;
        const value=this.state[name].value
        let isShow
        // 手机号验证
        if (name === 'user'){
            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(value)) {
                isShow = true
            } else {
                isShow = false;
            }
        }
        // 图片验证码
        if (name==='imgyan'){
            if (value !== String(this.state.yanzheng || value.length) ) {
                isShow = true
            } else {
                isShow = false;
            }
        }
        // 手机验证码
        if (name ==='sends'){
            if (value !== String(this.state.sendyan)) {
                isShow = true
            } else {
                isShow = false;
            }
        }
        if (name === 'pwd') {
            if (value.length<6) {
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
                if (this.state[key].value.length < 4) {
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

    btnSend=()=>{
        const sendyan = Math.floor(Math.random() * (1000 - 10000)) + 10000;
        console.log(sendyan)
        this.setState({
            sendyan: sendyan
        })
    }
    yanbtn=()=>{
        if (this.state.sends.value.length < 4 &&this.state.sends.value === this.state.sendyan){
            this.state.sends = { ...this.state.sends, isshow:true }
            this.setState({
                sends: this.state.sends
            })
        }
    }
    zuce=()=>{
       alert('注册成功')
        this.props.history.push('/login/den')
    }

    componentDidMount() {
        this.random()
    }


    render() {
        const { user, imgyan, sends, pwd, yanzheng, zu } = this.state
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
                            <span className={user.isshow?'show-span':''}>手机号码格式错误</span>
                        </div>
                    </div>
                    <div className='form-item flex'>
                        <input className='inp tu-yan'
                            type="text" name='imgyan'
                            value={imgyan.value}
                            placeholder='图片验证码'
                            onChange={this.onBtnInput}
                            onBlur={this.befor}
                        />
                        <div className='yan-box'>
                            <span className='span'>
                                {yanzheng}
                            </span>
                            <span className='span-huan' onClick={this.gaiYan} >换一张</span>
                        </div>
                        <div className='tishi'>
                            <span className={imgyan.isshow ? 'show-span' : ''}>图片验证码错误</span>
                        </div>
                    </div>
                    <div className='form-item'>
                        <input className='inp'
                            name='sends'
                            value={sends.value}
                            type="text"
                            placeholder='验证码'
                            onChange={this.onBtnInput}
                            onBlur={this.befor}
                        />
                        <div className='tishi'>
                            <span className='span-yan' onClick={this.btnSend} >发送验证码</span>
                            <span className={sends.isshow ? 'show-span' : ''}>证码错误</span>
                        </div>
                    </div>
                    <div className='form-item'>
                        <input className='inp'
                            type='password' name='pwd'
                            value={pwd.value}
                            placeholder='设置密码（6~16位'
                            onChange={this.onBtnInput}
                            onBlur={this.befor}
                            onClick={this.yanbtn}
                        />
                        <div className='tishi'>
                            <span className={pwd.isshow ? 'show-span' : ''}>密码格式错误</span>
                        </div>
                    </div>
                </form>
                <div className='zuche-box'>
                    <div className={zu ? 'tijiao tibg' : 'tijiao'} onClick={zu?this.zuce:''} >

                        注册
                    </div>

                </div>
            </div>
        )
    }
}
