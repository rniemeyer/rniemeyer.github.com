$("body").append("\
<script id=\"editTmpl\" type=\"text/html\">\
<td>\
<input data-bind=\"value: name\" />\
</td>\
<td class=\"buttons\">\
<button data-bind=\"enable: name.undoable, click: name.undo\">Undo</button>\
<button data-bind=\"enable: name.redoable, click: name.redo\">Redo</button>\
</td>\
</script>\
");
$("body").append("\
<script id=\"itemTmpl\" type=\"text/html\">\
<td data-bind=\"text: name\"></td>\
<td class=\"buttons\">\
<button data-bind=\"click: function() { viewModel.editItem($data); }\">Edit</button>\
<button data-bind=\"click: function() { viewModel.deleteItem($data); }\">Delete</button>\
</td>\
</script>\
");
$("body").append("\
<script id=\"outerItem\" type=\"text/html\">\
<tr data-bind=\"template: templateToUse\"></tr>\
</script>\
");
