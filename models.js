Listings = new Mongo.Collection('listings');

if (Meteor.isServer) {
	Meteor.publish('listings',  function() {
		return Listings.find();
	});
};

if (Meteor.isClient) {
	Meteor.subscribe('listings');
};

Meteor.methods({
	createListing: function(businessname, postcode, firstname, lastname, email) {
		return Listings.insert({
			businessname: businessname, 
			postcode: postcode, 
			firstname: firstname,
			lastname: lastname, 
			email: email
		});
	},
	deleteListing: function(_id) {
		console.log('hsgkfjghsjkgfjhgsjkfgj')
		// Listings.remove(_id);	
	}
});