# map-tile-downloader

NodeJS module that downloads all the map tiles contained within a lat/lon bounding box at the specified zoom levels.  
地图瓦片贴图下载器

## 特性 | features

- 自动切换代理 | auto change proxy
- 自动跳过已下载 | auto skip downloaded


## 使用方法 | usage

修改`config.js`来适应你的使用场景 | modify `config.js` to suit your use case

```
module.exports = {
  //url : 'http://t{s}.tianditu.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}', //天地图
  //subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],//天地图
  url: 'https://mt{s}.google.com/vt/lyrs=s&?x={x}&y={y}&z={z}', //google
  subdomains: ['0', '1', '2', '3'], //google
  rootDir: 'tiles',
  extension: '.png',
  //bbox = left,bottom,right,top 左下右上
  //bbox = min Longitude , min Latitude , max Longitude , max Latitude 
  bbox: [-180, -85.0511287798, 180, 85.0511287798], // whole map 默认bbox为整个地图
  zoom: {
    max: 5,
    min: 1,
  },
};
```

运行`node index.js`启动下载进程 | run `node index.js` to download tiles

```
node index.js
```

如果因网络错误部分图片缺失，只需重新运行`node index.js`即可 | if you got error and fail to download some tile, just run `node index.js` agian


