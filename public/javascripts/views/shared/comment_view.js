var CommentView = Backbone.View.extend({
  tagName: 'li',
  className: 'comment',
  template: App.templates['shared/comment'],
  events: {
    'click a': 'showCardDetails'
  },

  //EVENTS--------------------------------------------------------------------
  showCardDetails: function(e) {
    console.log("VIEW: COMMENT: - showCardDetails()");
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

  //RENDER_-------------------------------------------------------------------
  render: function() {

    var card = App.cards.get(this.model.get('parent_id'));

    this.$el.html(this.template({ 
      comment: this.model.toJSON(),
      card: card ? card.toJSON() : "",
      time_since: App.getTimeSince(this.model.get('timestamp'))
    }));
  },

  initialize: function(options) {
    this.options = options;
    this.render();
    return this;
  },

  //HELPERS-------------------------------------------------------------------
})