var express = require('express');
var router = express.Router();
const user = require('../controllers/user');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/payment', async function(req, res, next) {
    let result = await user.sendCoin();
    if(result.err) {
        res.status(500);
        res.end(result.message);
    } else {
        res.status(200);
        res.end();
    }
    

});

module.exports = router;
