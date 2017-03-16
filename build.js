// nw-builder build script mostly cribbed from the documentation
var NwBuilder = require('nw-builder');
var nw = new NwBuilder({
    files: './app/**/**', // use the glob format
    platforms: ['osx64', 'win64', 'linux64'],
    version: '0.20.3',
    flavor: 'normal',
    cacheDir: 'node_modules/nw-builder/cache/',
    winIco : 'app/img/winicon.ico',
});

//Log stuff you want

nw.on('log',  console.log);

// Build returns a promise
nw.build().then(function () {
   console.log('all done!');
}).catch(function (error) {
    console.error(error);
});
