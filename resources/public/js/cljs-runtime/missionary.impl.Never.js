goog.provide('missionary.impl.Never');

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
missionary.impl.Never.Process = (function (f,alive){
this.f = f;
this.alive = alive;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Never.Process.prototype.call = (function (unused__11938__auto__){
var self__ = this;
var self__ = this;
var G__40267 = (arguments.length - (1));
switch (G__40267) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Never.Process.prototype.apply = (function (self__,args40265){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40265)));
}));

(missionary.impl.Never.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var ps = this;
return (missionary.impl.Never.cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Never.cancel.cljs$core$IFn$_invoke$arity$1(ps) : missionary.impl.Never.cancel.call(null,ps));
}));

(missionary.impl.Never.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"alive","alive",-1229505839,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null))], null);
}));

(missionary.impl.Never.Process.cljs$lang$type = true);

(missionary.impl.Never.Process.cljs$lang$ctorStr = "missionary.impl.Never/Process");

(missionary.impl.Never.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Never/Process");
}));

/**
 * Positional factory function for missionary.impl.Never/Process.
 */
missionary.impl.Never.__GT_Process = (function missionary$impl$Never$__GT_Process(f,alive){
return (new missionary.impl.Never.Process(f,alive));
});

missionary.impl.Never.cancel = (function missionary$impl$Never$cancel(ps){
if(cljs.core.truth_(ps.alive)){
(ps.alive = false);

var G__40275 = (new missionary.Cancelled("Never cancelled."));
var fexpr__40274 = ps.f;
return (fexpr__40274.cljs$core$IFn$_invoke$arity$1 ? fexpr__40274.cljs$core$IFn$_invoke$arity$1(G__40275) : fexpr__40274.call(null,G__40275));
} else {
return null;
}
});
missionary.impl.Never.run = (function missionary$impl$Never$run(f){
return missionary.impl.Never.__GT_Process(f,true);
});

//# sourceMappingURL=missionary.impl.Never.js.map
