var Actions = Backbone.Collection.extend({
  model: Action,

  getActionsByCard(id) {
    //console.log("Cards Collection - getCardsByParent(" + id + ")");
    return this.where({parent_id: String(id)});
  },

  getActionsBySubscriber() {
    return this.where({subscribers: "true"});
  },

  //BOARD ACTIONS-------------------------------------------
  createNewAction(details) {
    var newAction = new Action(details);
    newAction.set("timestamp", new Date());

    var context = this;
    $.ajax({
      url: '/actions',
      type: 'POST',
      data: newAction.toJSON(),
      success: function(json) {
        context.add(json)
      }
    });
  },

  //LIST ACTIONS--------------------------------------------
  newCard(type, list_id, card_id_1, subscribers) {
    console.log("ACTIONS: newCard()")
    var context = this;
    
    //Create New Action Template
    var newAction = new Action;
    newAction.set({
      "type": type,
      "list_id": list_id,
      "card_id_1": card_id_1,
      "subscribers": true,
      "timestamp": new Date()
    });

    //Save it to DB
    $.ajax({
      url: '/actions',
      type: 'POST',
      data: newAction.toJSON(),
      success: function(json) {
        //Update the actions collection
        context.add(json)
      }
    });
  },

  initialize: function() {
    this.on('update', function(){this.trigger('actions_updated')} );
  } 

  // HELPERS--------------------------------------------------------


});