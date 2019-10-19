var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  collection.find({}, {}, function(e, docs) {
    res.json(docs);
  });
});

/*
 * POST to adduser.
 */
router.post('/adduser', function(req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  collection.insert(req.body, function(err, result) {
    res.send(err === null ? { msg: '' } : { msg: err });
  });
});

/*
 * POST to updateuser.
 */
//Options here are to either replace the whole user document specified,
//or to replace just email. Choosing to replace just email field for the
//the code test because that is all that was changed.
router.post('/updateuser/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  var userToUpdate = req.params.id;
  collection.update(
    { _id: userToUpdate },
    { $set: { email: req.body.email } },
    function(err) {
      res.send(err === null ? { msg: '' } : { msg: 'error: ' + err });
    }
  );
});

/*
 * DELETE to deleteuser.
 */
router.delete('/deleteuser/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  var userToDelete = req.params.id;
  collection.remove({ _id: userToDelete }, function(err) {
    res.send(err === null ? { msg: '' } : { msg: 'error: ' + err });
  });
});

module.exports = router;
