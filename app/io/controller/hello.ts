/*
 * @Author: jinglin.tan
 * @Date: 2020-07-15 15:49:53
 * @LastEditors: jinglin.tan
 * @LastEditTime: 2020-07-15 15:50:43
 * @Description: test1
 */
import { Controller } from 'egg';

declare module 'egg' {
  interface CustomController {
    helloCtr: HelloController;
  }
}
export default class HelloController extends Controller {
  public async helloFn() {
    const { ctx } = this;
    const req = ctx.args[0] || {}; // 获取客户端传来的数据包
    console.log(`来自客户端的数据包：${JSON.stringify(req)}`);
    ctx.socket.emit('helloRES', { data: 'hello there!' }); // 向客户端发送数据包，客户端需要监听helloRES事件
  }
}
