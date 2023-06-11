goog.provide('missionary.impl.Mailbox');
missionary.impl.Mailbox.nop = (function missionary$impl$Mailbox$nop(){
return null;
});

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
missionary.impl.Mailbox.Port = (function (enqueue,dequeue,readers){
this.enqueue = enqueue;
this.dequeue = dequeue;
this.readers = readers;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Mailbox.Port.prototype.call = (function (unused__11938__auto__){
var self__ = this;
var self__ = this;
var G__40246 = (arguments.length - (1));
switch (G__40246) {
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

(missionary.impl.Mailbox.Port.prototype.apply = (function (self__,args40244){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40244)));
}));

(missionary.impl.Mailbox.Port.prototype.cljs$core$IFn$_invoke$arity$1 = (function (t){
var self__ = this;
var _ = this;
var temp__5806__auto__ = cljs.core.seq(self__.readers);
if((temp__5806__auto__ == null)){
self__.enqueue.push(t);

return null;
} else {
var vec__40260 = temp__5806__auto__;
var _BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40260,(0),null);
(self__.readers = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(self__.readers,_BANG_));

return (_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(t) : _BANG_.call(null,t));
}
}));

(missionary.impl.Mailbox.Port.prototype.cljs$core$IFn$_invoke$arity$2 = (function (s_BANG_,f_BANG_){
var self__ = this;
var _ = this;
if((self__.dequeue.length === (0))){
if((self__.enqueue.length === (0))){
var _BANG_ = (function (p1__40243_SHARP_){
return (s_BANG_.cljs$core$IFn$_invoke$arity$1 ? s_BANG_.cljs$core$IFn$_invoke$arity$1(p1__40243_SHARP_) : s_BANG_.call(null,p1__40243_SHARP_));
});
(self__.readers = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.readers,_BANG_));

return (function (){
if(cljs.core.contains_QMARK_(self__.readers,_BANG_)){
(self__.readers = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(self__.readers,_BANG_));

var G__40290 = (new missionary.Cancelled("Mailbox fetch cancelled."));
return (f_BANG_.cljs$core$IFn$_invoke$arity$1 ? f_BANG_.cljs$core$IFn$_invoke$arity$1(G__40290) : f_BANG_.call(null,G__40290));
} else {
return null;
}
});
} else {
var tmp = self__.enqueue;
(self__.enqueue = self__.dequeue);

(self__.dequeue = tmp.reverse());

var G__40291_40305 = tmp.pop();
(s_BANG_.cljs$core$IFn$_invoke$arity$1 ? s_BANG_.cljs$core$IFn$_invoke$arity$1(G__40291_40305) : s_BANG_.call(null,G__40291_40305));

return missionary.impl.Mailbox.nop;
}
} else {
var G__40292_40306 = self__.dequeue.pop();
(s_BANG_.cljs$core$IFn$_invoke$arity$1 ? s_BANG_.cljs$core$IFn$_invoke$arity$1(G__40292_40306) : s_BANG_.call(null,G__40292_40306));

return missionary.impl.Mailbox.nop;
}
}));

(missionary.impl.Mailbox.Port.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"enqueue","enqueue",1377000435,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dequeue","dequeue",1692220857,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"readers","readers",-477731503,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(missionary.impl.Mailbox.Port.cljs$lang$type = true);

(missionary.impl.Mailbox.Port.cljs$lang$ctorStr = "missionary.impl.Mailbox/Port");

(missionary.impl.Mailbox.Port.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Mailbox/Port");
}));

/**
 * Positional factory function for missionary.impl.Mailbox/Port.
 */
missionary.impl.Mailbox.__GT_Port = (function missionary$impl$Mailbox$__GT_Port(enqueue,dequeue,readers){
return (new missionary.impl.Mailbox.Port(enqueue,dequeue,readers));
});

missionary.impl.Mailbox.make = (function missionary$impl$Mailbox$make(){
return missionary.impl.Mailbox.__GT_Port([],[],cljs.core.PersistentHashSet.EMPTY);
});

//# sourceMappingURL=missionary.impl.Mailbox.js.map
