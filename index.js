
var mapDownloader = require('./map-tile-downloader.js');
var options = require('./config')
//execute mapDownloader
mapDownloader.run(options,function(err){
  console.log(err);
  //process.exit();
});