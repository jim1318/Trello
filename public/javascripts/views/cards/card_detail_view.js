var $modal = $('#modal');
var CardDetailView = Backbone.View.extend({
  tagName: 'div',
  id: "overlay",
  duration: 300,
  template: App.templates['cards/card_detail'],
  events: {
    'click': 'close',
    'click .close': 'close',
    'click a#send_comment': 'createComment',
    'click a.edit_descr': 'showEditDescr',
    'click .card_d_descr a.green_button': 'editDescr',
    'click .card_d_descr a.close_button': 'hideEditDescr',
    'click .card_d_date a.show_date_edit': 'showDateEdit',
    //Sidebar Buttons
    'click #a_labels': 'showLabelSelector',
    'click #a_due_date': 'showDateEdit',
    'click #a_copy': 'showCopyCard',
    'click #a_move': 'showMoveCard',
    'click #a_subscribe': 'toggleSubscribe',
    'click #a_archive': 'toggleArchive'
  },

  //EVENTS-------------------------------------------------------------
  showDateEdit: function(e) {
    //console.log("VIEW: CARD_DETAIL: - showDateEdit()")
    console.log(e.target);
    e.preventDefault();

    //Remove the view if it's already shown
    if (this.dateEditView) { this.dateEditView.remove();}

    //Display teh view
    this.dateEditView = new dateEditView ({
      //Will display itself absolutely compared to calling view.
      e: e,
      model: this.model
    }); 
  },

  showEditDescr: function(e) {
    //console.log("VIEW: CARD_DETAIL: - showEditDescr()");
    e.preventDefault();
    this.$el.find('div.descr_edit').fadeIn(400);
  },

  hideEditDescr: function(e) {
    //console.log("VIEW: CARD_DETAIL: - hideEditDescr()");
    e.preventDefault();
    this.$el.find('div.descr_edit').fadeOut(100);
  },

  editDescr: function(e) {
    //console.log("VIEW: CARD_DETAIL: - EditDescr()");
    var newDescr = this.$el.find('.card_d_descr textarea').val();
    if (newDescr !== this.model.get('description')) {
      this.model.set('description', newDescr);
      this.$el.find('textarea').val("");
      this.hideEditDescr(e);
    }
  },

  createComment: function(e) {
    //console.log("VIEW: CARD_DETAIL: - createComment()");
    var commentText = this.$el.find('.card_d_comm textarea').val();
    if (commentText !== this.model.get('text')) {
      App.comments.createComment(commentText, this.model);
      this.$el.find('textarea').val("");
    }
  },

  showLabelSelector: function(e) {
    //console.log("VIEW: CARD_DETAIL: - showLabelSelector()")
    e.preventDefault();

    //Remove the view if it's already shown
    if (this.labelsSelectorView) { this.labelsSelectorView.remove();}

    //Display teh view
    this.labelsSelectorView = new labelsSelectorView ({
      collection: App.templateLabels,
      //Will display itself absolutely compared to calling view.
      e: e,
      card_model: this.model
    });
  },

  showCopyCard: function(e) {
    //console.log("VIEW: CARD_DETAIL: - showCopyCard()")
    e.preventDefault();
    this.copyCardView = new copyCardView ({
      model: this.model,
      prev_view: this,
      e: e,
    });
  },

  showMoveCard: function(e) {
    //console.log("VIEW: CARD_DETAIL: - showMoveCard()")
    e.preventDefault();
    this.moveCardView = new moveCardView ({
      model: this.model,
      e: e,
    });
  },

  toggleSubscribe: function(e) {
    e.preventDefault();
    this.model.toggleSubscribe();
  },

  toggleArchive: function(e) {
    e.preventDefault();
    this.model.toggleArchive();
  },

  //RENDER METHODS-----------------------------------------------------

  render: function() {
    console.log('VIEW: CARD_DETAIL: - render()'); 
    this.renderCard();
    this.renderLabelDetails();
    App.renderActivities("card", $('#card_activities'), this.model);
    this.bind();
    this.open();
  },

  reRender: function() {
    //console.log("VIEW: CARD_DETAIL: - reRender()");
    //First Check if card has been archived
    if (this.model.get('archived') === "true") {
      this.fadeout();
    }
    else {
      this.stopListening();
      this.reRenderCard();
      this.reRenderLabelDetails();
      App.renderActivities("card", $('#card_activities'), this.model);
      this.bind();
    }
  },

  renderCard: function() {
   // console.log('VIEW: CARD_DETAIL: - renderCard()');
    this.reRenderCard();
    this.$el.appendTo($modal);
  },

  reRenderCard: function() {
    var card = this.model.toJSON()
    var date = new Date(card.due_date);
    var now = new Date();
    
    this.$el.html(this.template({ 
      card: card,
      card: this.model.toJSON(),
      list: App.lists.get(this.model.get('parent_id')).toJSON(),
      subscribed: this.model.subscribed(),
      archived: this.model.archived(),
      late: this.model.isLate(),
      month: this.model.getMonth(),
      day: date.getDate(),
      hours: this.model.getHours(),
      minutes: this.model.getMinutes(),
      year: date.getFullYear() > now.getFullYear() ? date.getFullYear() : "" 
    }));
  },

  renderLabelDetails: function() {
    //console.log('VIEW: CARD_DETAIL: - reRenderLabelDetails()');
    this.labelsView = new labelsDetailView({
      model: this.model,
      card_model: this.model
    });
  },

  reRenderLabelDetails: function() {
    //console.log('VIEW: CARD_DETAIL: - reRenderLabelDetails()');
    this.labelsView.remove();
    this.renderLabelDetails();
  },

  //EVENT PROCESSING----------------------------------------------------------

  //Display the modal with animation
  open: function() {
    $modal.fadeIn(this.duration);
  },

  close: function(e) {
    //Ignore it clicking inside the modal
    e.preventDefault();
    if(e.target.id === 'overlay' || e.target.className === 'close') {
      console.log("VIEW CARD-DETAIL close()");
      this.fadeout();
    }
  },

  fadeout: function() {
    $modal.fadeOut(this.duration);
     this.$el.fadeOut(this.duration, function() {
      this.remove();
     }.bind(this));
  },

  bind: function() {
    //console.log("VIEW: CARD_DETAIL: - bind()")
    this.listenTo(this.model, 'card_updated', this.reRender.bind(this));
    this.listenTo(this.model, 'comment_created', this.reRender.bind(this));
    this.listenTo(App.actions, 'actions_updated', this.reRender.bind(this));
  },

  initialize: function() {
    this.model.view = this;
    this.render();
  }
})