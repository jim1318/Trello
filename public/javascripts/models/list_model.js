var List = Backbone.Model.extend({
  defaults: {
    "id": 100,
    "name": 'New List',
    "subscribed": "false",
    "cardOrder": "",
    "cards": [],
    "archived": "false"
  },

  toggleSubscribe: function() {
    if (this.get('subscribed') === "true") {
      this.set('subscribed', "false");
    } else {
      this.set('subscribed', "true");
    }
  },

  archive: function() {
    this.set('archived', "true");

    //Create New Action
    App.actions.createNewAction({
      'type': 'list_archive',
      'list_id': this.get('id'),
      'subscribers': "true"
    });
  },

  saveCardOrderWithoutTrigger: function(newOrder) {
    this.set('cardOrder', newOrder, {silent: true});
    this.save({silent: true});
  },

  //-----------------------------------------------------------------------------

  save: function() {
    console.log("MODEL: LIST: - save()"); 
    $.ajax({
      url: '/lists/' + this.id,
      type: 'PUT',
      data: this.toJSON(),
      success: function(json) { }
    });
  }, 

  initialize: function() {
     _.extend(this, Backbone.Events);
    this.on('change', this.save)
  }
});