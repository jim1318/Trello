var templateLabels = Backbone.Collection.extend({
  model: templateLabel,
  
  removeTemplate: function(tLabel) {
    this.remove(tLabel);
    App.cards.removeLabels(tLabel.get('id'));
    
    $.ajax({
      url: '/templateLabels',
      type: 'DELETE',
      data: tLabel.toJSON(),
      success: function(json) { }
    });
  },

  createNew: function(newColor, newName) {
    var newTemplateLabel = new templateLabel;
    newTemplateLabel.set({
      'name': newName,
      'class': newColor
    })

    var context = this
    $.ajax({
      url: '/templateLabels',
      type: 'POST',
      data: newTemplateLabel.toJSON(),
      success: function(json) { 
        context.add(json)
      }
    }); 
  }


});