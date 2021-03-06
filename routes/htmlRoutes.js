var path = require("path");

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/takeNotes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/takeNotes.html"));
  });

  app.get("/saveNotes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/saveNotes.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};