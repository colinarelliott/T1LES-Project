const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1:27017/";

const client = new MongoClient(uri);

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
        //await client.db().admin().createDatabase("tilesdev");
    } else {
        console.log("Database connected. [tilesdev]");
    }
}
initDB().catch(console.dir);
/*getTiles();

async function getTiles() {
    try {
        const database = client.db('tilesdev');
        const tiles = database.collection('tiles');

        // get all the tiles in the collection
        const tileset = await tiles.find();

        console.log(tileset);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}*/

const LISTEN_PORT = 8080;

app.get('/', function(req, res) {
    res.sendFile('index.html', {root:__dirname});
});

app.use(express.static(__dirname));
server.listen(LISTEN_PORT);
console.log('Listening to port ' + LISTEN_PORT);