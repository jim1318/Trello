var copyCardView = Backbone.View.extend({
  template: App.templates['popup/copy_card'],
  id: 'popup',
  className: 'copy_card',
  tagName: 'div',
  events: {
    'click a.close_pop': 'closeWindow',
    "click a#copy_card": 'copyCard'
  },

  //EVENTS--------------------------------------------------

  copyCard: function(e) {
    console.log("VIEW: COPY_CARD: - copyCard()");
    var newName = $('#copy_card_name').val();
    var copyComments = $('input[name="comments"]').prop('checked');
    var copyLabels = $('input[name="labels"]').prop('checked');
    var newListId = $('select').find(':selected').val();

    console.log(newName);
    this.model.collection.copyCard(this.model, newName, copyComments, copyLabels, newListId);
    this.closeWindow(e);
  },

  closeWindow: function(e) {
    console.log("VIEW: COPY_CARD: - closeWindow()")
    e.preventDefault();
    e.stopPropagation();  //Needed so that parent windo is not closed
    this.options.prev_view.fadeout();  //Close hte card detail modal
    this.remove();
  },

  //RENDERING-----------------------------------------------
  render: function() {
    console.log("VIEW: COPY_CARD: - render()");
    this.$el.html(this.template({
      card: this.model.toJSON(),
      num_labels: JSON.parse(this.model.toJSON().labels).length,
      num_comments: App.comments.getCommentsByCard(this.model.toJSON().id).length,
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