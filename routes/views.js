var express = require('express');
var router = express.Router();

// 页面级路由
router.get('/pages/:viewName', function(req, res){
    var viewName = req.params.viewName;
    res.render(viewName);
});

// 组件级路由
router.get('/components/:componentName', function(req, res){
    var componentName = req.params.componentName;
    res.render('components/'+componentName);
});

module.exports = router;
