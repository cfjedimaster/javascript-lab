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
		
		self.selectedNote = ko.observable(0);
		self.viewNote = function(note) {
			for(var i=0; i<self.notes().length; i++) {
				if(self.notes()[i] == note) { self.selectedNote(i); break; }
			}
		}
		

		self.titleToAdd = ko.observable("");
		self.bodyToAdd = ko.observable("");
		self.addNote = function() {
			self.notes.push(new Note(self.titleToAdd(), self.bodyToAdd()));
			self.titleToAdd("");
			self.bodyToAdd("");
		}

		self.removeNote = function(note) { self.notes.remove(note); }

		/*
		self.selectedNote = ko.observable("");
		self.selectedNoteBody = ko.observable("");

		self.viewNote = function(note) {
			console.dir(note.title());
			self.selectedNote(note.title());
			self.selectedNoteBody(note.body());
		}
		*/
		/*
		self.picked = -1;
		self.selectedNote = ko.observable("");
		self.viewNote = function(note) {
			console.log(note.title());
			self.selectedNote(note);
		}
		*/

	}


	ko.applyBindings(new Notebook("Main"));
	

});