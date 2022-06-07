//Install express server
let express = require('express');

let app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname+'/dist/angular-web-application'));

app.get('/*', (req, resp) =>{
   resp.sendFile(__dirname+'/dist/angular-thesis-web-application/index.html');
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
