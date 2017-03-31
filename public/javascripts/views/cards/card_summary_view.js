var CardSummaryView = Backbone.View.extend({
  tagName: 'li',
  className: 'card_summary card_handle',
  attributes: function() {
    return { 
      'card_id': this.model.id
     }
  },
  template: App.templates['cards/card_summary'],
  events: {
    'click': 'showCardDetails',
  },
  parent_id: 0,

  showCardDetails: function(e) {
    //console.log("VIEW: CARD_SUMMAR: - showCardDetails()");
    e.preventDefault();
    new CardDetailView({ model: this.model});
  },

  render: function() {
    var card = this.model.toJSON();
    var date = new Date(card.due_date);
    var now = new Date();
    
    this.$el.html(this.template({
      card: card,
      late: this.model.isLate(),
      month: this.model.getMonth(),
      day: date.getDate(),
      year: date.getFullYear() > now.getFullYear() ? date.getFullYear() : "", 
      subscribed: this.model.subscribed(),
      comments: this.numComments()
    }));
    var $parentList = $("ul[list_id='" + this.model.toJSON().parent_id + "']");
    this.$el.appendTo($parentList);
    this.renderLabelSummary();
  },

  reRender: function() {
    //console.log("VIEW: CARD_SUMMARY: - reRender()")
    
    //Don't re-render if card is archived
    if (this.model.get('archived') === "true") {
      this.remove();
    }
    else {
      var card = this.model.toJSON();
      var date = new Date(card.due_date);
      var now = new Date();

      this.$el.html(this.template({
        card: card,
        late: this.model.isLate(),
        month: this.model.getMonth(),
        day: date.getDate(),
        year: date.getFullYear() > now.getFullYear() ? date.getFullYear() : "", 
        subscribed: this.model.subscribed(),
        comments: this.numComments()
      }));
      
      this.reRenderLabelSummary();
    }
  },

  renderMoved: function() {
   //console.log("VIEW: CARD_SUMMARY: - renderMoved()");
    this.off();
    this.render();
    this.bind();
  },

  //Render the label section
  renderLabelSummary: function() {
    this.labelsView = new labelsSummaryView({
      card_model: this.model,
      card_el: this.$el
    });
  },

  reRenderLabelSummary: function() {
    //console.log('VIEW: CARD_SUMMARY: - reRenderLabelSummary()');
    this.labelsView.remove();
    this.renderLabelSummary();
  },

  bind: function(options) {
    this.listenTo(this.model, 'change', this.reRender.bind(this));
    this.listenTo(this.model, 'card_moved', this.renderMoved.bind(this));
    this.listenTo(this.model, 'comment_created', this.reRender.bind(this));
    this.listenTo(this.model, 'card_archived', this.reRender.bind(this));
  },

  initialize: function(options) {
    this.render();
    this.bind();
  },

  // HELPERS-------------------------------------------------
  numComments: function() {
    return App.comments.getCommentsByCard(this.model.id).length;
  },
})