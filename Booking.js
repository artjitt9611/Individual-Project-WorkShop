var Data_Booking = [];
const Booking = function (name, room, start_date, end_date) {
    this.Name = name;
    this.Room = room;
    this.Start_date = start_date;
    this.End_date = end_date;
  };
  
  Booking.prototype.getBooking = function () {
    return `${this.name} ${this.room} ${this.start_date} ${this.end_date}`;
  };

  module.exports = {
    Data_Booking: Data_Booking,
    Booking: Booking
  };  