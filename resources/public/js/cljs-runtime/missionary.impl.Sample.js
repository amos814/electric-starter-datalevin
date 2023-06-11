goog.provide('missionary.impl.Sample');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Sample.Process = (function (combinator,notifier,terminator,args,inputs,busy,done,alive){
this.combinator = combinator;
this.notifier = notifier;
this.terminator = terminator;
this.args = args;
this.inputs = inputs;
this.busy = busy;
this.done = done;
this.alive = alive;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Sample.Process.prototype.call = (function (unused__11938__auto__){
var self__ = this;
var self__ = this;
var G__39619 = (arguments.length - (1));
switch (G__39619) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Sample.Process.prototype.apply = (function (self__,args39615){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args39615)));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var fexpr__39637 = (self__.inputs[(self__.inputs.length - (1))]);
return (fexpr__39637.cljs$core$IFn$_invoke$arity$0 ? fexpr__39637.cljs$core$IFn$_invoke$arity$0() : fexpr__39637.call(null));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (p){
var self__ = this;
var p__$1 = this;
return (missionary.impl.Sample.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Sample.transfer.cljs$core$IFn$_invoke$arity$1(p__$1) : missionary.impl.Sample.transfer.call(null,p__$1));
}));

(missionary.impl.Sample.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinator","combinator",-746639828,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"alive","alive",-1229505839,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null))], null);
}));

(missionary.impl.Sample.Process.cljs$lang$type = true);

(missionary.impl.Sample.Process.cljs$lang$ctorStr = "missionary.impl.Sample/Process");

(missionary.impl.Sample.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Sample/Process");
}));

/**
 * Positional factory function for missionary.impl.Sample/Process.
 */
missionary.impl.Sample.__GT_Process = (function missionary$impl$Sample$__GT_Process(combinator,notifier,terminator,args,inputs,busy,done,alive){
return (new missionary.impl.Sample.Process(combinator,notifier,terminator,args,inputs,busy,done,alive));
});

missionary.impl.Sample.ready = (function missionary$impl$Sample$ready(ps){
var args = ps.args;
var inputs = ps.inputs;
var sampled = (inputs.length - (1));
var cb = null;
while(true){
if(cljs.core.truth_((ps.busy = cljs.core.not(ps.busy)))){
if(cljs.core.truth_(ps.done)){
var n__5636__auto___39694 = sampled;
var i_39695 = (0);
while(true){
if((i_39695 < n__5636__auto___39694)){
var input_39696 = (inputs[i_39695]);
(input_39696.cljs$core$IFn$_invoke$arity$0 ? input_39696.cljs$core$IFn$_invoke$arity$0() : input_39696.call(null));

if(((args[i_39695]) === args)){
try{cljs.core.deref(input_39696);
}catch (e39663){var __39697 = e39663;
}} else {
(args[i_39695] = args);
}

var G__39698 = (i_39695 + (1));
i_39695 = G__39698;
continue;
} else {
}
break;
}

if(((ps.alive = (ps.alive - (1))) === (0))){
return ps.terminator;
} else {
return null;
}
} else {
if(((args[sampled]) === args)){
try{cljs.core.deref((inputs[sampled]));
}catch (e39665){var __39701 = e39665;
}
var G__39702 = cb;
cb = G__39702;
continue;
} else {
return ps.notifier;
}
}
} else {
return cb;
}
break;
}
});
missionary.impl.Sample.transfer = (function missionary$impl$Sample$transfer(ps){
var c = ps.combinator;
var args = ps.args;
var inputs = ps.inputs;
var sampled = (inputs.length - (1));
var sampler = (inputs[sampled]);
var x = (function (){try{try{if((c == null)){
throw (new Error("Undefined continuous flow."));
} else {
}

var n__5636__auto___39703 = sampled;
var i_39708 = (0);
while(true){
if((i_39708 < n__5636__auto___39703)){
if(((args[i_39708]) === args)){
var input_39709 = (inputs[i_39708]);
while(true){
(args[i_39708] = null);

var x_39710 = cljs.core.deref(input_39709);
if(((args[i_39708]) === args)){
continue;
} else {
(args[i_39708] = x_39710);
}
break;
}
} else {
}

var G__39711 = (i_39708 + (1));
i_39708 = G__39711;
continue;
} else {
}
break;
}
}catch (e39669){var e_39712 = e39669;
try{cljs.core.deref(sampler);
}catch (e39670){var __39713 = e39670;
}
throw e_39712;
}
(args[sampled] = cljs.core.deref(sampler));

return c.apply(null,args);
}catch (e39667){var e = e39667;
(ps.notifier = null);

(sampler.cljs$core$IFn$_invoke$arity$0 ? sampler.cljs$core$IFn$_invoke$arity$0() : sampler.call(null));

(args[sampled] = args);

return e;
}})();
var temp__5808__auto___39714 = missionary.impl.Sample.ready(ps);
if((temp__5808__auto___39714 == null)){
} else {
var cb_39717 = temp__5808__auto___39714;
(cb_39717.cljs$core$IFn$_invoke$arity$0 ? cb_39717.cljs$core$IFn$_invoke$arity$0() : cb_39717.call(null));
}

if((ps.notifier == null)){
throw x;
} else {
return x;
}
});
missionary.impl.Sample.dirty = (function missionary$impl$Sample$dirty(p,i){
var args = p.args;
if(((args[i]) === args)){
try{return cljs.core.deref((p.inputs[i]));
}catch (e39676){var _ = e39676;
return null;
}} else {
return (args[i] = args);
}
});
missionary.impl.Sample.run = (function missionary$impl$Sample$run(c,f,fs,n,t){
var it = cljs.core.iter(fs);
var arity = (cljs.core.count(fs) + (1));
var args = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var inputs = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var ps = missionary.impl.Sample.__GT_Process(c,n,t,args,inputs,false,false,arity);
var done = (function (){
if(((ps.alive = (ps.alive - (1))) === (0))){
var fexpr__39683 = ps.terminator;
return (fexpr__39683.cljs$core$IFn$_invoke$arity$0 ? fexpr__39683.cljs$core$IFn$_invoke$arity$0() : fexpr__39683.call(null));
} else {
return null;
}
});
var index_39720 = (0);
var flow_39721 = f;
while(true){
if(cljs.core.truth_(it.hasNext())){
(inputs[index_39720] = (function (){var G__39684 = ((function (index_39720,flow_39721,it,arity,args,inputs,ps,done){
return (function (){
return missionary.impl.Sample.dirty(ps,index_39720);
});})(index_39720,flow_39721,it,arity,args,inputs,ps,done))
;
var G__39685 = done;
return (flow_39721.cljs$core$IFn$_invoke$arity$2 ? flow_39721.cljs$core$IFn$_invoke$arity$2(G__39684,G__39685) : flow_39721.call(null,G__39684,G__39685));
})());

if(((args[index_39720]) == null)){
(ps.combinator = null);
} else {
}

var G__39726 = (index_39720 + (1));
var G__39727 = it.next();
index_39720 = G__39726;
flow_39721 = G__39727;
continue;
} else {
(inputs[index_39720] = (function (){var G__39687 = ((function (index_39720,flow_39721,it,arity,args,inputs,ps,done){
return (function (){
var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_39720,flow_39721,it,arity,args,inputs,ps,done))
;
var G__39688 = ((function (index_39720,flow_39721,G__39687,it,arity,args,inputs,ps,done){
return (function (){
(ps.done = true);

var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_39720,flow_39721,G__39687,it,arity,args,inputs,ps,done))
;
return (flow_39721.cljs$core$IFn$_invoke$arity$2 ? flow_39721.cljs$core$IFn$_invoke$arity$2(G__39687,G__39688) : flow_39721.call(null,G__39687,G__39688));
})());
}
break;
}

return ps;
});

//# sourceMappingURL=missionary.impl.Sample.js.map
