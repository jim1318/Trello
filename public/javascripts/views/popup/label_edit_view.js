var labelEditView = Backbone.View.extend({
  template: App.templates['popup/label_edit'],
  tagname: 'div',
  events: {
    'click a.close_pop': 'closeWindow',
    'click a.go_back': 'goBack',

     //Label Edit View
    'click a.color_edit': "toggleColor",

    //Label Create View
    'click a#save_label': "saveLabel",
    'click a#delete_label': "deleteLabel"
  },

  //EVENTS--------------------------------------------------
  toggleColor: function(e) {
    e.preventDefault();
    console.log("toggleColor");
    $('a.selected_color').removeClass('selected_color');
    $(e.target).addClass('selected_color');
  },

  closeWindow: function(e) {
    console.log("VIEW: LABEL_EDIT: - closeWindow()")
    e.preventDefault();
    e.stopPropagation();  //Needed so that parent windo is not closed
    this.options.selector_view.remove();
  },

  saveLabel: function(e) {
    console.log("VIEW: LABEL_EDIT: saveLabel()");
    e.preventDefault();
    var newColor = $('#popup').find('.selected_color').attr('color');
    var newName = $('#popup').find('textarea').val();
    if (newColor !== this.model.get('class') | newName !== this.model.get('name')) {
      this.model.set({
        'class': newColor,
        'name': newName
      })
    }
    this.goBack(e);
  },

  deleteLabel: function(e) {
    console.log("DELETE");
    e.preventDefault();
    App.templateLabels.removeTemplate(this.model);
    this.goBack(e);
  },

  goBack: function(e) {
    console.log("GO BACK");
    e.preventDefault();
    this.remove();
    //this.$el.empty();
    this.options.selector_view.reRender();
  },

  //RENDERING-----------------------------------------------
  render: function() {
    console.log("VIEW: LABELS_EDIT: - render()");
    this.$el.empty();
    
    this.$el.html(this.template({
     label: this.model.toJSON(),
     colors: this.getColors(),
     blind: this.getBlindClass()
    }));
    $('#popup').empty();
    this.$el.appendTo($('#popup'));
  },

  initialize: function(options) {
    this.options = options;
    this.render();
  },

  //HELPERS----------------------------------------------------
  
  //Store Availble & Selected color in an object
  getColors: function() {
    var colors = []
    var context = this;
    App.board.toJSON().colors.forEach( function(color) {
      var colorObj = {};
      colorObj.color = color
      colorObj.selected = (color === context.model.get('class'));
      colors.push(colorObj);
    });
    return colors;
  },

  getBlindClass() {
    return App.board.toJSON().blind_toggle === "true" ? "blind" : "";  
  }

})