var express = require('express');
var router = express.Router();
var path = require("path");
var _ = require('underscore');   
var Data = require(path.dirname(__dirname) + "/routes/data_node.js");

//LOAD TEST PAGE
router.get('/test', function(req, res) {
  res.render('test');
});

//LOAD ALL DATA WHEN THE PAGE FIRST LOADS------------------------------
router.get('/', function(req, res, next) {
  res.render('index', { 
    boardData:              Data.getBoardData(),
    listsData:              Data.getListsData().lists,
    cardsData:              Data.getCardsData().cards,
    commentsData:           Data.getCommentsData().comments,
    actionsData:            Data.getActionsData().actions,
    templateLabelsData:     Data.getTemplateLabelsData().labels
  });
});

//BOARD MODEL UPDATES--------------------------------
router.put('/board', function(req, res) {
  var board = Data.getBoardData();
  _.extend(board, req.body);
  Data.saveBoardData(board);
  res.send(board);
});

//LIST COLLECTION UPDATES-------------------------------------------------------
router.post('/lists', function(req, res) {
//SAVE A NEW LIST
  //Get existing data from file
  var ListCollection = Data.getListsData();
  
  //Create new list & Add to Collection
  var list = req.body;
  list.id = String(ListCollection.nextListId);

  ListCollection.lists.push(list);

  //Incrimenet ID & Save to JSON file
  ListCollection.nextListId++;
  Data.saveListsData(ListCollection);

  //Return new list
  res.json(list);
});

//LIST MODEL UPDATES------------------------------------------------------------
router.route('/lists/:id').put(function(req, res) {
  //UPDATE AN INDIVIDUAL LIST
  var listData = Data.getListsData();
  var lists = listData.lists;
  var id = req.params.id;
  var oldList = _.findWhere(lists, {id: id });
  _.extend(oldList, req.body);
  Data.saveListsData(listData);
  res.status(200).send(lists);
});

//CARD COLLECTION UPDATES-------------------------------------------------------
router.post('/cards', function(req, res) {
//SAVE A NEW LIST
  //Get existing data from file
  var CardCollection = Data.getCardsData();
  
  //Create new list & Add to Collection
  var card = req.body;
  card.id = String(CardCollection.nextCardId);

  CardCollection.cards.push(card);

  //Incrimenet ID & Save to JSON file
  CardCollection.nextCardId++;
  Data.saveCardsData(CardCollection);

  //Return new card
  res.json(card);
});

/*
router.delete('/cards', function(req, res) {
//DELETE A CARD FROM CARD COLLECTION
  //Get existing data from file
  var CardCollection = Data.getCardsData();
  
  //Create new list & Add to Collection
  var card = req.body;
  CardCollection = _.without(CardCollection, card)

  //Save to JSON file
  Data.saveCardsData(CardCollection);

  //Return new card
  res.status(200).send(card)
});
*/

//TeMPLATE LABEL MODEL UPDATES------------------------------------------------------------
//----------------------------------------------------------------------------------------
router.post('/templateLabels', function(req, res) {
  var TemplateLabelCollection = Data.getTemplateLabelsData();
  var newTemplate = req.body;
  newTemplate.id = String(TemplateLabelCollection.nextLabelId);
  TemplateLabelCollection.labels.push(newTemplate);

  //Incrimenet ID & Save to JSON file
  TemplateLabelCollection.nextLabelId++;
  Data.saveTemplateLabelsData(TemplateLabelCollection);

  //Return new action
  res.json(newTemplate);
});

router.delete('/templateLabels', function(req, res) {
//DELETE A TemplateLabel from Collection
  //Get existing data from file
  var templateLabelsData = Data.getTemplateLabelsData();
  var templateLabels = templateLabelsData.labels
  var id = req.body.id;
  var removeLabel = _.findWhere(templateLabels, {id: id });
  templateLabels = _.without(templateLabels, removeLabel);
  templateLabelsData.labels = templateLabels;
  Data.saveTemplateLabelsData(templateLabelsData);
  res.status(200).send(templateLabelsData);
});

router.route('/templateLabels/:id').put(function(req, res) {
  //UPDATE AN INDIVIDUAL LABEL
  var templateLabelsData = Data.getTemplateLabelsData();
  var templateLabels = templateLabelsData.labels
  var id = req.params.id;
  var oldTemplateLabel = _.findWhere(templateLabels, {id: id });
  _.extend(oldTemplateLabel, req.body);
  Data.saveTemplateLabelsData(templateLabelsData);
  res.status(200).send(oldTemplateLabel);
});


//CARD MODEL UPDATES------------------------------------------------------------
router.route('/cards/:id').put(function(req, res) {
  //UPDATE AN INDIVIDUAL CARD
  var cardsData = Data.getCardsData();
  var cards = cardsData.cards
  var id = req.params.id;
  var oldCard = _.findWhere(cards, {id: id });
  _.extend(oldCard, req.body);
  Data.saveCardsData(cardsData);
  res.status(200).send(oldCard);
});


//ACTION COLLECTION UPDATES-----------------------------------------------
router.post('/actions', function(req, res) {
//SAVE A NEW Action
  //Get existing data from file
  var ActionCollection = Data.getActionsData();
  
  //Create new list & Add to Collection
  var action = req.body;
  action.id = String(ActionCollection.nextActionId);

  ActionCollection.actions.push(action);

  //Incrimenet ID & Save to JSON file
  ActionCollection.nextActionId++;
  Data.saveActionsData(ActionCollection);

  //Return new action
  res.json(action);
});

//COMMENT COLLECTION UPDATES-------------------------------------------------
router.post('/comments', function(req, res) {
//SAVE A NEW Action
  //Get existing data from file
  var CommentCollection = Data.getCommentsData();
  
  //Create new list & Add to Collection
  var comment = req.body;
  console.log(comment);
  comment.id = String(CommentCollection.nextCommentId);

  CommentCollection.comments.push(comment);

  //Incrimenet ID & Save to JSON file
  CommentCollection.nextCommentId++;
  Data.saveCommentsData(CommentCollection);

  //Return new comment
  res.json(comment);
});

//----------------------------------------------

module.exports = router;
