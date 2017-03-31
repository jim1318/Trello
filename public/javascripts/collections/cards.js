var Cards = Backbone.Collection.extend({
  model: Card,
  
  getCardsByParent(id) {
    //console.log("Cards Collection - getCardsByParent(" + id + ")");
    return this.where({
      parent_id: String(id),
      archived: "false"
    });
  },

  moveAllCards: function(listId, newId) {
    console.log("COLLECTION: LIST - moveAllCards()");
    var cards = this.getCardsByParent(listId);
    cards.forEach( function(card) {
      card.moveCard(newId);
    });
  },

  archiveAllCards: function(listId) {
    console.log("COLLECTION: LIST - archiveAllCards()");
    var cards = this.getCardsByParent(listId);
    cards.forEach( function(card) {
      card.toggleArchive();
    });
  },

  //Used when deleting a label
  //Need to remove the label from all cards
  removeLabels: function(id) {
    this.forEach( function(card){
      var labels = JSON.parse(card.get('labels'));
      if (labels.indexOf(+id) !== -1) {
        console.log("REMOVING LABEL");
        var newLabels = _.without(labels, +id);
        card.set('labels', JSON.stringify(newLabels));
      }
    });   
  },

  copyCard: function(originalCard, newName, copyComments, copyLabels, newListId) {
    console.log("COLLECTION: CARDS: - copy()");

    //Create Clone of original card
    var newCard = new Card;

    //Update the name & parent
    newCard.set({
      'parent_id': newListId,
      'name': newName,
      'description': originalCard.get('description'),
      'due_date': originalCard.get('due_date'),
      'labels': originalCard.get('labels'),
      'subscribed': originalCard.get('subscribed'),
      'archived': originalCard.get('archived')
    });

    //Delete Labels if not copying
    if (!copyLabels) {
      newCard.set({
        'labels': []
      });
    }

    //Copy comments if required
    if (copyComments) {
      oldComments = App.comments.getCommentsByCard(originalCard.get('id')); 
    }

  var coll = this;
   $.ajax({
        url: '/cards',
        type: 'POST',
        data: newCard.toJSON(),
        

        success: function(json) {
          //create New Card View!
          App.cards.add(json);            //Add to the app collection
          newCard = coll.at(coll.length - 1);

          new CardSummaryView({
            model: newCard
          });

          //Copy comments if required
          if (copyComments) {
            oldComments = App.comments.getCommentsByCard(originalCard.get('id'));
            oldComments.forEach( function(comment) {
              App.comments.cloneComment(comment, newCard.get('id'));
            });
          }

          coll.trigger('card_created');   //Trigger update.

          //Create New Action
          App.actions.createNewAction({
            'type': 'copy_card',
            'list_id': newCard.get('parent_id'),
            'list_name_old': App.lists.get(+ originalCard.get('parent_id')).get('name'),
            'parent_id': newCard.get('id'),
            'card_id_1': newCard.get('id'),
            'card_id_2': originalCard.get('id'),
            'subscribers': false
          });
        }
      });
  },

  //Add new card model to collection
  //Save new card data to DB
  //Create a new list on server
  //Save list to collection
  create: function(card_name, parent_id, subscribed) {
    console.log("COLLECTION: CARDS: - create()");
    var coll = this;
    
    var newCard = new Card;
    newCard.set('name', card_name);
    newCard.set('parent_id', parent_id);
    $.ajax({
      url: '/cards',
      type: 'POST',
      data: newCard.toJSON(),
      success: function(json) {
        //create New Card View!
        App.cards.add(json);            //Add to the app collection
        coll.add(json);                 //Add to the local collection
        newCard = coll.at(coll.length - 1);
        new CardSummaryView({
          model: newCard
        });
        coll.trigger('card_created');   //Trigger update.

        //Create New Action
        if (subscribed) {
          App.actions.createNewAction({
            'type': 'add_card',
            'list_id': parent_id,
            'parent_id': newCard.get('id'),
            'card_id_1': newCard.get('id'),
            'subscribers': true
          });
        }
      }
    });
  },
});