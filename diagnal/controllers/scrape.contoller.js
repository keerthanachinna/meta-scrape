const express = require('express');
let router = express.Router();
const request=require('request')
const rp = require('request-promise');
const cheerio = require ('cheerio');
// const $ = require('cheerio');


let jsonxml = require('jsontoxml');


router.post('/',(req,res)=>{
    let url= req.body.url;
   
    rp(url)
    .then(function(html){
      console.log(html)
      let title,images;
      let json = { title : "", images : ""};
      let $ = cheerio.load(html);
      title = $('title').text();
      json.title = title;
      images= $('img').attr('src');
      json.images = images;
      return res.send(json)
    })
  
    .catch(function(err){
  
          return err
      
        });
     
 })

module.exports = router;