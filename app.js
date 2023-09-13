const express = require('express');
const app = express();
const port= 3000;
const mysql=require('mysql');

// olá
app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.get('/api/usuarios',(req, res)=>{

    const sql='SELECT * FROM usuarios';
    connection.query(sql,(err,results)=>{

if(err){
    console.error('error ao buscar registros '+err.mensage);
    res.status(500),json({error:'Erro ao buscar registro'});

}else {
    res.status(200).json(results);
}})});

const connection =mysql.createConnection({
    
    host: '127.0.0.1',
    user:'root',
    password:'',
    database:"back"
})

connection.connect((err)=>{
if (err){
    console.error('Erro ao conectar o MYSQL'+err.mensage);
}else {
    console.log('Conectado ao MYSQL ')
}
})


let books =[
    {id:1, title:"livro 1"},
    {id:2, title:"livro 2"},
    {id:3, title:"livro 3"}
]

app.get("/books",(req,res)=>{
res.json(books);
})

app.post("/post-example",(req,res)=>{
books.push(newbook);
res.json(newbook);
})

app.put("/update-book/:id", (req,res)=>{
    const bookID=parseInt(req.params.id);
    const newTitle=(req.body.title);

    const bookToUpdate=books.find(book=>bookid === bookID);
    if(bookToUpdate){
        bookToUpdate=newTitle
        res.json(bookToUpdate);
    }else{
        res.status(404).sed("Livro não encontrado ! ")
    }
});

app.delete("/delete-book/:id",(req,res)=> {
const BookID=parseInt(req.params.id.id)
const indexToRemove=books.findIndex(book => bookid === bookID );

if (indexToRemove !== -1){
const removedBook=books.splice(indexToRemove,1);
res.json(removedBook[0])
} else{
    res.status(404).sed("Livro não encontrado ! ")
}


})

app.listen(port,()=> {
    console.log('servido rodando em http://localhost:${port}');
});
