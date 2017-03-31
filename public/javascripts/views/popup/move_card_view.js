var moveCardView = Backbone.View.extend({
  template: App.templates['popup/move_card'],
  id: 'popup',
  className: 'move_card',
  tagName: 'div',
  events: {
    'click a.close_pop': 'closeWindow',
    "click a#move_card": 'moveCard'
  },

  //EVENTS--------------------------------------------------

  moveCard: function(e) {
    console.log("VIEW: MOVE_CARD: - moveCard()");
    var newListId = $('select').find(':selected').val();
    this.model.moveCard(newListId);
    this.closeWindow(e);
  },

  closeWindow: function(e) {
    console.log("VIEW: MOVE_CARD: - closeWindow()")
    e.preventDefault();
    e.stopPropagation();  //Needed so that parent windo is not closed
    this.remove();
  },

  //RENDERING-----------------------------------------------
  render: function() {
    console.log("VIEW: MOVE_CARD: - render()");
    this.$el.html(this.template({
      lists: App.lists.toJSON()
    }));   
    
    var offset = $(this.options.e.target).offset();
    this.$el.css({
      'top': offset.top + 30 + "px",
      'left': offset.left + 5 + "px"
    }),
    this.$el.prependTo($('body'));
  },

  initialize: function(options) {
    this.options = options;
    this.render();
  }


  //HELPERS----------------------------------------------------

})