var path = require("path");
var fs = require("fs");
var _ = require('underscore');

//Set Paths for Data Files
var board_file_path = path.resolve(path.dirname(__dirname), "data/board.json");
var lists_file_path = path.resolve(path.dirname(__dirname), "data/lists.json");
var cards_file_path = path.resolve(path.dirname(__dirname), "data/cards.json");
var comments_file_path = path.resolve(path.dirname(__dirname), "data/comments.json");
var actions_file_path = path.resolve(path.dirname(__dirname), "data/actions.json");
var templateLabels_file_path = path.resolve(path.dirname(__dirname), "data/template_labels.json");

var Data = {
  getBoardData: function() {
    return getData(board_file_path);
  },
  getListsData: function() {
    return getData(lists_file_path);
  },
  getCardsData: function() {
    return getData(cards_file_path);
  },
  getCommentsData: function() {
    return getData(comments_file_path);
  },
  getActionsData: function() {
    return getData(actions_file_path);
  },
  getTemplateLabelsData: function() {
    return getData(templateLabels_file_path);
  },

  saveBoardData: function(data) {
    setData(board_file_path, data);
  },
  saveListsData: function(data) {
    setData(lists_file_path, data);
  },
  saveCardsData: function(data) {
    setData(cards_file_path, data);
  },
  saveCommentsData: function(data) {
    setData(comments_file_path, data);
  },
  saveActionsData: function(data) {
    setData(actions_file_path, data);
  },
  saveTemplateLabelsData: function(data) {
    setData(templateLabels_file_path, data);
  }
};


//------------JSON FILE INTERACTIONS----------------//

function getData(file_path) {
  return JSON.parse(fs.readFileSync(file_path, "utf8"));
}

function setData(file_path, data) {
  fs.writeFileSync(file_path, JSON.stringify(data),"utf8");
}

module.exports = Data ;