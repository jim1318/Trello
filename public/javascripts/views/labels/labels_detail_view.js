 var labelsDetailView = Backbone.View.extend({
  tagName: 'ul',
  className: 'card_details_label_list',
  template: App.templates['labels/labels_detail'],
  events: {
    'click': 'showLabelSelector',
    'click .none a': 'showLabelSelector'
  },

  //EVENTS--------------------------------------------------
  showLabelSelector: function(e) {
    //console.log("VIEW: LABELS_DETAIL: - showLabelSelector()")
    e.preventDefault();

    //Remove the view if it's already shown
    if (this.labelsSelectorView) { this.labelsSelectorView.remove();}

    //Display the view
    this.labelsSelectorView = new labelsSelectorView ({
      collection: App.templateLabels,
      e: e,
      card_model: this.options.card_model
    });
  },

  //RENDERING------------------------------------------------
  render: function() {
    //console.log("VIEW: LABELS_DETAIL_VIEW: - render()");
    this.$el.html(this.template());
    this.$el.appendTo($('.card_d_labels'));
    this.renderLabels();
  },

  renderLabels: function() {
    //console.log("VIEW: LABELS_DETAIL_VIEW: - renderLabels()")
    var labels = JSON.parse(this.options.card_model.toJSON().labels);
    var context = this;
    if (labels) {
      labels.reverse().forEach( function(label_id) {
        var newView = new labelDetailView ({
          model: App.templateLabels.get(label_id),
          card_model: context.options.card_model
        });
        //Attach/Render the View
        newView.$el.prependTo(context.$el);
      });
    }
  },

  initialize: function(options) {
    this.options = options;
    this.render();
    return this;
  }
})