var Lists = Backbone.Collection.extend({
  model: List,

  //Create a new list on server
  addNewList: function(name) {
    console.log("COLLECTION: LISTS: - create()");
   
    var coll = this; 
    var newList = new List;
    if (name) { newList.set('name', name) };
    var success = function(json) {
      coll.add(json);
    }

    this.saveNewList(newList, success);
  },

  copyList: function(oldModel, newListName) {
    console.log("COLLECTION: LISTS: - copy()");
    
    var coll = this;
    var newList = new List;
    newList.set({
      'name': newListName,
      'subscribed': oldModel.get('subscribed'),
      "cardOrder": oldModel.get('cardOrder'),
      "archived": oldModel.get('archived')
    });
    var success = function(json) {
      coll.add(json);
      newList = coll.at(coll.length - 1);

      //Now Copy all the individual cards over!
      var cards = App.cards.getCardsByParent(oldModel.get('id'));
      cards.forEach ( function(card) {
        App.cards.copyCard(card, card.get('name'), true, true, newList.get('id'));
      });
    }

    this.saveNewList(newList, success);
  },

  //----------------------------------------------------------------------------------------------

  //Save new list to DB
  saveNewList: function(newList, success) {
    $.ajax({
      url: '/lists',
      type: 'POST',
      data: newList.toJSON(),
      success: success
    });
  },
});