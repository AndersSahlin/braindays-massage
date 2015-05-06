/// <reference path="../lib/definitions/collections.d.ts" />
/// <reference path="../lib/definitions/meteor.d.ts" />

Meteor.publish("appointments", function() {
  
  var start = new Date();
  start.setHours(0);
  start.setMinutes(0)
  start.setSeconds(0);
  var end = new Date(start.getTime() + 7*24*60*60*1000);  
  
  return Appointments.find({
    $and : [
      {date: { $gte: start }},
      {date: { $lte: end }}
    ]
  });
});