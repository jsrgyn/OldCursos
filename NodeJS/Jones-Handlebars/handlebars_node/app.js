const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();

var dados = [{nome: 'joao'},{nome: 'maria'},{nome: 'zezin'},{nome: 'joaqui'}]
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/index/", (req, res)=>{
    res.render('index')
});

app.get("/login/", (req, res)=>{
    res.render('login')
})
app.get('/pessoas/', (req, res) => {
    res.render('pessoas', {pessoas: dados});
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log('Servidor rodando em localhost:' + PORT);
})