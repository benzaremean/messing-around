Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/business/signup', function () {
  this.render('addAListing');
});

Router.route('/listings', function () {
  this.render('listingsList');
});

// Router.route('/listings/:_id', function () {
//   var item = Listings.findOne({_id: this.params._id});
//   this.render('listing', { data: item });
// });

Router.route('/listings/:_id', {where: 'client'})
  .get(function () {
    // this.response.end('get request\n');
    var item = Listings.findOne({_id: this.params._id});
  	this.render('listing', { data: item });
  })
  .post(function () {
    this.response.end('post request\n');
  });