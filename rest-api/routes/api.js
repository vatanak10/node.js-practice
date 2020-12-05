const express = require('express');
const router = express.Router();

router.get('/post', (req, res)=>{
    res.send({type:'GET'});
});

router.post('/post', (req, res)=>{
    res.send({type:'POST'});
    console.log(req.body);
});

router.put('/post/:id', (req, res)=>{
    res.send({type:'PUT'});
});

router.delete('/post/:id', (req, res)=>{
    res.send({type:'DELETE'});
});

module.exports = router;