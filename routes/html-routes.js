const path = require("path")

module.exports = function(app){

    app.get("/", function(req, res) {
        return res.sendFile(path.join(__dirname, "..", "public", "index.html"));
    })
    app.get("/stats", function(req, res) {
        return res.sendFile(path.join(__dirname, "..", "public", "stats.html"));
    })
    app.get("/exercise", function(req, res) {
        return res.sendFile(path.join(__dirname, "..", "public", "exercise.html"));
    })
}