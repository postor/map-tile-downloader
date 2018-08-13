const Proxies = require('free-http-proxy');
const proxies = new Proxies();

module.exports = async function getProxy(forceNew = false) {
  if(!proxies.current){
    await proxies.loadPage()
  }
  return await proxies.getProxy(forceNew)
}