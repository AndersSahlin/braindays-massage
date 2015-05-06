/// <reference path="../lib/definitions/collections.d.ts" />

if (Appointments.findOne() == null) {

	Appointments.insert({
		date: new Date('2015-05-06T08:30'),
		bookedBy: 'Alva'
	});

	Appointments.insert({
		date: new Date('2015-05-06T09:00'),
		bookedBy: null
	});

	Appointments.insert({
		date: new Date('2015-05-06T09:30'),
		bookedBy: 'Erik'
	});

	Appointments.insert({
		date: new Date('2015-05-06T10:00'),
		bookedBy: null
	});

}