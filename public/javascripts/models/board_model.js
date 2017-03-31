var Board = Backbone.Model.extend({
  
  saveListOrderWithoutTrigger: function(newOrder) {
    this.set('listOrder', newOrder, {silent: true});
    this.save({silent: true});
  },

  //Toggle whether labels color blind is visible
  //Save setting
  toggleBlind: function() {
    if (this.get('blind_toggle') === "true") {
      this.set('blind_toggle', "false");
    } else
    {
      this.set('blind_toggle', "true");
    }
    this.trigger('blind_updated');
  },

  //Save any changes to the DB
  save: function() {
    console.log("MODEL - BOARD - save()");
    $.ajax({
      url: '/board',
      type: 'PUT',
      data: this.toJSON(),
      success: function(json) {
        //App.board = new Board(json);
      }
    });
  }, 

  initialize: function() {
    this.on('change', this.save)
  }

});