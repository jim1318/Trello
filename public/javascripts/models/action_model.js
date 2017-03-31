var Action = Backbone.Model.extend({
  defaults: {
    "id": "1",
    "parent_id": "-1",
    "author": "Jim",
    "timestamp": "",
    "subscribers": "false",
    "type": "",
    "list_id": "-1",
    "list_name_old": "",
    "card_id_1": "-1",
    "card_id_2": "-1"
  }
});