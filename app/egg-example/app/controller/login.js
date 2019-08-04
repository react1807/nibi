'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // 接收get 参数使用
    // let query = this.ctx.query;
    // 接受传回来的post 参数
    const { user, password } = ctx.query;

    const data = [
      {
        id: 1,
        user: 'lxp123',
        password: '123456',
      },
      {
        id: 2,
        user: 'abcd123',
        password: '123456',
      },
    ];
    // console.log(user, password);
    const users = data.find(item => item.user === user);
    // console.log(users);
    let code;
    if (users) {
      if (users.password === password) {
        code = 1;
      } else {
        code = 0;
      }
    } else {
      code = 0;
    }
    console.log(code);
    ctx.body = code;
  }
}

module.exports = HomeController;
