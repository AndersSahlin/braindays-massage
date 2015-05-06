/// <reference path="../../lib/definitions/collections.d.ts" />
/// <reference path="../../lib/definitions/moment.d.ts" />

Template.registerHelper("dateFormat", (date:Date, format:string) => {
	return moment(date).format(format);
});