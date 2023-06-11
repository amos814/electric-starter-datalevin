goog.provide('missionary.impl.Observe');


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Observe.Process = (function (notifier,terminator,unsub,value){
this.notifier = notifier;
this.terminator = terminator;
this.unsub = unsub;
this.value = value;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Observe.Process.prototype.call = (function (unused__11938__auto__){
var self__ = this;
var self__ = this;
var G__39996 = (arguments.length - (1));
switch (G__39996) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Observe.Process.prototype.apply = (function (self__,args39989){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args39989)));
}));

(missionary.impl.Observe.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
(missionary.impl.Observe.kill.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Observe.kill.cljs$core$IFn$_invoke$arity$1(this$) : missionary.impl.Observe.kill.call(null,this$));

return null;
}));

(missionary.impl.Observe.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (missionary.impl.Observe.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Observe.transfer.cljs$core$IFn$_invoke$arity$1(this$__$1) : missionary.impl.Observe.transfer.call(null,this$__$1));
}));

(missionary.impl.Observe.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"unsub","unsub",279611419,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(missionary.impl.Observe.Process.cljs$lang$type = true);

(missionary.impl.Observe.Process.cljs$lang$ctorStr = "missionary.impl.Observe/Process");

(missionary.impl.Observe.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Observe/Process");
}));

/**
 * Positional factory function for missionary.impl.Observe/Process.
 */
missionary.impl.Observe.__GT_Process = (function missionary$impl$Observe$__GT_Process(notifier,terminator,unsub,value){
return (new missionary.impl.Observe.Process(notifier,terminator,unsub,value));
});

missionary.impl.Observe.kill = (function missionary$impl$Observe$kill(ps){
var temp__5808__auto__ = ps.notifier;
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
(ps.notifier = null);

var x = ps.value;
(ps.value = null);

if((x === ps)){
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
return null;
}
}
});
missionary.impl.Observe.transfer = (function missionary$impl$Observe$transfer(ps){
if((ps.notifier == null)){
var fexpr__40063_40099 = ps.terminator;
(fexpr__40063_40099.cljs$core$IFn$_invoke$arity$0 ? fexpr__40063_40099.cljs$core$IFn$_invoke$arity$0() : fexpr__40063_40099.call(null));

var fexpr__40071_40102 = ps.unsub;
(fexpr__40071_40102.cljs$core$IFn$_invoke$arity$0 ? fexpr__40071_40102.cljs$core$IFn$_invoke$arity$0() : fexpr__40071_40102.call(null));

throw (new missionary.Cancelled("Observe cancelled."));
} else {
var x = ps.value;
(ps.value = ps);

return x;
}
});
missionary.impl.Observe.run = (function missionary$impl$Observe$run(s,n,t){
var ps = missionary.impl.Observe.__GT_Process(n,t,null,null);
(ps.value = ps);

try{(ps.unsub = (function (){var G__40078 = (function (x){
var temp__5808__auto__ = ps.notifier;
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
if((ps === ps.value)){
(ps.value = x);

return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
throw (new Error("Can't process event - consumer is not ready."));
}
}
});
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__40078) : s.call(null,G__40078));
})());
}catch (e40077){var e_40106 = e40077;
(ps.value = null);

(ps.notifier = null);

(ps.unsub = (function (){
throw e_40106;
}));

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));
}
return ps;
});

//# sourceMappingURL=missionary.impl.Observe.js.map
