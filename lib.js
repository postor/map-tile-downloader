const Proxies = require('free-http-proxy');
const proxies = new Proxies();

async function getProxy(forceNew = false) {
  if(!proxies.current){
    await proxies.loadPage()
  }
  return await proxies.getProxy(forceNew)
}

async function downloadImageTry(proxy,url,dest){
  try{
    require('child_process').execSync(getWgetCommand(dest,url,proxy))
    return true
  }catch(e){
    return false
  } 
}

module.exports = async function downloadImageAsync(url,dest) {
  let proxy = await getProxy()
  while(!downloadImageTry(proxy,url,dest)){
    proxy = await getProxy(true)
  }  
}