var ActionView = Backbone.View.extend({
  tagName: 'li',
  className: 'action',
//  template: App.templates.action,
  events: {
    "click a": 'showCardDetails', 
  },

  //EVENTS-------------------------------------------------

  showCardDetails: function(e) {
    console.log("VIEW: ACTION: - showCardDetails()");
    e.preventDefault();
    var modelId = $(e.target).attr('cardId');
    if (this.options.card_model !== undefined) {
      if (this.options.card_model.get('id') === String(modelId)) {
        return
      }
    }
    var cardModel = App.cards.get(modelId);
    new CardDetailView({ model: cardModel});
  },

  //RENDERING----------------------------------------------

  render: function() {
    //console.log('actions/' + this.model.get('type'));
    this.template = App.templates['actions/' + this.model.get('type')];

    //Prepare data for tempates
    var card_1 = App.cards.get(this.model.get('card_id_1'));
    var card_2 = App.cards.get(this.model.get('card_id_2'));
    var list = App.lists.get(this.model.get('list_id'));
  
    this.$el.html(this.template({ 
      action: this.model.toJSON(),
      card_1: card_1 ? card_1.toJSON() : "",
      card_2: card_2 ? card_2.toJSON() : "",
      list: list ? list.toJSON() : "",
      time_since: App.getTimeSince(this.model.get('timestamp'))
    }));
  },

  initialize: function(options) {
    this.options = options
    this.render();
    return this
  }
})