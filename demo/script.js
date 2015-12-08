//downloads rectified aerial photos from NYPL Mapwarper

var options = {
    url : 'http://maps.nypl.org/warper/layers/tile/909/{z}/{x}/{y}.png',
    rootDir: 'tiles',
    bbox : [40.693004,-74.030256,40.719681,-73.909063],
    zoom : {
        max : 14,
        min : 14
    }
};

var mapDownloader = require('../map-tile-downloader.js');

//execute mapDownloader
mapDownloader.run(options,function(err){
  console.log(err);
  process.exit();
});