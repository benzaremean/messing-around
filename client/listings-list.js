Template.listingsList.helpers({
	alllistings: function() {
		return Listings.find();
	}
});