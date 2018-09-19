const { spawn } = require('child_process');
var LOAD = 0;
var process;

function updateLoad(){
    if(LOAD > 100 || LOAD < 0) LOAD = 20;
    if(process){
        process.stdin.pause();
        process.kill();
    }
    process = spawn('stress-ng', ['-c', '0', '-l', LOAD.toString()], {detached: true});
}

module.exports = {
    increase: function(req, res){
        LOAD+=20;
        updateLoad();
        res.status(200).send();
    },
    decrease: function(req, res){
        LOAD-=20;
        updateLoad();
        res.status(200).send();
    }
}