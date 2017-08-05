const express = require("express")
const app = express()

app.set('view engine', 'pug');
app.set('views','./views');

app.engine('html', require('pug').renderFile);

app.get('/first_template', function(req, res){
   res.render('marian.html');
});

app.get("*", (req, res) => {

  res.send(req.cookie)

})

app.listen(3000)