var menuBackgroundView = Backbone.View.extend({
  template: App.templates['menu/menu_background'],
  el: '#menu',
  events: {
   'click a.bg_sample': 'changeBackground'
  },

  //EVENTS--------------------------------------------------
  changeBackground: function(e) {
    e.preventDefault();
    var newClass = $(e.target).attr('bg');
    App.board.set('background', newClass);
  },

  //RENDERING------------------------------------------------
  render: function() {
    this.$el.html(this.template({
      backgrounds: App.board.backgrounds
    }));
  },

  initialize: function(options) {
    this.render();
  },
})