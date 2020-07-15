/*
 * @Author: jinglin.tan
 * @Date: 2020-07-15 15:45:17
 * @LastEditors: jinglin.tan
 * @LastEditTime: 2020-07-15 15:53:05
 * @Description: router
 */
import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, io } = app;

  router.get('/', controller.home.index);

  io.of('/').route('hello', io.controller.helloCtr.helloFn);
};
