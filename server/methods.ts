/// <reference path="../lib/definitions/collections.d.ts" />

Meteor.methods({
	addAppointment: function (date:Date) {
		check(date, Date);
		
		if (Meteor.user() == null) {
			return;
		}

		Appointments.insert({
			date: date,
			bookedBy: null,
		});
	},
	bookAppointment: function (id) {
		if (Meteor.user() == null) {
			return;
		}
		
		var me = Meteor.user().emails[0].address;
		var appointment = Appointments.findOne(id);
		var bookedBy = me;
		
		if(appointment.bookedBy == me)
			bookedBy = null;
		else if(appointment.bookedBy != null)
			return;
		
		Appointments.update(id, {
			$set: { bookedBy: bookedBy }
		});
	}
});