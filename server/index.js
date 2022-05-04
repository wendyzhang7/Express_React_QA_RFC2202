/* === External Modules === */
const express = require("express");
var cors = require('cors')
const path = require("path");

var DomParser = require('dom-parser');
const parser = new DomParser();
const fs = require('fs');

require("dotenv").config();

/* === Internal Modules === */
const { BagStock } = require("../database");


/* === Server Configuration === */
const PORT = 3000;

/* === Instanced Modules === */
const app = express();

/* === Middleware === */
app.use(express.json());
app.use(cors());
// serve static files
app.use(express.static(path.join(__dirname, "../client/dist")));
var xmlparser = require('express-xml-bodyparser');
app.use(xmlparser());

/* === Routes === */

// serve react frontend
// optional but i suggest doing so to ensure consistent result
// app.get("/", function(req,res){
//   return res.sendFile(path.join(__dirname, "../client/dist/index.html"));
// });

// api routes

// index route
// app.fetch("https://www.hermes.com/us/en/search/?s=picotin#|")
// .then(res => res.text())
// .then((responseText) => {
//   const doc = new DOMParser().parseFromString(responseText, 'text/html');
//   const h1 = doc.querySelector('h1');
//   console.log(h1.textContent);
// });

// app.get("https://www.hermes.com/us/en/search/?s=picotin#|", function (req, res) {

  // console.log('REEERERASDFASDFASD', req);
  // console.log('asda', res);

  // var request = new XMLHttpRequest();

  // request.open('GET', 'https://www.hermes.com/us/en/search/?s=picotin#|', true);
  // request.onload = (e) => {
    // console.log('request from hermes', e.currentTarget.responseText);
    // var document = parser.parseFromString(e.currentTarget.responseText, "text/html");
    // console.log(document);

    // if (request.status === 200) {
    //   console.log('he');
    //   var document = parser.parseFromString(e.currentTarget.responseText, "text/html");
    //   console.log('document: ', document.rawHTML)
      // console.log('this is document', parser.parseFromString(document.rawHTML, "text/xml"));
      // console.log('this is document', Object.keys(document.rawHTML));


      // document.querySelector(".product-item-name").forEach(element => {
      //   if (element.textContent.includes('Picotin')) {
      //     console.log('YAY! Picotin is in stock');
      //   } else {
      //     console.log('picotin not in stock')
      //   }
      //   // console.log('element title:', element.parentElement.id);
      //   console.log('element id:', element.parentElement.id.slice(18))
      // })
  //   }
  // };

  // request.onerror = (e) => {
  //   console.error('req.statustext', request.statusText);
  // }

  // request.send(null);

// });


//create
// app.post("/stock", function(req,res){
//   // BagStock.create(req.body, function(err, newStock){
//   //   if(err) {
//   //     console.log(err);
//   //     return res.status(500).json({message: "Internal Server Error"})
//   //   }
//   //   return res.status(200).json({
//   //     item: newStock,
//   //   });

//   // });
// });

/* === Server Listener === */
app.listen(PORT, function () {
  console.log(`Server is live at localhost:${PORT}.`);
});
