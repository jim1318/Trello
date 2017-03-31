var labelSelectView = labelTemplateView.extend({
  template: App.templates['labels/label_select'],
  events: {
    //Label Select View
    'click .toggle_label': 'toggleLabel',
    'click .edit_label': 'showLabelEdit',
  },
  className: 'label_select_view',
  parent: "#labels_selector_list ul",
})