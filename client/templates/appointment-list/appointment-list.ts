/// <reference path="../../../lib/definitions/collections.d.ts" />

Template['appointmentList'].helpers({
	appointments: () => {
		return Appointments.find({}, { sort: { date: 1 } }).map((appointment:Appointment) => {
			return {
				id: appointment._id,
				date: appointment.date,
				bookedBy: appointment.bookedBy || 'ledigt'
			};
		});
	}
});

Template['appointmentList'].events({
	'click .appointment': function() {
		Meteor.call('bookAppointment', this.id);
	}
});