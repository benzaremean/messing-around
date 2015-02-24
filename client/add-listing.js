Template.listingsForm.events({
	'click button': function (evt, template) {
		evt.preventDefault();
		var businessname = template.find('#businessname').value;
		var postcode = template.find('#postcode').value;
		var firstname = template.find('#firstname').value;
		var lastname = template.find('#lastname').value;
		var email = template.find('#youremail').value;
		Meteor.call("createListing", businessname, postcode, firstname, lastname, email, function(err, id) {
  			console.log(id);
  			Router.go('/listings/' + id);
		});
	}
});

