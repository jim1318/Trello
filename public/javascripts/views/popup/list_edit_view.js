var listEditView = Backbone.View.extend({
  template: App.templates['popup/list_edit'],
  id: 'popup',
  className: 'list_edit',
  tagName: 'div',
  events: {
    'click a.close_pop': 'closeWindow',
    'click a#list_edit_add': 'showAddCard',
    'click a#list_edit_subscribe': 'toggleListSubscribe',
    'click a#list_edit_copy': 'showCopyList',
    'click a#list_edit_move_cards': 'showMoveCards',
    'click a#list_edit_archive_cards': 'archiveCards',
    'click a#list_edit_archive_list': 'archiveList', 
    'click a#move_all_cards': 'moveAllCards',
    'click a#copy_list': 'copyList'
  },

  //EVENTS--------------------------------------------------
  closeWindow: function(e) {
    console.log("VIEW: LIST_EDIT: - closeWindow()")
    e.preventDefault();
    e.stopPropagation();  //Needed so that parent window is not closed
    this.remove();
  },

  showAddCard: function(e) {
    console.log("VIEW: LIS_EDIT: - showAddCard()");
    this.options.parent.showAddCard(e);
    this.closeWindow(e);
  },

  toggleListSubscribe: function(e) {
    console.log("VIEW: LIST_EDIT: - toggleListSubscribe()")
    e.preventDefault();
    this.model.toggleSubscribe();
    this.reRender();
  },

  showCopyList: function(e) {
    console.log("VIEW: LIST_EDIT: - showCopyList()")
    var template = App.templates['popup/copy_list']
    this.$el.html(template({
      list: this.model.toJSON()
    }));
    e.preventDefault();
  },

  copyList: function(e) {
    console.log("VIEW: LIST_EDIT: - copyList()")
    e.preventDefault();
    var newListName = $('#copy_list_name').val();
    this.model.collection.copyList(this.model, newListName);
    this.closeWindow(e) 
  },

  showMoveCards: function(e) {
    console.log("VIEW: LIST_EDIT: - showMoveCards()")
    e.preventDefault(); 
    var template = App.templates['popup/move_all_cards']
    this.$el.html(template({
      lists: App.lists.toJSON()
    }));
  },

  moveAllCards: function(e) {
    console.log("VIEW: LIST_EDIT: - moveCards()")
    e.preventDefault(); 
    var newListId = $('select').find(':selected').val();
    App.cards.moveAllCards(this.model.get('id'), newListId);
    this.closeWindow(e) 
  },

  archiveCards: function(e) {
    console.log("VIEW: LIST_EDIT: - archiveCards()")
    e.preventDefault(); 
    App.cards.archiveAllCards(this.model.get('id'));
    this.closeWindow(e) 
  },

  archiveList: function(e) {
    console.log("VIEW: LIST_EDIT: - archiveList()")
    e.preventDefault();
    this.model.archive(); 
    this.closeWindow(e) 
  },

  //RENDERING-----------------------------------------------
  render: function() {
    console.log("VIEW: LIST_EDIT: - render()");
    this.$el.html(this.template({
      subscribed: this.model.toJSON().subscribed === "true"
    }));
    //this.$el.appendTo($(this.options.e.target).closest('li.list')); //.closest('.card_d_labels')
    var offset = $(this.options.e.target).offset();
    this.$el.css({
      'top': offset.top + 20 + "px",
      'left': offset.left -10 + "px"
    }),
    this.$el.prependTo($('body'));
  },

  reRender: function() {
    this.$el.html(this.template({
      subscribed: this.model.toJSON().subscribed === "true"
    }));
  },

  initialize: function(options) {
    this.options = options;
    this.render();
  }


  //HELPERS----------------------------------------------------

})