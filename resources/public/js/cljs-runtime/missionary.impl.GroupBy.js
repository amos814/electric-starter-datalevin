goog.provide('missionary.impl.GroupBy');





/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.GroupBy.Process = (function (keyfn,notifier,terminator,key,value,input,table,load,live,busy,done){
this.keyfn = keyfn;
this.notifier = notifier;
this.terminator = terminator;
this.key = key;
this.value = value;
this.input = input;
this.table = table;
this.load = load;
this.live = live;
this.busy = busy;
this.done = done;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.GroupBy.Process.prototype.call = (function (unused__11938__auto__){
var self__ = this;
var self__ = this;
var G__39493 = (arguments.length - (1));
switch (G__39493) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.GroupBy.Process.prototype.apply = (function (self__,args39489){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args39489)));
}));

(missionary.impl.GroupBy.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var p = this;
(missionary.impl.GroupBy.kill.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.kill.cljs$core$IFn$_invoke$arity$1(p) : missionary.impl.GroupBy.kill.call(null,p));

return null;
}));

(missionary.impl.GroupBy.Process.prototype.cljs$core$IFn$_invoke$arity$2 = (function (n,t){
var self__ = this;
var p = this;
return (missionary.impl.GroupBy.group.cljs$core$IFn$_invoke$arity$3 ? missionary.impl.GroupBy.group.cljs$core$IFn$_invoke$arity$3(p,n,t) : missionary.impl.GroupBy.group.call(null,p,n,t));
}));

(missionary.impl.GroupBy.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (p){
var self__ = this;
var p__$1 = this;
return (missionary.impl.GroupBy.sample.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.sample.cljs$core$IFn$_invoke$arity$1(p__$1) : missionary.impl.GroupBy.sample.call(null,p__$1));
}));

(missionary.impl.GroupBy.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keyfn","keyfn",-1874375437,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.Symbol(null,"table","table",1075588491,null),cljs.core.with_meta(new cljs.core.Symbol(null,"load","load",321890343,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"live","live",30383488,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null))], null);
}));

(missionary.impl.GroupBy.Process.cljs$lang$type = true);

(missionary.impl.GroupBy.Process.cljs$lang$ctorStr = "missionary.impl.GroupBy/Process");

(missionary.impl.GroupBy.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.GroupBy/Process");
}));

/**
 * Positional factory function for missionary.impl.GroupBy/Process.
 */
missionary.impl.GroupBy.__GT_Process = (function missionary$impl$GroupBy$__GT_Process(keyfn,notifier,terminator,key,value,input,table,load,live,busy,done){
return (new missionary.impl.GroupBy.Process(keyfn,notifier,terminator,key,value,input,table,load,live,busy,done));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.GroupBy.Group = (function (process,key,notifier,terminator){
this.process = process;
this.key = key;
this.notifier = notifier;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.GroupBy.Group.prototype.call = (function (unused__11938__auto__){
var self__ = this;
var self__ = this;
var G__39498 = (arguments.length - (1));
switch (G__39498) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.GroupBy.Group.prototype.apply = (function (self__,args39497){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args39497)));
}));

(missionary.impl.GroupBy.Group.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var g = this;
(missionary.impl.GroupBy.cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.cancel.cljs$core$IFn$_invoke$arity$1(g) : missionary.impl.GroupBy.cancel.call(null,g));

return null;
}));

(missionary.impl.GroupBy.Group.prototype.cljs$core$IDeref$_deref$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return (missionary.impl.GroupBy.consume.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.consume.cljs$core$IFn$_invoke$arity$1(g__$1) : missionary.impl.GroupBy.consume.call(null,g__$1));
}));

(missionary.impl.GroupBy.Group.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(missionary.impl.GroupBy.Group.cljs$lang$type = true);

(missionary.impl.GroupBy.Group.cljs$lang$ctorStr = "missionary.impl.GroupBy/Group");

(missionary.impl.GroupBy.Group.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.GroupBy/Group");
}));

/**
 * Positional factory function for missionary.impl.GroupBy/Group.
 */
missionary.impl.GroupBy.__GT_Group = (function missionary$impl$GroupBy$__GT_Group(process,key,notifier,terminator){
return (new missionary.impl.GroupBy.Group(process,key,notifier,terminator));
});

missionary.impl.GroupBy.kill = (function missionary$impl$GroupBy$kill(p){
if(cljs.core.truth_(p.live)){
(p.live = false);

var fexpr__39501 = p.input;
return (fexpr__39501.cljs$core$IFn$_invoke$arity$0 ? fexpr__39501.cljs$core$IFn$_invoke$arity$0() : fexpr__39501.call(null));
} else {
return null;
}
});
missionary.impl.GroupBy.step = (function missionary$impl$GroupBy$step(i,m){
return ((i + (1)) & m);
});
missionary.impl.GroupBy.group = (function missionary$impl$GroupBy$group(p,n,t){
var k = p.key;
var g = missionary.impl.GroupBy.__GT_Group(p,k,n,t);
var table = p.table;
if((k === p)){
} else {
(p.key = p);

var s_39566 = table.length;
var m_39567 = (s_39566 - (1));
var i_39568 = (cljs.core.hash(k) & m_39567);
while(true){
var G__39522_39569 = (table[i_39568]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__39522_39569)){
(table[i_39568] = g);
} else {
var G__39570 = missionary.impl.GroupBy.step(i_39568,m_39567);
i_39568 = G__39570;
continue;

}
break;
}

var ss_39571 = (s_39566 << (1));
if((ss_39571 <= ((3) * (p.load = (p.load + (1)))))){
var mm_39572 = (ss_39571 - (1));
var larger_39573 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(ss_39571);
(p.table = larger_39573);

var n__5636__auto___39574 = s_39566;
var i_39575 = (0);
while(true){
if((i_39575 < n__5636__auto___39574)){
var temp__5808__auto___39576 = (table[i_39575]);
if((temp__5808__auto___39576 == null)){
} else {
var h_39577 = temp__5808__auto___39576;
var j_39578 = (cljs.core.hash(h_39577.key) & mm_39572);
while(true){
var G__39525_39579 = (larger_39573[j_39578]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__39525_39579)){
(larger_39573[j_39578] = h_39577);
} else {
var G__39580 = missionary.impl.GroupBy.step(j_39578,mm_39572);
j_39578 = G__39580;
continue;

}
break;
}
}

var G__39581 = (i_39575 + (1));
i_39575 = G__39581;
continue;
} else {
}
break;
}
} else {
}
}

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return g;
});
missionary.impl.GroupBy.cancel = (function missionary$impl$GroupBy$cancel(g){
var p = g.process;
var k = g.key;
if(cljs.core.truth_(p.live)){
if((k === p)){
return null;
} else {
(g.key = p);

var table = p.table;
var m = (table.length - (1));
var i = (function (){var i = (cljs.core.hash(k) & m);
while(true){
if((g === (table[i]))){
return i;
} else {
var G__39582 = missionary.impl.GroupBy.step(i,m);
i = G__39582;
continue;
}
break;
}
})();
(table[i] = null);

(p.load = (p.load - (1)));

var i_39583__$1 = missionary.impl.GroupBy.step(i,m);
while(true){
var temp__5808__auto___39584 = (table[i_39583__$1]);
if((temp__5808__auto___39584 == null)){
} else {
var h_39585 = temp__5808__auto___39584;
var j_39586 = (cljs.core.hash(h_39585.key) & m);
if((i_39583__$1 === j_39586)){
} else {
(table[i_39583__$1] = null);

var j_39587__$1 = j_39586;
while(true){
if(((table[j_39587__$1]) == null)){
(table[j_39587__$1] = h_39585);
} else {
var G__39588 = missionary.impl.GroupBy.step(j_39587__$1,m);
j_39587__$1 = G__39588;
continue;
}
break;
}
}

var G__39589 = missionary.impl.GroupBy.step(i_39583__$1,m);
i_39583__$1 = G__39589;
continue;
}
break;
}

var fexpr__39532 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,p.key))?p.notifier:g.notifier);
return (fexpr__39532.cljs$core$IFn$_invoke$arity$0 ? fexpr__39532.cljs$core$IFn$_invoke$arity$0() : fexpr__39532.call(null));
}
} else {
return null;
}
});
missionary.impl.GroupBy.transfer = (function missionary$impl$GroupBy$transfer(p){
while(true){
if(cljs.core.truth_((p.busy = cljs.core.not(p.busy)))){
if(cljs.core.truth_(p.done)){
(p.live = false);

var temp__5808__auto___39590 = p.table;
if((temp__5808__auto___39590 == null)){
} else {
var table_39591 = temp__5808__auto___39590;
(p.table = null);

var n__5636__auto___39592 = table_39591.length;
var i_39593 = (0);
while(true){
if((i_39593 < n__5636__auto___39592)){
var temp__5808__auto___39594__$1 = (table_39591[i_39593]);
if((temp__5808__auto___39594__$1 == null)){
} else {
var g_39595 = temp__5808__auto___39594__$1;
var fexpr__39551_39596 = g_39595.terminator;
(fexpr__39551_39596.cljs$core$IFn$_invoke$arity$0 ? fexpr__39551_39596.cljs$core$IFn$_invoke$arity$0() : fexpr__39551_39596.call(null));
}

var G__39597 = (i_39593 + (1));
i_39593 = G__39597;
continue;
} else {
}
break;
}
}

var fexpr__39552 = p.terminator;
return (fexpr__39552.cljs$core$IFn$_invoke$arity$0 ? fexpr__39552.cljs$core$IFn$_invoke$arity$0() : fexpr__39552.call(null));
} else {
if((p === p.value)){
var table = p.table;
try{var k = (p.key = (function (){var G__39557 = (p.value = cljs.core.deref(p.input));
var fexpr__39556 = p.keyfn;
return (fexpr__39556.cljs$core$IFn$_invoke$arity$1 ? fexpr__39556.cljs$core$IFn$_invoke$arity$1(G__39557) : fexpr__39556.call(null,G__39557));
})());
var m = (table.length - (1));
var i = (cljs.core.hash(k) & m);
while(true){
var temp__5806__auto__ = (table[i]);
if((temp__5806__auto__ == null)){
var fexpr__39558 = p.notifier;
return (fexpr__39558.cljs$core$IFn$_invoke$arity$0 ? fexpr__39558.cljs$core$IFn$_invoke$arity$0() : fexpr__39558.call(null));
} else {
var h = temp__5806__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,h.key)){
var fexpr__39559 = h.notifier;
return (fexpr__39559.cljs$core$IFn$_invoke$arity$0 ? fexpr__39559.cljs$core$IFn$_invoke$arity$0() : fexpr__39559.call(null));
} else {
var G__39598 = missionary.impl.GroupBy.step(i,m);
i = G__39598;
continue;
}
}
break;
}
}catch (e39553){var e = e39553;
(p.value = e);

(p.table = null);

missionary.impl.GroupBy.kill(p);

var n__5636__auto___39599 = table.length;
var i_39600 = (0);
while(true){
if((i_39600 < n__5636__auto___39599)){
var temp__5808__auto___39601 = (table[i_39600]);
if((temp__5808__auto___39601 == null)){
} else {
var g_39602 = temp__5808__auto___39601;
var fexpr__39554_39605 = g_39602.terminator;
(fexpr__39554_39605.cljs$core$IFn$_invoke$arity$0 ? fexpr__39554_39605.cljs$core$IFn$_invoke$arity$0() : fexpr__39554_39605.call(null));
}

var G__39608 = (i_39600 + (1));
i_39600 = G__39608;
continue;
} else {
}
break;
}

var fexpr__39555 = p.notifier;
return (fexpr__39555.cljs$core$IFn$_invoke$arity$0 ? fexpr__39555.cljs$core$IFn$_invoke$arity$0() : fexpr__39555.call(null));
}} else {
try{cljs.core.deref(p.input);
}catch (e39560){var __39609 = e39560;
}
continue;
}
}
} else {
return null;
}
break;
}
});
missionary.impl.GroupBy.sample = (function missionary$impl$GroupBy$sample(p){
var k = p.key;
if((k === p)){
missionary.impl.GroupBy.transfer(p);

throw p.value;
} else {
return cljs.core.__GT_MapEntry(k,p,null);
}
});
missionary.impl.GroupBy.consume = (function missionary$impl$GroupBy$consume(g){
var p = g.process;
if((p === g.key)){
var fexpr__39561_39614 = g.terminator;
(fexpr__39561_39614.cljs$core$IFn$_invoke$arity$0 ? fexpr__39561_39614.cljs$core$IFn$_invoke$arity$0() : fexpr__39561_39614.call(null));

throw (new missionary.Cancelled("Group consumer cancelled."));
} else {
var x = p.value;
(p.value = p);

(p.key = p);

missionary.impl.GroupBy.transfer(p);

return x;
}
});
missionary.impl.GroupBy.run = (function missionary$impl$GroupBy$run(k,f,n,t){
var p = missionary.impl.GroupBy.__GT_Process(k,n,t,null,null,null,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8)),(0),true,true,false);
(p.key = p);

(p.value = p);

(p.input = (function (){var G__39562 = (function (){
return missionary.impl.GroupBy.transfer(p);
});
var G__39563 = (function (){
(p.done = true);

return missionary.impl.GroupBy.transfer(p);
});
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__39562,G__39563) : f.call(null,G__39562,G__39563));
})());

missionary.impl.GroupBy.transfer(p);

return p;
});

//# sourceMappingURL=missionary.impl.GroupBy.js.map
