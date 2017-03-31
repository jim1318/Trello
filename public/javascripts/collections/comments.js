var Comments = Backbone.Collection.extend({
  model: Comment,
  
  //Create new comment
  //Save new comment to DB
  //Save new comment to collection
  createComment: function(commentText, cardModel) {
    console.log("COLLECTION: COMMENTS: - create()");
   
    var newComment = new Comment({
      "parent_id": cardModel.get('id'),
      "author": "Jim",
      "text": commentText,
      "timestamp": new Date(),
      "type": "comment",
      "subscribers": cardModel.get('subscribed')
    });
    this.postComment(newComment, cardModel.get('id'));
  },

  cloneComment: function(cloneComment, newParentId) {
    console.log(newParentId);
    var newComment = new Comment;
    newComment.set({
      'parent_id': newParentId,
      'text': cloneComment.get('text'),
      'timestamp': cloneComment.get('timestamp'),
      'edited': cloneComment.get('edited'),
      'subscribers': cloneComment.get('sibscribers')
    });
    this.postComment(newComment, newParentId)
  },

  postComment: function(newComment, parentId) {
    var coll = this;
    $.ajax({
      url: '/comments',
      type: 'POST',
      data: newComment.toJSON(),
      success: function(json) {
        //Add New Comment to Appropriate Collections
        coll.add(json);                   //Add to the comment collection
        var newComment = coll.at(coll.length - 1);
        new CommentView({
          model: newComment
        });
        App.cards.get(parentId).trigger('comment_created');  //Trigger card summary view update
      }
    });
  },

  initialize: function() {
    this.on('update', function(){this.trigger('comments_updated')} );
  } ,

  //HELPERS-----------------------------------------------------------------

  getCommentsByCard: function(id) {
    return this.where({parent_id: String(id)});
  },

  getCommentsBySubscriber: function() {
    return this.where({subscribers: "true"});
  }

});