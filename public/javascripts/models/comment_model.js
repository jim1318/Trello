var Comment = Backbone.Model.extend({
  defaults: {
    "id": "-1",
    "parent_id": "-1",
    "author": "Jim",
    "text": "",
    "timestamp": "",
    "type": "comment",
    "edited": "false",
    "subscribers": "false"
  }
});