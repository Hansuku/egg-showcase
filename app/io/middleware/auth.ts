/*
 * @Author: jinglin.tan
 * @Date: 2020-07-15 15:50:59
 * @LastEditors: jinglin.tan
 * @LastEditTime: 2020-07-15 15:51:23
 * @Description: auth
 */
import { Context } from 'egg';

export default function() {
  return async (ctx: Context, next: any) => {
    const { socket } = ctx;
    socket.emit('res', 'connected'); // 连接成功后向客户端发送数据包，客户端需要监听res事件
    await next();
  };
}