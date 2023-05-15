const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const http = require('http');
const server = http.createServer(app);
const MongoClient = require('mongodb').MongoClient;

// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1:27017/";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function initDB() {
    //check to see if the 'tilesdev' database exists and if it doesn't, create it
    const databaseList = await client.db().admin().listDatabases();
    let databaseExists = false;
    for (let i = 0; i < databaseList.databases.length; i++) {
        if (databaseList.databases[i].name == "tilesdev") {
            databaseExists = true;
        }
    }
    if (!databaseExists) {
        //create the database and fill it with sample data if it doesn't exist
    } else {
        console.log("Database connected. [tilesdev]");
    }
}
initDB().catch(console.dir);

//custom routes for node requests
app.get('/tiles', function (req, res) { 
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
    const mongoTiles = async () => {
      try {
        await client.connect();
        const db = client.db('tilesdev');
        const collection = db.collection('tiles');
        const tiles = await collection.find({});
        return tiles;
        } catch (err) {
            //console.log(err.stack);
        } finally {
            client.close();
            }
        }
    mongoTiles().then(tiles => { 
        res.json(tiles);
        console.log(tiles);
    });
});

app.get('/', function(req, res) {
    res.sendFile('index.html', {root:__dirname});
});

//end custom routes

//start server
const LISTEN_PORT = 8080;

app.use(express.static(__dirname));
server.listen(LISTEN_PORT);
console.log('Listening to port ' + LISTEN_PORT);