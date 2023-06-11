goog.provide('hyperfiddle.electric');
(hyperfiddle.electric.Pending.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.Pending.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (other instanceof hyperfiddle.electric.Pending);
}));
(hyperfiddle.electric.Failure.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (((other instanceof hyperfiddle.electric.Failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.error,other.error)));
}));
(hyperfiddle.electric.FailureInfo.prototype.__proto__ = cljs.core.ExceptionInfo.prototype);
(hyperfiddle.electric.FailureInfo.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.FailureInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (((other instanceof hyperfiddle.electric.FailureInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.cause,other.cause)));
}));
/**
 * Takes a resolve map and a program, returns a booting function.
 *   The booting function takes
 *   * as first argument a function Any->Task[Unit] returned task writes the value on the wire.
 *   * as second argument a flow producing the values read on the wire.
 *   and returning a task that runs the local reactor.
 */
hyperfiddle.electric.eval = hyperfiddle.electric.impl.runtime.eval;
hyperfiddle.electric.hook = hyperfiddle.electric.impl.runtime.hook;
hyperfiddle.electric.bind = hyperfiddle.electric.impl.runtime.bind;
hyperfiddle.electric.with$ = hyperfiddle.electric.impl.runtime.with$;
hyperfiddle.electric.pair = (function hyperfiddle$electric$pair(c,s){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr46919_block_0 = (function hyperfiddle$electric$pair_$_cr46919_block_0(cr46919_state){
try{var cr46919_place_0 = missionary.core.dfv;
var cr46919_place_1 = (function (){var fexpr__46983 = cr46919_place_0;
return (fexpr__46983.cljs$core$IFn$_invoke$arity$0 ? fexpr__46983.cljs$core$IFn$_invoke$arity$0() : fexpr__46983.call(null));
})();
var cr46919_place_2 = missionary.core.dfv;
var cr46919_place_3 = (function (){var fexpr__46984 = cr46919_place_2;
return (fexpr__46984.cljs$core$IFn$_invoke$arity$0 ? fexpr__46984.cljs$core$IFn$_invoke$arity$0() : fexpr__46984.call(null));
})();
var cr46919_place_4 = missionary.core.join;
var cr46919_place_5 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr46919_place_6 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr46922_block_0 = (function (cr46922_state){
try{var cr46922_place_0 = cr46919_place_1;
(cr46922_state[(0)] = cr46922_block_1);

return missionary.core.park(cr46922_place_0);
}catch (e46989){var e46928 = e46989;
var cr46922_exception = e46928;
(cr46922_state[(0)] = null);

throw cr46922_exception;
}});
var cr46922_block_1 = (function (cr46922_state){
try{var cr46922_place_1 = missionary.core.unpark();
var cr46922_place_2 = cr46922_place_1;
var cr46922_place_3 = x;
var cr46922_place_4 = (function (){var G__46931 = cr46922_place_3;
var fexpr__46930 = cr46922_place_2;
var G__46992 = G__46931;
var fexpr__46991 = fexpr__46930;
return (fexpr__46991.cljs$core$IFn$_invoke$arity$1 ? fexpr__46991.cljs$core$IFn$_invoke$arity$1(G__46992) : fexpr__46991.call(null,G__46992));
})();
(cr46922_state[(0)] = null);

return cr46922_place_4;
}catch (e46990){var e46929 = e46990;
var cr46922_exception = e46929;
(cr46922_state[(0)] = null);

throw cr46922_exception;
}});
return cloroutine.impl.coroutine((function (){var G__46932 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__46932[(0)] = cr46922_block_0);

return G__46932;
})());
})(),missionary.core.sp_run);
});
var cr46919_place_7 = (function (_BANG_){
var G__46994_47124 = _BANG_;
var fexpr__46993_47125 = cr46919_place_3;
(fexpr__46993_47125.cljs$core$IFn$_invoke$arity$1 ? fexpr__46993_47125.cljs$core$IFn$_invoke$arity$1(G__46994_47124) : fexpr__46993_47125.call(null,G__46994_47124));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr46919_place_8 = s;
var cr46919_place_9 = cr46919_place_6;
var cr46919_place_10 = cr46919_place_7;
var cr46919_place_11 = (function (){var G__46996 = cr46919_place_9;
var G__46997 = cr46919_place_10;
var fexpr__46995 = cr46919_place_8;
return (fexpr__46995.cljs$core$IFn$_invoke$arity$2 ? fexpr__46995.cljs$core$IFn$_invoke$arity$2(G__46996,G__46997) : fexpr__46995.call(null,G__46996,G__46997));
})();
var cr46919_place_12 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr46936_block_0 = (function (cr46936_state){
try{var cr46936_place_0 = cr46919_place_3;
(cr46936_state[(0)] = cr46936_block_1);

return missionary.core.park(cr46936_place_0);
}catch (e47002){var e46942 = e47002;
var cr46936_exception = e46942;
(cr46936_state[(0)] = null);

throw cr46936_exception;
}});
var cr46936_block_1 = (function (cr46936_state){
try{var cr46936_place_1 = missionary.core.unpark();
var cr46936_place_2 = cr46936_place_1;
var cr46936_place_3 = x;
var cr46936_place_4 = (function (){var G__46945 = cr46936_place_3;
var fexpr__46944 = cr46936_place_2;
var G__47005 = G__46945;
var fexpr__47004 = fexpr__46944;
return (fexpr__47004.cljs$core$IFn$_invoke$arity$1 ? fexpr__47004.cljs$core$IFn$_invoke$arity$1(G__47005) : fexpr__47004.call(null,G__47005));
})();
(cr46936_state[(0)] = null);

return cr46936_place_4;
}catch (e47003){var e46943 = e47003;
var cr46936_exception = e46943;
(cr46936_state[(0)] = null);

throw cr46936_exception;
}});
return cloroutine.impl.coroutine((function (){var G__46946 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__46946[(0)] = cr46936_block_0);

return G__46946;
})());
})(),missionary.core.sp_run);
});
var cr46919_place_13 = (function (_BANG_){
var G__47007_47126 = _BANG_;
var fexpr__47006_47127 = cr46919_place_1;
(fexpr__47006_47127.cljs$core$IFn$_invoke$arity$1 ? fexpr__47006_47127.cljs$core$IFn$_invoke$arity$1(G__47007_47126) : fexpr__47006_47127.call(null,G__47007_47126));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr46919_place_14 = (function (p1__46918_SHARP_){
throw p1__46918_SHARP_;
});
var cr46919_place_15 = c;
var cr46919_place_16 = cr46919_place_12;
var cr46919_place_17 = cr46919_place_13;
var cr46919_place_18 = cr46919_place_14;
var cr46919_place_19 = (function (){var G__47009 = cr46919_place_16;
var G__47010 = cr46919_place_17;
var G__47011 = cr46919_place_18;
var fexpr__47008 = cr46919_place_15;
return (fexpr__47008.cljs$core$IFn$_invoke$arity$3 ? fexpr__47008.cljs$core$IFn$_invoke$arity$3(G__47009,G__47010,G__47011) : fexpr__47008.call(null,G__47009,G__47010,G__47011));
})();
var cr46919_place_20 = (function (){var G__47013 = cr46919_place_5;
var G__47014 = cr46919_place_11;
var G__47015 = cr46919_place_19;
var fexpr__47012 = cr46919_place_4;
return (fexpr__47012.cljs$core$IFn$_invoke$arity$3 ? fexpr__47012.cljs$core$IFn$_invoke$arity$3(G__47013,G__47014,G__47015) : fexpr__47012.call(null,G__47013,G__47014,G__47015));
})();
(cr46919_state[(0)] = cr46919_block_1);

return missionary.core.park(cr46919_place_20);
}catch (e46982){var cr46919_exception = e46982;
(cr46919_state[(0)] = null);

throw cr46919_exception;
}});
var cr46919_block_1 = (function hyperfiddle$electric$pair_$_cr46919_block_1(cr46919_state){
try{var cr46919_place_21 = missionary.core.unpark();
(cr46919_state[(0)] = null);

return cr46919_place_21;
}catch (e47016){var cr46919_exception = e47016;
(cr46919_state[(0)] = null);

throw cr46919_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47017 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__47017[(0)] = cr46919_block_0);

return G__47017;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric.failure_QMARK_ = (function hyperfiddle$electric$failure_QMARK_(x){
return (x instanceof hyperfiddle.electric.Failure);
});
hyperfiddle.electric.task__GT_cp = (function hyperfiddle$electric$task__GT_cp(var_args){
var G__47020 = arguments.length;
switch (G__47020) {
case 1:
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$1 = (function (_BANG_x){
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2(_BANG_x,(new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending()))));
}));

(hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2 = (function (_BANG_x,pending){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,pending,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47021_block_0 = (function hyperfiddle$electric$cr47021_block_0(cr47021_state){
try{var cr47021_place_0 = _BANG_x;
(cr47021_state[(0)] = cr47021_block_1);

return missionary.core.park(cr47021_place_0);
}catch (e47024){var cr47021_exception = e47024;
(cr47021_state[(0)] = null);

throw cr47021_exception;
}});
var cr47021_block_1 = (function hyperfiddle$electric$cr47021_block_1(cr47021_state){
try{var cr47021_place_1 = missionary.core.unpark();
(cr47021_state[(0)] = null);

return cr47021_place_1;
}catch (e47025){var cr47021_exception = e47025;
(cr47021_state[(0)] = null);

throw cr47021_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47026 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__47026[(0)] = cr47021_block_0);

return G__47026;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.task__GT_cp.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.Clock = (function (raf,callback,terminator){
this.raf = raf;
this.callback = callback;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.Clock.prototype.call = (function (unused__11938__auto__){
var self__ = this;
var self__ = this;
var G__47028 = (arguments.length - (1));
switch (G__47028) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.Clock.prototype.apply = (function (self__,args47027){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47027)));
}));

(hyperfiddle.electric.Clock.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
if((self__.raf === (0))){
return (self__.callback = null);
} else {
window.cancelAnimationFrame(self__.raf);

return (self__.terminator.cljs$core$IFn$_invoke$arity$0 ? self__.terminator.cljs$core$IFn$_invoke$arity$0() : self__.terminator.call(null));
}
}));

(hyperfiddle.electric.Clock.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.callback == null)){
(self__.terminator.cljs$core$IFn$_invoke$arity$0 ? self__.terminator.cljs$core$IFn$_invoke$arity$0() : self__.terminator.call(null));
} else {
(self__.raf = window.requestAnimationFrame(self__.callback));
}

return new cljs.core.Keyword("hyperfiddle.electric","tick","hyperfiddle.electric/tick",-1268517293);
}));

(hyperfiddle.electric.Clock.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"raf","raf",345121375,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(hyperfiddle.electric.Clock.cljs$lang$type = true);

(hyperfiddle.electric.Clock.cljs$lang$ctorStr = "hyperfiddle.electric/Clock");

(hyperfiddle.electric.Clock.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric/Clock");
}));

/**
 * Positional factory function for hyperfiddle.electric/Clock.
 */
hyperfiddle.electric.__GT_Clock = (function hyperfiddle$electric$__GT_Clock(raf,callback,terminator){
return (new hyperfiddle.electric.Clock(raf,callback,terminator));
});

/**
 * lazy & efficient logical clock that schedules no work unless sampled
 */
hyperfiddle.electric._LT_clock = (function hyperfiddle$electric$_LT_clock(n,t){
var cancel = hyperfiddle.electric.__GT_Clock((0),null,t);
(cancel.callback = (function (_){
(cancel.raf = (0));

return (n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));
}));

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return cancel;
});
hyperfiddle.electric._get_system_time_ms = (function hyperfiddle$electric$_get_system_time_ms(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47130 = arguments.length;
var i__5770__auto___47131 = (0);
while(true){
if((i__5770__auto___47131 < len__5769__auto___47130)){
args__5775__auto__.push((arguments[i__5770__auto___47131]));

var G__47132 = (i__5770__auto___47131 + (1));
i__5770__auto___47131 = G__47132;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return hyperfiddle.electric._get_system_time_ms.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(hyperfiddle.electric._get_system_time_ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__47030){
var vec__47031 = p__47030;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47031,(0),null);
return Date.now();
}));

(hyperfiddle.electric._get_system_time_ms.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.electric._get_system_time_ms.cljs$lang$applyTo = (function (seq47029){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47029));
}));

hyperfiddle.electric._listen = (function hyperfiddle$electric$_listen(node,typ,f,opts){
node.addEventListener(typ,f,opts);

return (function (){
return node.removeEventListener(typ,f);
});
});
hyperfiddle.electric.event_STAR_ = (function hyperfiddle$electric$event_STAR_(node,typ,f_BANG_,opts){
return missionary.core.relieve(cljs.core.PersistentArrayMap.EMPTY,missionary.core.observe((function (_BANG_){
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(null) : _BANG_.call(null,null));

return hyperfiddle.electric._listen(node,typ,(function (p1__47034_SHARP_){
var G__47035 = (f_BANG_.cljs$core$IFn$_invoke$arity$1 ? f_BANG_.cljs$core$IFn$_invoke$arity$1(p1__47034_SHARP_) : f_BANG_.call(null,p1__47034_SHARP_));
return (_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__47035) : _BANG_.call(null,G__47035));
}),cljs.core.clj__GT_js(opts));
})));
});
hyperfiddle.electric._LT_dom_visibility_state = missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (_){
return document.visibilityState;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.event_STAR_(document,"visibilitychange",cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY)], 0));
hyperfiddle.electric._check_fn_arity_BANG_ = (function hyperfiddle$electric$_check_fn_arity_BANG_(name,expected,actual){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,actual)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["You called ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("hyperfiddle.electric","unnamed-efn","hyperfiddle.electric/unnamed-efn",1016396331)], 0));
}
})()),", a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),"-arg e/fn with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)," arguments."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null));
} else {
return null;
}
});
hyperfiddle.electric.watchable_QMARK_ = (function hyperfiddle$electric$watchable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
}
});
hyperfiddle.electric.checked_watch = (function hyperfiddle$electric$checked_watch(_BANG_x){
if(hyperfiddle.electric.watchable_QMARK_(_BANG_x)){
} else {
throw (new Error(["Assert failed: ","Provided argument is not Watchable.","\n","(watchable? !x)"].join('')));
}

return missionary.core.watch(_BANG_x);
});
hyperfiddle.electric._invalid_watch_usage_message = "Invalid e/watch (use from Electric code only, maybe you forgot a e/def?)";
hyperfiddle.electric.debounce_discreet = (function hyperfiddle$electric$debounce_discreet(var_args){
var G__47039 = arguments.length;
switch (G__47039) {
case 2:
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$2 = (function (delay,flow){
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3(delay,null,flow);
}));

(hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3 = (function (delay,init,flow){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,init,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47040_block_10 = (function hyperfiddle$electric$cr47040_block_10(cr47040_state){
try{var cr47040_place_21 = missionary.core.unpark();
(cr47040_state[(0)] = cr47040_block_11);

(cr47040_state[(2)] = cr47040_place_21);

return cr47040_state;
}catch (e47058){var cr47040_exception = e47058;
(cr47040_state[(0)] = cr47040_block_12);

(cr47040_state[(2)] = null);

(cr47040_state[(1)] = true);

(cr47040_state[(3)] = cr47040_exception);

return cr47040_state;
}});
var cr47040_block_6 = (function hyperfiddle$electric$cr47040_block_6(cr47040_state){
try{var cr47040_place_15 = null;
(cr47040_state[(0)] = cr47040_block_8);

(cr47040_state[(4)] = cr47040_place_15);

return cr47040_state;
}catch (e47059){var cr47040_exception = e47059;
(cr47040_state[(0)] = cr47040_block_12);

(cr47040_state[(4)] = null);

(cr47040_state[(2)] = null);

(cr47040_state[(1)] = true);

(cr47040_state[(3)] = cr47040_exception);

return cr47040_state;
}});
var cr47040_block_0 = (function hyperfiddle$electric$cr47040_block_0(cr47040_state){
try{var cr47040_place_0 = flow;
(cr47040_state[(0)] = cr47040_block_1);

return missionary.core.switch$(cr47040_place_0);
}catch (e47060){var cr47040_exception = e47060;
(cr47040_state[(0)] = null);

throw cr47040_exception;
}});
var cr47040_block_11 = (function hyperfiddle$electric$cr47040_block_11(cr47040_state){
try{var cr47040_place_12 = (cr47040_state[(2)]);
(cr47040_state[(0)] = cr47040_block_12);

(cr47040_state[(2)] = null);

(cr47040_state[(3)] = cr47040_place_12);

return cr47040_state;
}catch (e47061){var cr47040_exception = e47061;
(cr47040_state[(0)] = cr47040_block_12);

(cr47040_state[(2)] = null);

(cr47040_state[(1)] = true);

(cr47040_state[(3)] = cr47040_exception);

return cr47040_state;
}});
var cr47040_block_9 = (function hyperfiddle$electric$cr47040_block_9(cr47040_state){
try{var cr47040_place_2 = (cr47040_state[(3)]);
var cr47040_place_18 = cr47040_place_2;
var cr47040_place_19 = (1);
var cr47040_place_20 = missionary.core.none;
(cr47040_state[(0)] = cr47040_block_10);

return missionary.core.fork(cr47040_place_19,cr47040_place_20);
}catch (e47062){var cr47040_exception = e47062;
(cr47040_state[(0)] = cr47040_block_12);

(cr47040_state[(2)] = null);

(cr47040_state[(1)] = true);

(cr47040_state[(3)] = cr47040_exception);

return cr47040_state;
}});
var cr47040_block_2 = (function hyperfiddle$electric$cr47040_block_2(cr47040_state){
try{var cr47040_place_1 = (cr47040_state[(2)]);
var cr47040_place_4 = missionary.core.sleep;
var cr47040_place_5 = delay;
var cr47040_place_6 = cr47040_place_1;
var cr47040_place_7 = (function (){var G__47065 = cr47040_place_5;
var G__47066 = cr47040_place_6;
var fexpr__47064 = cr47040_place_4;
return (fexpr__47064.cljs$core$IFn$_invoke$arity$2 ? fexpr__47064.cljs$core$IFn$_invoke$arity$2(G__47065,G__47066) : fexpr__47064.call(null,G__47065,G__47066));
})();
(cr47040_state[(0)] = cr47040_block_3);

(cr47040_state[(2)] = null);

return missionary.core.park(cr47040_place_7);
}catch (e47063){var cr47040_exception = e47063;
(cr47040_state[(0)] = cr47040_block_4);

(cr47040_state[(2)] = null);

(cr47040_state[(3)] = cr47040_exception);

return cr47040_state;
}});
var cr47040_block_4 = (function hyperfiddle$electric$cr47040_block_4(cr47040_state){
try{var cr47040_place_2 = (cr47040_state[(3)]);
var cr47040_place_9 = cr47040_place_2;
var cr47040_place_10 = missionary.Cancelled;
var cr47040_place_11 = (cr47040_place_9 instanceof cr47040_place_10);
var cr47040_place_12 = null;
if(cr47040_place_11){
(cr47040_state[(0)] = cr47040_block_9);

(cr47040_state[(2)] = cr47040_place_12);

return cr47040_state;
} else {
(cr47040_state[(0)] = cr47040_block_5);

(cr47040_state[(2)] = cr47040_place_12);

return cr47040_state;
}
}catch (e47067){var cr47040_exception = e47067;
(cr47040_state[(0)] = cr47040_block_12);

(cr47040_state[(1)] = true);

(cr47040_state[(3)] = cr47040_exception);

return cr47040_state;
}});
var cr47040_block_5 = (function hyperfiddle$electric$cr47040_block_5(cr47040_state){
try{var cr47040_place_13 = new cljs.core.Keyword(null,"else","else",-1508377146);
var cr47040_place_14 = null;
if(cljs.core.truth_(cr47040_place_13)){
(cr47040_state[(0)] = cr47040_block_7);

(cr47040_state[(2)] = null);

return cr47040_state;
} else {
(cr47040_state[(0)] = cr47040_block_6);

(cr47040_state[(4)] = cr47040_place_14);

return cr47040_state;
}
}catch (e47068){var cr47040_exception = e47068;
(cr47040_state[(0)] = cr47040_block_12);

(cr47040_state[(2)] = null);

(cr47040_state[(1)] = true);

(cr47040_state[(3)] = cr47040_exception);

return cr47040_state;
}});
var cr47040_block_3 = (function hyperfiddle$electric$cr47040_block_3(cr47040_state){
try{var cr47040_place_8 = missionary.core.unpark();
(cr47040_state[(0)] = cr47040_block_12);

(cr47040_state[(3)] = cr47040_place_8);

return cr47040_state;
}catch (e47069){var cr47040_exception = e47069;
(cr47040_state[(0)] = cr47040_block_4);

(cr47040_state[(3)] = cr47040_exception);

return cr47040_state;
}});
var cr47040_block_12 = (function hyperfiddle$electric$cr47040_block_12(cr47040_state){
try{var cr47040_place_3 = (cr47040_state[(1)]);
var cr47040_place_2 = (cr47040_state[(3)]);
var cr47040_place_22 = (cljs.core.truth_(cr47040_place_3)?(function(){throw cr47040_place_2})():cr47040_place_2);
(cr47040_state[(0)] = null);

(cr47040_state[(1)] = null);

(cr47040_state[(3)] = null);

return cr47040_place_22;
}catch (e47070){var cr47040_exception = e47070;
(cr47040_state[(0)] = null);

(cr47040_state[(1)] = null);

(cr47040_state[(3)] = null);

throw cr47040_exception;
}});
var cr47040_block_7 = (function hyperfiddle$electric$cr47040_block_7(cr47040_state){
try{var cr47040_place_2 = (cr47040_state[(3)]);
var cr47040_place_16 = cr47040_place_2;
var cr47040_place_17 = (function(){throw cr47040_place_16})();
(cr47040_state[(0)] = null);

(cr47040_state[(1)] = null);

(cr47040_state[(3)] = null);

return null;
}catch (e47071){var cr47040_exception = e47071;
(cr47040_state[(0)] = cr47040_block_12);

(cr47040_state[(1)] = true);

(cr47040_state[(3)] = cr47040_exception);

return cr47040_state;
}});
var cr47040_block_1 = (function hyperfiddle$electric$cr47040_block_1(cr47040_state){
try{var cr47040_place_1 = missionary.core.unpark();
var cr47040_place_2 = null;
var cr47040_place_3 = false;
(cr47040_state[(0)] = cr47040_block_2);

(cr47040_state[(2)] = cr47040_place_1);

(cr47040_state[(3)] = cr47040_place_2);

(cr47040_state[(1)] = cr47040_place_3);

return cr47040_state;
}catch (e47072){var cr47040_exception = e47072;
(cr47040_state[(0)] = null);

throw cr47040_exception;
}});
var cr47040_block_8 = (function hyperfiddle$electric$cr47040_block_8(cr47040_state){
try{var cr47040_place_14 = (cr47040_state[(4)]);
(cr47040_state[(0)] = cr47040_block_11);

(cr47040_state[(4)] = null);

(cr47040_state[(2)] = cr47040_place_14);

return cr47040_state;
}catch (e47073){var cr47040_exception = e47073;
(cr47040_state[(0)] = cr47040_block_12);

(cr47040_state[(4)] = null);

(cr47040_state[(2)] = null);

(cr47040_state[(1)] = true);

(cr47040_state[(3)] = cr47040_exception);

return cr47040_state;
}});
return cloroutine.impl.coroutine((function (){var G__47074 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__47074[(0)] = cr47040_block_0);

return G__47074;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.debounce_discreet.cljs$lang$maxFixedArity = 3);

hyperfiddle.electric.throttle = (function hyperfiddle$electric$throttle(dur,_GT_in){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47075_block_8 = (function hyperfiddle$electric$throttle_$_cr47075_block_8(cr47075_state){
try{var cr47075_place_14 = (cr47075_state[(2)]);
(cr47075_state[(0)] = null);

(cr47075_state[(2)] = null);

return cr47075_place_14;
}catch (e47096){var cr47075_exception = e47096;
(cr47075_state[(0)] = null);

(cr47075_state[(2)] = null);

throw cr47075_exception;
}});
var cr47075_block_2 = (function hyperfiddle$electric$throttle_$_cr47075_block_2(cr47075_state){
try{var cr47075_place_12 = missionary.core.unpark();
var cr47075_place_13 = cr47075_place_12;
var cr47075_place_14 = null;
var G__47098 = cr47075_place_13;
switch (G__47098) {
case (0):
(cr47075_state[(0)] = cr47075_block_3);

(cr47075_state[(2)] = cr47075_place_14);

return cr47075_state;

break;
case (1):
(cr47075_state[(0)] = cr47075_block_4);

(cr47075_state[(1)] = null);

(cr47075_state[(2)] = cr47075_place_14);

return cr47075_state;

break;
default:
(cr47075_state[(0)] = cr47075_block_7);

(cr47075_state[(1)] = null);

(cr47075_state[(1)] = cr47075_place_12);

return cr47075_state;

}
}catch (e47097){var cr47075_exception = e47097;
(cr47075_state[(0)] = null);

(cr47075_state[(1)] = null);

throw cr47075_exception;
}});
var cr47075_block_5 = (function hyperfiddle$electric$throttle_$_cr47075_block_5(cr47075_state){
try{var cr47075_place_19 = missionary.core.unpark();
var cr47075_place_20 = (1);
var cr47075_place_21 = missionary.core.none;
(cr47075_state[(0)] = cr47075_block_6);

return missionary.core.fork(cr47075_place_20,cr47075_place_21);
}catch (e47099){var cr47075_exception = e47099;
(cr47075_state[(0)] = null);

(cr47075_state[(2)] = null);

throw cr47075_exception;
}});
var cr47075_block_1 = (function hyperfiddle$electric$throttle_$_cr47075_block_1(cr47075_state){
try{var cr47075_place_5 = missionary.core.unpark();
var cr47075_place_6 = (1);
var cr47075_place_7 = missionary.core.seed;
var cr47075_place_8 = cljs.core.range;
var cr47075_place_9 = (2);
var cr47075_place_10 = (function (){var G__47102 = cr47075_place_9;
var fexpr__47101 = cr47075_place_8;
return (fexpr__47101.cljs$core$IFn$_invoke$arity$1 ? fexpr__47101.cljs$core$IFn$_invoke$arity$1(G__47102) : fexpr__47101.call(null,G__47102));
})();
var cr47075_place_11 = (function (){var G__47104 = cr47075_place_10;
var fexpr__47103 = cr47075_place_7;
return (fexpr__47103.cljs$core$IFn$_invoke$arity$1 ? fexpr__47103.cljs$core$IFn$_invoke$arity$1(G__47104) : fexpr__47103.call(null,G__47104));
})();
(cr47075_state[(0)] = cr47075_block_2);

(cr47075_state[(1)] = cr47075_place_5);

return missionary.core.fork(cr47075_place_6,cr47075_place_11);
}catch (e47100){var cr47075_exception = e47100;
(cr47075_state[(0)] = null);

throw cr47075_exception;
}});
var cr47075_block_7 = (function hyperfiddle$electric$throttle_$_cr47075_block_7(cr47075_state){
try{var cr47075_place_12 = (cr47075_state[(1)]);
var cr47075_place_23 = "No matching clause: ";
var cr47075_place_24 = cr47075_place_12;
var cr47075_place_25 = [cr47075_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr47075_place_24)].join('');
var cr47075_place_26 = (new Error(cr47075_place_25));
var cr47075_place_27 = (function(){throw cr47075_place_26})();
(cr47075_state[(0)] = null);

(cr47075_state[(1)] = null);

return null;
}catch (e47105){var cr47075_exception = e47105;
(cr47075_state[(0)] = null);

(cr47075_state[(1)] = null);

throw cr47075_exception;
}});
var cr47075_block_3 = (function hyperfiddle$electric$throttle_$_cr47075_block_3(cr47075_state){
try{var cr47075_place_5 = (cr47075_state[(1)]);
var cr47075_place_15 = cr47075_place_5;
(cr47075_state[(0)] = cr47075_block_8);

(cr47075_state[(1)] = null);

(cr47075_state[(2)] = cr47075_place_15);

return cr47075_state;
}catch (e47106){var cr47075_exception = e47106;
(cr47075_state[(0)] = null);

(cr47075_state[(1)] = null);

(cr47075_state[(2)] = null);

throw cr47075_exception;
}});
var cr47075_block_6 = (function hyperfiddle$electric$throttle_$_cr47075_block_6(cr47075_state){
try{var cr47075_place_22 = missionary.core.unpark();
(cr47075_state[(0)] = cr47075_block_8);

(cr47075_state[(2)] = cr47075_place_22);

return cr47075_state;
}catch (e47107){var cr47075_exception = e47107;
(cr47075_state[(0)] = null);

(cr47075_state[(2)] = null);

throw cr47075_exception;
}});
var cr47075_block_0 = (function hyperfiddle$electric$throttle_$_cr47075_block_0(cr47075_state){
try{var cr47075_place_0 = (1);
var cr47075_place_1 = missionary.core.relieve;
var cr47075_place_2 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr47075_place_3 = _GT_in;
var cr47075_place_4 = (function (){var G__47110 = cr47075_place_2;
var G__47111 = cr47075_place_3;
var fexpr__47109 = cr47075_place_1;
return (fexpr__47109.cljs$core$IFn$_invoke$arity$2 ? fexpr__47109.cljs$core$IFn$_invoke$arity$2(G__47110,G__47111) : fexpr__47109.call(null,G__47110,G__47111));
})();
(cr47075_state[(0)] = cr47075_block_1);

return missionary.core.fork(cr47075_place_0,cr47075_place_4);
}catch (e47108){var cr47075_exception = e47108;
(cr47075_state[(0)] = null);

throw cr47075_exception;
}});
var cr47075_block_4 = (function hyperfiddle$electric$throttle_$_cr47075_block_4(cr47075_state){
try{var cr47075_place_16 = missionary.core.sleep;
var cr47075_place_17 = dur;
var cr47075_place_18 = (function (){var G__47114 = cr47075_place_17;
var fexpr__47113 = cr47075_place_16;
return (fexpr__47113.cljs$core$IFn$_invoke$arity$1 ? fexpr__47113.cljs$core$IFn$_invoke$arity$1(G__47114) : fexpr__47113.call(null,G__47114));
})();
(cr47075_state[(0)] = cr47075_block_5);

return missionary.core.park(cr47075_place_18);
}catch (e47112){var cr47075_exception = e47112;
(cr47075_state[(0)] = null);

(cr47075_state[(2)] = null);

throw cr47075_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47115 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__47115[(0)] = cr47075_block_0);

return G__47115;
})());
})(),missionary.core.ap_run);
});
/**
 * Bound to the HTTP request of the page in which the current Electric program is running.
 */
hyperfiddle.electric._STAR_http_request_STAR_ = null;

//# sourceMappingURL=hyperfiddle.electric.js.map
