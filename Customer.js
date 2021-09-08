const Customer = function (first_name, last_name, tel, Active = 1) {
  this.FirstName = first_name;
  this.LastName = last_name;
  this.tel = tel;
  this.Active = Active;
};

Customer.prototype.getCustomer = function () {
  return `${this.FirstName} ${this.LastName} ${this.tel} ${this.Active}`;
};
var Data_Customer = [
  {
    id: 1,
    FirstName: "Omae",
    LastName: "kumeko",
    tel: "0869149971",
    Active: 1,
  },
  {
    id: 2,
    FirstName: "Hanasano",
    LastName: "lily",
    tel: "054382512",
    Active: 1,
  },
];
module.exports = {
  Data_Customer: Data_Customer,
  Customer: Customer,
};
