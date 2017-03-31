var templateLabel = Backbone.Model.extend({ 
  //Save any changes to the DB
  save: function() {
    console.log("MODEL - LABEL - save()");
    $.ajax({
      url: '/templateLabels/' + this.id,
      type: 'PUT',
      data: this.toJSON(),
      success: function(json) { }
    });
  }, 

  initialize: function() {
    this.on('change', this.save)
  }  
});