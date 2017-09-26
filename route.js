module.exports = function(app){
    
    var controller = require("./controller");

    app.route("/")
        .get(controller.showData)
        .post(controller.getData);

    app.route("/edit/:id")
        .delete(controller.deleteData)
        .post(controller.updateData);
}