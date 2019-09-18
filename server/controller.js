const Author = require("./models");
const path = require("path");

module.exports = {
    Index : (req, res) => {
        Author.find()
            .then(data => res.json({ Author : data }))
            .catch(err => res.json(err))
    },
    SingleAuthor : (req, res) => {
        Author.findOne({ _id : req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    CreateAuthor : (req, res) => {
        Author.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    UpdateAuthor : (req, res) => {
        Author.updateOne({ _id : req.params.id }, req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    DeleteAuthor : (req, res) => {
        Author.remove({ _id : req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    All : (req, res, next) => {
        res.sendFile(path.resolve(__dirname, "../public/dist/public/index.html"))
    }
}