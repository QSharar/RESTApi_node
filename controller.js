var Book = require("./models/book");

 exports.showData = function(req, res){
    Book.find({}, (err, book) => {
        if(err){console.log(err)}
        else{res.send(JSON.stringify(book));}
    })
}

exports.getData = function(req, res){
    let book = new Book(req.body);
    book.save((err, book) => {
        if(err){console.log(err)}
        else{
            console.log(` saved ${JSON.stringify(req.body)}`);
            res.redirect(200, "/");
        }
    })
}

exports.deleteData = function(req, res){
    
    Book.findByIdAndRemove(req.params.id, (err) => {
        if(err){console.log(err);}
        else{
            console.log("deleted ".concat(req.params.id));
            res.redirect(200, "/");
        }
    });

}

exports.updateData = function (req, res){
    let query = { 
        _id: req.params.id
    };

    Book.update(query, req.body, (err, data)=>{
        if(err){console.log(err);}
        else{
            console.log("updated ".concat(req.params.id));
            console.log(JSON.stringify(data));
            res.redirect(200, "/");
        }
    })
}