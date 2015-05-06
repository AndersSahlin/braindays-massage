/// <reference path="meteor.d.ts" />

interface Appointment {
	_id: string;
	date: Date;
	bookedBy: string;
}

declare var Appointments: Mongo.Collection<Appointment>;