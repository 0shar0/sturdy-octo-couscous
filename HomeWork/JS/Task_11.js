//------1------

// let http = require('http')
// let os = require('os');
// const { dirname } = require('path');
// const path = require('path')
// http.createServer(function (request,response) {
//     response.writeHead(200,{'Content-Type':'text/html'})
//     response.write('<h1>System information</h1>')
//     response.write('<h4>Current user name: '+ os.userInfo().username +'</h4>')
//     response.write('<h4>Current OS type: '+ os.type() +'</h4>')
//     response.write('<h4>OS work time: '+ ((os.uptime())/60).toFixed(2) +'minutes</h4>')
//     response.write('<h4>Current work directory: '+ __dirname +'</h4>')
//     response.end(('<h4>Server file name: '+ path.basename(__dirname) +'</h4>'));
// }).listen(5000);

//-------2-------

// let http = require('http')
// let os = require('os');
// let date = new Date().toString()
// http.createServer(function (request,response) {
//     response.writeHead(200,{'Content-Type':'text/html'})
//     response.write('Date of request: '+ date)
//     let nowhour = (new Date()).getHours();
//     if      (5 < nowhour && nowhour < 11){response.write("<h5>Good morning "+ os.userInfo().username+"</h5>")}
//     else if (11 < nowhour && nowhour < 17){response.write("<h5>Good day "+ os.userInfo().username+"</h5>")}
//     else if (17 < nowhour && nowhour < 23){response.write("<h5>Good evening "+ os.userInfo().username+"</h5>")}
//     else(response.write("<h5>Good night "+ os.userInfo().username+"</h5>"));
// }).listen(8000)