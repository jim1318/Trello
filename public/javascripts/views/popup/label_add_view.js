var labelAddView = Backbone.View.extend({
  template: App.templates['popup/label_add'],
  el: '#popup',
  events: {
    'click a.close_pop': 'closeWindow',
    'click a.go_back': 'goBack',
    'click a.color_edit': "toggleColor",
    'click a.green_button': "createLabel",
  },

  //EVENTS--------------------------------------------------
  toggleColor: function(e) {
    e.preventDefault();
    console.log("toggleColor");
    $('a.selected_color').removeClass('selected_color');
    $(e.target).addClass('selected_color');
  },

  closeWindow: function(e) {
    console.log("VIEW: LABELS_SELECTOR: - closeWindow()")
    e.preventDefault();
    e.stopPropagation();  //Needed so that parent windo is not closed
    this.options.selector_view.remove();
  },

  createLabel: function(e) {
    console.log("ADD LABEL");
    e.preventDefault();
    var newColor = $('#popup').find('.selected_color').attr('color');
    var newName = $('#popup').find('textarea').val();
    if (newColor && (newName !== "")) {
      App.templateLabels.createNew(newColor, newName);
      this.goBack(e);
    }
  },

  goBack: function(e) {
    console.log("GO BACK");
    e.preventDefault();
    this.off();
    this.$el.empty();
    this.options.selector_view.reRender();
  },

  //RENDERING-----------------------------------------------
  render: function() {
    console.log("VIEW: LABELS_EDIT: - render()");
    this.$el.empty();
    
    var colors = [];
    var context = this;
    
    //Deal with blind css
    var addBlind = ""
    if (App.board.toJSON().blind_toggle === "true") {
        addBlind = " blind";
    } else {
      addBlind = "";
    }

    App.board.toJSON().colors.forEach( function(color) {
      var colorObj = {};
      colorObj.color = color
      colorObj.css_color =  color + addBlind;
      colors.push(colorObj);
    });

    this.$el.html(this.template({
     colors: colors
    }));
  },

  initialize: function(options) {
    this.options = options;
    this.render();
  }
  //HELPERS----------------------------------------------------

})