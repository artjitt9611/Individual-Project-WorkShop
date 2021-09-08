var http = require('http');
var url = require('url');

const {AddCustomer,GetCustomer,AddRoom,GetRoom,AddBooking,GetBooking }= require('./hotel');

http.createServer(function (req, res) {

    

    var request_path = url.parse(req.url, true);
    var message = '';
    var data;
    var status = 200;

    switch(request_path.pathname) {
        case '/AddCustomer': 
            try {
                data = AddCustomer(request_path.query.firstname,request_path.query.lastname,request_path.query.phone);
            } catch(err) {
                message += err;
                console.log(err);
            }
            break;

        case '/GetCustomer': 
            try {
                data = GetCustomer(request_path.query.name);
            } catch(err) {
                message += err;
                console.log(err);
            }
            break;    
            
         case '/AddRoom': 
            try {
                data = AddRoom(request_path.query.number,request_path.query.type,parseInt(request_path.query.price));
            } catch(err) {
                message += err;
                console.log(err);
            }
            break; 
         case '/GetRoom': 
            try {
                data = GetRoom(request_path.query.number);
            } catch(err) {
                message += err;
                console.log(err);
            }
            break;   
        case '/AddBooking': 
            try {
                data = AddBooking(request_path.query.name,request_path.query.numberoom,request_path.query.start_date,request_path.query.end_date);
            } catch(err) {
                message += err;
                console.log(err);
            }
            break;   
        case '/GetBooking': 
            try {
                data = GetBooking(request_path.query.id);
            } catch(err) {
                message += err;
                console.log(err);
            }
            break;       
        
    


            default: 
                 status = 404
                 message = ' Not Found '
                 break;

    }

   

    let response_object = {
        statusCode: status,
        message: message,
        data: data
    };
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(response_object));
    
}).listen(8070);
console.log('Twt application is running on port 8070.');

