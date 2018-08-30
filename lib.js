const Proxies = require('free-http-proxy');
const proxies = new Proxies();

async function getProxy(forceNew = false) {
  if(!proxies.current){
    await proxies.loadPage()
  }
  return await proxies.getProxy(forceNew)
}

async function downloadImageTry(proxy,url,dest){
  var cmd = getWgetCommand(dest,url,proxy)
  try{
    require('child_process').execSync(cmd)
    return true
  }catch(e){
    console.log(`command fail: ${cmd}`)
    return false
  } 
}

module.exports = async function downloadImageAsync(url,dest) {
  let proxy = await getProxy()
  while(!downloadImageTry(proxy,url,dest)){
    proxy = await getProxy(true)
  }  
}