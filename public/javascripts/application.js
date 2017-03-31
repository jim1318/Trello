var App = {
  templates: JST,   //JST Set in handlebars_templates.js file
  $el: $('main'),

  //Render All Lists on the Board
  render: function() {
    new BoardView({
      model: this.board
    });
  },

  initialize: function() {
    //Create Necessary Collections
    console.log("INITIALIZING APPLICATION");
    this.board = new Board(this.boardData);
    this.lists = new Lists(this.listsData);
    this.cards = new Cards(this.cardsData);
    this.comments = new Comments(this.commentsData); 
    this.actions = new Actions(this.actionsData);
    this.templateLabels = new templateLabels(this.templateLabelsData);    
    
    this.board.backgrounds = ["dark_blue_bg", "orange_bg", "dark_green_bg", "red_bg", "purple_bg", "pink_bg", "light_green_bg", "light_blue_bg", "grey_bg"];
    
    this.render();
  },

  //HELPERS----------------------------------------------------
  
  renderActivities: function(type, $el, card_model) {
    if (type === "card") {
      var activities = this.getCardActivity(card_model);
    } else {
      var activities = this.getMenuActivity();
    }

    //create & render each activity view
    var newView
    activities.forEach( function(activity) {
      if (activity instanceof Comment) {
        newView = new CommentView ({
          model: activity,
          card_model: card_model
        });
      }
      else if (activity instanceof Action) {
        newView = new ActionView ({
          model: activity,
          card_model: card_model
        });
      }
      newView.$el.appendTo($el);
    });
  },

  //Consolidate all relevants comments and activities into a single array
  //Sort by timestamp
  getMenuActivity: function() {
    var comments = this.comments.getCommentsBySubscriber();
    var actions = this.actions.getActionsBySubscriber();
    var activities = comments.concat(actions);
    return activities.sort(function(a, b) { return new Date(b.toJSON().timestamp) - new Date(a.toJSON().timestamp) });
  },

  getCardActivity: function(card_model) {
    var comments = this.comments.getCommentsByCard(card_model.get('id'));
    var actions = this.actions.getActionsByCard(card_model.get('id'));
    var activities = comments.concat(actions);
    return activities.sort(function(a, b) { return new Date(b.toJSON().timestamp) - new Date(a.toJSON().timestamp) });
  },

  //Display the amount of time that has passed since the timestamp.
  //Used for displayling actions & commments
  getTimeSince: function(timestamp) {
    var now = new Date();
    var timestamp = new Date(timestamp)
    var difference = now - timestamp
    if (difference < 86400000) {
      if (difference < 3600000) {
        //Event happened less than an hour ago - display minutes
        var minutes = Math.round(difference / 60000);
        return minutes + " minutes ago"
      }
      else {
        //Event happened less than a day ago - display hours
        var hours = Math.round(difference / 3600000);
        return hours > 1 ? hours + " hours ago" :  hours + " hour ago"
      }
    }
    else {
      months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var year = timestamp.getFullYear()
      var month = months[timestamp.getMonth()];
      var day = timestamp.getDate();
      var hours = timestamp.getHours();
      var minutes = timestamp.getMinutes();
      return month + " " + day + " " + year + " at " + hours + ":" + minutes;   
    }
  }

}