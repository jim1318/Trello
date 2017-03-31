var labelsSummaryView = Backbone.View.extend({
  tagName: 'ul',
  className: 'label_summary_list',
  events: { 
  },
  //EVENTS--------------------------------------------------

  //RENDERING------------------------------------------------
  render: function() {
    //console.log("VIEW: LABELS_SUMMARY_VIEW: - render()");
    this.$el.prependTo(this.options.card_el)
    this.renderLabels();
  },

  renderLabels: function() {
    var labels = JSON.parse(this.options.card_model.toJSON().labels);
    var context = this;
    if (labels) {
      labels.forEach( function(label_id) {
        var newView = new labelSummaryView ({
          model: App.templateLabels.get(label_id),
          card_id: context.options.card_model.toJSON().id
        });
        //Attach/Render the View
        newView.$el.appendTo(context.$el);
      });
    }
  },

  initialize: function(options) {
    this.options = options;
    this.render();
    return this;
  }


  //HELPERS----------------------------------------------------

})



