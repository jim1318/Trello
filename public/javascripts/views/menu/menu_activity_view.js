var MenuActivitiesView = Backbone.View.extend({
  template: App.templates['menu/menu_activities'],
  id: 'menu_activity',
  events: {
  },

  //RENDERING------------------------------------------------
  render: function() {
    //console.log("VIEW: MENU_ACTIVITIES: - render()");
    this.$el.html(this.template({}));
    this.$el.appendTo($('#menu'));
    App.renderActivities('menu', $('#menu_activities'), undefined);
  },

  initialize: function(options) {
    this.options = options;
    this.render();
    return this;
  }
})


  
