Ti.App.code = '';
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();

	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:L('notice'),
		height:'auto',
		width:'auto',
		bottom: '10%'
	});
	self.add(label);
	//Add behavior for UI


	var MR = require('ui/common/machineroom');
	var PassPort = require('ui/common/passport');


	
	
	var tl = 0;
	var tt = 0;
	for (var i = 1; i<= 12; i++) {
		
		if (i == 4 || i == 7 || i == 10) {
			tl = 1;
			tt++;
		} else {
			tl++;
		}
		
		/* i learnt this trick from Lio! */
		switch (i) {
		
		case 10:
			var button = Ti.UI.createButton({
				title: 'Machine',
				//color: '#ffffff',
				width: '25%',
				left: 7+(30*(tl-1))+'%',
				top: 6+(20*tt)+'%',
				height: '15%'
			});
			button.addEventListener("click", function(){ 
				var attempt = new MR(Ti.App.code);
				Ti.App.code = '';
			});		
		break;
		case 11:
			var button = Ti.UI.createButton({
				title: '0',
				//color: '#ffffff',
				width: '25%',
				left: 7+(30*(tl-1))+'%',
				top: 6+(20*tt)+'%',
				height: '15%',
				backgroundImage: '/button.png',
				backgroundFocusedImage: '/button-down.png',
				backgroundSelectedImage: '/button-down.png'
			});
			button.addEventListener("click", function(){ 
				Ti.App.code += this.title;
			});
		break;
		case 12:
			var button = Ti.UI.createButton({
				title: 'Passport',
				//color: '#ffffff',
				width: '25%',
				left: 7+(30*(tl-1))+'%',
				top: 6+(20*tt)+'%',
				height: '15%'
			});
			button.addEventListener("click", function(){ 
				var attempt = new PassPort(Ti.App.code);
				Ti.App.code = '';
			});
		break;
		default:
			var button = Ti.UI.createButton({
				title: ""+i+"",
				//backgroundImage:"images/arcade-button.png",
				width: '25%',
				left: 7+(30*(tl-1))+'%',
				top: 6+(20*tt)+'%',
				height: '15%',
				backgroundImage: '/button.png',
				backgroundFocusedImage: '/button-down.png',
				backgroundSelectedImage: '/button-down.png'
			});	
			button.addEventListener("click", function(){ 
				Ti.App.code += this.title;
			});
		}


		self.add(button);
	}

	
	return self;
}

module.exports = FirstView;
