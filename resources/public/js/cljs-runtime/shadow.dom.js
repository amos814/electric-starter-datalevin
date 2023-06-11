goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36902 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_36902(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36904 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_36904(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35816 = coll;
var G__35817 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35816,G__35817) : shadow.dom.lazy_native_coll_seq.call(null,G__35816,G__35817));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35852 = arguments.length;
switch (G__35852) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35854 = arguments.length;
switch (G__35854) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35867 = arguments.length;
switch (G__35867) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35878 = arguments.length;
switch (G__35878) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35932 = arguments.length;
switch (G__35932) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35950 = arguments.length;
switch (G__35950) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36124){if((e36124 instanceof Object)){
var e = e36124;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36124;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36134 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36135 = null;
var count__36136 = (0);
var i__36137 = (0);
while(true){
if((i__36137 < count__36136)){
var el = chunk__36135.cljs$core$IIndexed$_nth$arity$2(null,i__36137);
var handler_36940__$1 = ((function (seq__36134,chunk__36135,count__36136,i__36137,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36134,chunk__36135,count__36136,i__36137,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36940__$1);


var G__36941 = seq__36134;
var G__36942 = chunk__36135;
var G__36943 = count__36136;
var G__36944 = (i__36137 + (1));
seq__36134 = G__36941;
chunk__36135 = G__36942;
count__36136 = G__36943;
i__36137 = G__36944;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36134);
if(temp__5804__auto__){
var seq__36134__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36134__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36134__$1);
var G__36945 = cljs.core.chunk_rest(seq__36134__$1);
var G__36946 = c__5568__auto__;
var G__36947 = cljs.core.count(c__5568__auto__);
var G__36948 = (0);
seq__36134 = G__36945;
chunk__36135 = G__36946;
count__36136 = G__36947;
i__36137 = G__36948;
continue;
} else {
var el = cljs.core.first(seq__36134__$1);
var handler_36952__$1 = ((function (seq__36134,chunk__36135,count__36136,i__36137,el,seq__36134__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36134,chunk__36135,count__36136,i__36137,el,seq__36134__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36952__$1);


var G__36953 = cljs.core.next(seq__36134__$1);
var G__36954 = null;
var G__36955 = (0);
var G__36956 = (0);
seq__36134 = G__36953;
chunk__36135 = G__36954;
count__36136 = G__36955;
i__36137 = G__36956;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__36160 = arguments.length;
switch (G__36160) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__36193 = cljs.core.seq(events);
var chunk__36194 = null;
var count__36195 = (0);
var i__36196 = (0);
while(true){
if((i__36196 < count__36195)){
var vec__36214 = chunk__36194.cljs$core$IIndexed$_nth$arity$2(null,i__36196);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36214,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36214,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36959 = seq__36193;
var G__36960 = chunk__36194;
var G__36961 = count__36195;
var G__36962 = (i__36196 + (1));
seq__36193 = G__36959;
chunk__36194 = G__36960;
count__36195 = G__36961;
i__36196 = G__36962;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36193);
if(temp__5804__auto__){
var seq__36193__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36193__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36193__$1);
var G__36963 = cljs.core.chunk_rest(seq__36193__$1);
var G__36964 = c__5568__auto__;
var G__36965 = cljs.core.count(c__5568__auto__);
var G__36966 = (0);
seq__36193 = G__36963;
chunk__36194 = G__36964;
count__36195 = G__36965;
i__36196 = G__36966;
continue;
} else {
var vec__36219 = cljs.core.first(seq__36193__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36219,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36219,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36967 = cljs.core.next(seq__36193__$1);
var G__36968 = null;
var G__36969 = (0);
var G__36970 = (0);
seq__36193 = G__36967;
chunk__36194 = G__36968;
count__36195 = G__36969;
i__36196 = G__36970;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__36225 = cljs.core.seq(styles);
var chunk__36226 = null;
var count__36227 = (0);
var i__36228 = (0);
while(true){
if((i__36228 < count__36227)){
var vec__36262 = chunk__36226.cljs$core$IIndexed$_nth$arity$2(null,i__36228);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36262,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36262,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36972 = seq__36225;
var G__36973 = chunk__36226;
var G__36974 = count__36227;
var G__36975 = (i__36228 + (1));
seq__36225 = G__36972;
chunk__36226 = G__36973;
count__36227 = G__36974;
i__36228 = G__36975;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36225);
if(temp__5804__auto__){
var seq__36225__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36225__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36225__$1);
var G__36979 = cljs.core.chunk_rest(seq__36225__$1);
var G__36980 = c__5568__auto__;
var G__36981 = cljs.core.count(c__5568__auto__);
var G__36982 = (0);
seq__36225 = G__36979;
chunk__36226 = G__36980;
count__36227 = G__36981;
i__36228 = G__36982;
continue;
} else {
var vec__36270 = cljs.core.first(seq__36225__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36270,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36270,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36983 = cljs.core.next(seq__36225__$1);
var G__36984 = null;
var G__36985 = (0);
var G__36986 = (0);
seq__36225 = G__36983;
chunk__36226 = G__36984;
count__36227 = G__36985;
i__36228 = G__36986;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__36284_36987 = key;
var G__36284_36988__$1 = (((G__36284_36987 instanceof cljs.core.Keyword))?G__36284_36987.fqn:null);
switch (G__36284_36988__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36990 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_36990,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_36990,"aria-");
}
})())){
el.setAttribute(ks_36990,value);
} else {
(el[ks_36990] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36334){
var map__36335 = p__36334;
var map__36335__$1 = cljs.core.__destructure_map(map__36335);
var props = map__36335__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36335__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36336 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36336,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36336,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36336,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36339 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36339,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36339;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36349 = arguments.length;
switch (G__36349) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36353){
var vec__36355 = p__36353;
var seq__36356 = cljs.core.seq(vec__36355);
var first__36357 = cljs.core.first(seq__36356);
var seq__36356__$1 = cljs.core.next(seq__36356);
var nn = first__36357;
var first__36357__$1 = cljs.core.first(seq__36356__$1);
var seq__36356__$2 = cljs.core.next(seq__36356__$1);
var np = first__36357__$1;
var nc = seq__36356__$2;
var node = vec__36355;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36362 = nn;
var G__36363 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36362,G__36363) : create_fn.call(null,G__36362,G__36363));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36368 = nn;
var G__36369 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36368,G__36369) : create_fn.call(null,G__36368,G__36369));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36374 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36374,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36374,(1),null);
var seq__36377_36997 = cljs.core.seq(node_children);
var chunk__36378_36998 = null;
var count__36379_36999 = (0);
var i__36380_37000 = (0);
while(true){
if((i__36380_37000 < count__36379_36999)){
var child_struct_37001 = chunk__36378_36998.cljs$core$IIndexed$_nth$arity$2(null,i__36380_37000);
var children_37002 = shadow.dom.dom_node(child_struct_37001);
if(cljs.core.seq_QMARK_(children_37002)){
var seq__36431_37003 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37002));
var chunk__36433_37004 = null;
var count__36434_37005 = (0);
var i__36435_37006 = (0);
while(true){
if((i__36435_37006 < count__36434_37005)){
var child_37009 = chunk__36433_37004.cljs$core$IIndexed$_nth$arity$2(null,i__36435_37006);
if(cljs.core.truth_(child_37009)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37009);


var G__37010 = seq__36431_37003;
var G__37011 = chunk__36433_37004;
var G__37012 = count__36434_37005;
var G__37013 = (i__36435_37006 + (1));
seq__36431_37003 = G__37010;
chunk__36433_37004 = G__37011;
count__36434_37005 = G__37012;
i__36435_37006 = G__37013;
continue;
} else {
var G__37014 = seq__36431_37003;
var G__37015 = chunk__36433_37004;
var G__37016 = count__36434_37005;
var G__37017 = (i__36435_37006 + (1));
seq__36431_37003 = G__37014;
chunk__36433_37004 = G__37015;
count__36434_37005 = G__37016;
i__36435_37006 = G__37017;
continue;
}
} else {
var temp__5804__auto___37018 = cljs.core.seq(seq__36431_37003);
if(temp__5804__auto___37018){
var seq__36431_37019__$1 = temp__5804__auto___37018;
if(cljs.core.chunked_seq_QMARK_(seq__36431_37019__$1)){
var c__5568__auto___37020 = cljs.core.chunk_first(seq__36431_37019__$1);
var G__37021 = cljs.core.chunk_rest(seq__36431_37019__$1);
var G__37022 = c__5568__auto___37020;
var G__37023 = cljs.core.count(c__5568__auto___37020);
var G__37024 = (0);
seq__36431_37003 = G__37021;
chunk__36433_37004 = G__37022;
count__36434_37005 = G__37023;
i__36435_37006 = G__37024;
continue;
} else {
var child_37026 = cljs.core.first(seq__36431_37019__$1);
if(cljs.core.truth_(child_37026)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37026);


var G__37027 = cljs.core.next(seq__36431_37019__$1);
var G__37028 = null;
var G__37029 = (0);
var G__37030 = (0);
seq__36431_37003 = G__37027;
chunk__36433_37004 = G__37028;
count__36434_37005 = G__37029;
i__36435_37006 = G__37030;
continue;
} else {
var G__37031 = cljs.core.next(seq__36431_37019__$1);
var G__37032 = null;
var G__37033 = (0);
var G__37034 = (0);
seq__36431_37003 = G__37031;
chunk__36433_37004 = G__37032;
count__36434_37005 = G__37033;
i__36435_37006 = G__37034;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37002);
}


var G__37035 = seq__36377_36997;
var G__37036 = chunk__36378_36998;
var G__37037 = count__36379_36999;
var G__37038 = (i__36380_37000 + (1));
seq__36377_36997 = G__37035;
chunk__36378_36998 = G__37036;
count__36379_36999 = G__37037;
i__36380_37000 = G__37038;
continue;
} else {
var temp__5804__auto___37039 = cljs.core.seq(seq__36377_36997);
if(temp__5804__auto___37039){
var seq__36377_37046__$1 = temp__5804__auto___37039;
if(cljs.core.chunked_seq_QMARK_(seq__36377_37046__$1)){
var c__5568__auto___37047 = cljs.core.chunk_first(seq__36377_37046__$1);
var G__37048 = cljs.core.chunk_rest(seq__36377_37046__$1);
var G__37049 = c__5568__auto___37047;
var G__37050 = cljs.core.count(c__5568__auto___37047);
var G__37051 = (0);
seq__36377_36997 = G__37048;
chunk__36378_36998 = G__37049;
count__36379_36999 = G__37050;
i__36380_37000 = G__37051;
continue;
} else {
var child_struct_37052 = cljs.core.first(seq__36377_37046__$1);
var children_37053 = shadow.dom.dom_node(child_struct_37052);
if(cljs.core.seq_QMARK_(children_37053)){
var seq__36504_37055 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37053));
var chunk__36506_37056 = null;
var count__36507_37057 = (0);
var i__36508_37058 = (0);
while(true){
if((i__36508_37058 < count__36507_37057)){
var child_37059 = chunk__36506_37056.cljs$core$IIndexed$_nth$arity$2(null,i__36508_37058);
if(cljs.core.truth_(child_37059)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37059);


var G__37060 = seq__36504_37055;
var G__37061 = chunk__36506_37056;
var G__37062 = count__36507_37057;
var G__37063 = (i__36508_37058 + (1));
seq__36504_37055 = G__37060;
chunk__36506_37056 = G__37061;
count__36507_37057 = G__37062;
i__36508_37058 = G__37063;
continue;
} else {
var G__37064 = seq__36504_37055;
var G__37065 = chunk__36506_37056;
var G__37066 = count__36507_37057;
var G__37067 = (i__36508_37058 + (1));
seq__36504_37055 = G__37064;
chunk__36506_37056 = G__37065;
count__36507_37057 = G__37066;
i__36508_37058 = G__37067;
continue;
}
} else {
var temp__5804__auto___37068__$1 = cljs.core.seq(seq__36504_37055);
if(temp__5804__auto___37068__$1){
var seq__36504_37069__$1 = temp__5804__auto___37068__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36504_37069__$1)){
var c__5568__auto___37070 = cljs.core.chunk_first(seq__36504_37069__$1);
var G__37071 = cljs.core.chunk_rest(seq__36504_37069__$1);
var G__37072 = c__5568__auto___37070;
var G__37073 = cljs.core.count(c__5568__auto___37070);
var G__37074 = (0);
seq__36504_37055 = G__37071;
chunk__36506_37056 = G__37072;
count__36507_37057 = G__37073;
i__36508_37058 = G__37074;
continue;
} else {
var child_37075 = cljs.core.first(seq__36504_37069__$1);
if(cljs.core.truth_(child_37075)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37075);


var G__37076 = cljs.core.next(seq__36504_37069__$1);
var G__37077 = null;
var G__37078 = (0);
var G__37079 = (0);
seq__36504_37055 = G__37076;
chunk__36506_37056 = G__37077;
count__36507_37057 = G__37078;
i__36508_37058 = G__37079;
continue;
} else {
var G__37080 = cljs.core.next(seq__36504_37069__$1);
var G__37081 = null;
var G__37082 = (0);
var G__37083 = (0);
seq__36504_37055 = G__37080;
chunk__36506_37056 = G__37081;
count__36507_37057 = G__37082;
i__36508_37058 = G__37083;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37053);
}


var G__37086 = cljs.core.next(seq__36377_37046__$1);
var G__37087 = null;
var G__37088 = (0);
var G__37089 = (0);
seq__36377_36997 = G__37086;
chunk__36378_36998 = G__37087;
count__36379_36999 = G__37088;
i__36380_37000 = G__37089;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__36531 = cljs.core.seq(node);
var chunk__36532 = null;
var count__36533 = (0);
var i__36534 = (0);
while(true){
if((i__36534 < count__36533)){
var n = chunk__36532.cljs$core$IIndexed$_nth$arity$2(null,i__36534);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37092 = seq__36531;
var G__37093 = chunk__36532;
var G__37094 = count__36533;
var G__37095 = (i__36534 + (1));
seq__36531 = G__37092;
chunk__36532 = G__37093;
count__36533 = G__37094;
i__36534 = G__37095;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36531);
if(temp__5804__auto__){
var seq__36531__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36531__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36531__$1);
var G__37096 = cljs.core.chunk_rest(seq__36531__$1);
var G__37097 = c__5568__auto__;
var G__37098 = cljs.core.count(c__5568__auto__);
var G__37099 = (0);
seq__36531 = G__37096;
chunk__36532 = G__37097;
count__36533 = G__37098;
i__36534 = G__37099;
continue;
} else {
var n = cljs.core.first(seq__36531__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37103 = cljs.core.next(seq__36531__$1);
var G__37104 = null;
var G__37105 = (0);
var G__37106 = (0);
seq__36531 = G__37103;
chunk__36532 = G__37104;
count__36533 = G__37105;
i__36534 = G__37106;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__36548 = arguments.length;
switch (G__36548) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__36554 = arguments.length;
switch (G__36554) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__36556 = arguments.length;
switch (G__36556) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37112 = arguments.length;
var i__5770__auto___37113 = (0);
while(true){
if((i__5770__auto___37113 < len__5769__auto___37112)){
args__5775__auto__.push((arguments[i__5770__auto___37113]));

var G__37114 = (i__5770__auto___37113 + (1));
i__5770__auto___37113 = G__37114;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__36567_37115 = cljs.core.seq(nodes);
var chunk__36568_37116 = null;
var count__36569_37117 = (0);
var i__36570_37118 = (0);
while(true){
if((i__36570_37118 < count__36569_37117)){
var node_37119 = chunk__36568_37116.cljs$core$IIndexed$_nth$arity$2(null,i__36570_37118);
fragment.appendChild(shadow.dom._to_dom(node_37119));


var G__37120 = seq__36567_37115;
var G__37121 = chunk__36568_37116;
var G__37122 = count__36569_37117;
var G__37123 = (i__36570_37118 + (1));
seq__36567_37115 = G__37120;
chunk__36568_37116 = G__37121;
count__36569_37117 = G__37122;
i__36570_37118 = G__37123;
continue;
} else {
var temp__5804__auto___37124 = cljs.core.seq(seq__36567_37115);
if(temp__5804__auto___37124){
var seq__36567_37125__$1 = temp__5804__auto___37124;
if(cljs.core.chunked_seq_QMARK_(seq__36567_37125__$1)){
var c__5568__auto___37126 = cljs.core.chunk_first(seq__36567_37125__$1);
var G__37127 = cljs.core.chunk_rest(seq__36567_37125__$1);
var G__37128 = c__5568__auto___37126;
var G__37129 = cljs.core.count(c__5568__auto___37126);
var G__37130 = (0);
seq__36567_37115 = G__37127;
chunk__36568_37116 = G__37128;
count__36569_37117 = G__37129;
i__36570_37118 = G__37130;
continue;
} else {
var node_37131 = cljs.core.first(seq__36567_37125__$1);
fragment.appendChild(shadow.dom._to_dom(node_37131));


var G__37132 = cljs.core.next(seq__36567_37125__$1);
var G__37133 = null;
var G__37134 = (0);
var G__37135 = (0);
seq__36567_37115 = G__37132;
chunk__36568_37116 = G__37133;
count__36569_37117 = G__37134;
i__36570_37118 = G__37135;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36564){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36564));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36572_37136 = cljs.core.seq(scripts);
var chunk__36573_37137 = null;
var count__36574_37138 = (0);
var i__36575_37139 = (0);
while(true){
if((i__36575_37139 < count__36574_37138)){
var vec__36585_37140 = chunk__36573_37137.cljs$core$IIndexed$_nth$arity$2(null,i__36575_37139);
var script_tag_37141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36585_37140,(0),null);
var script_body_37142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36585_37140,(1),null);
eval(script_body_37142);


var G__37143 = seq__36572_37136;
var G__37144 = chunk__36573_37137;
var G__37145 = count__36574_37138;
var G__37146 = (i__36575_37139 + (1));
seq__36572_37136 = G__37143;
chunk__36573_37137 = G__37144;
count__36574_37138 = G__37145;
i__36575_37139 = G__37146;
continue;
} else {
var temp__5804__auto___37147 = cljs.core.seq(seq__36572_37136);
if(temp__5804__auto___37147){
var seq__36572_37148__$1 = temp__5804__auto___37147;
if(cljs.core.chunked_seq_QMARK_(seq__36572_37148__$1)){
var c__5568__auto___37149 = cljs.core.chunk_first(seq__36572_37148__$1);
var G__37150 = cljs.core.chunk_rest(seq__36572_37148__$1);
var G__37151 = c__5568__auto___37149;
var G__37152 = cljs.core.count(c__5568__auto___37149);
var G__37153 = (0);
seq__36572_37136 = G__37150;
chunk__36573_37137 = G__37151;
count__36574_37138 = G__37152;
i__36575_37139 = G__37153;
continue;
} else {
var vec__36590_37154 = cljs.core.first(seq__36572_37148__$1);
var script_tag_37155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36590_37154,(0),null);
var script_body_37156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36590_37154,(1),null);
eval(script_body_37156);


var G__37157 = cljs.core.next(seq__36572_37148__$1);
var G__37158 = null;
var G__37159 = (0);
var G__37160 = (0);
seq__36572_37136 = G__37157;
chunk__36573_37137 = G__37158;
count__36574_37138 = G__37159;
i__36575_37139 = G__37160;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36595){
var vec__36596 = p__36595;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36596,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36596,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__36606 = arguments.length;
switch (G__36606) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__36617 = cljs.core.seq(style_keys);
var chunk__36618 = null;
var count__36619 = (0);
var i__36620 = (0);
while(true){
if((i__36620 < count__36619)){
var it = chunk__36618.cljs$core$IIndexed$_nth$arity$2(null,i__36620);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37168 = seq__36617;
var G__37169 = chunk__36618;
var G__37170 = count__36619;
var G__37171 = (i__36620 + (1));
seq__36617 = G__37168;
chunk__36618 = G__37169;
count__36619 = G__37170;
i__36620 = G__37171;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36617);
if(temp__5804__auto__){
var seq__36617__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36617__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36617__$1);
var G__37172 = cljs.core.chunk_rest(seq__36617__$1);
var G__37173 = c__5568__auto__;
var G__37174 = cljs.core.count(c__5568__auto__);
var G__37175 = (0);
seq__36617 = G__37172;
chunk__36618 = G__37173;
count__36619 = G__37174;
i__36620 = G__37175;
continue;
} else {
var it = cljs.core.first(seq__36617__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37176 = cljs.core.next(seq__36617__$1);
var G__37177 = null;
var G__37178 = (0);
var G__37179 = (0);
seq__36617 = G__37176;
chunk__36618 = G__37177;
count__36619 = G__37178;
i__36620 = G__37179;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36630,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36637 = k36630;
var G__36637__$1 = (((G__36637 instanceof cljs.core.Keyword))?G__36637.fqn:null);
switch (G__36637__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36630,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36638){
var vec__36639 = p__36638;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36639,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36639,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36629){
var self__ = this;
var G__36629__$1 = this;
return (new cljs.core.RecordIter((0),G__36629__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36631,other36632){
var self__ = this;
var this36631__$1 = this;
return (((!((other36632 == null)))) && ((((this36631__$1.constructor === other36632.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36631__$1.x,other36632.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36631__$1.y,other36632.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36631__$1.__extmap,other36632.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36630){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36650 = k36630;
var G__36650__$1 = (((G__36650 instanceof cljs.core.Keyword))?G__36650.fqn:null);
switch (G__36650__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36630);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36629){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36651 = cljs.core.keyword_identical_QMARK_;
var expr__36652 = k__5352__auto__;
if(cljs.core.truth_((pred__36651.cljs$core$IFn$_invoke$arity$2 ? pred__36651.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36652) : pred__36651.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36652)))){
return (new shadow.dom.Coordinate(G__36629,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36651.cljs$core$IFn$_invoke$arity$2 ? pred__36651.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36652) : pred__36651.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36652)))){
return (new shadow.dom.Coordinate(self__.x,G__36629,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36629),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36629){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36629,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36633){
var extmap__5385__auto__ = (function (){var G__36656 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36633,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36633)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36656);
} else {
return G__36656;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36633),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36633),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36662,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36670 = k36662;
var G__36670__$1 = (((G__36670 instanceof cljs.core.Keyword))?G__36670.fqn:null);
switch (G__36670__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36662,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36673){
var vec__36676 = p__36673;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36676,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36676,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36661){
var self__ = this;
var G__36661__$1 = this;
return (new cljs.core.RecordIter((0),G__36661__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36664,other36665){
var self__ = this;
var this36664__$1 = this;
return (((!((other36665 == null)))) && ((((this36664__$1.constructor === other36665.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36664__$1.w,other36665.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36664__$1.h,other36665.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36664__$1.__extmap,other36665.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36662){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36688 = k36662;
var G__36688__$1 = (((G__36688 instanceof cljs.core.Keyword))?G__36688.fqn:null);
switch (G__36688__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36662);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36661){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36693 = cljs.core.keyword_identical_QMARK_;
var expr__36694 = k__5352__auto__;
if(cljs.core.truth_((pred__36693.cljs$core$IFn$_invoke$arity$2 ? pred__36693.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36694) : pred__36693.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36694)))){
return (new shadow.dom.Size(G__36661,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36693.cljs$core$IFn$_invoke$arity$2 ? pred__36693.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36694) : pred__36693.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36694)))){
return (new shadow.dom.Size(self__.w,G__36661,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36661),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36661){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36661,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36667){
var extmap__5385__auto__ = (function (){var G__36698 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36667,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36667)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36698);
} else {
return G__36698;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36667),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36667),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__37216 = (i + (1));
var G__37217 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37216;
ret = G__37217;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36713){
var vec__36714 = p__36713;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36714,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36714,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36721 = arguments.length;
switch (G__36721) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__37221 = ps;
var G__37222 = (i + (1));
el__$1 = G__37221;
i = G__37222;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__36775 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36775,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36775,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36775,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36781_37225 = cljs.core.seq(props);
var chunk__36782_37226 = null;
var count__36783_37227 = (0);
var i__36784_37228 = (0);
while(true){
if((i__36784_37228 < count__36783_37227)){
var vec__36795_37229 = chunk__36782_37226.cljs$core$IIndexed$_nth$arity$2(null,i__36784_37228);
var k_37230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36795_37229,(0),null);
var v_37231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36795_37229,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_37230);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37230),v_37231);


var G__37232 = seq__36781_37225;
var G__37233 = chunk__36782_37226;
var G__37234 = count__36783_37227;
var G__37235 = (i__36784_37228 + (1));
seq__36781_37225 = G__37232;
chunk__36782_37226 = G__37233;
count__36783_37227 = G__37234;
i__36784_37228 = G__37235;
continue;
} else {
var temp__5804__auto___37236 = cljs.core.seq(seq__36781_37225);
if(temp__5804__auto___37236){
var seq__36781_37237__$1 = temp__5804__auto___37236;
if(cljs.core.chunked_seq_QMARK_(seq__36781_37237__$1)){
var c__5568__auto___37238 = cljs.core.chunk_first(seq__36781_37237__$1);
var G__37239 = cljs.core.chunk_rest(seq__36781_37237__$1);
var G__37240 = c__5568__auto___37238;
var G__37241 = cljs.core.count(c__5568__auto___37238);
var G__37242 = (0);
seq__36781_37225 = G__37239;
chunk__36782_37226 = G__37240;
count__36783_37227 = G__37241;
i__36784_37228 = G__37242;
continue;
} else {
var vec__36806_37243 = cljs.core.first(seq__36781_37237__$1);
var k_37244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36806_37243,(0),null);
var v_37245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36806_37243,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_37244);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37244),v_37245);


var G__37248 = cljs.core.next(seq__36781_37237__$1);
var G__37249 = null;
var G__37250 = (0);
var G__37251 = (0);
seq__36781_37225 = G__37248;
chunk__36782_37226 = G__37249;
count__36783_37227 = G__37250;
i__36784_37228 = G__37251;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__36810 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36810,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36810,(1),null);
var seq__36816_37252 = cljs.core.seq(node_children);
var chunk__36818_37253 = null;
var count__36819_37254 = (0);
var i__36820_37255 = (0);
while(true){
if((i__36820_37255 < count__36819_37254)){
var child_struct_37256 = chunk__36818_37253.cljs$core$IIndexed$_nth$arity$2(null,i__36820_37255);
if((!((child_struct_37256 == null)))){
if(typeof child_struct_37256 === 'string'){
var text_37257 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37257),child_struct_37256].join(''));
} else {
var children_37258 = shadow.dom.svg_node(child_struct_37256);
if(cljs.core.seq_QMARK_(children_37258)){
var seq__36834_37259 = cljs.core.seq(children_37258);
var chunk__36836_37260 = null;
var count__36837_37261 = (0);
var i__36838_37262 = (0);
while(true){
if((i__36838_37262 < count__36837_37261)){
var child_37263 = chunk__36836_37260.cljs$core$IIndexed$_nth$arity$2(null,i__36838_37262);
if(cljs.core.truth_(child_37263)){
node.appendChild(child_37263);


var G__37264 = seq__36834_37259;
var G__37265 = chunk__36836_37260;
var G__37266 = count__36837_37261;
var G__37267 = (i__36838_37262 + (1));
seq__36834_37259 = G__37264;
chunk__36836_37260 = G__37265;
count__36837_37261 = G__37266;
i__36838_37262 = G__37267;
continue;
} else {
var G__37268 = seq__36834_37259;
var G__37269 = chunk__36836_37260;
var G__37270 = count__36837_37261;
var G__37271 = (i__36838_37262 + (1));
seq__36834_37259 = G__37268;
chunk__36836_37260 = G__37269;
count__36837_37261 = G__37270;
i__36838_37262 = G__37271;
continue;
}
} else {
var temp__5804__auto___37272 = cljs.core.seq(seq__36834_37259);
if(temp__5804__auto___37272){
var seq__36834_37273__$1 = temp__5804__auto___37272;
if(cljs.core.chunked_seq_QMARK_(seq__36834_37273__$1)){
var c__5568__auto___37274 = cljs.core.chunk_first(seq__36834_37273__$1);
var G__37275 = cljs.core.chunk_rest(seq__36834_37273__$1);
var G__37276 = c__5568__auto___37274;
var G__37277 = cljs.core.count(c__5568__auto___37274);
var G__37278 = (0);
seq__36834_37259 = G__37275;
chunk__36836_37260 = G__37276;
count__36837_37261 = G__37277;
i__36838_37262 = G__37278;
continue;
} else {
var child_37279 = cljs.core.first(seq__36834_37273__$1);
if(cljs.core.truth_(child_37279)){
node.appendChild(child_37279);


var G__37280 = cljs.core.next(seq__36834_37273__$1);
var G__37281 = null;
var G__37282 = (0);
var G__37283 = (0);
seq__36834_37259 = G__37280;
chunk__36836_37260 = G__37281;
count__36837_37261 = G__37282;
i__36838_37262 = G__37283;
continue;
} else {
var G__37284 = cljs.core.next(seq__36834_37273__$1);
var G__37285 = null;
var G__37286 = (0);
var G__37287 = (0);
seq__36834_37259 = G__37284;
chunk__36836_37260 = G__37285;
count__36837_37261 = G__37286;
i__36838_37262 = G__37287;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37258);
}
}


var G__37288 = seq__36816_37252;
var G__37289 = chunk__36818_37253;
var G__37290 = count__36819_37254;
var G__37291 = (i__36820_37255 + (1));
seq__36816_37252 = G__37288;
chunk__36818_37253 = G__37289;
count__36819_37254 = G__37290;
i__36820_37255 = G__37291;
continue;
} else {
var G__37292 = seq__36816_37252;
var G__37293 = chunk__36818_37253;
var G__37294 = count__36819_37254;
var G__37295 = (i__36820_37255 + (1));
seq__36816_37252 = G__37292;
chunk__36818_37253 = G__37293;
count__36819_37254 = G__37294;
i__36820_37255 = G__37295;
continue;
}
} else {
var temp__5804__auto___37296 = cljs.core.seq(seq__36816_37252);
if(temp__5804__auto___37296){
var seq__36816_37297__$1 = temp__5804__auto___37296;
if(cljs.core.chunked_seq_QMARK_(seq__36816_37297__$1)){
var c__5568__auto___37298 = cljs.core.chunk_first(seq__36816_37297__$1);
var G__37299 = cljs.core.chunk_rest(seq__36816_37297__$1);
var G__37300 = c__5568__auto___37298;
var G__37301 = cljs.core.count(c__5568__auto___37298);
var G__37302 = (0);
seq__36816_37252 = G__37299;
chunk__36818_37253 = G__37300;
count__36819_37254 = G__37301;
i__36820_37255 = G__37302;
continue;
} else {
var child_struct_37303 = cljs.core.first(seq__36816_37297__$1);
if((!((child_struct_37303 == null)))){
if(typeof child_struct_37303 === 'string'){
var text_37304 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37304),child_struct_37303].join(''));
} else {
var children_37305 = shadow.dom.svg_node(child_struct_37303);
if(cljs.core.seq_QMARK_(children_37305)){
var seq__36840_37306 = cljs.core.seq(children_37305);
var chunk__36842_37307 = null;
var count__36843_37308 = (0);
var i__36844_37309 = (0);
while(true){
if((i__36844_37309 < count__36843_37308)){
var child_37310 = chunk__36842_37307.cljs$core$IIndexed$_nth$arity$2(null,i__36844_37309);
if(cljs.core.truth_(child_37310)){
node.appendChild(child_37310);


var G__37311 = seq__36840_37306;
var G__37312 = chunk__36842_37307;
var G__37313 = count__36843_37308;
var G__37314 = (i__36844_37309 + (1));
seq__36840_37306 = G__37311;
chunk__36842_37307 = G__37312;
count__36843_37308 = G__37313;
i__36844_37309 = G__37314;
continue;
} else {
var G__37315 = seq__36840_37306;
var G__37316 = chunk__36842_37307;
var G__37317 = count__36843_37308;
var G__37318 = (i__36844_37309 + (1));
seq__36840_37306 = G__37315;
chunk__36842_37307 = G__37316;
count__36843_37308 = G__37317;
i__36844_37309 = G__37318;
continue;
}
} else {
var temp__5804__auto___37319__$1 = cljs.core.seq(seq__36840_37306);
if(temp__5804__auto___37319__$1){
var seq__36840_37320__$1 = temp__5804__auto___37319__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36840_37320__$1)){
var c__5568__auto___37321 = cljs.core.chunk_first(seq__36840_37320__$1);
var G__37322 = cljs.core.chunk_rest(seq__36840_37320__$1);
var G__37323 = c__5568__auto___37321;
var G__37324 = cljs.core.count(c__5568__auto___37321);
var G__37325 = (0);
seq__36840_37306 = G__37322;
chunk__36842_37307 = G__37323;
count__36843_37308 = G__37324;
i__36844_37309 = G__37325;
continue;
} else {
var child_37326 = cljs.core.first(seq__36840_37320__$1);
if(cljs.core.truth_(child_37326)){
node.appendChild(child_37326);


var G__37327 = cljs.core.next(seq__36840_37320__$1);
var G__37328 = null;
var G__37329 = (0);
var G__37330 = (0);
seq__36840_37306 = G__37327;
chunk__36842_37307 = G__37328;
count__36843_37308 = G__37329;
i__36844_37309 = G__37330;
continue;
} else {
var G__37331 = cljs.core.next(seq__36840_37320__$1);
var G__37332 = null;
var G__37333 = (0);
var G__37334 = (0);
seq__36840_37306 = G__37331;
chunk__36842_37307 = G__37332;
count__36843_37308 = G__37333;
i__36844_37309 = G__37334;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37305);
}
}


var G__37335 = cljs.core.next(seq__36816_37297__$1);
var G__37336 = null;
var G__37337 = (0);
var G__37338 = (0);
seq__36816_37252 = G__37335;
chunk__36818_37253 = G__37336;
count__36819_37254 = G__37337;
i__36820_37255 = G__37338;
continue;
} else {
var G__37339 = cljs.core.next(seq__36816_37297__$1);
var G__37340 = null;
var G__37341 = (0);
var G__37342 = (0);
seq__36816_37252 = G__37339;
chunk__36818_37253 = G__37340;
count__36819_37254 = G__37341;
i__36820_37255 = G__37342;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37347 = arguments.length;
var i__5770__auto___37348 = (0);
while(true){
if((i__5770__auto___37348 < len__5769__auto___37347)){
args__5775__auto__.push((arguments[i__5770__auto___37348]));

var G__37349 = (i__5770__auto___37348 + (1));
i__5770__auto___37348 = G__37349;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36850){
var G__36851 = cljs.core.first(seq36850);
var seq36850__$1 = cljs.core.next(seq36850);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36851,seq36850__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__36858 = arguments.length;
switch (G__36858) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__33227__auto___37352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = (function (state_36871){
var state_val_36872 = (state_36871[(1)]);
if((state_val_36872 === (1))){
var state_36871__$1 = state_36871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36871__$1,(2),once_or_cleanup);
} else {
if((state_val_36872 === (2))){
var inst_36867 = (state_36871[(2)]);
var inst_36868 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36871__$1 = (function (){var statearr_36883 = state_36871;
(statearr_36883[(7)] = inst_36867);

return statearr_36883;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36871__$1,inst_36868);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32825__auto__ = null;
var shadow$dom$state_machine__32825__auto____0 = (function (){
var statearr_36887 = [null,null,null,null,null,null,null,null];
(statearr_36887[(0)] = shadow$dom$state_machine__32825__auto__);

(statearr_36887[(1)] = (1));

return statearr_36887;
});
var shadow$dom$state_machine__32825__auto____1 = (function (state_36871){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_36871);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e36888){var ex__32828__auto__ = e36888;
var statearr_36890_37356 = state_36871;
(statearr_36890_37356[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_36871[(4)]))){
var statearr_36892_37357 = state_36871;
(statearr_36892_37357[(1)] = cljs.core.first((state_36871[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37358 = state_36871;
state_36871 = G__37358;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
shadow$dom$state_machine__32825__auto__ = function(state_36871){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32825__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32825__auto____1.call(this,state_36871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32825__auto____0;
shadow$dom$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32825__auto____1;
return shadow$dom$state_machine__32825__auto__;
})()
})();
var state__33229__auto__ = (function (){var statearr_36893 = f__33228__auto__();
(statearr_36893[(6)] = c__33227__auto___37352);

return statearr_36893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
