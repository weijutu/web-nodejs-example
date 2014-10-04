var express = require('express');
var fs = require('fs');
var app = express();

app.use('/public', express.static(__dirname + '/public'));

app.locals.title="Get json data using express web framework";

app.all('*', function(req, res, next){
  fs.readFile('posts.json', function(err, data){
    res.locals.posts = JSON.parse(data);
    next();
  });
});
 
app.get('/', function(req, res){
  res.render('index.ejs');
});

app.get('/api/posts', function(req, res){
  res.json(res.locals.posts);
});

app.get('/post/:id', function(req, res, next){
  res.locals.posts.forEach(function(post){
    if (req.params.id === post.id){
      res.render('post.ejs', { post: post });
    }
  })
});


app.listen(3000);
console.log('app is listening at localhost:3000');