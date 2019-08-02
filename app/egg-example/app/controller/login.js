'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const data = [
      {
        id: 1,
        name: '健康的减肥',
        title: 'sdksld',
      },
    ];
    ctx.body = data;
  }
}

module.exports = HomeController;
