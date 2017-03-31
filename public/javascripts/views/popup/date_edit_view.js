var dateEditView = Backbone.View.extend({
  template: App.templates['popup/date_edit'],
  id: 'popup',
  className: 'date_edit',
  tagName: 'div',
  events: {
    'click a.save_date': 'saveDate',
    'click a.remove_date': 'removeDate',
    'click a.close_pop': 'closeWindow',
    'click': 'otherClick'
  },

  //EVENTS--------------------------------------------------
  otherClick(e) {
    e.preventDefault();
    e.stopPropagation();
  },

  saveDate(e) {
    e.preventDefault();
    newDate = $('input[name="date"]').val();
    newTime = $('input[name="time"]').val();
    this.model.setDueDate('due_date', newDate + " " + newTime);
    this.closeWindow();
  },

  removeDate(e) {
    e.preventDefault();
    this.model.set('due_date', "");
    this.closeWindow();
  },

  closeWindow: function(e) {
    console.log("VIEW: DATE_EDIT: - closeWindow()")
    if (e) { 
      e.preventDefault();
      e.stopPropagation();  //Needed so that parent windo is not closed
    }; 
    this.remove();
  },

  //RENDERING
  render: function() {
    console.log("VIEW: DATE_EDIT: - render()");
    this.setDateTime();
    this.$el.html(this.template({
      date: this.date,
      time: this.time
    }));
    
    var offset = $(this.options.e.target).offset();
    this.$el.css({
      'top': offset.top + 20 + "px",
      'left': offset.left -10 + "px"
    }),
    this.$el.prependTo($('body'));   
  },

  initialize: function(options) {
    this.options = options
    this.render();
  },
  
  //HELPERS----------------------------------------------------

  //Convert the stored date-string into the appropriate format
  setDateTime: function() {
    var longDate = new Date(this.model.get('due_date'));
    var year = longDate.getFullYear();
    var month = String(longDate.getMonth() + 1).length === 2 ? longDate.getMonth()+1 : "0" + String(longDate.getMonth()+1);
    var day = String(longDate.getDate()).length === 2 ? longDate.getDate() : "0" + String(longDate.getDate());
    var hours = this.model.getHours();
    var minutes = this.model.getMinutes();

    this.date = year + "-" + month + "-" + day;
    this.time = hours + ":" + minutes; 
  }

})