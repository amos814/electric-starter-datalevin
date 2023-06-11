goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33109,res){
var map__33110 = p__33109;
var map__33110__$1 = cljs.core.__destructure_map(map__33110);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33110__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33110__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33115 = res;
var G__33115__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33115,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33115);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33115__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33115__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33117 = arguments.length;
switch (G__33117) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33119,msg,handlers,timeout_after_ms){
var map__33120 = p__33119;
var map__33120__$1 = cljs.core.__destructure_map(map__33120);
var runtime = map__33120__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33120__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33272 = arguments.length;
var i__5770__auto___33273 = (0);
while(true){
if((i__5770__auto___33273 < len__5769__auto___33272)){
args__5775__auto__.push((arguments[i__5770__auto___33273]));

var G__33275 = (i__5770__auto___33273 + (1));
i__5770__auto___33273 = G__33275;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33124,ev,args){
var map__33125 = p__33124;
var map__33125__$1 = cljs.core.__destructure_map(map__33125);
var runtime = map__33125__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33125__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33126 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33129 = null;
var count__33130 = (0);
var i__33131 = (0);
while(true){
if((i__33131 < count__33130)){
var ext = chunk__33129.cljs$core$IIndexed$_nth$arity$2(null,i__33131);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33284 = seq__33126;
var G__33285 = chunk__33129;
var G__33286 = count__33130;
var G__33287 = (i__33131 + (1));
seq__33126 = G__33284;
chunk__33129 = G__33285;
count__33130 = G__33286;
i__33131 = G__33287;
continue;
} else {
var G__33288 = seq__33126;
var G__33289 = chunk__33129;
var G__33290 = count__33130;
var G__33291 = (i__33131 + (1));
seq__33126 = G__33288;
chunk__33129 = G__33289;
count__33130 = G__33290;
i__33131 = G__33291;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33126);
if(temp__5804__auto__){
var seq__33126__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33126__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33126__$1);
var G__33292 = cljs.core.chunk_rest(seq__33126__$1);
var G__33293 = c__5568__auto__;
var G__33294 = cljs.core.count(c__5568__auto__);
var G__33295 = (0);
seq__33126 = G__33292;
chunk__33129 = G__33293;
count__33130 = G__33294;
i__33131 = G__33295;
continue;
} else {
var ext = cljs.core.first(seq__33126__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33296 = cljs.core.next(seq__33126__$1);
var G__33297 = null;
var G__33298 = (0);
var G__33299 = (0);
seq__33126 = G__33296;
chunk__33129 = G__33297;
count__33130 = G__33298;
i__33131 = G__33299;
continue;
} else {
var G__33301 = cljs.core.next(seq__33126__$1);
var G__33302 = null;
var G__33303 = (0);
var G__33304 = (0);
seq__33126 = G__33301;
chunk__33129 = G__33302;
count__33130 = G__33303;
i__33131 = G__33304;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33121){
var G__33122 = cljs.core.first(seq33121);
var seq33121__$1 = cljs.core.next(seq33121);
var G__33123 = cljs.core.first(seq33121__$1);
var seq33121__$2 = cljs.core.next(seq33121__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33122,G__33123,seq33121__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33134,p__33135){
var map__33136 = p__33134;
var map__33136__$1 = cljs.core.__destructure_map(map__33136);
var runtime = map__33136__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33136__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33137 = p__33135;
var map__33137__$1 = cljs.core.__destructure_map(map__33137);
var msg = map__33137__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33137__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33138 = cljs.core.deref(state_ref);
var map__33138__$1 = cljs.core.__destructure_map(map__33138);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33138__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33138__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33141){
var map__33142 = p__33141;
var map__33142__$1 = cljs.core.__destructure_map(map__33142);
var runtime = map__33142__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33142__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33149,msg){
var map__33150 = p__33149;
var map__33150__$1 = cljs.core.__destructure_map(map__33150);
var runtime = map__33150__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33150__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33175,key,p__33176){
var map__33177 = p__33175;
var map__33177__$1 = cljs.core.__destructure_map(map__33177);
var state = map__33177__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33177__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33178 = p__33176;
var map__33178__$1 = cljs.core.__destructure_map(map__33178);
var spec = map__33178__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33178__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33182,key,spec){
var map__33183 = p__33182;
var map__33183__$1 = cljs.core.__destructure_map(map__33183);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33183__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33186_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33186_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33187_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33187_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33188_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33188_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33189_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33189_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33190_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33190_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33201,key){
var map__33205 = p__33201;
var map__33205__$1 = cljs.core.__destructure_map(map__33205);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33205__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33214,msg){
var map__33215 = p__33214;
var map__33215__$1 = cljs.core.__destructure_map(map__33215);
var runtime = map__33215__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33215__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33223,p__33224){
var map__33225 = p__33223;
var map__33225__$1 = cljs.core.__destructure_map(map__33225);
var runtime = map__33225__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33225__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33226 = p__33224;
var map__33226__$1 = cljs.core.__destructure_map(map__33226);
var msg = map__33226__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33226__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33226__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33233 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33235 = null;
var count__33236 = (0);
var i__33237 = (0);
while(true){
if((i__33237 < count__33236)){
var map__33246 = chunk__33235.cljs$core$IIndexed$_nth$arity$2(null,i__33237);
var map__33246__$1 = cljs.core.__destructure_map(map__33246);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33246__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33319 = seq__33233;
var G__33320 = chunk__33235;
var G__33321 = count__33236;
var G__33322 = (i__33237 + (1));
seq__33233 = G__33319;
chunk__33235 = G__33320;
count__33236 = G__33321;
i__33237 = G__33322;
continue;
} else {
var G__33323 = seq__33233;
var G__33324 = chunk__33235;
var G__33325 = count__33236;
var G__33326 = (i__33237 + (1));
seq__33233 = G__33323;
chunk__33235 = G__33324;
count__33236 = G__33325;
i__33237 = G__33326;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33233);
if(temp__5804__auto__){
var seq__33233__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33233__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33233__$1);
var G__33327 = cljs.core.chunk_rest(seq__33233__$1);
var G__33328 = c__5568__auto__;
var G__33329 = cljs.core.count(c__5568__auto__);
var G__33330 = (0);
seq__33233 = G__33327;
chunk__33235 = G__33328;
count__33236 = G__33329;
i__33237 = G__33330;
continue;
} else {
var map__33248 = cljs.core.first(seq__33233__$1);
var map__33248__$1 = cljs.core.__destructure_map(map__33248);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33248__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33332 = cljs.core.next(seq__33233__$1);
var G__33333 = null;
var G__33334 = (0);
var G__33335 = (0);
seq__33233 = G__33332;
chunk__33235 = G__33333;
count__33236 = G__33334;
i__33237 = G__33335;
continue;
} else {
var G__33336 = cljs.core.next(seq__33233__$1);
var G__33337 = null;
var G__33338 = (0);
var G__33339 = (0);
seq__33233 = G__33336;
chunk__33235 = G__33337;
count__33236 = G__33338;
i__33237 = G__33339;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
