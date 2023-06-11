goog.provide('missionary.impl.Seed');


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Seed.Process = (function (iterator,notifier,terminator){
this.iterator = iterator;
this.notifier = notifier;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Seed.Process.prototype.call = (function (unused__11938__auto__){
var self__ = this;
var self__ = this;
var G__40314 = (arguments.length - (1));
switch (G__40314) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Seed.Process.prototype.apply = (function (self__,args40313){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40313)));
}));

(missionary.impl.Seed.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var ps = this;
return (missionary.impl.Seed.cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Seed.cancel.cljs$core$IFn$_invoke$arity$1(ps) : missionary.impl.Seed.cancel.call(null,ps));
}));

(missionary.impl.Seed.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (ps){
var self__ = this;
var ps__$1 = this;
return (missionary.impl.Seed.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Seed.transfer.cljs$core$IFn$_invoke$arity$1(ps__$1) : missionary.impl.Seed.transfer.call(null,ps__$1));
}));

(missionary.impl.Seed.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"iterator","iterator",-32550441,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(missionary.impl.Seed.Process.cljs$lang$type = true);

(missionary.impl.Seed.Process.cljs$lang$ctorStr = "missionary.impl.Seed/Process");

(missionary.impl.Seed.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Seed/Process");
}));

/**
 * Positional factory function for missionary.impl.Seed/Process.
 */
missionary.impl.Seed.__GT_Process = (function missionary$impl$Seed$__GT_Process(iterator,notifier,terminator){
return (new missionary.impl.Seed.Process(iterator,notifier,terminator));
});

missionary.impl.Seed.cancel = (function missionary$impl$Seed$cancel(ps){
return (ps.iterator = null);
});
missionary.impl.Seed.more = (function missionary$impl$Seed$more(ps,i){
if(cljs.core.truth_(i.hasNext())){
var fexpr__40318 = ps.notifier;
return (fexpr__40318.cljs$core$IFn$_invoke$arity$0 ? fexpr__40318.cljs$core$IFn$_invoke$arity$0() : fexpr__40318.call(null));
} else {
(ps.iterator = null);

var fexpr__40319 = ps.terminator;
return (fexpr__40319.cljs$core$IFn$_invoke$arity$0 ? fexpr__40319.cljs$core$IFn$_invoke$arity$0() : fexpr__40319.call(null));
}
});
missionary.impl.Seed.transfer = (function missionary$impl$Seed$transfer(ps){
var temp__5806__auto__ = ps.iterator;
if((temp__5806__auto__ == null)){
var fexpr__40320_40325 = ps.terminator;
(fexpr__40320_40325.cljs$core$IFn$_invoke$arity$0 ? fexpr__40320_40325.cljs$core$IFn$_invoke$arity$0() : fexpr__40320_40325.call(null));

throw (new missionary.Cancelled("Seed cancelled"));
} else {
var i = temp__5806__auto__;
var x = i.next();
missionary.impl.Seed.more(ps,i);

return x;
}
});
missionary.impl.Seed.run = (function missionary$impl$Seed$run(coll,n,t){
var i = cljs.core.iter(coll);
var ps = missionary.impl.Seed.__GT_Process(i,n,t);
missionary.impl.Seed.more(ps,i);

return ps;
});

//# sourceMappingURL=missionary.impl.Seed.js.map
