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


Template.listing.events({	
	"click .edit": function (evt, template) {
		evt.preventDefault()
		console.log('yay');
    	// Set the checked property to the opposite of its current value
    	// Tasks.update(this._id, {$set: {checked: ! this.checked}});
  	},
  	"click .delete": function (evt, template) {
  		evt.preventDefault()
  		Meteor.call("deleteListing", function(err, id) {
  			console.log(id);
  		});
  	}
});

