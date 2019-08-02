import React, { Component } from 'react'
import { getName} from '../api/index'
import './html.scss'
export default class index extends Component {
    componentDidMount(){
        getName().then(res=>{
            console.log(res)
        })
    }
    render() {
        return (
            <div className="html-box">
                我是首页
                <button>sdksd</button>
            </div>
        )
    }
}
