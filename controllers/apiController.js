var Prezis = require('../models/preziModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.get('/api/prezis/:uname', function(req, res) {
        
        Prezis.find({ username: req.params.uname }, function(err, prezis) {
            if (err) throw err;
            
            res.send(prezis);
        });
        
    });
    
    app.get('/api/prezi/:id', function(req, res) {
       
       Prezis.findById({ _id: req.params.id }, function(err, prezi) {
           if (err) throw err;
           
           res.send(prezi);
       });
        
    });
    
    app.post('/api/prezi', function(req, res) {
        
        if (req.body.id) {
            Prezis.findByIdAndUpdate(req.body.id, { prezi: req.body.prezi, isDone: req.body.isDone, hasAttachment: req.body.hasAttachment }, function(err, prezi) {
                if (err) throw err;
                
                res.send('Success');
            });
        }
        
        else {
           
           var newPrezi = Prezis({
               username: 'test',
               prezi: req.body.prezi,
               isDone: req.body.isDone,
               hasAttachment: req.body.hasAttachment
           });
           newPrezi.save(function(err) {
               if (err) throw err;
               res.send('Success');
           });
            
        }
        
    });
    
    app.delete('/api/prezi', function(req, res) {
        
        Prezis.findByIdAndRemove(req.body.id, function(err) {
            if (err) throw err;
            res.send('Success');
        })
        
    });
    
}