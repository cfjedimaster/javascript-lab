$(document).ready(function() {

	function Note(title, body) {
		var self = this;

		self.title = ko.observable(title);
		self.body = ko.observable(body);
		self.created = new Date();

		self.formattedDate = ko.computed(function() {
			var date = self.created;
			return moment(date).format("MMMM Do YYYY, h:mm a");
		});

	}

	
	function Notebook(title) {
		var self = this;

		self.title = ko.observable(title);

		self.notes = ko.observableArray([
			new Note("Note 1", "Body 1")
		]);
		
		//self.selectedNote = ko.observable(0);
		self.selectedNote = ko.observable();
		self.viewNote = function(note) {
			self.selectedNote(note);
		}
		

		self.titleToAdd = ko.observable("");
		self.bodyToAdd = ko.observable("");
		self.addNote = function() {
			self.notes.push(new Note(self.titleToAdd(), self.bodyToAdd()));
			self.titleToAdd("");
			self.bodyToAdd("");
		}

		self.removeNote = function(note) { 
			self.notes.remove(note); 
			if(note === self.selectedNote()) self.selectedNote(null);
		}

	}


	ko.applyBindings(new Notebook("Main"));
	

});