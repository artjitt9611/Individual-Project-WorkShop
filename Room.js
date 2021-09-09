

const Room = function (number, type, price, status='Vacant', Active = 1) {
    this.Room_number = number;
    this.Type = type;
    this.price = price;
    this.status = status;
    this.Active = Active = 1;
  };

  Room.prototype.getRoom = function () {
    return `${this.Room_number} ${this.Type} ${this.price} ${this.status}`;
  };

var Data_Room = [
    { id: 1, Room_number: "001", Type: "SingleBed", price: 1000,status:'Vacant',Active: 1 },
    { id: 2, Room_number: "002", Type: "DoubleBed", price: 2000,status:'Vacant',Active: 1 },
  ];

  module.exports = {
    Data_Room: Data_Room,
    Room: Room
  };