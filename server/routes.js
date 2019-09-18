const controller = require("./controller");

module.exports = (app) => {
    app.get("/authors", controller.Index);
    app.get("/authors/:id", controller.SingleAuthor);
    app.post("/authors", controller.CreateAuthor);
    app.put("/authors/:id", controller.UpdateAuthor);
    app.delete("/authors/:id", controller.DeleteAuthor);
    app.all("*", controller.All);
}