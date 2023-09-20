import express from 'express';
import fs from 'fs';

let ip = express();
ip.get('/id/:id', function(req, res) {
    fs.readFile("ip.json" , "utf-8", function(err, data) {
        let ips = JSON.parse(data);
        let ip = ips["ip" + req.params.id];
        console.log(ip);
        res.set('Content-Type', 'application/json')
        res.end(JSON.stringify(ip));
    });
});