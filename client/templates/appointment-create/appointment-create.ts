/// <reference path="../../../lib/definitions/collections.d.ts" />
/// <reference path="../../../lib/definitions/moment.d.ts" />

Template['appointmentCreate'].events({
	'submit form': (event:Event) => {
		event.preventDefault();
		
		var date = event.target['date'].value;
		date = moment(date).toDate();
		
		Meteor.call('addAppointment', date);
		
		return false;
	}
});