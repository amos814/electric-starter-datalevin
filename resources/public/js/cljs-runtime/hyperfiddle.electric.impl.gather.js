goog.provide('hyperfiddle.electric.impl.gather');
hyperfiddle.electric.impl.gather.done_BANG_ = (function hyperfiddle$electric$impl$gather$done_BANG_(main,terminator){
if(((main[((6) | (0))] = ((main[((6) | (0))]) - (1))) === (0))){
return (terminator.cljs$core$IFn$_invoke$arity$0 ? terminator.cljs$core$IFn$_invoke$arity$0() : terminator.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.gather.cancel_BANG_ = (function hyperfiddle$electric$impl$gather$cancel_BANG_(main){
var temp__5808__auto__ = (main[((2) | (0))]);
if((temp__5808__auto__ == null)){
return null;
} else {
var item = temp__5808__auto__;
var item_40997__$1 = item;
while(true){
if((item_40997__$1 === main)){
} else {
var n_40998 = (item_40997__$1[((2) | (0))]);
(item_40997__$1[((1) | (0))] = null);

(item_40997__$1[((2) | (0))] = null);

var fexpr__40954_40999 = (item_40997__$1[((0) | (0))]);
(fexpr__40954_40999.cljs$core$IFn$_invoke$arity$0 ? fexpr__40954_40999.cljs$core$IFn$_invoke$arity$0() : fexpr__40954_40999.call(null));

var G__41000 = n_40998;
item_40997__$1 = G__41000;
continue;
}
break;
}

(main[((1) | (0))] = null);

(main[((2) | (0))] = null);

var fexpr__40955 = (main[((0) | (0))]);
return (fexpr__40955.cljs$core$IFn$_invoke$arity$0 ? fexpr__40955.cljs$core$IFn$_invoke$arity$0() : fexpr__40955.call(null));
}
});
hyperfiddle.electric.impl.gather.flush_BANG_ = (function hyperfiddle$electric$impl$gather$flush_BANG_(item){
var item__$1 = item;
while(true){
if((!((item__$1 == null)))){
var next = (function (){var a__40841__auto__ = item__$1;
var i__40842__auto__ = ((3) | (0));
var x__40843__auto__ = (a__40841__auto__[i__40842__auto__]);
(a__40841__auto__[i__40842__auto__] = null);

return x__40843__auto__;
})();
try{cljs.core.deref((item__$1[((0) | (0))]));
}catch (e40958){var __41001 = e40958;
}
var G__41002 = next;
item__$1 = G__41002;
continue;
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.gather.fail_BANG_ = (function hyperfiddle$electric$impl$gather$fail_BANG_(main,item,error){
hyperfiddle.electric.impl.gather.cancel_BANG_(main);

hyperfiddle.electric.impl.gather.flush_BANG_((function (){var a__40841__auto__ = main;
var i__40842__auto__ = ((3) | (0));
var x__40843__auto__ = (a__40841__auto__[i__40842__auto__]);
(a__40841__auto__[i__40842__auto__] = null);

return x__40843__auto__;
})());

hyperfiddle.electric.impl.gather.flush_BANG_(item);

throw error;
});
hyperfiddle.electric.impl.gather.sample_BANG_ = (function hyperfiddle$electric$impl$gather$sample_BANG_(main,rf,notifier){
var idle = (function (){var a__40841__auto__ = main;
var i__40842__auto__ = ((5) | (0));
var x__40843__auto__ = (a__40841__auto__[i__40842__auto__]);
(a__40841__auto__[i__40842__auto__] = false);

return x__40843__auto__;
})();
var head = (function (){var a__40841__auto__ = main;
var i__40842__auto__ = ((3) | (0));
var x__40843__auto__ = (a__40841__auto__[i__40842__auto__]);
(a__40841__auto__[i__40842__auto__] = null);

return x__40843__auto__;
})();
var item = (function (){var a__40841__auto__ = head;
var i__40842__auto__ = ((3) | (0));
var x__40843__auto__ = (a__40841__auto__[i__40842__auto__]);
(a__40841__auto__[i__40842__auto__] = null);

return x__40843__auto__;
})();
var r = (function (){try{return cljs.core.deref((head[((0) | (0))]));
}catch (e40967){var e = e40967;
return hyperfiddle.electric.impl.gather.fail_BANG_(main,item,e);
}})();
while(true){
if((item == null)){
if(cljs.core.truth_((main[((5) | (0))]))){
if(idle){
(notifier.cljs$core$IFn$_invoke$arity$0 ? notifier.cljs$core$IFn$_invoke$arity$0() : notifier.call(null));
} else {
}
} else {
(main[((5) | (0))] = idle);
}

return r;
} else {
var next = (function (){var a__40841__auto__ = item;
var i__40842__auto__ = ((3) | (0));
var x__40843__auto__ = (a__40841__auto__[i__40842__auto__]);
(a__40841__auto__[i__40842__auto__] = null);

return x__40843__auto__;
})();
var G__41004 = next;
var G__41005 = (function (){try{var G__40969 = r;
var G__40970 = cljs.core.deref((item[((0) | (0))]));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__40969,G__40970) : rf.call(null,G__40969,G__40970));
}catch (e40968){var e = e40968;
return hyperfiddle.electric.impl.gather.fail_BANG_(main,next,e);
}})();
item = G__41004;
r = G__41005;
continue;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.gather.It = (function (main,rf,notifier,terminator){
this.main = main;
this.rf = rf;
this.notifier = notifier;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.gather.It.prototype.call = (function (unused__11938__auto__){
var self__ = this;
var self__ = this;
var G__40974 = (arguments.length - (1));
switch (G__40974) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.gather.It.prototype.apply = (function (self__,args40973){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40973)));
}));

(hyperfiddle.electric.impl.gather.It.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var it = this;
return hyperfiddle.electric.impl.gather.cancel_BANG_(self__.main);
}));

(hyperfiddle.electric.impl.gather.It.prototype.cljs$core$IDeref$_deref$arity$1 = (function (it){
var self__ = this;
var it__$1 = this;
return hyperfiddle.electric.impl.gather.sample_BANG_(self__.main,self__.rf,self__.notifier);
}));

(hyperfiddle.electric.impl.gather.It.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"main","main",-477271134,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(hyperfiddle.electric.impl.gather.It.cljs$lang$type = true);

(hyperfiddle.electric.impl.gather.It.cljs$lang$ctorStr = "hyperfiddle.electric.impl.gather/It");

(hyperfiddle.electric.impl.gather.It.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.gather/It");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.gather/It.
 */
hyperfiddle.electric.impl.gather.__GT_It = (function hyperfiddle$electric$impl$gather$__GT_It(main,rf,notifier,terminator){
return (new hyperfiddle.electric.impl.gather.It(main,rf,notifier,terminator));
});

hyperfiddle.electric.impl.gather.transfer_BANG_ = (function hyperfiddle$electric$impl$gather$transfer_BANG_(it){
var main = it.main;
while(true){
if(cljs.core.truth_((main[((4) | (0))] = cljs.core.not((main[((4) | (0))]))))){
var temp__5806__auto___41010 = (main[((1) | (0))]);
if((temp__5806__auto___41010 == null)){
try{cljs.core.deref((main[((0) | (0))]));
}catch (e40981){var __41011 = e40981;
}} else {
var prev_41012 = temp__5806__auto___41010;
var item_41013 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((4) | (0)));
var idle_41014 = (function (){var a__40841__auto__ = main;
var i__40842__auto__ = ((5) | (0));
var x__40843__auto__ = (a__40841__auto__[i__40842__auto__]);
(a__40841__auto__[i__40842__auto__] = false);

return x__40843__auto__;
})();
(main[((6) | (0))] = ((main[((6) | (0))]) + (1)));

(item_41013[((1) | (0))] = prev_41012);

(prev_41012[((2) | (0))] = item_41013);

(main[((1) | (0))] = item_41013);

(item_41013[((2) | (0))] = main);

var n_41015 = ((function (item_41013,idle_41014,prev_41012,temp__5806__auto___41010,main){
return (function (){
if(((item_41013[((1) | (0))]) == null)){
try{return cljs.core.deref((item_41013[((0) | (0))]));
}catch (e40983){var _ = e40983;
return null;
}} else {
var temp__5806__auto____$1 = (function (){var a__40841__auto__ = main;
var i__40842__auto__ = ((3) | (0));
var x__40843__auto__ = (a__40841__auto__[i__40842__auto__]);
(a__40841__auto__[i__40842__auto__] = item_41013);

return x__40843__auto__;
})();
if((temp__5806__auto____$1 == null)){
if(cljs.core.truth_((main[((5) | (0))]))){
var fexpr__40984 = it.notifier;
return (fexpr__40984.cljs$core$IFn$_invoke$arity$0 ? fexpr__40984.cljs$core$IFn$_invoke$arity$0() : fexpr__40984.call(null));
} else {
return (main[((5) | (0))] = true);
}
} else {
var curr = temp__5806__auto____$1;
return (item_41013[((3) | (0))] = curr);
}
}
});})(item_41013,idle_41014,prev_41012,temp__5806__auto___41010,main))
;
var t_41016 = ((function (n_41015,item_41013,idle_41014,prev_41012,temp__5806__auto___41010,main){
return (function (){
var temp__5808__auto___41017 = (item_41013[((1) | (0))]);
if((temp__5808__auto___41017 == null)){
} else {
var prev_41018__$1 = temp__5808__auto___41017;
var next_41019 = (item_41013[((2) | (0))]);
(next_41019[((1) | (0))] = prev_41018__$1);

(prev_41018__$1[((2) | (0))] = next_41019);

(item_41013[((1) | (0))] = null);

(item_41013[((2) | (0))] = null);
}

return hyperfiddle.electric.impl.gather.done_BANG_(main,it.terminator);
});})(n_41015,item_41013,idle_41014,prev_41012,temp__5806__auto___41010,main))
;
(item_41013[((0) | (0))] = (function (){try{var fexpr__40990 = cljs.core.deref((main[((0) | (0))]));
return (fexpr__40990.cljs$core$IFn$_invoke$arity$2 ? fexpr__40990.cljs$core$IFn$_invoke$arity$2(n_41015,t_41016) : fexpr__40990.call(null,n_41015,t_41016));
}catch (e40989){var e = e40989;
return hyperfiddle.electric.impl.failer.run(e,n_41015,t_41016);
}})());

if(cljs.core.truth_((main[((5) | (0))]))){
if(idle_41014){
var fexpr__40991_41020 = it.notifier;
(fexpr__40991_41020.cljs$core$IFn$_invoke$arity$0 ? fexpr__40991_41020.cljs$core$IFn$_invoke$arity$0() : fexpr__40991_41020.call(null));
} else {
}
} else {
(main[((5) | (0))] = idle_41014);
}
}

continue;
} else {
return null;
}
break;
}
});
/**
 * 
 * Given a commutative function and a flow of flows, returns a flow concurrently running the flow with flows produced by
 * this flow and producing values produced by nested flows, reduced by the function if more than one can be transferred
 * simultaneously.
 */
hyperfiddle.electric.impl.gather.gather = (function hyperfiddle$electric$impl$gather$gather(rf,_GT__GT_x){
return (function (n,t){
var main = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((7) | (0)));
var it = hyperfiddle.electric.impl.gather.__GT_It(main,rf,n,t);
var G__40992_41021 = main;
(G__40992_41021[((1) | (0))] = main);

(G__40992_41021[((2) | (0))] = main);

(G__40992_41021[((4) | (0))] = true);

(G__40992_41021[((5) | (0))] = true);

(G__40992_41021[((6) | (0))] = (1));


(main[((0) | (0))] = (function (){var G__40993 = (function (){
return hyperfiddle.electric.impl.gather.transfer_BANG_(it);
});
var G__40994 = (function (){
return hyperfiddle.electric.impl.gather.done_BANG_(main,t);
});
return (_GT__GT_x.cljs$core$IFn$_invoke$arity$2 ? _GT__GT_x.cljs$core$IFn$_invoke$arity$2(G__40993,G__40994) : _GT__GT_x.call(null,G__40993,G__40994));
})());

hyperfiddle.electric.impl.gather.transfer_BANG_(it);

return it;
});
});

//# sourceMappingURL=hyperfiddle.electric.impl.gather.js.map
