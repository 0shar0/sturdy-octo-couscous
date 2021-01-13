let http = require('http');
let url = require('url')
let querystring = require('querystring')
let static = require('node-static');
let file = new static.Server('.')
let express = require('express')
let app = express()

function change (req,res) {
    if(req.url == '/vote'){
        res.end('Your vote is accepted: ' + new Data())
    }
    else{
        file.serve(req,res)
    }
}

http.createServer(change).listen(8080)