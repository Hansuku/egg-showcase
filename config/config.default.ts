/*
 * @Author: jinglin.tan
 * @Date: 2020-07-15 15:45:17
 * @LastEditors: jinglin.tan
 * @LastEditTime: 2020-07-15 15:48:26
 * @Description: 配置文件
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1594799114952_4324';

  // add your egg config in here
  config.middleware = [];
  // 配置socket
  config.io = {
    init: {}, // passed to engine.io
    namespace: {
      // 命名空间
      '/': {
        connectionMiddleware: [
          'auth', // 这个是连接中间件， 只在connection的时候触发
        ],
        packetMiddleware: [], // 这个会在每次消息的时候触发
      },
    },
  };
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
