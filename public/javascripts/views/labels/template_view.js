var labelTemplateView = Backbone.View.extend({
  tagName: 'li',

  render: function() {
    this.updateClass();
    this.$el.html(this.template({ 
      label: this.model.toJSON(),
      class: this.class
    }));
  },

  //Re-Render the view upon a change
  reRender: function() {
    this.updateClass();
    this.$el.html(this.template({ 
      label: this.model.toJSON(),
      class: this.class
    }));
  },

  initialize: function(options) {
    //this.model.view = this;
    this.options = options;
    this.render();
    this.listenTo(App.board, "blind_updated", this.reRender);
    this.listenTo(this.model, "change", this.reRender);
    return this;
  },

  //HELPERS----------------------------------------------------

  //Check if blind details are on or off.  Update class name
  updateClass: function() {
    if (App.board.toJSON().blind_toggle === "true") {
      this.class =  this.model.toJSON().class + " blind"
    } else {
      this.class = this.model.toJSON().class
    }
  }

})