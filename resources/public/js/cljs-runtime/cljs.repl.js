goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35909){
var map__35912 = p__35909;
var map__35912__$1 = cljs.core.__destructure_map(map__35912);
var m = map__35912__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35912__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35912__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35916_36426 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35917_36427 = null;
var count__35918_36428 = (0);
var i__35919_36429 = (0);
while(true){
if((i__35919_36429 < count__35918_36428)){
var f_36430 = chunk__35917_36427.cljs$core$IIndexed$_nth$arity$2(null,i__35919_36429);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36430], 0));


var G__36437 = seq__35916_36426;
var G__36438 = chunk__35917_36427;
var G__36439 = count__35918_36428;
var G__36440 = (i__35919_36429 + (1));
seq__35916_36426 = G__36437;
chunk__35917_36427 = G__36438;
count__35918_36428 = G__36439;
i__35919_36429 = G__36440;
continue;
} else {
var temp__5804__auto___36441 = cljs.core.seq(seq__35916_36426);
if(temp__5804__auto___36441){
var seq__35916_36442__$1 = temp__5804__auto___36441;
if(cljs.core.chunked_seq_QMARK_(seq__35916_36442__$1)){
var c__5568__auto___36443 = cljs.core.chunk_first(seq__35916_36442__$1);
var G__36444 = cljs.core.chunk_rest(seq__35916_36442__$1);
var G__36445 = c__5568__auto___36443;
var G__36446 = cljs.core.count(c__5568__auto___36443);
var G__36447 = (0);
seq__35916_36426 = G__36444;
chunk__35917_36427 = G__36445;
count__35918_36428 = G__36446;
i__35919_36429 = G__36447;
continue;
} else {
var f_36448 = cljs.core.first(seq__35916_36442__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36448], 0));


var G__36449 = cljs.core.next(seq__35916_36442__$1);
var G__36450 = null;
var G__36451 = (0);
var G__36452 = (0);
seq__35916_36426 = G__36449;
chunk__35917_36427 = G__36450;
count__35918_36428 = G__36451;
i__35919_36429 = G__36452;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36453 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36453], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36453)))?cljs.core.second(arglists_36453):arglists_36453)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36125_36454 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36126_36455 = null;
var count__36127_36456 = (0);
var i__36128_36457 = (0);
while(true){
if((i__36128_36457 < count__36127_36456)){
var vec__36145_36458 = chunk__36126_36455.cljs$core$IIndexed$_nth$arity$2(null,i__36128_36457);
var name_36459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36145_36458,(0),null);
var map__36148_36460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36145_36458,(1),null);
var map__36148_36461__$1 = cljs.core.__destructure_map(map__36148_36460);
var doc_36462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36148_36461__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36148_36461__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36459], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36463], 0));

if(cljs.core.truth_(doc_36462)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36462], 0));
} else {
}


var G__36464 = seq__36125_36454;
var G__36465 = chunk__36126_36455;
var G__36466 = count__36127_36456;
var G__36467 = (i__36128_36457 + (1));
seq__36125_36454 = G__36464;
chunk__36126_36455 = G__36465;
count__36127_36456 = G__36466;
i__36128_36457 = G__36467;
continue;
} else {
var temp__5804__auto___36468 = cljs.core.seq(seq__36125_36454);
if(temp__5804__auto___36468){
var seq__36125_36469__$1 = temp__5804__auto___36468;
if(cljs.core.chunked_seq_QMARK_(seq__36125_36469__$1)){
var c__5568__auto___36470 = cljs.core.chunk_first(seq__36125_36469__$1);
var G__36471 = cljs.core.chunk_rest(seq__36125_36469__$1);
var G__36472 = c__5568__auto___36470;
var G__36473 = cljs.core.count(c__5568__auto___36470);
var G__36474 = (0);
seq__36125_36454 = G__36471;
chunk__36126_36455 = G__36472;
count__36127_36456 = G__36473;
i__36128_36457 = G__36474;
continue;
} else {
var vec__36151_36475 = cljs.core.first(seq__36125_36469__$1);
var name_36476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36151_36475,(0),null);
var map__36154_36477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36151_36475,(1),null);
var map__36154_36478__$1 = cljs.core.__destructure_map(map__36154_36477);
var doc_36479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36154_36478__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36154_36478__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36476], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36480], 0));

if(cljs.core.truth_(doc_36479)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36479], 0));
} else {
}


var G__36481 = cljs.core.next(seq__36125_36469__$1);
var G__36482 = null;
var G__36483 = (0);
var G__36484 = (0);
seq__36125_36454 = G__36481;
chunk__36126_36455 = G__36482;
count__36127_36456 = G__36483;
i__36128_36457 = G__36484;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36164 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36165 = null;
var count__36166 = (0);
var i__36167 = (0);
while(true){
if((i__36167 < count__36166)){
var role = chunk__36165.cljs$core$IIndexed$_nth$arity$2(null,i__36167);
var temp__5804__auto___36485__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36485__$1)){
var spec_36486 = temp__5804__auto___36485__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36486)], 0));
} else {
}


var G__36487 = seq__36164;
var G__36488 = chunk__36165;
var G__36489 = count__36166;
var G__36490 = (i__36167 + (1));
seq__36164 = G__36487;
chunk__36165 = G__36488;
count__36166 = G__36489;
i__36167 = G__36490;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__36164);
if(temp__5804__auto____$1){
var seq__36164__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36164__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36164__$1);
var G__36491 = cljs.core.chunk_rest(seq__36164__$1);
var G__36492 = c__5568__auto__;
var G__36493 = cljs.core.count(c__5568__auto__);
var G__36494 = (0);
seq__36164 = G__36491;
chunk__36165 = G__36492;
count__36166 = G__36493;
i__36167 = G__36494;
continue;
} else {
var role = cljs.core.first(seq__36164__$1);
var temp__5804__auto___36495__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36495__$2)){
var spec_36496 = temp__5804__auto___36495__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36496)], 0));
} else {
}


var G__36497 = cljs.core.next(seq__36164__$1);
var G__36498 = null;
var G__36499 = (0);
var G__36500 = (0);
seq__36164 = G__36497;
chunk__36165 = G__36498;
count__36166 = G__36499;
i__36167 = G__36500;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36501 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36502 = cljs.core.ex_cause(t);
via = G__36501;
t = G__36502;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36250 = datafied_throwable;
var map__36250__$1 = cljs.core.__destructure_map(map__36250);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36250__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36250__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36250__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36251 = cljs.core.last(via);
var map__36251__$1 = cljs.core.__destructure_map(map__36251);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36251__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36251__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36251__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36253 = data;
var map__36253__$1 = cljs.core.__destructure_map(map__36253);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36253__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36253__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36253__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36254 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36254__$1 = cljs.core.__destructure_map(map__36254);
var top_data = map__36254__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36254__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36266 = phase;
var G__36266__$1 = (((G__36266 instanceof cljs.core.Keyword))?G__36266.fqn:null);
switch (G__36266__$1) {
case "read-source":
var map__36276 = data;
var map__36276__$1 = cljs.core.__destructure_map(map__36276);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36276__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36276__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36280 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36280__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36280,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36280);
var G__36280__$2 = (cljs.core.truth_((function (){var fexpr__36294 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36294.cljs$core$IFn$_invoke$arity$1 ? fexpr__36294.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36294.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36280__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36280__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36280__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36280__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36328 = top_data;
var G__36328__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36328,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36328);
var G__36328__$2 = (cljs.core.truth_((function (){var fexpr__36329 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36329.cljs$core$IFn$_invoke$arity$1 ? fexpr__36329.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36329.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36328__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36328__$1);
var G__36328__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36328__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36328__$2);
var G__36328__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36328__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36328__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36328__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36328__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36330 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36330,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36330,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36330,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36330,(3),null);
var G__36333 = top_data;
var G__36333__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36333,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36333);
var G__36333__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36333__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36333__$1);
var G__36333__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36333__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36333__$2);
var G__36333__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36333__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36333__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36333__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36333__$4;
}

break;
case "execution":
var vec__36340 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36340,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36340,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36340,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36340,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36235_SHARP_){
var or__5045__auto__ = (p1__36235_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__36346 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36346.cljs$core$IFn$_invoke$arity$1 ? fexpr__36346.cljs$core$IFn$_invoke$arity$1(p1__36235_SHARP_) : fexpr__36346.call(null,p1__36235_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__36348 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36348__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36348,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36348);
var G__36348__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36348__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36348__$1);
var G__36348__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36348__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36348__$2);
var G__36348__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36348__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36348__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36348__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36348__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36266__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36359){
var map__36360 = p__36359;
var map__36360__$1 = cljs.core.__destructure_map(map__36360);
var triage_data = map__36360__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36360__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36360__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36360__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36360__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36360__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36360__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36360__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36360__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36361 = phase;
var G__36361__$1 = (((G__36361 instanceof cljs.core.Keyword))?G__36361.fqn:null);
switch (G__36361__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36364 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36365 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36366 = loc;
var G__36367 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36370_36516 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36371_36517 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36372_36518 = true;
var _STAR_print_fn_STAR__temp_val__36373_36519 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36372_36518);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36373_36519);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36354_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36354_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36371_36517);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36370_36516);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36364,G__36365,G__36366,G__36367) : format.call(null,G__36364,G__36365,G__36366,G__36367));

break;
case "macroexpansion":
var G__36381 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36382 = cause_type;
var G__36383 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36384 = loc;
var G__36385 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36381,G__36382,G__36383,G__36384,G__36385) : format.call(null,G__36381,G__36382,G__36383,G__36384,G__36385));

break;
case "compile-syntax-check":
var G__36386 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36387 = cause_type;
var G__36388 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36389 = loc;
var G__36390 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36386,G__36387,G__36388,G__36389,G__36390) : format.call(null,G__36386,G__36387,G__36388,G__36389,G__36390));

break;
case "compilation":
var G__36397 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36398 = cause_type;
var G__36399 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36400 = loc;
var G__36401 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36397,G__36398,G__36399,G__36400,G__36401) : format.call(null,G__36397,G__36398,G__36399,G__36400,G__36401));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36402 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36403 = symbol;
var G__36404 = loc;
var G__36405 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36406_36522 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36407_36523 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36408_36524 = true;
var _STAR_print_fn_STAR__temp_val__36409_36525 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36408_36524);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36409_36525);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36358_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36358_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36407_36523);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36406_36522);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36402,G__36403,G__36404,G__36405) : format.call(null,G__36402,G__36403,G__36404,G__36405));
} else {
var G__36410 = "Execution error%s at %s(%s).\n%s\n";
var G__36411 = cause_type;
var G__36412 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36413 = loc;
var G__36414 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36410,G__36411,G__36412,G__36413,G__36414) : format.call(null,G__36410,G__36411,G__36412,G__36413,G__36414));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36361__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
