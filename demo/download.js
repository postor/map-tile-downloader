var fs = require('fs')
  , es = require('event-stream'),
  download = require('image-downloader');

var lineNr = 0, listFile = 'to-download.csv', lineFile = 'current-line.txt', failFile = 'fail-list.csv';

if(fs.existsSync(lineFile)){
  lineNr = parseInt(fs.readFileSync(lineFile))
}

var s = fs.createReadStream(listFile)
  .pipe(es.split())
  .pipe(es.mapSync(function (line) {

    // pause the readstream
    s.pause();

    lineNr += 1;
    fs.writeFileSync(lineFile,''+lineNr)

    // process line here and call s.resume() when rdy
    // function below was for logging memory usage
    downloadImage(line);

    // resume the readstream, possibly from a callback
    s.resume();
  })
    .on('error', function (err) {
      console.log('Error while reading file.', err);
    })
    .on('end', function () {
      console.log('Read entire file.')
    })
  );
const concurrency = 1
let concurrent = 1
function downloadImage(line) {
  const [url,dest] = line.split(',')

  if(process.platform == 'linux'){
    if(concurrent<concurrency){      
      concurrent++;
      require('child_process').exec(`wget -O ${dest} "${url}"`,(err)=>{
        if(err){
          console.log('wget error!'+url)        
          fs.appendFileSync(failFile,`${line}\n`);
        }
        concurrent--;
      })
    }else{
      try{
        require('child_process').execSync(`wget -O ${dest} "${url}"`)
      }catch(e){        
        console.log('wget error!'+url)        
        fs.appendFileSync(failFile,`${line}\n`);
      }
    }
    return 
  }

  // Download to a directory and save with the original filename

  download.image({
    url,
    dest
  })
    .then(({ filename, image }) => {
      console.log('File saved to', filename)
    }).catch((err) => {
      fs.appendFileSync(failFile,`${line}\n`);
    })
}