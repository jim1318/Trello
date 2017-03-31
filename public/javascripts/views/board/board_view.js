var BoardView = Backbone.View.extend({
  tagname: 'div',
  id: 'board',
  duration: 300,
  template: App.templates['board/board'],
  events: {
    //Update Board Name
    'click #update_board_name': 'showNameUpdate',

    //add new list events
    'click a#show_new_list': 'showNewList',
    'click a#close_new_list': 'closeNewList',
    'click a#add_new_list': 'addNewList',

    //menu events 
    'click #show_menu': 'showMenu',
    'click .close': 'closeMenu',
    'click a.change_background': 'showBackgroundMenu'
  },

  //EVENTS------------------------------------------------
  showNameUpdate: function(e) {
    //console.log("VIEW: BOARD: - showNameUpdate()")
    e.preventDefault();
    this.nameEditView = new nameEditView ({
      e: e,
      model: this.model
    }); 
  },

  showNewList: function(e) {
    e.preventDefault();
    $(e.target).closest('#add_new_list').hide();
    $('#add_list_section').show();
  },

  closeNewList: function(e) {
    e.preventDefault();
    $('#add_list_section').hide();
  },

  //Add a new list to the board
  addNewList: function(e) {
    e.preventDefault();
    var newName = $(e.target).closest('#add_list_section').find('textarea').val()
    if (newName !== "") {
      App.lists.addNewList(newName);
      $('#add_list_section').hide();
      $('#add_new_list').show();
    }
  },

  //Show the board menu
  showMenu: function(e) {
    e.preventDefault();
    $('#menu').fadeIn(this.duration);
  },

  //Close the board menu
  closeMenu: function(e) {
    e.preventDefault();
    $('#menu').fadeOut(this.duration);
  },

  showBackgroundMenu: function(e) {
    e.preventDefault();
    new menuBackgroundView({});
  },

  //RENDERING-------------------------------------------------------
  //----------------------------------------------------------------

  //Display the Board
  render: function() {
    //console.log("VIEW: BOARD: - render()");
    this.$el.html(this.template({ board: this.model.toJSON() }));
    this.$el.appendTo(App.$el);
    
    //Display Each List & Make Sortable
    this.renderLists();
    this.makeBoardSortable();
    
    this.updateBackground();
    this.renderMenuActivities();
    this.bind();
  },

  //Render The Lists
  renderLists: function() {
    if (App.lists) {
      //console.log("VIEW - BOARD - renderLists()");
      var lists = App.lists.where({archived: "false"});
      lists.forEach(function(list) {
        new ListView({
          model: list
        });
      });
    }
  },

  //Render New List After Created on Server & Store on collection
  renderNewList: function() {
    //Create New List View & Display
    newList = App.lists.at(App.lists.length - 1);
    this.makeBoardSortable();
    var newView = new ListView({
      model: newList
    });
  },

  //Make Lists Sortable
  makeBoardSortable: function(type) {
    //console.log("VIEW: BOARD: - makeBoardSortable()");
    
    var el = $('#board_view_ul').get(0);
    var model = this.model;
    
    var boardSortable = Sortable.create(el, {
      animation: 150,
      dragglable: '.list_handle',
      handle: '.list_handle',
      filter: '#popup',
      group: 'list',
      dataIdAttr: 'list_id',

      onSort: function(e) {
        console.log("BOARD - ONSORT()");
      },

      store: {
        get: function(boardSortable) {
          //console.log("BOARD - GET()");
          
          //Save List order when a new list is added
          if (type === "new_list") {
            //console.log("SORT _ SAVE");
            boardSortable.save(); 
          }

          var order = model.toJSON().listOrder;
          return order ? order.split('|') : [];
        },
        set: function(boardSortable) {
          //console.log("BOARD - SET()");
          var order = boardSortable.toArray();
          model.saveListOrderWithoutTrigger(order.join('|'));
        }
      }
    });  
  },

  //Render the menu activities
  renderMenuActivities: function() {
    this.menuActivities = new MenuActivitiesView({});
  },

  //Re-Render the menu activities
  reRenderMenuActivities: function() {
    this.menuActivities.remove();
    this.renderMenuActivities();
  },

  reRenderName: function() {
    //console.log("THIS.reRenderName");
    $('#update_board_name').text(App.board.get('name'));
  },

  updateBackground: function() {
    //console.log("VIEW: BOARD: - updateBackground()");
    var bgClass = App.board.get('background');
    $('header').removeClass().addClass(bgClass);
    $('.board_view_add_list').removeClass().addClass(bgClass + " board_view_add_list");
    $('main').removeClass().addClass(bgClass);
  },

  bind: function() {
    this.listenTo(this.model, 'change:name', this.reRenderName.bind(this));                   //Update name when it's changed
    this.listenTo(this.model, 'change:background', this.updateBackground.bind(this));         //Update background css when changed
    this.listenTo(App.lists, 'add', this.renderNewList.bind(this));                           //Add list when new list is created                                  //Used to sort lists when new one is added
    this.listenTo(App.actions, 'actions_updated', this.reRenderMenuActivities.bind(this));    //Re-render menu activities when actions are updated
    this.listenTo(App.comments, 'add', this.reRenderMenuActivities.bind(this));  //Re-render menu activities when comments are updated
  },

  initialize: function() {
    this.render();
  }

})