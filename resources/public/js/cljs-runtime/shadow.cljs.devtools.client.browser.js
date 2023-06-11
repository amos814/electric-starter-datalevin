goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40435 = arguments.length;
var i__5770__auto___40436 = (0);
while(true){
if((i__5770__auto___40436 < len__5769__auto___40435)){
args__5775__auto__.push((arguments[i__5770__auto___40436]));

var G__40437 = (i__5770__auto___40436 + (1));
i__5770__auto___40436 = G__40437;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39424){
var G__39425 = cljs.core.first(seq39424);
var seq39424__$1 = cljs.core.next(seq39424);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39425,seq39424__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39450 = cljs.core.seq(sources);
var chunk__39451 = null;
var count__39452 = (0);
var i__39453 = (0);
while(true){
if((i__39453 < count__39452)){
var map__39470 = chunk__39451.cljs$core$IIndexed$_nth$arity$2(null,i__39453);
var map__39470__$1 = cljs.core.__destructure_map(map__39470);
var src = map__39470__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39470__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39470__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39470__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39470__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39472){var e_40443 = e39472;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40443);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40443.message)].join('')));
}

var G__40444 = seq__39450;
var G__40445 = chunk__39451;
var G__40446 = count__39452;
var G__40447 = (i__39453 + (1));
seq__39450 = G__40444;
chunk__39451 = G__40445;
count__39452 = G__40446;
i__39453 = G__40447;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39450);
if(temp__5804__auto__){
var seq__39450__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39450__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39450__$1);
var G__40448 = cljs.core.chunk_rest(seq__39450__$1);
var G__40449 = c__5568__auto__;
var G__40450 = cljs.core.count(c__5568__auto__);
var G__40451 = (0);
seq__39450 = G__40448;
chunk__39451 = G__40449;
count__39452 = G__40450;
i__39453 = G__40451;
continue;
} else {
var map__39473 = cljs.core.first(seq__39450__$1);
var map__39473__$1 = cljs.core.__destructure_map(map__39473);
var src = map__39473__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39473__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39473__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39473__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39473__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39474){var e_40452 = e39474;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40452);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40452.message)].join('')));
}

var G__40453 = cljs.core.next(seq__39450__$1);
var G__40454 = null;
var G__40455 = (0);
var G__40456 = (0);
seq__39450 = G__40453;
chunk__39451 = G__40454;
count__39452 = G__40455;
i__39453 = G__40456;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__39476 = cljs.core.seq(js_requires);
var chunk__39482 = null;
var count__39484 = (0);
var i__39485 = (0);
while(true){
if((i__39485 < count__39484)){
var js_ns = chunk__39482.cljs$core$IIndexed$_nth$arity$2(null,i__39485);
var require_str_40457 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40457);


var G__40458 = seq__39476;
var G__40459 = chunk__39482;
var G__40460 = count__39484;
var G__40461 = (i__39485 + (1));
seq__39476 = G__40458;
chunk__39482 = G__40459;
count__39484 = G__40460;
i__39485 = G__40461;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39476);
if(temp__5804__auto__){
var seq__39476__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39476__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39476__$1);
var G__40463 = cljs.core.chunk_rest(seq__39476__$1);
var G__40464 = c__5568__auto__;
var G__40465 = cljs.core.count(c__5568__auto__);
var G__40466 = (0);
seq__39476 = G__40463;
chunk__39482 = G__40464;
count__39484 = G__40465;
i__39485 = G__40466;
continue;
} else {
var js_ns = cljs.core.first(seq__39476__$1);
var require_str_40468 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40468);


var G__40469 = cljs.core.next(seq__39476__$1);
var G__40470 = null;
var G__40471 = (0);
var G__40472 = (0);
seq__39476 = G__40469;
chunk__39482 = G__40470;
count__39484 = G__40471;
i__39485 = G__40472;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39620){
var map__39621 = p__39620;
var map__39621__$1 = cljs.core.__destructure_map(map__39621);
var msg = map__39621__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39621__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39621__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39626(s__39627){
return (new cljs.core.LazySeq(null,(function (){
var s__39627__$1 = s__39627;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__39627__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__39645 = cljs.core.first(xs__6360__auto__);
var map__39645__$1 = cljs.core.__destructure_map(map__39645);
var src = map__39645__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39645__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39645__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__39627__$1,map__39645,map__39645__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39621,map__39621__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39626_$_iter__39628(s__39629){
return (new cljs.core.LazySeq(null,((function (s__39627__$1,map__39645,map__39645__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39621,map__39621__$1,msg,info,reload_info){
return (function (){
var s__39629__$1 = s__39629;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__39629__$1);
if(temp__5804__auto____$1){
var s__39629__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39629__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__39629__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__39631 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__39630 = (0);
while(true){
if((i__39630 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__39630);
cljs.core.chunk_append(b__39631,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__40475 = (i__39630 + (1));
i__39630 = G__40475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39631),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39626_$_iter__39628(cljs.core.chunk_rest(s__39629__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39631),null);
}
} else {
var warning = cljs.core.first(s__39629__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39626_$_iter__39628(cljs.core.rest(s__39629__$2)));
}
} else {
return null;
}
break;
}
});})(s__39627__$1,map__39645,map__39645__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39621,map__39621__$1,msg,info,reload_info))
,null,null));
});})(s__39627__$1,map__39645,map__39645__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39621,map__39621__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39626(cljs.core.rest(s__39627__$1)));
} else {
var G__40476 = cljs.core.rest(s__39627__$1);
s__39627__$1 = G__40476;
continue;
}
} else {
var G__40477 = cljs.core.rest(s__39627__$1);
s__39627__$1 = G__40477;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__39649_40478 = cljs.core.seq(warnings);
var chunk__39650_40479 = null;
var count__39651_40480 = (0);
var i__39652_40481 = (0);
while(true){
if((i__39652_40481 < count__39651_40480)){
var map__39661_40482 = chunk__39650_40479.cljs$core$IIndexed$_nth$arity$2(null,i__39652_40481);
var map__39661_40483__$1 = cljs.core.__destructure_map(map__39661_40482);
var w_40484 = map__39661_40483__$1;
var msg_40485__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39661_40483__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39661_40483__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39661_40483__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39661_40483__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40488)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40486),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40487),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40485__$1)].join(''));


var G__40489 = seq__39649_40478;
var G__40490 = chunk__39650_40479;
var G__40491 = count__39651_40480;
var G__40492 = (i__39652_40481 + (1));
seq__39649_40478 = G__40489;
chunk__39650_40479 = G__40490;
count__39651_40480 = G__40491;
i__39652_40481 = G__40492;
continue;
} else {
var temp__5804__auto___40493 = cljs.core.seq(seq__39649_40478);
if(temp__5804__auto___40493){
var seq__39649_40494__$1 = temp__5804__auto___40493;
if(cljs.core.chunked_seq_QMARK_(seq__39649_40494__$1)){
var c__5568__auto___40495 = cljs.core.chunk_first(seq__39649_40494__$1);
var G__40496 = cljs.core.chunk_rest(seq__39649_40494__$1);
var G__40497 = c__5568__auto___40495;
var G__40498 = cljs.core.count(c__5568__auto___40495);
var G__40499 = (0);
seq__39649_40478 = G__40496;
chunk__39650_40479 = G__40497;
count__39651_40480 = G__40498;
i__39652_40481 = G__40499;
continue;
} else {
var map__39662_40501 = cljs.core.first(seq__39649_40494__$1);
var map__39662_40502__$1 = cljs.core.__destructure_map(map__39662_40501);
var w_40503 = map__39662_40502__$1;
var msg_40504__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39662_40502__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39662_40502__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39662_40502__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39662_40502__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40507)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40505),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40506),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40504__$1)].join(''));


var G__40508 = cljs.core.next(seq__39649_40494__$1);
var G__40509 = null;
var G__40510 = (0);
var G__40511 = (0);
seq__39649_40478 = G__40508;
chunk__39650_40479 = G__40509;
count__39651_40480 = G__40510;
i__39652_40481 = G__40511;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39613_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39613_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39722){
var map__39724 = p__39722;
var map__39724__$1 = cljs.core.__destructure_map(map__39724);
var msg = map__39724__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39724__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39724__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__39728 = cljs.core.seq(updates);
var chunk__39782 = null;
var count__39783 = (0);
var i__39784 = (0);
while(true){
if((i__39784 < count__39783)){
var path = chunk__39782.cljs$core$IIndexed$_nth$arity$2(null,i__39784);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39966_40512 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39970_40513 = null;
var count__39971_40514 = (0);
var i__39972_40515 = (0);
while(true){
if((i__39972_40515 < count__39971_40514)){
var node_40516 = chunk__39970_40513.cljs$core$IIndexed$_nth$arity$2(null,i__39972_40515);
if(cljs.core.not(node_40516.shadow$old)){
var path_match_40517 = shadow.cljs.devtools.client.browser.match_paths(node_40516.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40517)){
var new_link_40518 = (function (){var G__40125 = node_40516.cloneNode(true);
G__40125.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40517),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40125;
})();
(node_40516.shadow$old = true);

(new_link_40518.onload = ((function (seq__39966_40512,chunk__39970_40513,count__39971_40514,i__39972_40515,seq__39728,chunk__39782,count__39783,i__39784,new_link_40518,path_match_40517,node_40516,path,map__39724,map__39724__$1,msg,updates,reload_info){
return (function (e){
var seq__40126_40519 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40128_40520 = null;
var count__40129_40521 = (0);
var i__40130_40522 = (0);
while(true){
if((i__40130_40522 < count__40129_40521)){
var map__40161_40523 = chunk__40128_40520.cljs$core$IIndexed$_nth$arity$2(null,i__40130_40522);
var map__40161_40524__$1 = cljs.core.__destructure_map(map__40161_40523);
var task_40525 = map__40161_40524__$1;
var fn_str_40526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40161_40524__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40161_40524__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40528 = goog.getObjectByName(fn_str_40526,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40527)].join(''));

(fn_obj_40528.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40528.cljs$core$IFn$_invoke$arity$2(path,new_link_40518) : fn_obj_40528.call(null,path,new_link_40518));


var G__40529 = seq__40126_40519;
var G__40530 = chunk__40128_40520;
var G__40531 = count__40129_40521;
var G__40532 = (i__40130_40522 + (1));
seq__40126_40519 = G__40529;
chunk__40128_40520 = G__40530;
count__40129_40521 = G__40531;
i__40130_40522 = G__40532;
continue;
} else {
var temp__5804__auto___40533 = cljs.core.seq(seq__40126_40519);
if(temp__5804__auto___40533){
var seq__40126_40535__$1 = temp__5804__auto___40533;
if(cljs.core.chunked_seq_QMARK_(seq__40126_40535__$1)){
var c__5568__auto___40537 = cljs.core.chunk_first(seq__40126_40535__$1);
var G__40538 = cljs.core.chunk_rest(seq__40126_40535__$1);
var G__40539 = c__5568__auto___40537;
var G__40540 = cljs.core.count(c__5568__auto___40537);
var G__40541 = (0);
seq__40126_40519 = G__40538;
chunk__40128_40520 = G__40539;
count__40129_40521 = G__40540;
i__40130_40522 = G__40541;
continue;
} else {
var map__40164_40542 = cljs.core.first(seq__40126_40535__$1);
var map__40164_40543__$1 = cljs.core.__destructure_map(map__40164_40542);
var task_40544 = map__40164_40543__$1;
var fn_str_40545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40164_40543__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40164_40543__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40547 = goog.getObjectByName(fn_str_40545,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40546)].join(''));

(fn_obj_40547.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40547.cljs$core$IFn$_invoke$arity$2(path,new_link_40518) : fn_obj_40547.call(null,path,new_link_40518));


var G__40550 = cljs.core.next(seq__40126_40535__$1);
var G__40551 = null;
var G__40552 = (0);
var G__40553 = (0);
seq__40126_40519 = G__40550;
chunk__40128_40520 = G__40551;
count__40129_40521 = G__40552;
i__40130_40522 = G__40553;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40516);
});})(seq__39966_40512,chunk__39970_40513,count__39971_40514,i__39972_40515,seq__39728,chunk__39782,count__39783,i__39784,new_link_40518,path_match_40517,node_40516,path,map__39724,map__39724__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40517], 0));

goog.dom.insertSiblingAfter(new_link_40518,node_40516);


var G__40554 = seq__39966_40512;
var G__40555 = chunk__39970_40513;
var G__40556 = count__39971_40514;
var G__40557 = (i__39972_40515 + (1));
seq__39966_40512 = G__40554;
chunk__39970_40513 = G__40555;
count__39971_40514 = G__40556;
i__39972_40515 = G__40557;
continue;
} else {
var G__40558 = seq__39966_40512;
var G__40559 = chunk__39970_40513;
var G__40560 = count__39971_40514;
var G__40561 = (i__39972_40515 + (1));
seq__39966_40512 = G__40558;
chunk__39970_40513 = G__40559;
count__39971_40514 = G__40560;
i__39972_40515 = G__40561;
continue;
}
} else {
var G__40562 = seq__39966_40512;
var G__40563 = chunk__39970_40513;
var G__40564 = count__39971_40514;
var G__40565 = (i__39972_40515 + (1));
seq__39966_40512 = G__40562;
chunk__39970_40513 = G__40563;
count__39971_40514 = G__40564;
i__39972_40515 = G__40565;
continue;
}
} else {
var temp__5804__auto___40566 = cljs.core.seq(seq__39966_40512);
if(temp__5804__auto___40566){
var seq__39966_40567__$1 = temp__5804__auto___40566;
if(cljs.core.chunked_seq_QMARK_(seq__39966_40567__$1)){
var c__5568__auto___40568 = cljs.core.chunk_first(seq__39966_40567__$1);
var G__40569 = cljs.core.chunk_rest(seq__39966_40567__$1);
var G__40570 = c__5568__auto___40568;
var G__40571 = cljs.core.count(c__5568__auto___40568);
var G__40572 = (0);
seq__39966_40512 = G__40569;
chunk__39970_40513 = G__40570;
count__39971_40514 = G__40571;
i__39972_40515 = G__40572;
continue;
} else {
var node_40573 = cljs.core.first(seq__39966_40567__$1);
if(cljs.core.not(node_40573.shadow$old)){
var path_match_40574 = shadow.cljs.devtools.client.browser.match_paths(node_40573.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40574)){
var new_link_40575 = (function (){var G__40167 = node_40573.cloneNode(true);
G__40167.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40574),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40167;
})();
(node_40573.shadow$old = true);

(new_link_40575.onload = ((function (seq__39966_40512,chunk__39970_40513,count__39971_40514,i__39972_40515,seq__39728,chunk__39782,count__39783,i__39784,new_link_40575,path_match_40574,node_40573,seq__39966_40567__$1,temp__5804__auto___40566,path,map__39724,map__39724__$1,msg,updates,reload_info){
return (function (e){
var seq__40168_40576 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40170_40577 = null;
var count__40171_40578 = (0);
var i__40172_40579 = (0);
while(true){
if((i__40172_40579 < count__40171_40578)){
var map__40180_40580 = chunk__40170_40577.cljs$core$IIndexed$_nth$arity$2(null,i__40172_40579);
var map__40180_40581__$1 = cljs.core.__destructure_map(map__40180_40580);
var task_40582 = map__40180_40581__$1;
var fn_str_40583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40180_40581__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40180_40581__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40585 = goog.getObjectByName(fn_str_40583,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40584)].join(''));

(fn_obj_40585.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40585.cljs$core$IFn$_invoke$arity$2(path,new_link_40575) : fn_obj_40585.call(null,path,new_link_40575));


var G__40586 = seq__40168_40576;
var G__40587 = chunk__40170_40577;
var G__40588 = count__40171_40578;
var G__40589 = (i__40172_40579 + (1));
seq__40168_40576 = G__40586;
chunk__40170_40577 = G__40587;
count__40171_40578 = G__40588;
i__40172_40579 = G__40589;
continue;
} else {
var temp__5804__auto___40590__$1 = cljs.core.seq(seq__40168_40576);
if(temp__5804__auto___40590__$1){
var seq__40168_40591__$1 = temp__5804__auto___40590__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40168_40591__$1)){
var c__5568__auto___40592 = cljs.core.chunk_first(seq__40168_40591__$1);
var G__40593 = cljs.core.chunk_rest(seq__40168_40591__$1);
var G__40594 = c__5568__auto___40592;
var G__40595 = cljs.core.count(c__5568__auto___40592);
var G__40596 = (0);
seq__40168_40576 = G__40593;
chunk__40170_40577 = G__40594;
count__40171_40578 = G__40595;
i__40172_40579 = G__40596;
continue;
} else {
var map__40181_40598 = cljs.core.first(seq__40168_40591__$1);
var map__40181_40599__$1 = cljs.core.__destructure_map(map__40181_40598);
var task_40600 = map__40181_40599__$1;
var fn_str_40601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40181_40599__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40181_40599__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40603 = goog.getObjectByName(fn_str_40601,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40602)].join(''));

(fn_obj_40603.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40603.cljs$core$IFn$_invoke$arity$2(path,new_link_40575) : fn_obj_40603.call(null,path,new_link_40575));


var G__40604 = cljs.core.next(seq__40168_40591__$1);
var G__40605 = null;
var G__40606 = (0);
var G__40607 = (0);
seq__40168_40576 = G__40604;
chunk__40170_40577 = G__40605;
count__40171_40578 = G__40606;
i__40172_40579 = G__40607;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40573);
});})(seq__39966_40512,chunk__39970_40513,count__39971_40514,i__39972_40515,seq__39728,chunk__39782,count__39783,i__39784,new_link_40575,path_match_40574,node_40573,seq__39966_40567__$1,temp__5804__auto___40566,path,map__39724,map__39724__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40574], 0));

goog.dom.insertSiblingAfter(new_link_40575,node_40573);


var G__40609 = cljs.core.next(seq__39966_40567__$1);
var G__40610 = null;
var G__40611 = (0);
var G__40612 = (0);
seq__39966_40512 = G__40609;
chunk__39970_40513 = G__40610;
count__39971_40514 = G__40611;
i__39972_40515 = G__40612;
continue;
} else {
var G__40613 = cljs.core.next(seq__39966_40567__$1);
var G__40614 = null;
var G__40615 = (0);
var G__40616 = (0);
seq__39966_40512 = G__40613;
chunk__39970_40513 = G__40614;
count__39971_40514 = G__40615;
i__39972_40515 = G__40616;
continue;
}
} else {
var G__40617 = cljs.core.next(seq__39966_40567__$1);
var G__40618 = null;
var G__40619 = (0);
var G__40620 = (0);
seq__39966_40512 = G__40617;
chunk__39970_40513 = G__40618;
count__39971_40514 = G__40619;
i__39972_40515 = G__40620;
continue;
}
}
} else {
}
}
break;
}


var G__40621 = seq__39728;
var G__40622 = chunk__39782;
var G__40623 = count__39783;
var G__40624 = (i__39784 + (1));
seq__39728 = G__40621;
chunk__39782 = G__40622;
count__39783 = G__40623;
i__39784 = G__40624;
continue;
} else {
var G__40626 = seq__39728;
var G__40627 = chunk__39782;
var G__40628 = count__39783;
var G__40629 = (i__39784 + (1));
seq__39728 = G__40626;
chunk__39782 = G__40627;
count__39783 = G__40628;
i__39784 = G__40629;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39728);
if(temp__5804__auto__){
var seq__39728__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39728__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39728__$1);
var G__40631 = cljs.core.chunk_rest(seq__39728__$1);
var G__40632 = c__5568__auto__;
var G__40633 = cljs.core.count(c__5568__auto__);
var G__40634 = (0);
seq__39728 = G__40631;
chunk__39782 = G__40632;
count__39783 = G__40633;
i__39784 = G__40634;
continue;
} else {
var path = cljs.core.first(seq__39728__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40183_40635 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40187_40636 = null;
var count__40188_40637 = (0);
var i__40189_40638 = (0);
while(true){
if((i__40189_40638 < count__40188_40637)){
var node_40639 = chunk__40187_40636.cljs$core$IIndexed$_nth$arity$2(null,i__40189_40638);
if(cljs.core.not(node_40639.shadow$old)){
var path_match_40640 = shadow.cljs.devtools.client.browser.match_paths(node_40639.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40640)){
var new_link_40641 = (function (){var G__40250 = node_40639.cloneNode(true);
G__40250.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40640),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40250;
})();
(node_40639.shadow$old = true);

(new_link_40641.onload = ((function (seq__40183_40635,chunk__40187_40636,count__40188_40637,i__40189_40638,seq__39728,chunk__39782,count__39783,i__39784,new_link_40641,path_match_40640,node_40639,path,seq__39728__$1,temp__5804__auto__,map__39724,map__39724__$1,msg,updates,reload_info){
return (function (e){
var seq__40254_40644 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40256_40645 = null;
var count__40257_40646 = (0);
var i__40258_40647 = (0);
while(true){
if((i__40258_40647 < count__40257_40646)){
var map__40272_40648 = chunk__40256_40645.cljs$core$IIndexed$_nth$arity$2(null,i__40258_40647);
var map__40272_40649__$1 = cljs.core.__destructure_map(map__40272_40648);
var task_40650 = map__40272_40649__$1;
var fn_str_40651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40272_40649__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40272_40649__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40653 = goog.getObjectByName(fn_str_40651,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40652)].join(''));

(fn_obj_40653.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40653.cljs$core$IFn$_invoke$arity$2(path,new_link_40641) : fn_obj_40653.call(null,path,new_link_40641));


var G__40654 = seq__40254_40644;
var G__40655 = chunk__40256_40645;
var G__40656 = count__40257_40646;
var G__40657 = (i__40258_40647 + (1));
seq__40254_40644 = G__40654;
chunk__40256_40645 = G__40655;
count__40257_40646 = G__40656;
i__40258_40647 = G__40657;
continue;
} else {
var temp__5804__auto___40658__$1 = cljs.core.seq(seq__40254_40644);
if(temp__5804__auto___40658__$1){
var seq__40254_40659__$1 = temp__5804__auto___40658__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40254_40659__$1)){
var c__5568__auto___40660 = cljs.core.chunk_first(seq__40254_40659__$1);
var G__40661 = cljs.core.chunk_rest(seq__40254_40659__$1);
var G__40662 = c__5568__auto___40660;
var G__40663 = cljs.core.count(c__5568__auto___40660);
var G__40664 = (0);
seq__40254_40644 = G__40661;
chunk__40256_40645 = G__40662;
count__40257_40646 = G__40663;
i__40258_40647 = G__40664;
continue;
} else {
var map__40297_40665 = cljs.core.first(seq__40254_40659__$1);
var map__40297_40666__$1 = cljs.core.__destructure_map(map__40297_40665);
var task_40667 = map__40297_40666__$1;
var fn_str_40669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40297_40666__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40297_40666__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40671 = goog.getObjectByName(fn_str_40669,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40670)].join(''));

(fn_obj_40671.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40671.cljs$core$IFn$_invoke$arity$2(path,new_link_40641) : fn_obj_40671.call(null,path,new_link_40641));


var G__40672 = cljs.core.next(seq__40254_40659__$1);
var G__40673 = null;
var G__40674 = (0);
var G__40675 = (0);
seq__40254_40644 = G__40672;
chunk__40256_40645 = G__40673;
count__40257_40646 = G__40674;
i__40258_40647 = G__40675;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40639);
});})(seq__40183_40635,chunk__40187_40636,count__40188_40637,i__40189_40638,seq__39728,chunk__39782,count__39783,i__39784,new_link_40641,path_match_40640,node_40639,path,seq__39728__$1,temp__5804__auto__,map__39724,map__39724__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40640], 0));

goog.dom.insertSiblingAfter(new_link_40641,node_40639);


var G__40676 = seq__40183_40635;
var G__40677 = chunk__40187_40636;
var G__40678 = count__40188_40637;
var G__40679 = (i__40189_40638 + (1));
seq__40183_40635 = G__40676;
chunk__40187_40636 = G__40677;
count__40188_40637 = G__40678;
i__40189_40638 = G__40679;
continue;
} else {
var G__40680 = seq__40183_40635;
var G__40681 = chunk__40187_40636;
var G__40682 = count__40188_40637;
var G__40683 = (i__40189_40638 + (1));
seq__40183_40635 = G__40680;
chunk__40187_40636 = G__40681;
count__40188_40637 = G__40682;
i__40189_40638 = G__40683;
continue;
}
} else {
var G__40684 = seq__40183_40635;
var G__40685 = chunk__40187_40636;
var G__40686 = count__40188_40637;
var G__40687 = (i__40189_40638 + (1));
seq__40183_40635 = G__40684;
chunk__40187_40636 = G__40685;
count__40188_40637 = G__40686;
i__40189_40638 = G__40687;
continue;
}
} else {
var temp__5804__auto___40688__$1 = cljs.core.seq(seq__40183_40635);
if(temp__5804__auto___40688__$1){
var seq__40183_40689__$1 = temp__5804__auto___40688__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40183_40689__$1)){
var c__5568__auto___40690 = cljs.core.chunk_first(seq__40183_40689__$1);
var G__40691 = cljs.core.chunk_rest(seq__40183_40689__$1);
var G__40692 = c__5568__auto___40690;
var G__40693 = cljs.core.count(c__5568__auto___40690);
var G__40694 = (0);
seq__40183_40635 = G__40691;
chunk__40187_40636 = G__40692;
count__40188_40637 = G__40693;
i__40189_40638 = G__40694;
continue;
} else {
var node_40695 = cljs.core.first(seq__40183_40689__$1);
if(cljs.core.not(node_40695.shadow$old)){
var path_match_40696 = shadow.cljs.devtools.client.browser.match_paths(node_40695.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40696)){
var new_link_40697 = (function (){var G__40340 = node_40695.cloneNode(true);
G__40340.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40696),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40340;
})();
(node_40695.shadow$old = true);

(new_link_40697.onload = ((function (seq__40183_40635,chunk__40187_40636,count__40188_40637,i__40189_40638,seq__39728,chunk__39782,count__39783,i__39784,new_link_40697,path_match_40696,node_40695,seq__40183_40689__$1,temp__5804__auto___40688__$1,path,seq__39728__$1,temp__5804__auto__,map__39724,map__39724__$1,msg,updates,reload_info){
return (function (e){
var seq__40342_40698 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40344_40699 = null;
var count__40345_40700 = (0);
var i__40346_40701 = (0);
while(true){
if((i__40346_40701 < count__40345_40700)){
var map__40356_40702 = chunk__40344_40699.cljs$core$IIndexed$_nth$arity$2(null,i__40346_40701);
var map__40356_40703__$1 = cljs.core.__destructure_map(map__40356_40702);
var task_40704 = map__40356_40703__$1;
var fn_str_40705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40356_40703__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40356_40703__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40707 = goog.getObjectByName(fn_str_40705,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40706)].join(''));

(fn_obj_40707.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40707.cljs$core$IFn$_invoke$arity$2(path,new_link_40697) : fn_obj_40707.call(null,path,new_link_40697));


var G__40709 = seq__40342_40698;
var G__40710 = chunk__40344_40699;
var G__40711 = count__40345_40700;
var G__40712 = (i__40346_40701 + (1));
seq__40342_40698 = G__40709;
chunk__40344_40699 = G__40710;
count__40345_40700 = G__40711;
i__40346_40701 = G__40712;
continue;
} else {
var temp__5804__auto___40713__$2 = cljs.core.seq(seq__40342_40698);
if(temp__5804__auto___40713__$2){
var seq__40342_40714__$1 = temp__5804__auto___40713__$2;
if(cljs.core.chunked_seq_QMARK_(seq__40342_40714__$1)){
var c__5568__auto___40715 = cljs.core.chunk_first(seq__40342_40714__$1);
var G__40716 = cljs.core.chunk_rest(seq__40342_40714__$1);
var G__40717 = c__5568__auto___40715;
var G__40718 = cljs.core.count(c__5568__auto___40715);
var G__40719 = (0);
seq__40342_40698 = G__40716;
chunk__40344_40699 = G__40717;
count__40345_40700 = G__40718;
i__40346_40701 = G__40719;
continue;
} else {
var map__40360_40720 = cljs.core.first(seq__40342_40714__$1);
var map__40360_40721__$1 = cljs.core.__destructure_map(map__40360_40720);
var task_40722 = map__40360_40721__$1;
var fn_str_40723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40360_40721__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40360_40721__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40725 = goog.getObjectByName(fn_str_40723,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40724)].join(''));

(fn_obj_40725.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40725.cljs$core$IFn$_invoke$arity$2(path,new_link_40697) : fn_obj_40725.call(null,path,new_link_40697));


var G__40726 = cljs.core.next(seq__40342_40714__$1);
var G__40727 = null;
var G__40728 = (0);
var G__40729 = (0);
seq__40342_40698 = G__40726;
chunk__40344_40699 = G__40727;
count__40345_40700 = G__40728;
i__40346_40701 = G__40729;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40695);
});})(seq__40183_40635,chunk__40187_40636,count__40188_40637,i__40189_40638,seq__39728,chunk__39782,count__39783,i__39784,new_link_40697,path_match_40696,node_40695,seq__40183_40689__$1,temp__5804__auto___40688__$1,path,seq__39728__$1,temp__5804__auto__,map__39724,map__39724__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40696], 0));

goog.dom.insertSiblingAfter(new_link_40697,node_40695);


var G__40731 = cljs.core.next(seq__40183_40689__$1);
var G__40732 = null;
var G__40733 = (0);
var G__40734 = (0);
seq__40183_40635 = G__40731;
chunk__40187_40636 = G__40732;
count__40188_40637 = G__40733;
i__40189_40638 = G__40734;
continue;
} else {
var G__40735 = cljs.core.next(seq__40183_40689__$1);
var G__40736 = null;
var G__40737 = (0);
var G__40738 = (0);
seq__40183_40635 = G__40735;
chunk__40187_40636 = G__40736;
count__40188_40637 = G__40737;
i__40189_40638 = G__40738;
continue;
}
} else {
var G__40739 = cljs.core.next(seq__40183_40689__$1);
var G__40740 = null;
var G__40741 = (0);
var G__40742 = (0);
seq__40183_40635 = G__40739;
chunk__40187_40636 = G__40740;
count__40188_40637 = G__40741;
i__40189_40638 = G__40742;
continue;
}
}
} else {
}
}
break;
}


var G__40743 = cljs.core.next(seq__39728__$1);
var G__40744 = null;
var G__40745 = (0);
var G__40746 = (0);
seq__39728 = G__40743;
chunk__39782 = G__40744;
count__39783 = G__40745;
i__39784 = G__40746;
continue;
} else {
var G__40747 = cljs.core.next(seq__39728__$1);
var G__40748 = null;
var G__40749 = (0);
var G__40750 = (0);
seq__39728 = G__40747;
chunk__39782 = G__40748;
count__39783 = G__40749;
i__39784 = G__40750;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__40370){
var map__40371 = p__40370;
var map__40371__$1 = cljs.core.__destructure_map(map__40371);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40371__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__40391){
var map__40392 = p__40391;
var map__40392__$1 = cljs.core.__destructure_map(map__40392);
var _ = map__40392__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40392__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__40393,done,error){
var map__40394 = p__40393;
var map__40394__$1 = cljs.core.__destructure_map(map__40394);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40394__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__40395,done,error){
var map__40396 = p__40395;
var map__40396__$1 = cljs.core.__destructure_map(map__40396);
var msg = map__40396__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40396__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40396__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40396__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40399){
var map__40400 = p__40399;
var map__40400__$1 = cljs.core.__destructure_map(map__40400);
var src = map__40400__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40400__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__40401 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__40401) : done.call(null,G__40401));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__40403){
var map__40404 = p__40403;
var map__40404__$1 = cljs.core.__destructure_map(map__40404);
var msg__$1 = map__40404__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40404__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e40406){var ex = e40406;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__40408){
var map__40409 = p__40408;
var map__40409__$1 = cljs.core.__destructure_map(map__40409);
var env = map__40409__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40409__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__40415){
var map__40416 = p__40415;
var map__40416__$1 = cljs.core.__destructure_map(map__40416);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40416__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40416__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__40421){
var map__40422 = p__40421;
var map__40422__$1 = cljs.core.__destructure_map(map__40422);
var svc = map__40422__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40422__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
