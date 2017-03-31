var labelsSelectorView = Backbone.View.extend({
  template: App.templates['popup/labels_selector'],
  id: 'popup',
  className: 'label_selector',
  tagName: 'div',
  events: {
    'click a.close_pop': 'closeWindow',
    'click .toggle_label': 'toggleLabel',
    'click .edit_label': 'showLabelEdit',
    'click #toggle_blind': 'toggleBlind',
    'click #create_new_label': 'showCreateLabel'
  },

  //EVENTS--------------------------------------------------
  closeWindow: function(e) {
    console.log("VIEW: LABELS_SELECTOR: - closeWindow()")
    e.preventDefault();
    e.stopPropagation();  //Needed so that parent windo is not closed
    this.remove();
  },

  toggleLabel: function(e) {
    console.log("VIEW: LABEL_SELECT_VIEW: - toggleLabel()");
    e.preventDefault();
    e.stopPropagation();
    var labelId = $(e.target).attr('label_id');
    this.options.card_model.updateLabel(labelId);
  },

  showLabelEdit: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var labelId = $(e.target).attr('label_id');
    new labelEditView({
      model: this.collection.get(labelId),
      selector_view: this
    });
  },

  toggleBlind: function(e) {
    e.preventDefault();
    e.stopPropagation();
    App.board.toggleBlind();
  },

  showCreateLabel: function(e) {
    e.preventDefault();
    e.stopPropagation();
    new labelAddView({
      model: this.model,
      selector_view: this
    });
  },

  //RENDERING-----------------------------------------------
  render: function() {
    console.log("VIEW: LABELS_SELECTOR: - Render()");
    this.reRender();
    
    var offset = $(this.options.e.target).offset();
    this.$el.css({
      'top': offset.top + 30 + "px",
      'left': offset.left + 5 + "px"
    }),
    this.$el.prependTo($('body'));
  },

  reRender: function() {
    //console.log("VIEW: LABELS_SELECTOR: - reRender()");
    this.collection = App.templateLabels;
    var blindClass = App.board.toJSON().blind_toggle === "true" ? "blind" : "";  
    this.$el.html(this.template({
      labels: this.collection.toJSON(),
      blind: blindClass
    }));
  },

  initialize: function(options) {
    this.options = options;
    this.listenTo(App.board, "blind_updated", this.reRender);
    this.listenTo(App.templateLabels, 'add', this.reRender.bind(this));
    this.render();
  }


  //HELPERS----------------------------------------------------

})