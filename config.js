
module.exports = {
  //url : 'http://t{s}.tianditu.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}', //天地图
  //subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],//天地图
  url : 'https://mt{s}.google.com/vt/lyrs=s&?x={x}&y={y}&z={z}', //google
  subdomains: ['0', '1', '2', '3'], //google
  rootDir: 'tiles',
  extension: '.png',
  //bbox = left,bottom,right,top
  //bbox = min Longitude , min Latitude , max Longitude , max Latitude 
  bbox : [-85.0511287798,-180,85.0511287798,180], 
  zoom : {
      max : 5,
      min : 1,
  },
};