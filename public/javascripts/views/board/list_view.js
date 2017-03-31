var ListView = Backbone.View.extend({
  tagName: 'li',
  className: 'list .list_handle',
  attributes: function() {
    return { 'list_id': this.model.id }
  },
  template: App.templates['board/list'],
  events: {
    //List Name Exit
    'click .list_name_holder h1': 'showNameEdit',
    'mouseleave .list_name_holder': 'updateName',
    'keyup .list_name_holder textarea': 'updateNameEnter',

    'click a.add_card': 'showAddCard',
    'click a#add_new_card': 'submitAddCard',
    'click a.close_button': 'hideAddCard',
    'click a.list_actions': 'showListEdit',
  },

  // EVENT METHODS-----------------------------------------
  showNameEdit: function(e) {
    //console.log("VIEW: LIST: - showNameEdit()");
    e.preventDefault();
    var $textarea = $(e.target).closest('.list_name_holder').find('textarea');
    var $h1 = $(e.target).closest('.list_name_holder').find('h1');
    $h1.hide();
    $textarea.show();
  },

  //Call UpdateName when the user presses enter key
  updateNameEnter: function(e) {
    if(e.which == 13) { //Check if enter key is pressed
      this.updateName(e);
    }
  },

  updateName: function(e) {
    //console.log("VIEW: LIST: - updateName()");
    var $textarea = $(e.target).closest('.list_name_holder').find('textarea');
    var $h1 = $(e.target).closest('.list_name_holder').find('h1');
    var newName = $textarea.val();
    newName = newName.replace(/[\n\r]/g, '');  //remove extra lines
    if (newName !== this.model.get('name')) {
      this.model.set('name', newName);
    }
  },

  showAddCard: function(e) {
    //console.log("VIEW: LIST: - showAddCard()");
    e.preventDefault();
    this.$el.find('div.card_composer').fadeIn(400);
  },

  hideAddCard: function(e) {
    //console.log("VIEW: LIST: - hideAddCard()");
    e.preventDefault();
    this.$el.find('div.card_composer').fadeOut(100);
  },

  submitAddCard: function(e) {
    //console.log("VIEW: LIST: - submitAddCard()");
    var $textArea = $(e.target).closest('.card_composer').find('textarea');
    var modelName = $textArea.val();
    console.log(modelName);
    if (modelName !== "") {
      App.cards.create(modelName, this.model.get('id'), this.model.get('subscribed'));
      $textArea.val("");
      this.hideAddCard(e);
    }
  },

  showListEdit: function(e) {
    //console.log("VIEW: LIST: - showListEdit()")
    e.preventDefault();
    //Remove the view if it's already shown
    if (this.listEditView) { this.listEditView.remove();}

    //Display teh view
    this.listEditView = new listEditView ({
      model: this.model,
      parent: this,
      //Will display itself absolutely compared to calling view.
      e: e,
    });
  },

  // RENDER METHODS----------------------------------------

  render: function() {
    //console.log("VIEW: LIST: - render()");
    //Dispay the list
    this.$el.html(this.template({ 
      list: this.model.toJSON(),
      subscribed: this.model.toJSON().subscribed === "true"
    }));
    this.$el.insertBefore('.board_view_add_list');
  
    //Display each card and make sortable
    this.renderCards();
    this.makeCardsSortable();
  },

  reRender: function() {
    //console.log("VIEW: LIST: - reRender()"); 

    //Do not re-render if archived
    if (this.model.get("archived") === "true") {
      this.remove();
    }
    else {
      this.$el.html(this.template({ 
        list: this.model.toJSON(),
        subscribed: this.model.toJSON().subscribed === "true"
      }));
      this.renderCards();
      this.makeCardsSortable();
    }
  },

  //Render the cards
  renderCards: function() {
    //Moved getting cards into the model initialization
    var cards = App.cards.getCardsByParent(this.model.id);
    var context = this;

    if (cards) {
      cards.forEach(function(card) {
        new CardSummaryView({
          model: card,
        });
      });
    }
  },

  makeCardsSortable: function(type) {
    //console.log("VIEW: LIST: - makeCardsSortabe()");
    var el = this.$el.find('ul.list_card_holder').get(0);
    var context = this;
    var model = this.model;

    //https://github.com/RubaXa/Sortable/issues/362

    var listSortable = Sortable.create(el, {
      animation: 150,
      dragglable: '.card_summary',
      handle: '.card_handle',
      filter: '#popup',
      group: 'card',
      sort: true,
      dragClass: 'drag_card',
      ghostClass: 'ghost_card',
      dataIdAttr: 'card_id',  //THIS WAS KEY TO GET EVERYTHING WORKING ;()

      //load and save order
      store: {
        get: function(listSortable) {
          //console.log("SORTABLE: LIST: - get()")   
          //Save Card order when a new cards is added
          if (type === "new_card") {
            console.log("SORT _ SAVE");
            listSortable.save(); 
          }
          var order = model.toJSON().cardOrder;
          return order ? order.split('|') : [];
        },
        set: function(listSortable) {
          //console.log("SORTABLE: LIST: - set()")
          var order = listSortable.toArray();
          model.saveCardOrderWithoutTrigger(order.join('|'));
        }
      },

      //Moving card from one list to antoher
      onAdd: function(e) {
        console.log("SORTABLE: LIST: - onADD()")
        listSortable.save();      //needs to come before moveCard();
        context.moveCard(e);
      },
    });
  },

  moveCard: function(e) {
    //console.log("SORTABLE: LIST: - moveCard()");
    var cardId = $(e.item).attr('card_id');
    var card = App.cards.get(cardId);
    var destinationId = $(e.item).closest('ul').attr('list_id');
    card.updateParentWithoutTriggers(destinationId)
  },

  newCardSort: function() {
    this.makeCardsSortable("new_card")
  },

  initialize: function() {
    this.render();
    this.listenTo(this.model, 'change', this.reRender.bind(this));
    this.listenTo(App.cards, 'card_created', this.newCardSort.bind(this));  //Used to sort cards when new one is added
    this.listenTo(this.model, 'card_unarchived', this.reRender.bind(this)); //Re-render when a card is unarchived
    return this;
  }

})