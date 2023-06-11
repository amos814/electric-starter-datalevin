goog.provide('missionary.impl.Reduce');

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
missionary.impl.Reduce.Process = (function (reducer,status,failure,result,input,busy,done){
this.reducer = reducer;
this.status = status;
this.failure = failure;
this.result = result;
this.input = input;
this.busy = busy;
this.done = done;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Reduce.Process.prototype.call = (function (unused__11938__auto__){
var self__ = this;
var self__ = this;
var G__39478 = (arguments.length - (1));
switch (G__39478) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Reduce.Process.prototype.apply = (function (self__,args39477){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args39477)));
}));

(missionary.impl.Reduce.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.input.cljs$core$IFn$_invoke$arity$0 ? self__.input.cljs$core$IFn$_invoke$arity$0() : self__.input.call(null));
}));

(missionary.impl.Reduce.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reducer","reducer",-948842876,null),new cljs.core.Symbol(null,"status","status",-357266886,null),new cljs.core.Symbol(null,"failure","failure",-1934019890,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null))], null);
}));

(missionary.impl.Reduce.Process.cljs$lang$type = true);

(missionary.impl.Reduce.Process.cljs$lang$ctorStr = "missionary.impl.Reduce/Process");

(missionary.impl.Reduce.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Reduce/Process");
}));

/**
 * Positional factory function for missionary.impl.Reduce/Process.
 */
missionary.impl.Reduce.__GT_Process = (function missionary$impl$Reduce$__GT_Process(reducer,status,failure,result,input,busy,done){
return (new missionary.impl.Reduce.Process(reducer,status,failure,result,input,busy,done));
});

missionary.impl.Reduce.transfer = (function missionary$impl$Reduce$transfer(p){
return (p.result = (function (){try{var f = p.reducer;
var r = p.result;
var r__$1 = (((r === p))?(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)):(function (){var G__39491 = r;
var G__39492 = cljs.core.deref(p.input);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__39491,G__39492) : f.call(null,G__39491,G__39492));
})());
if(cljs.core.reduced_QMARK_(r__$1)){
var fexpr__39494_39516 = p.input;
(fexpr__39494_39516.cljs$core$IFn$_invoke$arity$0 ? fexpr__39494_39516.cljs$core$IFn$_invoke$arity$0() : fexpr__39494_39516.call(null));

(p.reducer = null);

return cljs.core.deref(r__$1);
} else {
return r__$1;
}
}catch (e39487){var e = e39487;
var fexpr__39488_39517 = p.input;
(fexpr__39488_39517.cljs$core$IFn$_invoke$arity$0 ? fexpr__39488_39517.cljs$core$IFn$_invoke$arity$0() : fexpr__39488_39517.call(null));

(p.reducer = null);

(p.status = p.failure);

return e;
}})());
});
missionary.impl.Reduce.ready = (function missionary$impl$Reduce$ready(p){
while(true){
if(cljs.core.truth_((p.busy = cljs.core.not(p.busy)))){
if(cljs.core.truth_(p.done)){
var G__39503 = p.result;
var fexpr__39499 = p.status;
return (fexpr__39499.cljs$core$IFn$_invoke$arity$1 ? fexpr__39499.cljs$core$IFn$_invoke$arity$1(G__39503) : fexpr__39499.call(null,G__39503));
} else {
if((p.reducer == null)){
try{cljs.core.deref(p.input);
}catch (e39504){var __39519 = e39504;
}} else {
missionary.impl.Reduce.transfer(p);
}

continue;
}
} else {
return null;
}
break;
}
});
missionary.impl.Reduce.run = (function missionary$impl$Reduce$run(rf,flow,success,failure){
var p = missionary.impl.Reduce.__GT_Process(rf,success,failure,null,null,true,false);
(p.result = p);

(p.input = (function (){var G__39508 = (function (){
return missionary.impl.Reduce.ready(p);
});
var G__39509 = (function (){
(p.done = true);

return missionary.impl.Reduce.ready(p);
});
return (flow.cljs$core$IFn$_invoke$arity$2 ? flow.cljs$core$IFn$_invoke$arity$2(G__39508,G__39509) : flow.call(null,G__39508,G__39509));
})());

missionary.impl.Reduce.transfer(p);

missionary.impl.Reduce.ready(p);

return p;
});

//# sourceMappingURL=missionary.impl.Reduce.js.map
