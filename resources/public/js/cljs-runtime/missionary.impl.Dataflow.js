goog.provide('missionary.impl.Dataflow');
missionary.impl.Dataflow.nop = (function missionary$impl$Dataflow$nop(){
return null;
});
missionary.impl.Dataflow.send_rf = (function missionary$impl$Dataflow$send_rf(x,_BANG_){
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(x) : _BANG_.call(null,x));

return x;
});

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
missionary.impl.Dataflow.Port = (function (bound,value,watch){
this.bound = bound;
this.value = value;
this.watch = watch;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Dataflow.Port.prototype.call = (function (unused__11938__auto__){
var self__ = this;
var self__ = this;
var G__40247 = (arguments.length - (1));
switch (G__40247) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Dataflow.Port.prototype.apply = (function (self__,args40245){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40245)));
}));

(missionary.impl.Dataflow.Port.prototype.cljs$core$IFn$_invoke$arity$1 = (function (t){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.bound)){
} else {
(self__.bound = true);

(self__.value = t);

cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(missionary.impl.Dataflow.send_rf,t,cljs.core.persistent_BANG_(self__.watch));

(self__.watch = null);
}

return self__.value;
}));

(missionary.impl.Dataflow.Port.prototype.cljs$core$IFn$_invoke$arity$2 = (function (s_BANG_,f_BANG_){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.bound)){
(s_BANG_.cljs$core$IFn$_invoke$arity$1 ? s_BANG_.cljs$core$IFn$_invoke$arity$1(self__.value) : s_BANG_.call(null,self__.value));

return missionary.impl.Dataflow.nop;
} else {
var _BANG_ = (function (p1__40242_SHARP_){
return (s_BANG_.cljs$core$IFn$_invoke$arity$1 ? s_BANG_.cljs$core$IFn$_invoke$arity$1(p1__40242_SHARP_) : s_BANG_.call(null,p1__40242_SHARP_));
});
(self__.watch = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(self__.watch,_BANG_));

return (function (){
if(cljs.core.truth_(self__.bound)){
return null;
} else {
if(cljs.core.contains_QMARK_(self__.watch,_BANG_)){
(self__.watch = cljs.core.disj_BANG_.cljs$core$IFn$_invoke$arity$2(self__.watch,_BANG_));

var G__40289 = (new missionary.Cancelled("Dataflow variable dereference cancelled."));
return (f_BANG_.cljs$core$IFn$_invoke$arity$1 ? f_BANG_.cljs$core$IFn$_invoke$arity$1(G__40289) : f_BANG_.call(null,G__40289));
} else {
return null;
}
}
});
}
}));

(missionary.impl.Dataflow.Port.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bound","bound",-2066818599,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watch","watch",2021519804,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(missionary.impl.Dataflow.Port.cljs$lang$type = true);

(missionary.impl.Dataflow.Port.cljs$lang$ctorStr = "missionary.impl.Dataflow/Port");

(missionary.impl.Dataflow.Port.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Dataflow/Port");
}));

/**
 * Positional factory function for missionary.impl.Dataflow/Port.
 */
missionary.impl.Dataflow.__GT_Port = (function missionary$impl$Dataflow$__GT_Port(bound,value,watch){
return (new missionary.impl.Dataflow.Port(bound,value,watch));
});

missionary.impl.Dataflow.make = (function missionary$impl$Dataflow$make(){
return missionary.impl.Dataflow.__GT_Port(false,null,cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY));
});

//# sourceMappingURL=missionary.impl.Dataflow.js.map
