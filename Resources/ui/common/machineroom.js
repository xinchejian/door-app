function machineroom(code) {
 
 	var url = "http://door.xinchejian.com:8080/lock?pin="+code;
	 var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	 onload : function(e) {
	     Ti.API.info("Received text: " + this.responseText);
		return this.responseText;
	 },
	 // function called when an error occurs, including a timeout
	 onerror : function(e) {
	     Ti.API.debug(e.error);
	     alert('error, i think i f**ked up');
	 },
	 timeout : 2000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send(); 
     
};


module.exports = machineroom;
