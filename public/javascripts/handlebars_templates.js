this["JST"] = this["JST"] || {};

this["JST"]["actions/add_card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "<p class=\"action\">Added <a href=\"#\" cardId=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card_1 : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"show_card action\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card_1 : depth0)) != null ? stack1.name : stack1), depth0))
    + " </a> to "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p><span class=\"action\">"
    + alias2(((helper = (helper = helpers.time_since || (depth0 != null ? depth0.time_since : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"time_since","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});

this["JST"]["actions/add_list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "<p class=\"action\">Added "
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.name : stack1), depth0))
    + " to this board</p><span class=\"action\">"
    + alias1(((helper = (helper = helpers.time_since || (depth0 != null ? depth0.time_since : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"time_since","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});

this["JST"]["actions/archive_card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "<p class=\"action\">Archived <a href=\"#\" cardId=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card_1 : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"show_card action\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card_1 : depth0)) != null ? stack1.name : stack1), depth0))
    + " </a> from "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p><span class=\"action\">"
    + alias2(((helper = (helper = helpers.time_since || (depth0 != null ? depth0.time_since : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"time_since","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});

this["JST"]["actions/copy_card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "<p class=\"action\">Copied<a href=\"#\" cardId=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card_1 : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"show_card action\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card_1 : depth0)) != null ? stack1.name : stack1), depth0))
    + " </a> from "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card_2 : depth0)) != null ? stack1.name : stack1), depth0))
    + " to "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p><span class=\"action\">"
    + alias2(((helper = (helper = helpers.time_since || (depth0 != null ? depth0.time_since : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"time_since","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});

this["JST"]["actions/edit_due_date"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "<p class=\"action\"><span>Changed the due date of </span><a href=\"#\" cardId=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card_1 : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"show_card action\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card_1 : depth0)) != null ? stack1.name : stack1), depth0))
    + " </a><span> to "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.action : depth0)) != null ? stack1.text : stack1), depth0))
    + "</span></p><span class=\"action\">"
    + alias2(((helper = (helper = helpers.time_since || (depth0 != null ? depth0.time_since : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"time_since","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});

this["JST"]["actions/list_archive"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "<p class=\"action\">Archived "
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p><span class=\"action\">"
    + alias1(((helper = (helper = helpers.time_since || (depth0 != null ? depth0.time_since : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"time_since","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});

this["JST"]["actions/move_card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "<p class=\"action\">Moved <a href=\"#\" cardId=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card_1 : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"show_card action\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card_1 : depth0)) != null ? stack1.name : stack1), depth0))
    + " </a> from "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.action : depth0)) != null ? stack1.list_name_old : stack1), depth0))
    + " to "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p><span class=\"action\">"
    + alias2(((helper = (helper = helpers.time_since || (depth0 != null ? depth0.time_since : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"time_since","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});

this["JST"]["actions/new_due_date"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "<p class=\"action\"><span>Set </span> <a href=\"#\" cardId=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card_1 : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"show_card action\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card_1 : depth0)) != null ? stack1.name : stack1), depth0))
    + " </a><span> to be due on "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.action : depth0)) != null ? stack1.text : stack1), depth0))
    + "</span></p><span class=\"action\">"
    + alias2(((helper = (helper = helpers.time_since || (depth0 != null ? depth0.time_since : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"time_since","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});

this["JST"]["actions/unarchive_card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "<p class=\"action\">Un-Archived <a href=\"#\" cardId=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card_1 : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"show_card action\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card_1 : depth0)) != null ? stack1.name : stack1), depth0))
    + " </a> from "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p><span class=\"action\">"
    + alias2(((helper = (helper = helpers.time_since || (depth0 != null ? depth0.time_since : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"time_since","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});

this["JST"]["board/board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"board_info\"><h1><a href=\"#\" id=\"update_board_name\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.board : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a></h1><a href=\"#\" id=\"show_menu\"><span></span><span>Show Menu</span></a></div><ul id=\"board_view_ul\"><li list_id=\"1000\" class=\"board_view_add_list dark_blue_bg\"><a href=\"#\" id=\"show_new_list\">ADD NEW LIST</a><div id=\"add_list_section\"><textarea placeholder=\"Add A List\"></textarea><div class=\"button_holder\"><a href=\"#\" id=\"add_new_list\" class=\"button green_button\">Save</a><a href=\"#\" id=\"close_new_list\"class=\"button close_button\">X</a></div></div></li></ul><div id=\"menu\"><a href=\"#\" class=\"close\"></a><div id=\"menu_title\"><h1>Menu</h1></div><div id=\"menu_items\"><a href=\"#\" class=\"change_background\">Change Background</a><a href=\"#\" class=\"filter_cards\">Filter Cards</a></div></div>";
},"useData":true});

this["JST"]["board/list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"list_subscribed\"></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"list_header list_handle\"><div class=\"list_name_holder\"><h1>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h1><textarea>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.name : stack1), depth0))
    + "</textarea></div><a href=\"#\" class=\"list_actions\">***</a>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><ul list_id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"list_card_holder\"></ul><a href=\"#\" class=\"add_card\">Add a card...</a><div class=\"card_composer\"><textarea placeholder=\"New Card Name\"></textarea><div class=\"button_holder\"><a href=\"#\" id=\"add_new_card\" class=\"button green_button\">Submit</a><a href=\"#\" class=\"button close_button\">X</a></div></div>";
},"useData":true});

this["JST"]["cards/card_detail"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"icon_subscriber\"></div>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<h3>Labels:</h3>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Due Date</h3><div class=\"date_holder\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.due_date : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.late : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "<span class=\"date_span\">"
    + alias4(((helper = (helper = helpers.month || (depth0 != null ? depth0.month : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.day || (depth0 != null ? depth0.day : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"day","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data}) : helper)))
    + " at "
    + alias4(((helper = (helper = helpers.hours || (depth0 != null ? depth0.hours : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hours","hash":{},"data":data}) : helper)))
    + ":"
    + alias4(((helper = (helper = helpers.minutes || (depth0 != null ? depth0.minutes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"minutes","hash":{},"data":data}) : helper)))
    + "</span></a>";
},"7":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"icon_late_date show_date_edit\">";
},"9":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"icon_early_date show_date_edit\">";
},"11":function(container,depth0,helpers,partials,data) {
    return "<span class=\"green_check\"></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "<div class=\"card_detail\"><a href=\"#\" class=\"close\"></a><!-- CARD DETAIL HEADER --><div class=\"card_detail_header\"><h1>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h1><p>In list &nbsp</p><a listId=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" href=\"#\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a>"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><!-- CARD DETAIL MAIN CONTENT --><div class=\"card_detail_main\"><!-- CARD DETAIL LABELS --><div class=\"card_d_labels\">"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.labels : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"card_d_date\">"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.due_date : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"card_d_descr\"><a href='#' class=\"edit_descr\">Edit the Description</a><p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p><div class=\"descr_edit\"><textarea>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.description : stack1), depth0))
    + "</textarea><div class=\"button_holder\"><a href=\"#\" class=\"button green_button\">Save</a><a href=\"#\" class=\"button close_button\">X</a></div></div></div><div class=\"card_d_comm\"><h2>Add Comment</h2><textarea></textarea><div class=\"button_holder\"><a href=\"#\" id=\"send_comment\" class=\"button green_button\">Send Comment</a></div></div><div class=\"card_d_activ\"><div class=\"card_activity\"><h2>Activity</h2><ul id=\"card_activities\"></ul></div></div></div><!-- CARD DETAIL SIDEBAR --><div class=\"card_detail_sidebar\"><h2>Add</h2><ul><li><a href=\"#\" id=\"a_labels\" class=\"card_detail_button\">Labels</a></li><li><a href=\"#\" id=\"a_due_date\" class=\"card_detail_button\">Due Date</a></li></ul><h2>Actions</h2><ul><li><a href=\"#\" id=\"a_move\" class=\"card_detail_button\">Move</a></li><li><a href=\"#\" id=\"a_copy\" class=\"card_detail_button\">Copy</a></li><li><a href=\"#\" id=\"a_subscribe\" class=\"card_detail_button\">Subscribe"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a></li><li><a href=\"#\" id=\"a_archive\" class=\"card_detail_button\">Archive"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.archived : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a></li></ul></div></div>";
},"useData":true});

this["JST"]["cards/card_summary"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<li class=\"icon_subscriber\"></li>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.late : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "<span>"
    + alias4(((helper = (helper = helpers.month || (depth0 != null ? depth0.month : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.day || (depth0 != null ? depth0.day : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"day","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data}) : helper)))
    + "</span></li>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<li class=\"icon_late_date\">";
},"6":function(container,depth0,helpers,partials,data) {
    return "<li class=\"icon_early_date\">";
},"8":function(container,depth0,helpers,partials,data) {
    return "<li class=\"icon_description\"></li>";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<li class=\"icon_comments\"><span>"
    + container.escapeExpression(((helper = (helper = helpers.comments || (depth0 != null ? depth0.comments : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"comments","hash":{},"data":data}) : helper)))
    + "</span></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<h1>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h1><ul class=\"icon_holder\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.due_date : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});

this["JST"]["labels/label_detail"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "<div class=\""
    + alias1(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"class","hash":{},"data":data}) : helper)))
    + "\"><span>"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.label : depth0)) != null ? stack1.name : stack1), depth0))
    + "</span></div>";
},"useData":true});

this["JST"]["labels/label_select"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"toggle_label\"><div class=\""
    + alias4(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data}) : helper)))
    + " before\"></div><div class=\""
    + alias4(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data}) : helper)))
    + " after\"><span>"
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.label : depth0)) != null ? stack1.name : stack1), depth0))
    + "</span></div></div><a href=\"#\" class=\"edit_label\"></a>";
},"useData":true});

this["JST"]["labels/label_summary"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\""
    + container.escapeExpression(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"class","hash":{},"data":data}) : helper)))
    + "\"></div>";
},"useData":true});

this["JST"]["labels/labels_detail"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<li><div class=\"none\"><a href=\"#\">+</a></div></li>";
},"useData":true});

this["JST"]["menu/menu_activities"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Activity</h2><ul id=\"menu_activities\"></ul>";
},"useData":true});

this["JST"]["menu/menu_background"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<li><a bg=\""
    + alias2(alias1(depth0, depth0))
    + "\" class=\""
    + alias2(alias1(depth0, depth0))
    + " bg_sample\"href=\"#\"></a></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<a href=\"#\" class=\"close\"></a><div id=\"menu_title\"><h1>CHANGE BACKGROUND</h1></div><ul id=\"background_select_list\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.backgrounds : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<ul>";
},"useData":true});

this["JST"]["popup/copy_card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<input type=\"checkbox\" name=\"labels\" value=\"labels\" checked /> Labels ("
    + container.escapeExpression(((helper = (helper = helpers.num_labels || (depth0 != null ? depth0.num_labels : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"num_labels","hash":{},"data":data}) : helper)))
    + ")";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<input type=\"checkbox\" name=\"comments\" value=\"comments\" checked /> Comments ("
    + container.escapeExpression(((helper = (helper = helpers.num_comments || (depth0 != null ? depth0.num_comments : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"num_comments","hash":{},"data":data}) : helper)))
    + ")";
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<option value=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<a href=\"#\" class=\"close_pop\">X</a><h1 class=\"pop\">Copy Card</h1><h2>Title</h2><textarea id=\"copy_card_name\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.name : stack1), depth0))
    + "</textarea><h2>Keep...</h2>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.num_labels : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.num_comments : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<h2>Copy to...</h2><select name=\"list\" id=\"list\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select><div class=\"button_holder\"><a href=\"#\" id=\"copy_card\" class=\"button green_button\">Copy Card</a></div>";
},"useData":true});

this["JST"]["popup/copy_list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<a href=\"#\" class=\"close_pop\">X</a><h1 class=\"pop\">Copy List</h1><h2>New List Name</h2><textarea id=\"copy_list_name\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.name : stack1), depth0))
    + "</textarea><div class=\"button_holder\"><a href=\"#\" id=\"copy_list\" class=\"button green_button\">Copy List</a></div>";
},"useData":true});

this["JST"]["popup/date_edit"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"#\" class=\"close_pop\">X</a><h1 class=\"pop\">Change Due Date</h1><form><dl class=\"date_time\"><dt><label for=\"date\">Date</label></dt><dd><input type=\"date\" name=\"date\" id=\"date\" value=\""
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "\" /></dd><dt><label for=\"time\">Time</label></dt><dd><input type=\"time\" name=\"time\" id=\"time\" value=\""
    + alias4(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data}) : helper)))
    + "\" /></dd></dl><div class=\"button_holder\"><a href=\"#\" class=\"button green_button save_date\">Save</a><a href=\"#\" class=\"button grey_button remove_date\">Remove</a></div></form>";
},"useData":true});

this["JST"]["popup/label_add"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<li><a color=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.color : depth0), depth0))
    + "\" href=\"#\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "></a></li>";
},"2":function(container,depth0,helpers,partials,data) {
    return "class=\"color_edit "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.css_color : depth0), depth0))
    + " selected_color\"";
},"4":function(container,depth0,helpers,partials,data) {
    return "class=\"color_edit "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.css_color : depth0), depth0))
    + "\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<a href=\"#\" class=\"close_pop\">X</a><a href='#' class=\"go_back\">&#60</a><h1 class=\"pop\">Add Label</h1><h2>Name</h2><textarea></textarea><h2>Select a Color</h2><ul class=\"color_holder\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><div class=\"button_holder\"><a href=\"#\" class=\"button green_button add_label\">Create</a></div>";
},"useData":true});

this["JST"]["popup/label_edit"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<li><a color=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.color : depth0), depth0))
    + "\" href=\"#\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "></a></li>";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "class=\"color_edit "
    + alias2(alias1((depth0 != null ? depth0.color : depth0), depth0))
    + " selected_color "
    + alias2(alias1((depths[1] != null ? depths[1].blind : depths[1]), depth0))
    + "\"";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "class=\"color_edit "
    + alias2(alias1((depth0 != null ? depth0.color : depth0), depth0))
    + " "
    + alias2(alias1((depths[1] != null ? depths[1].blind : depths[1]), depth0))
    + "\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<a href=\"#\" class=\"close_pop\">X</a><a href='#' class=\"go_back\">&#60</a><h1 class=\"pop\">Edit Label</h1><h2>Name</h2><textarea>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.label : depth0)) != null ? stack1.name : stack1), depth0))
    + "</textarea><h2>Select a Color</h2><ul class=\"color_holder\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><div class=\"button_holder\"><a href=\"#\" id=\"save_label\" class=\"button green_button\">Save</a><a href=\"#\" id=\"delete_label\" class=\"button grey_button\">Delete</a></div>";
},"useData":true,"useDepths":true});

this["JST"]["popup/labels_selector"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<li class=\"label_select_view\"><div class=\"toggle_label\"><div label_id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" class=\""
    + alias2(alias1((depth0 != null ? depth0["class"] : depth0), depth0))
    + " before "
    + alias2(alias1((depths[1] != null ? depths[1].blind : depths[1]), depth0))
    + "\"></div><div label_id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" class=\""
    + alias2(alias1((depth0 != null ? depth0["class"] : depth0), depth0))
    + " after "
    + alias2(alias1((depths[1] != null ? depths[1].blind : depths[1]), depth0))
    + "\"><span>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span></div></div><a href=\"#\" label_id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" class=\"edit_label\"></a></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<a href=\"#\" class=\"close_pop\">X</a><h1 class=\"pop\">Labels</h1><div class=\"label_search\">SEARCH</div><ul class=\"selector_list\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><a href=\"#\" id=\"create_new_label\" class=\"boring_link\">Create a new label</a><a href=\"#\" id=\"toggle_blind\" class=\"boring_link\">Toggle Color Blind Mode</a>";
},"useData":true,"useDepths":true});

this["JST"]["popup/list_edit"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<span class=\"icon_check\"></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<a href=\"#\" class=\"close_pop\">X</a><h1 class=\"pop\">List Commands</h1><a href=\"#\" id=\"list_edit_add\" class=\"command_link\">Add Card...</a><a href=\"#\" id=\"list_edit_copy\" class=\"command_link\">Copy List...</a><a href=\"#\" id=\"list_edit_subscribe\" class=\"command_link\" >Subscribe"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a><a href=\"#\" id=\"list_edit_move_cards\" class=\"command_link\">Move All Cards in This List</a><a href=\"#\" id=\"list_edit_archive_cards\" class=\"command_link\">Archive All Cards in This List...</a><a href=\"#\" id=\"list_edit_archive_list\" class=\"command_link\">Archive This List</a>";
},"useData":true});

this["JST"]["popup/move_all_cards"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<option value=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<a href=\"#\" class=\"close_pop\">X</a><h1 class=\"pop\">Move All Cards</h1><select name=\"list\" id=\"list\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select><div class=\"button_holder\"><a href=\"#\" id=\"move_all_cards\" class=\"button green_button\">Move All Cards</a></div>";
},"useData":true});

this["JST"]["popup/move_card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<option value=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<a href=\"#\" class=\"close_pop\">X</a><h1 class=\"pop\">Move Card</h1><h2>Select New List</h2><select name=\"list\" id=\"list\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select><div class=\"button_holder\"><a href=\"#\" id=\"move_card\" class=\"button green_button\">Move</a></div>";
},"useData":true});

this["JST"]["popup/name_edit"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<a href=\"#\" class=\"close_pop\">X</a><h1 class=\"pop\">Rename Board</h1><h2>Name</h2><textarea id=\"board_name_edit\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.board : depth0)) != null ? stack1.name : stack1), depth0))
    + "</textarea><div class=\"button_holder\"><a href=\"#\" class=\"button green_button name_edit\">Rename</a></div>";
},"useData":true});

this["JST"]["shared/comment"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "<p class=\"comment\">Comment on <a href=\"#\" cardId=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"show_card comment\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a></p><p class=\"comment_text\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.comment : depth0)) != null ? stack1.text : stack1), depth0))
    + "</p><span class=\"comment\">"
    + alias2(((helper = (helper = helpers.time_since || (depth0 != null ? depth0.time_since : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"time_since","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});