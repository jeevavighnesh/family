"use strict";

var exec = require('child_process').exec;

module.exports = {
    onPushedChanges: function (req, resp) {
        console.log(req.body.pusher.name + " pushed to " + req.body.repository.name);
        console.log("Pulling from GitHub " + req.body.repository.name + " repository");
        exec('echo "$(date) INFO: ' + req.body.pusher.name + ' pushed to ' + req.body.repository.name + '" >> ../family_logs/info.log', exeCallback);
        exec('git -C ~/Documents/family reset --hard', exeCallback);
        exec('git -C ~/Documents/family clean -df', exeCallback);
        exec('git -C ~/Documents/family pull -f', exeCallback);
        exec('npm -C ~/Documents/family install --production', exeCallback);
        exec('echo "$(date): $SECONDS" >> ../family_logs/info.log', exeCallback)
        exec('./restart_server.sh', exeCallback);
        resp.sendStatus(200);
    }
};

function exeCallback(err, stdout, stderr){
    if (stdout) {
        console.log(stdout);
        exec('echo $(date) IOINFO: ' + stdout + ' >> ../family_logs/info.log', exeCallback);
    }
    if (stderr) {
        console.log(stderr);
        exec('echo $(date) IOERROR:' + stderr + ' >> ../family_logs/error.log', exeCallback);
    }
}
