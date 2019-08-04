import React, { Component } from 'react'
import { getLogin} from '../api/index'
import './html.scss'
import  Tankuang from  '../tankuang'
import Login from '../login'
import {Switch,Route} from 'react-router-dom'
export default class index extends Component {
    componentDidMount(){
        const fromData={
            user:'lxp123',
            password:'123456'
        }
        getLogin(fromData).then(res=>{
            console.log(res)
        })
    }
    render() {
        return (

            <div className="html-box">
                <Switch>
                    <Route path='/' exact component={Tankuang} />
                    <Route path='/login'  component={Login} />
                </Switch>

                {/* <Tankuang></Tankuang> */}
            </div>
        )
    }
}
