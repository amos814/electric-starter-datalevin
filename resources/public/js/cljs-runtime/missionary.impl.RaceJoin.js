goog.provide('missionary.impl.RaceJoin');

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
missionary.impl.RaceJoin.Process = (function (combinator,joincb,racecb,children,result,join,race){
this.combinator = combinator;
this.joincb = joincb;
this.racecb = racecb;
this.children = children;
this.result = result;
this.join = join;
this.race = race;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.RaceJoin.Process.prototype.call = (function (unused__11938__auto__){
var self__ = this;
var self__ = this;
var G__40263 = (arguments.length - (1));
switch (G__40263) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.RaceJoin.Process.prototype.apply = (function (self__,args40253){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40253)));
}));

(missionary.impl.RaceJoin.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var j = this;
return (missionary.impl.RaceJoin.cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.RaceJoin.cancel.cljs$core$IFn$_invoke$arity$1(j) : missionary.impl.RaceJoin.cancel.call(null,j));
}));

(missionary.impl.RaceJoin.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinator","combinator",-746639828,null),new cljs.core.Symbol(null,"joincb","joincb",-885294516,null),new cljs.core.Symbol(null,"racecb","racecb",-738679350,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),cljs.core.with_meta(new cljs.core.Symbol(null,"join","join",881669637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"race","race",-1960778897,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null))], null);
}));

(missionary.impl.RaceJoin.Process.cljs$lang$type = true);

(missionary.impl.RaceJoin.Process.cljs$lang$ctorStr = "missionary.impl.RaceJoin/Process");

(missionary.impl.RaceJoin.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.RaceJoin/Process");
}));

/**
 * Positional factory function for missionary.impl.RaceJoin/Process.
 */
missionary.impl.RaceJoin.__GT_Process = (function missionary$impl$RaceJoin$__GT_Process(combinator,joincb,racecb,children,result,join,race){
return (new missionary.impl.RaceJoin.Process(combinator,joincb,racecb,children,result,join,race));
});

missionary.impl.RaceJoin.cancel = (function missionary$impl$RaceJoin$cancel(j){
var n__5636__auto__ = j.children.length;
var i = (0);
while(true){
if((i < n__5636__auto__)){
var fexpr__40273_40303 = (j.children[i]);
(fexpr__40273_40303.cljs$core$IFn$_invoke$arity$0 ? fexpr__40273_40303.cljs$core$IFn$_invoke$arity$0() : fexpr__40273_40303.call(null));

var G__40304 = (i + (1));
i = G__40304;
continue;
} else {
return null;
}
break;
}
});
missionary.impl.RaceJoin.terminated = (function missionary$impl$RaceJoin$terminated(j){
var n = (j.join + (1));
(j.join = n);

if((n === j.result.length)){
var w = j.race;
if((w < (0))){
try{var G__40282 = j.combinator.apply(null,j.result);
var fexpr__40281 = j.joincb;
return (fexpr__40281.cljs$core$IFn$_invoke$arity$1 ? fexpr__40281.cljs$core$IFn$_invoke$arity$1(G__40282) : fexpr__40281.call(null,G__40282));
}catch (e40279){var e = e40279;
var fexpr__40280 = j.racecb;
return (fexpr__40280.cljs$core$IFn$_invoke$arity$1 ? fexpr__40280.cljs$core$IFn$_invoke$arity$1(e) : fexpr__40280.call(null,e));
}} else {
var G__40284 = (j.result[w]);
var fexpr__40283 = j.racecb;
return (fexpr__40283.cljs$core$IFn$_invoke$arity$1 ? fexpr__40283.cljs$core$IFn$_invoke$arity$1(G__40284) : fexpr__40283.call(null,G__40284));
}
} else {
return null;
}
});
missionary.impl.RaceJoin.run = (function missionary$impl$RaceJoin$run(r,c,ts,s,f){
var n = cljs.core.count(ts);
var i = cljs.core.iter(ts);
var j = missionary.impl.RaceJoin.__GT_Process(c,(cljs.core.truth_(r)?f:s),(cljs.core.truth_(r)?s:f),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(n),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(n),(0),(-2));
var index_40307 = (0);
while(true){
var join_40308 = ((function (index_40307,n,i,j){
return (function (x){
(j.result[index_40307] = x);

return missionary.impl.RaceJoin.terminated(j);
});})(index_40307,n,i,j))
;
var race_40309 = ((function (index_40307,join_40308,n,i,j){
return (function (x){
var w_40310 = j.race;
if((w_40310 < (0))){
(j.race = index_40307);

if(((-1) === w_40310)){
missionary.impl.RaceJoin.cancel(j);
} else {
}
} else {
}

return join_40308(x);
});})(index_40307,join_40308,n,i,j))
;
(j.children[index_40307] = (function (){var G__40295 = (cljs.core.truth_(r)?race_40309:join_40308);
var G__40296 = (cljs.core.truth_(r)?join_40308:race_40309);
var fexpr__40294 = i.next();
return (fexpr__40294.cljs$core$IFn$_invoke$arity$2 ? fexpr__40294.cljs$core$IFn$_invoke$arity$2(G__40295,G__40296) : fexpr__40294.call(null,G__40295,G__40296));
})());

if(cljs.core.truth_(i.hasNext())){
var G__40311 = (index_40307 + (1));
index_40307 = G__40311;
continue;
} else {
}
break;
}

if(((-2) === j.race)){
(j.race = (-1));
} else {
missionary.impl.RaceJoin.cancel(j);
}

return j;
});

//# sourceMappingURL=missionary.impl.RaceJoin.js.map
