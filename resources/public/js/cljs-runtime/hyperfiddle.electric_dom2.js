goog.provide('hyperfiddle.electric_dom2');
goog.scope(function(){
  hyperfiddle.electric_dom2.goog$module$goog$object = goog.module.get('goog.object');
});
hyperfiddle.electric_dom2.nil_subject = (function hyperfiddle$electric_dom2$nil_subject(_BANG_){
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(null) : _BANG_.call(null,null));

return (function (){
return cljs.core.List.EMPTY;
});
});
hyperfiddle.electric_dom2.unsupported = (function hyperfiddle$electric_dom2$unsupported(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47737 = arguments.length;
var i__5770__auto___47738 = (0);
while(true){
if((i__5770__auto___47738 < len__5769__auto___47737)){
args__5775__auto__.push((arguments[i__5770__auto___47738]));

var G__47739 = (i__5770__auto___47738 + (1));
i__5770__auto___47738 = G__47739;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return hyperfiddle.electric_dom2.unsupported.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(hyperfiddle.electric_dom2.unsupported.cljs$core$IFn$_invoke$arity$variadic = (function (_){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not available on this peer.",cljs.core.PersistentArrayMap.EMPTY);
}));

(hyperfiddle.electric_dom2.unsupported.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.electric_dom2.unsupported.cljs$lang$applyTo = (function (seq47716){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47716));
}));

/**
 * See `with`
 */
hyperfiddle.electric_dom2.hook = (function() {
var hyperfiddle$electric_dom2$hook = null;
var hyperfiddle$electric_dom2$hook__1 = (function (x){
var G__47717 = x.parentNode;
if((G__47717 == null)){
return null;
} else {
return G__47717.removeChild(x);
}
});
var hyperfiddle$electric_dom2$hook__2 = (function (x,y){
return x.parentNode.insertBefore(x,y);
});
hyperfiddle$electric_dom2$hook = function(x,y){
switch(arguments.length){
case 1:
return hyperfiddle$electric_dom2$hook__1.call(this,x);
case 2:
return hyperfiddle$electric_dom2$hook__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hyperfiddle$electric_dom2$hook.cljs$core$IFn$_invoke$arity$1 = hyperfiddle$electric_dom2$hook__1;
hyperfiddle$electric_dom2$hook.cljs$core$IFn$_invoke$arity$2 = hyperfiddle$electric_dom2$hook__2;
return hyperfiddle$electric_dom2$hook;
})()
;
hyperfiddle.electric_dom2.by_id = (function hyperfiddle$electric_dom2$by_id(id){
return document.getElementById(id);
});
hyperfiddle.electric_dom2.new_node = (function hyperfiddle$electric_dom2$new_node(parent,type){
var el = (function (){var G__47718 = type;
var G__47718__$1 = (((G__47718 instanceof cljs.core.Keyword))?G__47718.fqn:null);
switch (G__47718__$1) {
case "comment":
return document.createComment("");

break;
case "text":
return goog.dom.createTextNode("");

break;
default:
return goog.dom.createElement(type);

}
})();
parent.appendChild(el);

return el;
});
hyperfiddle.electric_dom2._googDomSetTextContentNoWarn = (function hyperfiddle$electric_dom2$_googDomSetTextContentNoWarn(node,str){
return goog.dom.setTextContent(node,str);
});
hyperfiddle.electric_dom2.class_str = (function hyperfiddle$electric_dom2$class_str(v){
if(((typeof v === 'string') || ((v instanceof cljs.core.Keyword)))){
return cljs.core.name(v);
} else {
if(cljs.core.seq(v)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.name),v], 0)));
} else {
return "";

}
}
});
hyperfiddle.electric_dom2.SVG_NS = "http://www.w3.org/2000/svg";
hyperfiddle.electric_dom2.XLINK_NS = "http://www.w3.org/1999/xlink";
hyperfiddle.electric_dom2.alias__GT_ns = new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null);
hyperfiddle.electric_dom2.attr_alias = (function hyperfiddle$electric_dom2$attr_alias(attr){
return cljs.core.second(cljs.core.re_find(/^([^:]+):/,cljs.core.name(attr)));
});
hyperfiddle.electric_dom2.resolve_attr_alias = (function hyperfiddle$electric_dom2$resolve_attr_alias(attr){
var attr__$1 = cljs.core.name(attr);
var temp__5802__auto__ = hyperfiddle.electric_dom2.attr_alias(attr__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var alias = temp__5802__auto__;
var attr__$2 = clojure.string.replace_first(clojure.string.replace_first(attr__$1,alias,""),/^:/,"");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hyperfiddle.electric_dom2.alias__GT_ns.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric_dom2.alias__GT_ns.cljs$core$IFn$_invoke$arity$1(alias) : hyperfiddle.electric_dom2.alias__GT_ns.call(null,alias)),attr__$2], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr__$1], null);
}
});
hyperfiddle.electric_dom2.set_attribute_ns = (function hyperfiddle$electric_dom2$set_attribute_ns(var_args){
var G__47720 = arguments.length;
switch (G__47720) {
case 3:
return hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$3 = (function (node,attr,v){
var vec__47721 = hyperfiddle.electric_dom2.resolve_attr_alias(attr);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47721,(0),null);
var attr__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47721,(1),null);
return hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$4(node,ns,attr__$1,v);
}));

(hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$4 = (function (node,ns,attr,v){
return node.setAttributeNS(ns,attr,v);
}));

(hyperfiddle.electric_dom2.set_attribute_ns.cljs$lang$maxFixedArity = 4);

hyperfiddle.electric_dom2.set_property_BANG_ = (function hyperfiddle$electric_dom2$set_property_BANG_(var_args){
var G__47725 = arguments.length;
switch (G__47725) {
case 3:
return hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (node,k,v){
return hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$4(node,node.namespaceURI,k,v);
}));

(hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (node,ns,k,v){
var k__$1 = cljs.core.name(k);
var v__$1 = cljs.core.clj__GT_js(v);
if(cljs.core.truth_((function (){var and__5043__auto__ = (v__$1 == null);
if(and__5043__auto__){
return node.hasAttributeNS(null,k__$1);
} else {
return and__5043__auto__;
}
})())){
return node.removeAttributeNS(null,k__$1);
} else {
var G__47726 = k__$1;
switch (G__47726) {
case "style":
return goog.style.setStyle(node,v__$1);

break;
case "class":
return hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$4(node,null,"class",hyperfiddle.electric_dom2.class_str(v__$1));

break;
case "list":
return hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$4(node,null,k__$1,v__$1);

break;
default:
var temp__5802__auto__ = hyperfiddle.electric_dom2.goog$module$goog$object.get(goog.dom.DIRECT_ATTRIBUTE_MAP_,k__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var k__$2 = temp__5802__auto__;
return hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$3(node,k__$2,v__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("http://www.w3.org/2000/svg",ns)){
return hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$3(node,k__$1,v__$1);
} else {
if(cljs.core.truth_(hyperfiddle.electric_dom2.goog$module$goog$object.containsKey(node,k__$1))){
return hyperfiddle.electric_dom2.goog$module$goog$object.set(node,k__$1,v__$1);
} else {
return hyperfiddle.electric_dom2.set_attribute_ns.cljs$core$IFn$_invoke$arity$3(node,k__$1,v__$1);
}
}
}

}
}
}));

(hyperfiddle.electric_dom2.set_property_BANG_.cljs$lang$maxFixedArity = 4);

hyperfiddle.electric_dom2.unmount_prop = (function hyperfiddle$electric_dom2$unmount_prop(node,k,v){
return missionary.core.observe((function (_BANG_){
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(null) : _BANG_.call(null,null));

return (function (){
return hyperfiddle.electric_dom2.set_property_BANG_.cljs$core$IFn$_invoke$arity$3(node,k,v);
});
}));
});
hyperfiddle.electric_dom2.listen = hyperfiddle.electric._listen;
hyperfiddle.electric_dom2.event_STAR_ = hyperfiddle.electric.event_STAR_;
hyperfiddle.electric_dom2.happen = (function hyperfiddle$electric_dom2$happen(s,e){
var G__47729 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(s);
var G__47729__$1 = (((G__47729 instanceof cljs.core.Keyword))?G__47729.fqn:null);
switch (G__47729__$1) {
case "idle":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"impulse","impulse",486537698),new cljs.core.Keyword(null,"event","event",301435442),e], null);

break;
case "pending":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"impulse","impulse",486537698),new cljs.core.Keyword(null,"event","event",301435442),e], null);

break;
case "impulse":
throw (new Error(["Assert failed: ","two events in the same frame? that's weird and wrong","\n","false"].join('')));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47729__$1)].join('')));

}
});
hyperfiddle.electric_dom2.set_val = (function hyperfiddle$electric_dom2$set_val(node,v){
return (node.value = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
});

//# sourceMappingURL=hyperfiddle.electric_dom2.js.map
