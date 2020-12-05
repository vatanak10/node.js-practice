const express = require('express');
const router = express.Router();

router.get('/blog', (req, res)=>{
    res.send({type:'GET'});
});

router.post('/blog', (req, res)=>{
    res.send({type:'POST'});
    console.log(req.body);
});

router.put('/blog/:id', (req, res)=>{
    res.send({type:'PUT'});
});

router.delete('/blog/:id', (req, res)=>{
    res.send({type:'DELETE'});
});

module.exports = router;