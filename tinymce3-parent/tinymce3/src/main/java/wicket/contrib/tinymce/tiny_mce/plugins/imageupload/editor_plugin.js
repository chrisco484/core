/**
 * @author mikel
 */
(function(){tinymce.PluginManager.requireLangPack("imageupload");tinymce.create("tinymce.plugins.ImageUpload",{init:function(ed,url){var t=this;t.editor=ed;ed.addCommand("mceImageUpload",t._save,t);ed.addButton("upload",{title:"Upload image",cmd:"mceImageUpload"});ed.onNodeChange.add(function(ed,cm,n){var currentNode=ed.selection;var nodeName="";var buttonActive=false;if(currentNode){nodeName=currentNode.getNode().nodeName}if(nodeName==="IMG"){buttonActive=true}cm.setActive("upload",buttonActive)})},getInfo:function(){return{longname:"Image upload",author:"Michal Letynski <mikel@mikel.pl>",authorurl:"http://www.consol.pl",infourl:"http://www.consol.pl",version:"1.0"}},_save:function(){var ed=this.editor;ed.execCallback("uploadimage_callback",ed)}});tinymce.PluginManager.add("imageupload",tinymce.plugins.ImageUpload)})();