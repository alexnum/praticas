module.exports = {
    upload: function(req, res){
        req.file('file').upload({
            saveAs: 'upload_' + (new Date()).getTime() + '.txt',
            dirname: '/home/linux/sfs'
        }, function (err) {
            if (err) return res.status(500).send(err);
            return res.status(200).send();
        });
    }
}