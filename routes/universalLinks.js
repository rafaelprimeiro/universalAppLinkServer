var express = require('express');
var router = express.Router();

/* GET /. */
router.get('/', function(req, res, next) {
    res.json({ 
        applinks: {
            apps: [],
            details: [
                {
                    appIDs: [ 
                        "<TEAMID>.<APPBUNDLE1>",
                        "<TEAMID>.<APPBUNDLE2>",
                        "<TEAMID>.<APPBUNDLE3>"
                    ],
                    // paths: [ "/*" ],
                    components: [
                        {
                            "/": "*.html"
                        },
                        {
                            "/": "feminino/"
                        },
                        {
                            "/": "masculino/"
                        }
                        ///...
                    ]
                }
            ]
        }
    });
});

module.exports = router;
