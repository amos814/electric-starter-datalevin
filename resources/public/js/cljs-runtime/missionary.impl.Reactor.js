goog.provide('missionary.impl.Reactor');





/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Reactor.Failer = (function (t,e){
this.t = t;
this.e = e;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Reactor.Failer.prototype.call = (function (unused__11938__auto__){
var self__ = this;
var self__ = this;
var G__39674 = (arguments.length - (1));
switch (G__39674) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Reactor.Failer.prototype.apply = (function (self__,args39666){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args39666)));
}));

(missionary.impl.Reactor.Failer.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return null;
}));

(missionary.impl.Reactor.Failer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.t.cljs$core$IFn$_invoke$arity$0 ? self__.t.cljs$core$IFn$_invoke$arity$0() : self__.t.call(null));

throw self__.e;
}));

(missionary.impl.Reactor.Failer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null);
}));

(missionary.impl.Reactor.Failer.cljs$lang$type = true);

(missionary.impl.Reactor.Failer.cljs$lang$ctorStr = "missionary.impl.Reactor/Failer");

(missionary.impl.Reactor.Failer.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Reactor/Failer");
}));

/**
 * Positional factory function for missionary.impl.Reactor/Failer.
 */
missionary.impl.Reactor.__GT_Failer = (function missionary$impl$Reactor$__GT_Failer(t,e){
return (new missionary.impl.Reactor.Failer(t,e));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Reactor.Subscription = (function (notifier,terminator,subscriber,subscribed,prev,next){
this.notifier = notifier;
this.terminator = terminator;
this.subscriber = subscriber;
this.subscribed = subscribed;
this.prev = prev;
this.next = next;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Reactor.Subscription.prototype.call = (function (unused__11938__auto__){
var self__ = this;
var self__ = this;
var G__39692 = (arguments.length - (1));
switch (G__39692) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Reactor.Subscription.prototype.apply = (function (self__,args39691){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args39691)));
}));

(missionary.impl.Reactor.Subscription.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
(missionary.impl.Reactor.unsubscribe.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Reactor.unsubscribe.cljs$core$IFn$_invoke$arity$1(this$) : missionary.impl.Reactor.unsubscribe.call(null,this$));

return null;
}));

(missionary.impl.Reactor.Subscription.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (missionary.impl.Reactor.push.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Reactor.push.cljs$core$IFn$_invoke$arity$1(this$__$1) : missionary.impl.Reactor.push.call(null,this$__$1));
}));

(missionary.impl.Reactor.Subscription.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"subscriber","subscriber",-423806886,null),new cljs.core.Symbol(null,"subscribed","subscribed",-1642347512,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"next","next",1522830042,null)], null);
}));

(missionary.impl.Reactor.Subscription.cljs$lang$type = true);

(missionary.impl.Reactor.Subscription.cljs$lang$ctorStr = "missionary.impl.Reactor/Subscription");

(missionary.impl.Reactor.Subscription.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Reactor/Subscription");
}));

/**
 * Positional factory function for missionary.impl.Reactor/Subscription.
 */
missionary.impl.Reactor.__GT_Subscription = (function missionary$impl$Reactor$__GT_Subscription(notifier,terminator,subscriber,subscribed,prev,next){
return (new missionary.impl.Reactor.Subscription(notifier,terminator,subscriber,subscribed,prev,next));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
*/
missionary.impl.Reactor.Publisher = (function (process,iterator,ranks,pending,children,live,busy,done,value,prev,next,child,sibling,active,subs){
this.process = process;
this.iterator = iterator;
this.ranks = ranks;
this.pending = pending;
this.children = children;
this.live = live;
this.busy = busy;
this.done = done;
this.value = value;
this.prev = prev;
this.next = next;
this.child = child;
this.sibling = sibling;
this.active = active;
this.subs = subs;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Reactor.Publisher.prototype.call = (function (unused__11938__auto__){
var self__ = this;
var self__ = this;
var G__39719 = (arguments.length - (1));
switch (G__39719) {
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

(missionary.impl.Reactor.Publisher.prototype.apply = (function (self__,args39718){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args39718)));
}));

(missionary.impl.Reactor.Publisher.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
(missionary.impl.Reactor.free.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Reactor.free.cljs$core$IFn$_invoke$arity$1(this$) : missionary.impl.Reactor.free.call(null,this$));

return null;
}));

(missionary.impl.Reactor.Publisher.prototype.cljs$core$IFn$_invoke$arity$2 = (function (n,t){
var self__ = this;
var this$ = this;
return (missionary.impl.Reactor.subscribe.cljs$core$IFn$_invoke$arity$3 ? missionary.impl.Reactor.subscribe.cljs$core$IFn$_invoke$arity$3(this$,n,t) : missionary.impl.Reactor.subscribe.call(null,this$,n,t));
}));

(missionary.impl.Reactor.Publisher.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"iterator","iterator",-32550441,null),new cljs.core.Symbol(null,"ranks","ranks",-162053339,null),cljs.core.with_meta(new cljs.core.Symbol(null,"pending","pending",1420494800,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"live","live",30383488,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"next","next",1522830042,null),new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.Symbol(null,"sibling","sibling",456666527,null),new cljs.core.Symbol(null,"active","active",-758473701,null),new cljs.core.Symbol(null,"subs","subs",1453849536,null)], null);
}));

(missionary.impl.Reactor.Publisher.cljs$lang$type = true);

(missionary.impl.Reactor.Publisher.cljs$lang$ctorStr = "missionary.impl.Reactor/Publisher");

(missionary.impl.Reactor.Publisher.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Reactor/Publisher");
}));

/**
 * Positional factory function for missionary.impl.Reactor/Publisher.
 */
missionary.impl.Reactor.__GT_Publisher = (function missionary$impl$Reactor$__GT_Publisher(process,iterator,ranks,pending,children,live,busy,done,value,prev,next,child,sibling,active,subs){
return (new missionary.impl.Reactor.Publisher(process,iterator,ranks,pending,children,live,busy,done,value,prev,next,child,sibling,active,subs));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
*/
missionary.impl.Reactor.Process = (function (success,failure,result,kill,boot,alive,active,current,reaction,schedule,subscriber,delayed){
this.success = success;
this.failure = failure;
this.result = result;
this.kill = kill;
this.boot = boot;
this.alive = alive;
this.active = active;
this.current = current;
this.reaction = reaction;
this.schedule = schedule;
this.subscriber = subscriber;
this.delayed = delayed;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Reactor.Process.prototype.call = (function (unused__11938__auto__){
var self__ = this;
var self__ = this;
var G__39777 = (arguments.length - (1));
switch (G__39777) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Reactor.Process.prototype.apply = (function (self__,args39776){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args39776)));
}));

(missionary.impl.Reactor.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
(missionary.impl.Reactor.event.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Reactor.event.cljs$core$IFn$_invoke$arity$1(self__.kill) : missionary.impl.Reactor.event.call(null,self__.kill));

return null;
}));

(missionary.impl.Reactor.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"success","success",-763789863,null),new cljs.core.Symbol(null,"failure","failure",-1934019890,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"kill","kill",1628195952,null),new cljs.core.Symbol(null,"boot","boot",-646575184,null),new cljs.core.Symbol(null,"alive","alive",-1229505839,null),new cljs.core.Symbol(null,"active","active",-758473701,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.Symbol(null,"schedule","schedule",1989806793,null),new cljs.core.Symbol(null,"subscriber","subscriber",-423806886,null),new cljs.core.Symbol(null,"delayed","delayed",1892523756,null)], null);
}));

(missionary.impl.Reactor.Process.cljs$lang$type = true);

(missionary.impl.Reactor.Process.cljs$lang$ctorStr = "missionary.impl.Reactor/Process");

(missionary.impl.Reactor.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Reactor/Process");
}));

/**
 * Positional factory function for missionary.impl.Reactor/Process.
 */
missionary.impl.Reactor.__GT_Process = (function missionary$impl$Reactor$__GT_Process(success,failure,result,kill,boot,alive,active,current,reaction,schedule,subscriber,delayed){
return (new missionary.impl.Reactor.Process(success,failure,result,kill,boot,alive,active,current,reaction,schedule,subscriber,delayed));
});

missionary.impl.Reactor.stale = ({});
missionary.impl.Reactor.error = ({});
missionary.impl.Reactor.current = null;
missionary.impl.Reactor.delayed = null;
missionary.impl.Reactor.lt = (function missionary$impl$Reactor$lt(x,y){
if((x == null)){
return true;
} else {
if((y == null)){
return false;
} else {
var xl = x.length;
var yl = y.length;
var ml = (function (){var x__5133__auto__ = xl;
var y__5134__auto__ = yl;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var i = (0);
while(true){
if((i < ml)){
var xi = (x[i]);
var yi = (y[i]);
if((xi === yi)){
var G__40027 = (i + (1));
i = G__40027;
continue;
} else {
return (xi < yi);
}
} else {
return (xl > yl);
}
break;
}
}
}
});
missionary.impl.Reactor.link = (function missionary$impl$Reactor$link(x,y){
if(missionary.impl.Reactor.lt(x.ranks,y.ranks)){
(y.sibling = x.child);

(x.child = y);

return x;
} else {
(x.sibling = y.child);

(y.child = x);

return y;
}
});
missionary.impl.Reactor.dequeue = (function missionary$impl$Reactor$dequeue(pub){
var head = pub.child;
(pub.child = null);

var heap = null;
var prev = null;
var head__$1 = head;
while(true){
if((head__$1 == null)){
if((prev == null)){
return heap;
} else {
if((heap == null)){
return prev;
} else {
return missionary.impl.Reactor.link(heap,prev);
}
}
} else {
var next = head__$1.sibling;
(head__$1.sibling = null);

if((prev == null)){
var G__40028 = heap;
var G__40029 = head__$1;
var G__40030 = next;
heap = G__40028;
prev = G__40029;
head__$1 = G__40030;
continue;
} else {
var head__$2 = missionary.impl.Reactor.link(prev,head__$1);
var G__40031 = (((heap == null))?head__$2:missionary.impl.Reactor.link(heap,head__$2));
var G__40032 = null;
var G__40033 = next;
heap = G__40031;
prev = G__40032;
head__$1 = G__40033;
continue;
}
}
break;
}
});
missionary.impl.Reactor.schedule = (function missionary$impl$Reactor$schedule(pub){
var ps = pub.process;
var temp__5806__auto__ = ps.schedule;
if((temp__5806__auto__ == null)){
(ps.schedule = pub);

(ps.delayed = missionary.impl.Reactor.delayed);

return (missionary.impl.Reactor.delayed = ps);
} else {
var sch = temp__5806__auto__;
return (ps.schedule = missionary.impl.Reactor.link(pub,sch));
}
});
missionary.impl.Reactor.pull = (function missionary$impl$Reactor$pull(pub){
var ps = pub.process;
var cur = ps.subscriber;
(ps.subscriber = pub);

(pub.value = missionary.impl.Reactor.error);

try{(pub.value = cljs.core.deref(pub.iterator));
}catch (e39817){var e_40040 = e39817;
if((ps === ps.result)){
(ps.result = e_40040);

var k_40041 = ps.kill;
if(cljs.core.truth_((k_40041.busy = cljs.core.not(k_40041.busy)))){
missionary.impl.Reactor.schedule(k_40041);
} else {
}
} else {
}
}
return (ps.subscriber = cur);
});
missionary.impl.Reactor.sample = (function missionary$impl$Reactor$sample(pub){
while(true){
missionary.impl.Reactor.pull(pub);

if(cljs.core.truth_((pub.busy = cljs.core.not(pub.busy)))){
if(cljs.core.truth_(pub.done)){
return missionary.impl.Reactor.schedule(pub);
} else {
continue;
}
} else {
return null;
}
break;
}
});
missionary.impl.Reactor.touch = (function missionary$impl$Reactor$touch(pub){
var ps = pub.process;
if(cljs.core.truth_(pub.done)){
var prv = pub.prev;
(pub.prev = null);

if((pub === prv)){
return (ps.alive = null);
} else {
var nxt = pub.next;
(nxt.prev = prv);

(prv.next = nxt);

if((pub === ps.alive)){
return (ps.alive = prv);
} else {
return null;
}
}
} else {
if((pub === pub.active)){
(pub.active = ps.active);

(ps.active = pub);

(pub.pending = (1));

return missionary.impl.Reactor.pull(pub);
} else {
if(cljs.core.truth_(pub.live)){
return (pub.value = missionary.impl.Reactor.stale);
} else {
return missionary.impl.Reactor.sample(pub);
}
}
}
});
missionary.impl.Reactor.ack = (function missionary$impl$Reactor$ack(pub){
if(((pub.pending = (pub.pending - (1))) === (0))){
(pub.value = null);

if(cljs.core.truth_((pub.busy = cljs.core.not(pub.busy)))){
return missionary.impl.Reactor.schedule(pub);
} else {
return null;
}
} else {
return null;
}
});
missionary.impl.Reactor.propagate = (function missionary$impl$Reactor$propagate(pub){
var ps = pub.process;
(missionary.impl.Reactor.current = ps);

var pub_40044__$1 = pub;
while(true){
(ps.reaction = missionary.impl.Reactor.dequeue(pub_40044__$1));

(ps.current = pub_40044__$1);

missionary.impl.Reactor.touch(pub_40044__$1);

var temp__5808__auto___40045 = pub_40044__$1.subs;
if((temp__5808__auto___40045 == null)){
} else {
var t_40046 = temp__5808__auto___40045;
(pub_40044__$1.subs = null);

var s_40047 = t_40046;
while(true){
var s_40048__$1 = s_40047.next;
(s_40048__$1.prev = null);

if((s_40048__$1 === t_40046)){
} else {
var G__40049 = s_40048__$1;
s_40047 = G__40049;
continue;
}
break;
}

var n_40050 = t_40046.next;
while(true){
var s_40051 = n_40050;
var n_40054__$1 = s_40051.next;
(s_40051.next = null);

if((pub_40044__$1.pending > (0))){
(pub_40044__$1.pending = (pub_40044__$1.pending + (1)));
} else {
}

(ps.subscriber = s_40051.subscriber);

var fexpr__39844_40055 = (((pub_40044__$1.prev == null))?s_40051.terminator:s_40051.notifier);
(fexpr__39844_40055.cljs$core$IFn$_invoke$arity$0 ? fexpr__39844_40055.cljs$core$IFn$_invoke$arity$0() : fexpr__39844_40055.call(null));

(ps.subscriber = null);

if((s_40051 === t_40046)){
} else {
var G__40056 = n_40054__$1;
n_40050 = G__40056;
continue;
}
break;
}
}

var temp__5808__auto___40057 = ps.reaction;
if((temp__5808__auto___40057 == null)){
} else {
var r_40058 = temp__5808__auto___40057;
var G__40059 = r_40058;
pub_40044__$1 = G__40059;
continue;
}
break;
}

(ps.current = null);

(missionary.impl.Reactor.current = null);

while(true){
var temp__5808__auto___40060 = ps.active;
if((temp__5808__auto___40060 == null)){
} else {
var pub_40061__$1 = temp__5808__auto___40060;
(ps.active = pub_40061__$1.active);

(pub_40061__$1.active = (((missionary.impl.Reactor.error === pub_40061__$1.value))?null:pub_40061__$1));

missionary.impl.Reactor.ack(pub_40061__$1);

continue;
}
break;
}

if((ps.alive == null)){
var temp__5808__auto__ = ps.boot;
if((temp__5808__auto__ == null)){
return null;
} else {
var pub__$1 = temp__5808__auto__;
(ps.boot = null);

if((ps.result === ps)){
(ps.result = pub__$1.value);

return ps.success;
} else {
return ps.failure;
}
}
} else {
return null;
}
});
missionary.impl.Reactor.hook = (function missionary$impl$Reactor$hook(s){
var pub = s.subscribed;
if((pub.prev == null)){
var fexpr__39866 = s.terminator;
return (fexpr__39866.cljs$core$IFn$_invoke$arity$0 ? fexpr__39866.cljs$core$IFn$_invoke$arity$0() : fexpr__39866.call(null));
} else {
var p = pub.subs;
(pub.subs = s);

if((p == null)){
return (s.next = (s.prev = s));
} else {
var n = p.next;
(p.next = s);

(n.prev = s);

(s.prev = p);

return (s.next = n);
}
}
});
missionary.impl.Reactor.cancel = (function missionary$impl$Reactor$cancel(pub){
if(cljs.core.truth_(pub.live)){
(pub.live = false);

var ps = pub.process;
var cur = ps.subscriber;
(ps.subscriber = pub);

var fexpr__39888_40074 = pub.iterator;
(fexpr__39888_40074.cljs$core$IFn$_invoke$arity$0 ? fexpr__39888_40074.cljs$core$IFn$_invoke$arity$0() : fexpr__39888_40074.call(null));

(ps.subscriber = cur);

if((missionary.impl.Reactor.stale === pub.value)){
return missionary.impl.Reactor.sample(pub);
} else {
return null;
}
} else {
return null;
}
});
missionary.impl.Reactor.failer = (function missionary$impl$Reactor$failer(n,t,e){
(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return missionary.impl.Reactor.__GT_Failer(t,e);
});
missionary.impl.Reactor.free = (function missionary$impl$Reactor$free(pub){
if((pub.process === missionary.impl.Reactor.current)){
} else {
throw (new Error("Cancellation failure : not in reactor context."));
}

return missionary.impl.Reactor.cancel(pub);
});
missionary.impl.Reactor.subscribe = (function missionary$impl$Reactor$subscribe(pub,n,t){
var ps = pub.process;
var sub = ps.subscriber;
if((!((ps === missionary.impl.Reactor.current)))){
return missionary.impl.Reactor.failer(n,t,(new Error("Subscription failure : not in reactor context.")));
} else {
if((sub === ps.boot)){
return missionary.impl.Reactor.failer(n,t,(new Error("Subscription failure : not a subscriber.")));
} else {
var s = missionary.impl.Reactor.__GT_Subscription(n,t,sub,pub,null,null);
if((pub.active === pub)){
missionary.impl.Reactor.hook(s);
} else {
if((pub.pending > (0))){
(pub.pending = (pub.pending + (1)));
} else {
}

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));
}

return s;
}
}
});
missionary.impl.Reactor.unsubscribe = (function missionary$impl$Reactor$unsubscribe(s){
var sub = s.subscriber;
var ps = sub.process;
if((ps === missionary.impl.Reactor.current)){
} else {
throw (new Error("Unsubscription failure : not in reactor context."));
}

var temp__5808__auto__ = s.subscribed;
if((temp__5808__auto__ == null)){
return null;
} else {
var pub = temp__5808__auto__;
(s.subscribed = null);

var temp__5806__auto__ = s.prev;
if((temp__5806__auto__ == null)){
if((pub.pending > (0))){
return missionary.impl.Reactor.ack(pub);
} else {
return null;
}
} else {
var p = temp__5806__auto__;
var n = s.next;
(s.prev = null);

(s.next = null);

if((p === s)){
(pub.subs = null);
} else {
(n.prev = p);

(p.next = n);

if((s === pub.subs)){
(pub.subs = p);
} else {
}
}

var cur = ps.subscriber;
(ps.subscriber = sub);

var fexpr__39911_40100 = s.notifier;
(fexpr__39911_40100.cljs$core$IFn$_invoke$arity$0 ? fexpr__39911_40100.cljs$core$IFn$_invoke$arity$0() : fexpr__39911_40100.call(null));

return (ps.subscriber = cur);
}
}
});
missionary.impl.Reactor.push = (function missionary$impl$Reactor$push(s){
var sub = s.subscriber;
var ps = sub.process;
if((ps === missionary.impl.Reactor.current)){
} else {
throw (new Error("Transfer failure : not in reactor context."));
}

var value = (function (){var temp__5806__auto__ = s.subscribed;
if((temp__5806__auto__ == null)){
return missionary.impl.Reactor.error;
} else {
var pub = temp__5806__auto__;
var value = pub.value;
if((pub.pending > (0))){
missionary.impl.Reactor.ack(pub);

return value;
} else {
if((value === missionary.impl.Reactor.stale)){
missionary.impl.Reactor.sample(pub);

return pub.value;
} else {
return value;
}
}
}
})();
var cur = ps.subscriber;
(ps.subscriber = sub);

if((value === missionary.impl.Reactor.error)){
var fexpr__39913_40107 = s.terminator;
(fexpr__39913_40107.cljs$core$IFn$_invoke$arity$0 ? fexpr__39913_40107.cljs$core$IFn$_invoke$arity$0() : fexpr__39913_40107.call(null));

(ps.subscriber = cur);

throw (new missionary.Cancelled("Subscription cancelled."));
} else {
missionary.impl.Reactor.hook(s);

(ps.subscriber = cur);

return value;
}
});
missionary.impl.Reactor.event = (function missionary$impl$Reactor$event(pub){
var temp__5806__auto__ = missionary.impl.Reactor.current;
if((temp__5806__auto__ == null)){
if(cljs.core.truth_((pub.busy = cljs.core.not(pub.busy)))){
var temp__5808__auto___40108 = missionary.impl.Reactor.propagate(pub);
if((temp__5808__auto___40108 == null)){
} else {
var cb_40109 = temp__5808__auto___40108;
var G__39921_40110 = pub.process.result;
(cb_40109.cljs$core$IFn$_invoke$arity$1 ? cb_40109.cljs$core$IFn$_invoke$arity$1(G__39921_40110) : cb_40109.call(null,G__39921_40110));
}
} else {
}

while(true){
var temp__5808__auto__ = missionary.impl.Reactor.delayed;
if((temp__5808__auto__ == null)){
return null;
} else {
var ps = temp__5808__auto__;
(missionary.impl.Reactor.delayed = ps.delayed);

(ps.delayed = null);

var pub__$1 = ps.schedule;
(ps.schedule = null);

var temp__5808__auto___40111__$1 = missionary.impl.Reactor.propagate(pub__$1);
if((temp__5808__auto___40111__$1 == null)){
} else {
var cb_40112 = temp__5808__auto___40111__$1;
var G__39922_40113 = ps.result;
(cb_40112.cljs$core$IFn$_invoke$arity$1 ? cb_40112.cljs$core$IFn$_invoke$arity$1(G__39922_40113) : cb_40112.call(null,G__39922_40113));
}

continue;
}
break;
}
} else {
var ps = temp__5806__auto__;
if(cljs.core.truth_((pub.busy = cljs.core.not(pub.busy)))){
if((ps === pub.process)){
if(missionary.impl.Reactor.lt(ps.current.ranks,pub.ranks)){
return (ps.reaction = (function (){var temp__5806__auto____$1 = ps.reaction;
if((temp__5806__auto____$1 == null)){
return pub;
} else {
var r = temp__5806__auto____$1;
return missionary.impl.Reactor.link(pub,r);
}
})());
} else {
return missionary.impl.Reactor.schedule(pub);
}
} else {
return missionary.impl.Reactor.schedule(pub);
}
} else {
return null;
}
}
});
missionary.impl.Reactor.kill = (function (){
if((typeof missionary !== 'undefined') && (typeof missionary.impl !== 'undefined') && (typeof missionary.impl.Reactor !== 'undefined') && (typeof missionary.impl.Reactor.t_missionary$impl$Reactor39925 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
missionary.impl.Reactor.t_missionary$impl$Reactor39925 = (function (meta39926){
this.meta39926 = meta39926;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Reactor.t_missionary$impl$Reactor39925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39927,meta39926__$1){
var self__ = this;
var _39927__$1 = this;
return (new missionary.impl.Reactor.t_missionary$impl$Reactor39925(meta39926__$1));
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor39925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39927){
var self__ = this;
var _39927__$1 = this;
return self__.meta39926;
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor39925.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var ps = missionary.impl.Reactor.current;
var temp__5808__auto___40116 = ps.alive;
if((temp__5808__auto___40116 == null)){
} else {
var t_40117 = temp__5808__auto___40116;
var pub_40118 = t_40117.next;
while(true){
missionary.impl.Reactor.cancel(pub_40118);

var temp__5808__auto___40119__$1 = ps.alive;
if((temp__5808__auto___40119__$1 == null)){
} else {
var t_40120__$1 = temp__5808__auto___40119__$1;
var pub_40121__$1 = (function (){var pub_40121__$1 = pub_40118;
while(true){
var pub__$2 = pub_40121__$1.next;
if((pub__$2.prev == null)){
var G__40122 = pub__$2;
pub_40121__$1 = G__40122;
continue;
} else {
return pub__$2;
}
break;
}
})();
if((pub_40121__$1 === t_40120__$1.next)){
} else {
var G__40123 = pub_40121__$1;
pub_40118 = G__40123;
continue;
}
}
break;
}
}

return true;
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor39925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39926","meta39926",-821801287,null)], null);
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor39925.cljs$lang$type = true);

(missionary.impl.Reactor.t_missionary$impl$Reactor39925.cljs$lang$ctorStr = "missionary.impl.Reactor/t_missionary$impl$Reactor39925");

(missionary.impl.Reactor.t_missionary$impl$Reactor39925.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Reactor/t_missionary$impl$Reactor39925");
}));

/**
 * Positional factory function for missionary.impl.Reactor/t_missionary$impl$Reactor39925.
 */
missionary.impl.Reactor.__GT_t_missionary$impl$Reactor39925 = (function missionary$impl$Reactor$__GT_t_missionary$impl$Reactor39925(meta39926){
return (new missionary.impl.Reactor.t_missionary$impl$Reactor39925(meta39926));
});

}

return (new missionary.impl.Reactor.t_missionary$impl$Reactor39925(cljs.core.PersistentArrayMap.EMPTY));
})()
;
missionary.impl.Reactor.zero = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((0));
missionary.impl.Reactor.run = (function missionary$impl$Reactor$run(init,s,f){
var ps = missionary.impl.Reactor.__GT_Process(s,f,null,null,null,null,null,null,null,null,null,null);
var k = missionary.impl.Reactor.__GT_Publisher(ps,missionary.impl.Reactor.kill,null,(0),(0),false,false,false,false,null,null,null,null,null,null);
var b = missionary.impl.Reactor.__GT_Publisher(ps,(function (){
if((typeof missionary !== 'undefined') && (typeof missionary.impl !== 'undefined') && (typeof missionary.impl.Reactor !== 'undefined') && (typeof missionary.impl.Reactor.t_missionary$impl$Reactor39946 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
missionary.impl.Reactor.t_missionary$impl$Reactor39946 = (function (init,s,f,ps,k,meta39947){
this.init = init;
this.s = s;
this.f = f;
this.ps = ps;
this.k = k;
this.meta39947 = meta39947;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Reactor.t_missionary$impl$Reactor39946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39948,meta39947__$1){
var self__ = this;
var _39948__$1 = this;
return (new missionary.impl.Reactor.t_missionary$impl$Reactor39946(self__.init,self__.s,self__.f,self__.ps,self__.k,meta39947__$1));
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor39946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39948){
var self__ = this;
var _39948__$1 = this;
return self__.meta39947;
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor39946.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.init.cljs$core$IFn$_invoke$arity$0 ? self__.init.cljs$core$IFn$_invoke$arity$0() : self__.init.call(null));
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor39946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"init","init",-234949907,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ps","ps",1932889573,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta39947","meta39947",-1579327535,null)], null);
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor39946.cljs$lang$type = true);

(missionary.impl.Reactor.t_missionary$impl$Reactor39946.cljs$lang$ctorStr = "missionary.impl.Reactor/t_missionary$impl$Reactor39946");

(missionary.impl.Reactor.t_missionary$impl$Reactor39946.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Reactor/t_missionary$impl$Reactor39946");
}));

/**
 * Positional factory function for missionary.impl.Reactor/t_missionary$impl$Reactor39946.
 */
missionary.impl.Reactor.__GT_t_missionary$impl$Reactor39946 = (function missionary$impl$Reactor$run_$___GT_t_missionary$impl$Reactor39946(init__$1,s__$1,f__$1,ps__$1,k__$1,meta39947){
return (new missionary.impl.Reactor.t_missionary$impl$Reactor39946(init__$1,s__$1,f__$1,ps__$1,k__$1,meta39947));
});

}

return (new missionary.impl.Reactor.t_missionary$impl$Reactor39946(init,s,f,ps,k,cljs.core.PersistentArrayMap.EMPTY));
})()
,missionary.impl.Reactor.zero,(0),(0),false,false,false,null,null,null,null,null,null,null);
(ps.kill = k);

(ps.boot = b);

(ps.result = ps);

missionary.impl.Reactor.event(b);

return ps;
});
missionary.impl.Reactor.publish = (function missionary$impl$Reactor$publish(flow,continuous){
var ps = (function (){var G__39976 = missionary.impl.Reactor.current;
if((G__39976 == null)){
throw (new Error("Publication failure : not in reactor context."));
} else {
}

return G__39976;
})();
var cur = ps.subscriber;
var pub = missionary.impl.Reactor.__GT_Publisher(ps,null,(function (){var n = cur.ranks.length;
var a = (new Array((n + (1))));
var n__5636__auto___40141 = n;
var i_40142 = (0);
while(true){
if((i_40142 < n__5636__auto___40141)){
(a[i_40142] = (cur.ranks[i_40142]));

var G__40144 = (i_40142 + (1));
i_40142 = G__40144;
continue;
} else {
}
break;
}

var G__39978 = a;
(G__39978[n] = (function (){var G__39979 = cur.children;
(cur.children = (G__39979 + (1)));

return G__39979;
})());

return G__39978;
})(),(0),(0),true,true,false,null,null,null,null,null,null,null);
if(cljs.core.truth_(continuous)){
} else {
(pub.active = pub);
}

var temp__5806__auto___40147 = ps.alive;
if((temp__5806__auto___40147 == null)){
(pub.next = (pub.prev = pub));
} else {
var p_40156 = temp__5806__auto___40147;
var n_40157 = p_40156.next;
(p_40156.next = pub);

(n_40157.prev = pub);

(pub.prev = p_40156);

(pub.next = n_40157);
}

(ps.alive = pub);

(ps.subscriber = pub);

(pub.iterator = (function (){var G__39990 = (function (){
return missionary.impl.Reactor.event(pub);
});
var G__39992 = (function (){
(pub.done = true);

return missionary.impl.Reactor.event(pub);
});
return (flow.cljs$core$IFn$_invoke$arity$2 ? flow.cljs$core$IFn$_invoke$arity$2(G__39990,G__39992) : flow.call(null,G__39990,G__39992));
})());

(ps.subscriber = cur);

if(cljs.core.truth_(ps.kill.value)){
missionary.impl.Reactor.cancel(pub);
} else {
}

if(cljs.core.truth_((pub.busy = cljs.core.not(pub.busy)))){
missionary.impl.Reactor.touch(pub);
} else {
if(cljs.core.truth_(continuous)){
missionary.impl.Reactor.cancel(pub);

throw (new Error("Publication failure : undefined continuous flow."));
} else {
}
}

return pub;
});

//# sourceMappingURL=missionary.impl.Reactor.js.map
