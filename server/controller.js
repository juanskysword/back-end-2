const houses = require("./db.json");
let idCounter = 4;

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(houses);
  },
  createHouse: (req, res) => {
    const { address, price, imageURL } = req.body;
    let newHouse = {
      id: idCounter,
      address: address,
      price: price,
      imageURL: imageURL,
    };
    houses.push(newHouse);
    res.status(200).send(houses);
    idCounter++;
  },
  deleteHouse: (req, res) => {
    let { id } = req.params;
    let index = houses.findIndex((houses) => +houses.id === +id);
    houses.splice(index, 1);
    res.status(200).send(houses);
  },
  updateHouses: (req, res) => {
    let { id } = req.params;
    let { type } = req.body;
    let index = houses.findIndex((houses) => +houses.id === +id);
    if (houses[index].rating === 5 && type === "plus") {
      res.status(400).send("cannot go above 5");
    } else if (houses[index].rating === 0 && type === "minus") {
      res.status(400).send("cannot go below 0");
    } else if (type === "plus") {
      houses[index].rating++;
      res.status(200).send(houses);
    } else if (type === "minus") {
      houses[index].rating--;
      res.status(200).send(houses);
    } else {
      res.sendStatus(400);
    }
  },
};
