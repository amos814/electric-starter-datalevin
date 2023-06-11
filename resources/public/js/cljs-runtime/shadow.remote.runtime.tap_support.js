goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36718,p__36719){
var map__36720 = p__36718;
var map__36720__$1 = cljs.core.__destructure_map(map__36720);
var svc = map__36720__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36720__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36720__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36720__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36722 = p__36719;
var map__36722__$1 = cljs.core.__destructure_map(map__36722);
var msg = map__36722__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36722__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36722__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36722__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36722__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36730,p__36731){
var map__36732 = p__36730;
var map__36732__$1 = cljs.core.__destructure_map(map__36732);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36732__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36733 = p__36731;
var map__36733__$1 = cljs.core.__destructure_map(map__36733);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36733__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36735,p__36736){
var map__36738 = p__36735;
var map__36738__$1 = cljs.core.__destructure_map(map__36738);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36738__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36738__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36739 = p__36736;
var map__36739__$1 = cljs.core.__destructure_map(map__36739);
var msg = map__36739__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36739__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36742,tid){
var map__36743 = p__36742;
var map__36743__$1 = cljs.core.__destructure_map(map__36743);
var svc = map__36743__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36743__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36759 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36760 = null;
var count__36761 = (0);
var i__36762 = (0);
while(true){
if((i__36762 < count__36761)){
var vec__36769 = chunk__36760.cljs$core$IIndexed$_nth$arity$2(null,i__36762);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36769,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36769,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36791 = seq__36759;
var G__36792 = chunk__36760;
var G__36793 = count__36761;
var G__36794 = (i__36762 + (1));
seq__36759 = G__36791;
chunk__36760 = G__36792;
count__36761 = G__36793;
i__36762 = G__36794;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36759);
if(temp__5804__auto__){
var seq__36759__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36759__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36759__$1);
var G__36798 = cljs.core.chunk_rest(seq__36759__$1);
var G__36799 = c__5568__auto__;
var G__36800 = cljs.core.count(c__5568__auto__);
var G__36801 = (0);
seq__36759 = G__36798;
chunk__36760 = G__36799;
count__36761 = G__36800;
i__36762 = G__36801;
continue;
} else {
var vec__36772 = cljs.core.first(seq__36759__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36772,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36772,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36802 = cljs.core.next(seq__36759__$1);
var G__36803 = null;
var G__36804 = (0);
var G__36805 = (0);
seq__36759 = G__36802;
chunk__36760 = G__36803;
count__36761 = G__36804;
i__36762 = G__36805;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36750_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36750_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36754_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36754_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36755_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36755_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36756_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36756_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36779){
var map__36780 = p__36779;
var map__36780__$1 = cljs.core.__destructure_map(map__36780);
var svc = map__36780__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36780__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36780__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
