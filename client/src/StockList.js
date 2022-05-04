import React from "react";
var cors = require('cors')
var DomParser = require('dom-parser');
const parser = new DomParser();

class StockList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.fetchStock = this.fetchStock.bind(this);
    this.fetchPerfume = this.fetchPerfume.bind(this);
    this.fetchLipStick = this.fetchLipStick.bind(this);
    this.fetchBlanket = this.fetchBlanket.bind(this);
  }

  fetchStock() {
    var req = new XMLHttpRequest();

    req.open('GET', 'https://www.hermes.com/us/en/search/?s=picotin#|', false);
    req.send(null);
    var parser = new DOMParser();

    if (req.status === 200) {
      var document = parser.parseFromString(req.responseText, "text/html");

      document.querySelectorAll(".product-item-name").forEach(element => {
        if (element.textContent.includes('Picotin')) {
          console.log('YAY! Picotin is in stock');
          // console.log(element);
        } else {
          console.log('picotin not in stock')
        }
        console.log('element id:', element.parentElement.id.slice(18))
      })
      // console.log(document.querySelectorAll(".product-item-name"));
    }
  }

  fetchPerfume() {

    var req = new XMLHttpRequest();

    req.open('GET', 'https://www.hermes.com/us/en/category/fragrances/women/#|', false);
    req.send(null);
    var parser = new DOMParser();

    if (req.status === 200) {
      var document = parser.parseFromString(req.responseText, "text/html");

      document.querySelectorAll(".product-item-name").forEach(element => {
        if (element.textContent.includes('Ginger')) {
          // console.log('YAY! Ginger Twilly is in stock');
          itemSKU = element.parentElement.id.slice(18);
          // console.log('element id:', element.parentElement.id.slice(18));
        } else {
          console.log('Ginger Twilly not in stock')
        }

      })
    }
  }

  fetchLipStick() {

    var req = new XMLHttpRequest();

    req.open('GET', 'https://www.hermes.com/us/en/category/make-up/lips/#|', false);
    req.send(null);
    var parser = new DOMParser();

    if (req.status === 200) {
      var document = parser.parseFromString(req.responseText, "text/html");

      document.querySelectorAll(".product-item-name").forEach(element => {
        if (element.textContent.includes('Camarine')) {
          // console.log('YAY! Camarine lip oil is in stock');
          console.log(element.parentElement);
        } else {
          console.log('Camarine lip oil not in stock')
        }
        console.log('element id:', element.parentElement.id.slice(18))
      })

    }
  }

  fetchBlanket() {

    var req = new XMLHttpRequest();

    req.open('GET', 'https://www.hermes.com/us/en/category/home/textiles/#|', false);
    req.send(null);
    var parser = new DOMParser();

    if (req.status === 200) {
      var document = parser.parseFromString(req.responseText, "text/html");

      document.querySelectorAll(".product-item-name").forEach(element => {
        if (element.textContent.includes('Avalon')) {
          // console.log('YAY! Avalon is in stock');
          console.log(element.parentElement);
        } else {
          console.log('Avalon not in stock')
        }
        console.log('element id:', element.parentElement.id.slice(18))
      })

    }
  }

  render() {
    // this.fetchStock();
    // this.fetchPerfume();
    // this.fetchLipStick();
    this.fetchBlanket();

    return <div className="Stock-List">
      <h2>Back in Stock Tracker</h2>
      <div>helllo</div>
    </div>
  }
}

export default StockList;