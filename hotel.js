
const { Data_Customer,Customer } = require("./Customer");
const { Data_Room,Room } = require("./Room");
const { Data_Booking,Booking } = require("./Booking");


const reg_text = /^[a-zA-Z]{1,99}$/;
const reg_tel = /^[0][689]\d{8}$/;
const reg_number = /^[0-9]{1,4}$/;
const reg_room = /^[0-9][0-9][0-9]$/;
const reg_day = /^\d{2}-\d{2}-\d{4} \d{2}:\d{2}$/;

AddCustomer = (first_name, last_name, phone) => {
  let fname = first_name;
  let lname = last_name;
  let tel = phone;
  if (reg_text.test(fname) && reg_text.test(lname) && reg_tel.test(tel)) {
    const { length } = Data_Customer;
    const idcurrent = length + 1;
    const found = Data_Customer.some(
      (el) =>
        (el.FirstName === first_name && el.LastName === last_name) ||
        el.tel === phone
    );
    if (found) {
      throw "This information already exists.";
    } else {
      var NewCustomer = new Customer(first_name, last_name, phone);
      var Response = NewCustomer;
      Data_Customer.push({
        id: idcurrent,
        FirstName: NewCustomer.FirstName,
        LastName: NewCustomer.LastName,
        tel: NewCustomer.tel,
        Active: NewCustomer.Active,
      });
      console.table(Data_Customer);
      return Response;
    }
  } else {
    throw "Input is not correct";
  }
};

AddRoom = (R_number, type, Price) => {
  if (
    reg_text.test(type) &&
    reg_room.test(R_number) &&
    reg_number.test(Price)
  ) {
    const { length } = Data_Room;
    const idcurrent = length + 1;
    const found = Data_Room.some(
      (el) =>
        el.Room_number === R_number && el.Type === type && el.price === Price
    );

    if (found) {
      throw "This information already exists.";
    } else {
      var NewRoom = new Room(R_number, type, Price);
      var Response = NewRoom;
      Data_Room.push({
        id: idcurrent,
        Room_number: NewRoom.Room_number,
        Type: NewRoom.Type,
        price: NewRoom.price,
        status: NewRoom.status,
        Active: NewRoom.Active,
      });
      console.table(Data_Room);
      return Response;
    }
  } else {
    throw "Input is not correct";
  }
};

GetCustomer = (name) => {
    Search = Data_Customer.filter((p) => p.FirstName.includes(name));
    return Search;
};

GetRoom = (name) => {
    Search = Data_Room.filter((p) => p.Room_number.includes(name));
    return Search;
};

AddBooking = (name, number_room, start_date, end_date) => {
  if (
    reg_text.test(name) &&
    reg_room.test(number_room) &&
    reg_day.test(start_date) &&
    reg_day.test(end_date)
  ) { // validation ข้อมูลที่รับมา
    const { length } = Data_Booking;
    const idcurrent = length + 1;
    const NameForAdd = Data_Customer.filter((p) => p.FirstName === name);
    const RoomForAdd = Data_Room.filter((p) => p.Room_number === number_room);
    if (NameForAdd.length !== 0 && RoomForAdd.length !== 0) { // เช็ค ว่า ข้อมูลที่ รับมา ว่า มีใน data ของเราหรือเปล่า
      var NewBooking = new Booking(name, number_room, start_date, end_date); //เอาข้อมูลที่ได้ มาสร้าง object
      const found = Data_Booking.some(
        (el) => el.Name === NewBooking.Name || el.Room === NewBooking.Room 
      );
      if (found) { // เช็ค ข้อมูลที่เราจะเอาลง data ว่าใน data มีข้อมูลนี้หรือยัง
        throw "this room has already booking"; // ถ้ามีเเล้ว จะ throw error
      } else {
        Data_Booking.push({
          id: idcurrent,
          Name: NewBooking.Name,
          Room: NewBooking.Room,
          Start_Date: NewBooking.Start_date,
          End_Date: NewBooking.End_date,
        });
        console.table(Data_Booking);
        console.log(RoomForAdd[0].status = 'Occupied');
        return NewBooking;
      }
    } else {
      throw "Some information is not exists."; // ถ้าข้อมูลที่รับมาไม่มีใน data throw error
    }
  } else {
    throw "Input is not correct"; // ถ้าข้อมูลที่รับมาไม่ตรง เช่น รับ int เเต่กรอก string throw error
  }
};

GetBooking = () => {
  console.log(Data_Booking);
  return Data_Booking;
};
module.exports = {
  AddCustomer: AddCustomer,
  GetCustomer: GetCustomer,
  AddRoom: AddRoom,
  GetRoom: GetRoom,
  AddBooking: AddBooking,
  GetBooking: GetBooking,
};
