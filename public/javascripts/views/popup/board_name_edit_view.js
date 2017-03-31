var nameEditView = Backbone.View.extend({
  template: App.templates['popup/name_edit'],
  id: 'popup',
  className: 'name_edit',
  tagName: 'div',
  events: {
    'click a.close_pop': 'closeWindow',
    'click a.name_edit': 'updateName'
  },

  //EVENTS--------------------------------------------------

  updateName: function(e) {
    e.preventDefault();
    var newName = $(e.target).closest('#popup').find('textarea').val();
    if (newName !== this.model.get('name')) {
      this.model.set('name', newName);
      this.closeWindow(e);
    }
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
      board: this.model.toJSON()
    }));   
    
    var offset = $(this.options.e.target).offset();
    this.$el.css({
      'top': offset.top + 30 + "px",
      'left': offset.left + 25 + "px"
    }),
    this.$el.prependTo($('body'));
  },

  initialize: function(options) {
    this.options = options;
    this.render();
  }


  //HELPERS----------------------------------------------------

})