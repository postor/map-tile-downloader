# map-tile-downloader

NodeJS module that downloads all the map tiles contained within a lat/lon bounding box at the specified zoom levels.  


Example usage:
```
var options = {
    url : 'http://maps.nypl.org/warper/layers/tile/909/{z}/{x}/{y}.png',
    rootDir: 'tiles',
    bbox : [40.693004,-74.030256,40.719681,-73.909063], //[south,west,north,east]
    zoom : {
        max : 18,
        min : 14
    }
};

var mapDownloader = require('./map-tile-downloader/map-tile-downloader.js');

//execute mapDownloader
mapDownloader.run(options,function(err){
  console.log(err);
  process.exit();
});
```

This module will only work with tiles in ZXY format aka "Spherical Mercator, OpenStreetMap or Google tiles"

I built this to download [NYPL MapWarper](http://maps.nypl.org/warper/) tiles for use in [urbanScratchoff](https://github.com/chriswhong/urbanscratchoff), a map toy that lets you "scratch off" a layer of historical imagery to see current imagery beneath.

Forked from [https://github.com/ianwcarlson/map-tile-downloader](https://github.com/ianwcarlson/map-tile-downloader)
