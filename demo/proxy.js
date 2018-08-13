const Proxies = require('free-proxies').default;
const proxies = new Proxies();
let currentProxy, currentProxyList, currentIndex = 0;

module.exports = async function getProxy(forceNew = false) {
  if (forceNew || !currentProxy) {
    if (!currentProxyList || currentIndex == currentProxyList.length - 1) {
      currentProxyList = await proxies.getUSProxie()
      currentIndex = 0
      currentProxy = currentProxyList[currentIndex]
      return currentProxy
    }

    currentIndex += 1
    currentProxy = currentProxyList[currentIndex]
    return currentProxy
  }
  return currentProxy

}