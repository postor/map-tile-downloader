const Proxies = require('free-http-proxy');
const proxies = new Proxies();

module.exports = async function getProxy(forceNew = false) {
  return proxies.getProxy(forceNew)
}