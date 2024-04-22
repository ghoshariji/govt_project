const router = require('express').Router();
const User = require('../models/industry');
const { login, register } = require('../controllers/indUserController');
router.post('/',login);
router.post('/register',register);
router.get("/:id", (req, res) => {
    
    User.findById(req.params.id)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
    
        
});


module.exports = router;