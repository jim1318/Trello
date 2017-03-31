var Card = Backbone.Model.extend({
  defaults: {
    "id": "-1",
    "parent_id": "-1",
    "name": "",
    "description": "",
    "due_date": "",
    "labels": "[]",
    "subscribed": "false",
    "archived": "false",
    "text": ""
  },

//Actions----------------------------------------------------------------------------------
  setDueDate: function(newDate, newTime) {
    console.log("MODEL: CARD: - setDueDate()");
    var prevDate = this.get('due_date');
    this.set('due_date', newDate + " " + newTime);
    if (prevDate === "") {
      //New Due Date - save action
      App.actions.createNewAction({
        'type': 'new_due_date',
        'parent_id': this.get('id'),
        'card_id_1': this.get('id'),
        'subscribers': this.get('subscribed'),
        'text': this.getDueDate()
      });
    }
    else {
      //Updating Due Date - save action
      App.actions.createNewAction({
        'type': 'edit_due_date',
        'parent_id': this.get('id'),
        'card_id_1': this.get('id'),
        'subscribers': this.get('subscribed'),
        'text': this.getDueDate()
      });
    }
  },

  updateLabel: function(id) {
    //REMOVE/ADD ID from array & Save to DB
    //REMOVE/ADD Label from Collection.
    var id = Number(id);
    var labels = JSON.parse(this.get('labels'));
    
    if (labels.includes(id)) {
      labels = _.without(labels, id);
    } else {
      labels.push(id);
    }

    this.set('labels', JSON.stringify(labels));  // {silent: true}silent to full card doesn't update
    //this.save( {silent: true} );
    //this.trigger('labels_updated');
  },

  toggleSubscribe: function() {
    console.log("MODEL: CARD: - toggleSubscribe()")
    if (this.get('subscribed') === "true") {
      this.set('subscribed', "false");
    } else {
      this.set('subscribed', "true");
    }
  },

  toggleArchive: function() {
    console.log("MODEL: CARD: - toggleArchive()");
    if (this.get('archived') === "true") {
      
      this.set('archived', "false");

      //Create New Action
      App.actions.createNewAction({
        'type': 'unarchive_card',
        'list_id': this.get('parent_id'),
        'card_id_1': this.get('id'),
        'subscribers': this.get('subscribed')
      });
      App.lists.get(this.get('parent_id')).trigger('card_unarchived');
    } 
    else {
      
      var old_parent = this.get('parent_id');
      this.set('archived', "true");

      //Create New Action
      App.actions.createNewAction({
        'type': 'archive_card',
        'parent_id': this.get('id'),
        'list_id': this.get('parent_id'),
        'card_id_1': this.get('id'),
        'subscribers': this.get('subscribed')
      });
    }
  },

  updateParentWithoutTriggers: function(destinationId) {
    var oldListName = App.lists.get(this.get('parent_id')).get('name');
    this.set('parent_id', destinationId, {silent: true});
    this.createMoveAction(oldListName);
    this.save({silent: true});
  },

  moveCard: function(newId) {
    var oldListName = App.lists.get(this.get('parent_id')).get('name');
    this.set('parent_id', newId);
    this.createMoveAction(oldListName);
    this.trigger('card_moved');
  }, 

  createMoveAction: function(oldListName) {
    App.actions.createNewAction({
      'type': 'move_card',
      'parent_id': this.get('id'),
      'list_id': this.get('parent_id'),
      'list_name_old': oldListName,
      'card_id_1': this.get('id'),
      'subscribers': this.get('subscribed')
    });
  },

//HELPER METHODS---------------------------------------------------------------------------------

  //return whether or not the user is subscribed:
  subscribed: function() {
    return this.get('subscribed') === "true";
  },

  //return whether or not the card is archived
  archived: function() {
    return this.get('archived') === "true";
  },

  getHours: function() {
    var longDate = new Date(this.get('due_date'));
    return String(longDate.getHours()).length === 2 ? longDate.getHours() : "0" + String(longDate.getHours());
  },

  getMinutes: function() {
    var longDate = new Date(this.get('due_date'));
    return String(longDate.getMinutes()).length === 2 ? longDate.getMinutes() : "0" + String(longDate.getMinutes());
  },

  getDueDate: function() {
    var month = this.getMonth();
    var date = new Date(this.get('due_date'));
    return month + " " + date.getDate() + ", " + date.getFullYear() + " at " + this.getHours() + ":" + this.getMinutes();
  },

  getMonth: function() {
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dueDate = new Date(this.get('due_date')); 
    var month = dueDate.getMonth();
    return months[month];
  },

  getYear: function() {

  },

  isLate: function() {
    var now = new Date();
    var due = new Date(this.get('due_date'));
    return now - due > 0
  },

//BASICS-------------------------------------------------------------------------------------------------

  //Save any changes to the DB
  save: function() {
    console.log("MODEL: CARD: - save()"); 
    $.ajax({
      url: '/cards/' + this.id,
      type: 'PUT',
      data: this.toJSON(),
      success: function(json) {}
    });
    this.trigger('card_updated');
  },

  initialize: function() {
     _.extend(this, Backbone.Events);
    this.on('change', this.save)
  }
});