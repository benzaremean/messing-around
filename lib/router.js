Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function () {
	this.route('home', { path: '/'});
	this.route('addAListing', { path: '/business/signup' });
	this.route('listing', { 
		path: '/listings/:_id',
		data: function () {
			return Listings.findOne({_id: this.params._id});
		}
	});
	this.route('listingsList', { path: '/listings' });
});