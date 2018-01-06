const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();
hbs.registerPartials(__dirname+'/views/partials');
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
  console.log('here');
  next()
})

// app.use((req, res, next) => {
//   res.render('maintance.hbs');
// });

app.get('/',(req,res)=>{
  var obj = {
    pageTitle:'Welcome To My Website',
    title : 'Home Page',
    WelcomeMessage:'Welcome To My Website',
    currentYear:  new Date().getFullYear(),
  };
  res.render('home.hbs',obj);
});

hbs.registerHelper('getFullYear',()=>{
  return new Date().getFullYear();
})

hbs.registerHelper('getupper',(text)=>{
  if(text)
  {
      return text.toUpperCase();
  }
  else{
    return '';
  }

})


app.get('/about',(req,res)=>{
  var obj = {
    pageTitle:'Welcome To My Website',
    title : 'Home Page',
    WelcomeMessage:'Welcome To My Website',
    currentYear:  new Date().getFullYear(),
  };
  res.render('about.hbs');
});

app.get('/bad',(req,res)=>{
  res.send('Bad Request',obj);
})

app.listen(3000);
