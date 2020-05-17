var takeNotes = require("../data/takeNotes");
var saveNotes = require("../data/saveNotes");


module.exports = function(app) {
 
  
    app.get("/api/tables", function(req, res) {
      res.json(takeNotes);
    });
  
    app.get("/api/waitlist", function(req, res) {
      res.json(saveNotes);
    });

    app.post("/api/tables", function(req, res) {
        
        if (takeNotes.length < 5) {
          takeNotes.push(req.body);
          res.json(true);
        }
        else {
          saveNotes.push(req.body);
          res.json(false);
        }
      });

      app.post("/api/clear", function(req, res) {
        // Empty out the arrays of data
        takeNotes.length = 0;
        saveNotes.length = 0;
    
        res.json({ ok: true });
      });
    };

