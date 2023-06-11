goog.provide('hyperfiddle.electric.impl.io');
(com.cognitect.transit.types.UUID.prototype.cljs$core$IUUID$ = cljs.core.PROTOCOL_SENTINEL);
hyperfiddle.electric.impl.io.default_write_handler = cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((function (x){
hyperfiddle.electric.impl.io._last_unserializable_for_repl = x;

console.log("Unserializable reference transfer:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));

return "_";
}),(function (x){
return null;
}),(function (_){
return "";
}));
/**
 * Builds a minimal, cljc map/bounded-queue cache.
 *   One slot per key (map).
 *   Reaching `size` pops oldest value (bounded-queue).
 */
hyperfiddle.electric.impl.io.__GT_cache = (function hyperfiddle$electric$impl$io$__GT_cache(size){
var G__43529 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((size * (2)) + (1)));
var arr43530_43859 = G__43529;
(arr43530_43859[(size * (2))] = cljs.core.identity((0)));

return G__43529;
});
hyperfiddle.electric.impl.io.cache_add = (function hyperfiddle$electric$impl$io$cache_add(cache,k,v){
if(cljs.core.truth_((function (){var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
var arr43532_43860 = cache;
(arr43532_43860[(i + (1))] = cljs.core.identity(v));

return true;
} else {
var G__43861 = (i + (2));
i = G__43861;
continue;
}
} else {
return null;
}
break;
}
})())){
return null;
} else {
var widx = hyperfiddle.electric.impl.array_fields.getswap(cache,(cljs.core.count(cache) - (1)),(function (p1__43531_SHARP_){
return cljs.core.mod((p1__43531_SHARP_ + (2)),(cljs.core.count(cache) - (1)));
}));
var arr43533 = cache;
(arr43533[widx] = cljs.core.identity(k));

return (arr43533[(widx + (1))] = cljs.core.identity(v));
}
});
hyperfiddle.electric.impl.io.cache_get = (function hyperfiddle$electric$impl$io$cache_get(cache,k){
var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
return hyperfiddle.electric.impl.array_fields.get(cache,(i + (1)));
} else {
var G__43862 = (i + (2));
i = G__43862;
continue;
}
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.io.cache__GT_map = (function hyperfiddle$electric$impl$io$cache__GT_map(cache){
var i = (0);
var ac = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
var G__43863 = (i + (2));
var G__43864 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ac,hyperfiddle.electric.impl.array_fields.get(cache,i),hyperfiddle.electric.impl.array_fields.get(cache,(i + (1))));
i = G__43863;
ac = G__43864;
continue;
} else {
return cljs.core.persistent_BANG_(ac);
}
break;
}
});
hyperfiddle.electric.impl.io._BANG_ex_cache = hyperfiddle.electric.impl.io.__GT_cache((16));
hyperfiddle.electric.impl.io.save_original_ex_BANG_ = (function hyperfiddle$electric$impl$io$save_original_ex_BANG_(fi){
var id = hyperfiddle.electric.debug.ex_id(fi);
var temp__5808__auto___43865 = cljs.core.ex_cause(fi);
if((temp__5808__auto___43865 == null)){
} else {
var cause_43866 = temp__5808__auto___43865;
if((cause_43866 instanceof hyperfiddle.electric.FailureInfo)){
} else {
hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_ex_cache,id,cause_43866);
}
}

return id;
});
hyperfiddle.electric.impl.io.get_original_ex = (function hyperfiddle$electric$impl$io$get_original_ex(id){
return hyperfiddle.electric.impl.io.cache_get(hyperfiddle.electric.impl.io._BANG_ex_cache,id);
});
hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_ = null;
hyperfiddle.electric.impl.io.failure_writer = cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((function (_){
return "failure";
}),(function (x){
var err = x.error;
if((err instanceof missionary.Cancelled)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancelled","cancelled",488726224)], null);
} else {
if((err instanceof hyperfiddle.electric.Pending)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending","pending",-220036727)], null);
} else {
if((err instanceof hyperfiddle.electric.Remote)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576),hyperfiddle.electric.debug.serializable(cljs.core.ex_data(err))], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.ex_message(err),hyperfiddle.electric.debug.serializable(cljs.core.ex_data(err)),hyperfiddle.electric.impl.io.save_original_ex_BANG_(err)], null);

}
}
}
}));
hyperfiddle.electric.impl.io.write_opts = (function hyperfiddle$electric$impl$io$write_opts(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,cljs.core.PersistentArrayMap.createAsIfByAssoc([hyperfiddle.electric.Failure,hyperfiddle.electric.impl.io.failure_writer,new cljs.core.Keyword(null,"default","default",-1987822328),hyperfiddle.electric.impl.io.default_write_handler])], 0)),new cljs.core.Keyword(null,"default-handler","default-handler",-1028159207),hyperfiddle.electric.impl.io.default_write_handler], null);
});
hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_ = null;
hyperfiddle.electric.impl.io.failure_reader = cognitect.transit.read_handler((function (p__43541){
var vec__43543 = p__43541;
var seq__43544 = cljs.core.seq(vec__43543);
var first__43545 = cljs.core.first(seq__43544);
var seq__43544__$1 = cljs.core.next(seq__43544);
var tag = first__43545;
var args = seq__43544__$1;
var G__43546 = tag;
var G__43546__$1 = (((G__43546 instanceof cljs.core.Keyword))?G__43546.fqn:null);
switch (G__43546__$1) {
case "exception":
var vec__43547 = args;
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43547,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43547,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43547,(2),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4(message,data,id,null)));

break;
case "remote":
var vec__43550 = args;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43550,(0),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$2("Remote error",(function (){var or__5045__auto__ = data;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})())));

break;
case "pending":
return (new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending())));

break;
case "cancelled":
return (new hyperfiddle.electric.Failure((new missionary.Cancelled())));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43546__$1)].join('')));

}
}));
hyperfiddle.electric.impl.io.read_opts = (function hyperfiddle$electric$impl$io$read_opts(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.PersistentArrayMap(null, 1, ["failure",hyperfiddle.electric.impl.io.failure_reader], null)], 0))], null);
});
hyperfiddle.electric.impl.io.set_ints = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce_kv,(function (r,i,n){
var offset = (i << (2));
var G__43560 = r;
G__43560.setInt32(offset,n);

return G__43560;
}));
/**
 * Encode a control frame to a binary segment.
 */
hyperfiddle.electric.impl.io.encode_numbers = (function hyperfiddle$electric$impl$io$encode_numbers(xs){
var required = (cljs.core.count(xs) << (2));
var G__43562 = (new ArrayBuffer(required));
hyperfiddle.electric.impl.io.set_ints((new DataView(G__43562)),xs);

return G__43562;
});
/**
 * Decode a control frame from a binary segment.
 */
hyperfiddle.electric.impl.io.decode_numbers = (function hyperfiddle$electric$impl$io$decode_numbers(b){
return cljs.core.vec((function (){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.io !== 'undefined') && (typeof hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43564 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43564 = (function (b,meta43565){
this.b = b;
this.meta43565 = meta43565;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43566,meta43565__$1){
var self__ = this;
var _43566__$1 = this;
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43564(self__.b,meta43565__$1));
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43566){
var self__ = this;
var _43566__$1 = this;
return self__.meta43565;
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43564.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,rf,r){
var self__ = this;
var ___$1 = this;
var l = self__.b.byteLength;
var v = (new DataView(self__.b));
var r__$1 = r;
var i = (0);
while(true){
if((i < l)){
var G__43868 = (function (){var G__43571 = r__$1;
var G__43572 = v.getInt32(i);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__43571,G__43572) : rf.call(null,G__43571,G__43572));
})();
var G__43869 = (i + (4));
r__$1 = G__43868;
i = G__43869;
continue;
} else {
return r__$1;
}
break;
}
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"meta43565","meta43565",-2010134999,null)], null);
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43564.cljs$lang$type = true);

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43564.cljs$lang$ctorStr = "hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io43564");

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43564.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io43564");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io43564.
 */
hyperfiddle.electric.impl.io.__GT_t_hyperfiddle$electric$impl$io43564 = (function hyperfiddle$electric$impl$io$decode_numbers_$___GT_t_hyperfiddle$electric$impl$io43564(b__$1,meta43565){
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43564(b__$1,meta43565));
});

}

return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43564(b,cljs.core.PersistentArrayMap.EMPTY));
})()
);
});
var _BANG_cache_43870 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),null], null));
hyperfiddle.electric.impl.io.transit_writer = (function hyperfiddle$electric$impl$io$transit_writer(){
return new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_43870,(function (p__43573){
var map__43574 = p__43573;
var map__43574__$1 = cljs.core.__destructure_map(map__43574);
var cache = map__43574__$1;
var write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43574__$1,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911));
var writer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43574__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(write_handlers,hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_)){
if(cljs.core.truth_(writer)){
return cache;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,new cljs.core.Keyword(null,"writer","writer",-277568236),cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.write_opts()));
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.write_opts())], null);
}
})));
});
/**
 * Encode a data frame to transit json
 */
hyperfiddle.electric.impl.io.encode = (function hyperfiddle$electric$impl$io$encode(x){
return cognitect.transit.write(hyperfiddle.electric.impl.io.transit_writer(),x);
});
var _BANG_cache_43872 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),null], null));
hyperfiddle.electric.impl.io.transit_reader = (function hyperfiddle$electric$impl$io$transit_reader(){
return new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_43872,(function (p__43576){
var map__43577 = p__43576;
var map__43577__$1 = cljs.core.__destructure_map(map__43577);
var cache = map__43577__$1;
var read_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43577__$1,new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315));
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43577__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(read_handlers,hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_)){
if(cljs.core.truth_(reader)){
return cache;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,new cljs.core.Keyword(null,"reader","reader",169660853),cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.read_opts()));
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.read_opts())], null);
}
})));
});
/**
 * Decode a data frame from transit json
 */
hyperfiddle.electric.impl.io.decode = (function hyperfiddle$electric$impl$io$decode(s){
return cognitect.transit.read(hyperfiddle.electric.impl.io.transit_reader(),s);
});
hyperfiddle.electric.impl.io.decode_str = (function hyperfiddle$electric$impl$io$decode_str(x){
try{var G__43579 = hyperfiddle.electric.impl.io.decode(x);
console.debug("\uD83D\uDD3D",G__43579);

return G__43579;
}catch (e43578){var t = e43578;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failed to decode",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),x], null),t);
}});
hyperfiddle.electric.impl.io.chunk_size = ((65536) >> (2));
hyperfiddle.electric.impl.io.message_reader = (function hyperfiddle$electric$impl$io$message_reader(_QMARK_read){

return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43585_block_2 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43585_block_2(cr43585_state){
try{var cr43585_place_4 = missionary.core.unpark();
var cr43585_place_5 = cr43585_place_4;
var cr43585_place_6 = typeof cr43585_place_5 === 'string';
var cr43585_place_7 = null;
if(cr43585_place_6){
(cr43585_state[(0)] = cr43585_block_9);

(cr43585_state[(3)] = cr43585_place_4);

return cr43585_state;
} else {
(cr43585_state[(0)] = cr43585_block_3);

(cr43585_state[(3)] = cr43585_place_4);

(cr43585_state[(2)] = cr43585_place_7);

return cr43585_state;
}
}catch (e43646){var cr43585_exception = e43646;
(cr43585_state[(0)] = null);

(cr43585_state[(1)] = null);

throw cr43585_exception;
}});
var cr43585_block_0 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43585_block_0(cr43585_state){
try{var cr43585_place_0 = cljs.core.transient$;
var cr43585_place_1 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr43585_place_2 = (function (){var G__43650 = cr43585_place_1;
var fexpr__43649 = cr43585_place_0;
return (fexpr__43649.cljs$core$IFn$_invoke$arity$1 ? fexpr__43649.cljs$core$IFn$_invoke$arity$1(G__43650) : fexpr__43649.call(null,G__43650));
})();
(cr43585_state[(0)] = cr43585_block_1);

(cr43585_state[(1)] = cr43585_place_2);

return cr43585_state;
}catch (e43648){var cr43585_exception = e43648;
(cr43585_state[(0)] = null);

throw cr43585_exception;
}});
var cr43585_block_9 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43585_block_9(cr43585_state){
try{var cr43585_place_2 = (cr43585_state[(1)]);
var cr43585_place_4 = (cr43585_state[(3)]);
var cr43585_place_37 = cljs.core.conj_BANG_;
var cr43585_place_38 = cr43585_place_2;
var cr43585_place_39 = hyperfiddle.electric.impl.io.decode_str;
var cr43585_place_40 = cr43585_place_4;
var cr43585_place_41 = (function (){var G__43653 = cr43585_place_40;
var fexpr__43652 = cr43585_place_39;
return (fexpr__43652.cljs$core$IFn$_invoke$arity$1 ? fexpr__43652.cljs$core$IFn$_invoke$arity$1(G__43653) : fexpr__43652.call(null,G__43653));
})();
var cr43585_place_42 = (function (){var G__43655 = cr43585_place_38;
var G__43656 = cr43585_place_41;
var fexpr__43654 = cr43585_place_37;
return (fexpr__43654.cljs$core$IFn$_invoke$arity$2 ? fexpr__43654.cljs$core$IFn$_invoke$arity$2(G__43655,G__43656) : fexpr__43654.call(null,G__43655,G__43656));
})();
(cr43585_state[(0)] = cr43585_block_1);

(cr43585_state[(3)] = null);

(cr43585_state[(1)] = cr43585_place_42);

return cr43585_state;
}catch (e43651){var cr43585_exception = e43651;
(cr43585_state[(0)] = null);

(cr43585_state[(1)] = null);

(cr43585_state[(3)] = null);

throw cr43585_exception;
}});
var cr43585_block_4 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43585_block_4(cr43585_state){
try{var cr43585_place_11 = (cr43585_state[(1)]);
var cr43585_place_14 = (cr43585_state[(4)]);
var cr43585_place_15 = hyperfiddle.electric.impl.io.decode_numbers;
var cr43585_place_16 = cr43585_place_11;
var cr43585_place_17 = (function (){var G__43659 = cr43585_place_16;
var fexpr__43658 = cr43585_place_15;
return (fexpr__43658.cljs$core$IFn$_invoke$arity$1 ? fexpr__43658.cljs$core$IFn$_invoke$arity$1(G__43659) : fexpr__43658.call(null,G__43659));
})();
var cr43585_place_18 = cljs.core.reduce;
var cr43585_place_19 = cljs.core.conj_BANG_;
var cr43585_place_20 = cr43585_place_14;
var cr43585_place_21 = cr43585_place_17;
var cr43585_place_22 = (function (){var G__43661 = cr43585_place_19;
var G__43662 = cr43585_place_20;
var G__43663 = cr43585_place_21;
var fexpr__43660 = cr43585_place_18;
return (fexpr__43660.cljs$core$IFn$_invoke$arity$3 ? fexpr__43660.cljs$core$IFn$_invoke$arity$3(G__43661,G__43662,G__43663) : fexpr__43660.call(null,G__43661,G__43662,G__43663));
})();
var cr43585_place_23 = cljs.core.count;
var cr43585_place_24 = cr43585_place_17;
var cr43585_place_25 = (function (){var G__43668 = cr43585_place_24;
var fexpr__43667 = cr43585_place_23;
return (fexpr__43667.cljs$core$IFn$_invoke$arity$1 ? fexpr__43667.cljs$core$IFn$_invoke$arity$1(G__43668) : fexpr__43667.call(null,G__43668));
})();
var cr43585_place_26 = hyperfiddle.electric.impl.io.chunk_size;
var cr43585_place_27 = (cr43585_place_25 < cr43585_place_26);
var cr43585_place_28 = null;
if(cr43585_place_27){
(cr43585_state[(0)] = cr43585_block_7);

(cr43585_state[(1)] = null);

(cr43585_state[(4)] = null);

(cr43585_state[(1)] = cr43585_place_28);

(cr43585_state[(7)] = cr43585_place_22);

return cr43585_state;
} else {
(cr43585_state[(0)] = cr43585_block_5);

(cr43585_state[(7)] = cr43585_place_22);

return cr43585_state;
}
}catch (e43657){var cr43585_exception = e43657;
(cr43585_state[(0)] = null);

(cr43585_state[(1)] = null);

(cr43585_state[(2)] = null);

(cr43585_state[(3)] = null);

(cr43585_state[(4)] = null);

(cr43585_state[(5)] = null);

(cr43585_state[(6)] = null);

throw cr43585_exception;
}});
var cr43585_block_1 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43585_block_1(cr43585_state){
try{var cr43585_place_3 = _QMARK_read;
(cr43585_state[(0)] = cr43585_block_2);

return missionary.core.park(cr43585_place_3);
}catch (e43670){var cr43585_exception = e43670;
(cr43585_state[(0)] = null);

(cr43585_state[(1)] = null);

throw cr43585_exception;
}});
var cr43585_block_3 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43585_block_3(cr43585_state){
try{var cr43585_place_2 = (cr43585_state[(1)]);
var cr43585_place_4 = (cr43585_state[(3)]);
var cr43585_place_8 = cljs.core.persistent_BANG_;
var cr43585_place_9 = cljs.core.conj_BANG_;
var cr43585_place_10 = cr43585_place_2;
var cr43585_place_11 = cr43585_place_4;
var cr43585_place_12 = cljs.core.transient$;
var cr43585_place_13 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr43585_place_14 = (function (){var G__43674 = cr43585_place_13;
var fexpr__43673 = cr43585_place_12;
return (fexpr__43673.cljs$core$IFn$_invoke$arity$1 ? fexpr__43673.cljs$core$IFn$_invoke$arity$1(G__43674) : fexpr__43673.call(null,G__43674));
})();
(cr43585_state[(0)] = cr43585_block_4);

(cr43585_state[(1)] = null);

(cr43585_state[(3)] = null);

(cr43585_state[(6)] = cr43585_place_8);

(cr43585_state[(3)] = cr43585_place_9);

(cr43585_state[(5)] = cr43585_place_10);

(cr43585_state[(1)] = cr43585_place_11);

(cr43585_state[(4)] = cr43585_place_14);

return cr43585_state;
}catch (e43671){var cr43585_exception = e43671;
(cr43585_state[(0)] = null);

(cr43585_state[(1)] = null);

(cr43585_state[(2)] = null);

(cr43585_state[(3)] = null);

throw cr43585_exception;
}});
var cr43585_block_8 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43585_block_8(cr43585_state){
try{var cr43585_place_9 = (cr43585_state[(3)]);
var cr43585_place_28 = (cr43585_state[(1)]);
var cr43585_place_10 = (cr43585_state[(5)]);
var cr43585_place_8 = (cr43585_state[(6)]);
var cr43585_place_35 = (function (){var G__43678 = cr43585_place_10;
var G__43679 = cr43585_place_28;
var fexpr__43677 = cr43585_place_9;
return (fexpr__43677.cljs$core$IFn$_invoke$arity$2 ? fexpr__43677.cljs$core$IFn$_invoke$arity$2(G__43678,G__43679) : fexpr__43677.call(null,G__43678,G__43679));
})();
var cr43585_place_36 = (function (){var G__43681 = cr43585_place_35;
var fexpr__43680 = cr43585_place_8;
return (fexpr__43680.cljs$core$IFn$_invoke$arity$1 ? fexpr__43680.cljs$core$IFn$_invoke$arity$1(G__43681) : fexpr__43680.call(null,G__43681));
})();
(cr43585_state[(0)] = cr43585_block_10);

(cr43585_state[(3)] = null);

(cr43585_state[(1)] = null);

(cr43585_state[(5)] = null);

(cr43585_state[(6)] = null);

(cr43585_state[(2)] = cr43585_place_36);

return cr43585_state;
}catch (e43675){var cr43585_exception = e43675;
(cr43585_state[(0)] = null);

(cr43585_state[(2)] = null);

(cr43585_state[(3)] = null);

(cr43585_state[(1)] = null);

(cr43585_state[(5)] = null);

(cr43585_state[(6)] = null);

throw cr43585_exception;
}});
var cr43585_block_10 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43585_block_10(cr43585_state){
try{var cr43585_place_7 = (cr43585_state[(2)]);
(cr43585_state[(0)] = null);

(cr43585_state[(2)] = null);

return cr43585_place_7;
}catch (e43682){var cr43585_exception = e43682;
(cr43585_state[(0)] = null);

(cr43585_state[(2)] = null);

throw cr43585_exception;
}});
var cr43585_block_7 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43585_block_7(cr43585_state){
try{var cr43585_place_22 = (cr43585_state[(7)]);
var cr43585_place_32 = cljs.core.persistent_BANG_;
var cr43585_place_33 = cr43585_place_22;
var cr43585_place_34 = (function (){var G__43685 = cr43585_place_33;
var fexpr__43684 = cr43585_place_32;
return (fexpr__43684.cljs$core$IFn$_invoke$arity$1 ? fexpr__43684.cljs$core$IFn$_invoke$arity$1(G__43685) : fexpr__43684.call(null,G__43685));
})();
(cr43585_state[(0)] = cr43585_block_8);

(cr43585_state[(7)] = null);

(cr43585_state[(1)] = cr43585_place_34);

return cr43585_state;
}catch (e43683){var cr43585_exception = e43683;
(cr43585_state[(0)] = null);

(cr43585_state[(2)] = null);

(cr43585_state[(3)] = null);

(cr43585_state[(1)] = null);

(cr43585_state[(5)] = null);

(cr43585_state[(7)] = null);

(cr43585_state[(6)] = null);

throw cr43585_exception;
}});
var cr43585_block_5 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43585_block_5(cr43585_state){
try{var cr43585_place_29 = _QMARK_read;
(cr43585_state[(0)] = cr43585_block_6);

return missionary.core.park(cr43585_place_29);
}catch (e43686){var cr43585_exception = e43686;
(cr43585_state[(0)] = null);

(cr43585_state[(1)] = null);

(cr43585_state[(2)] = null);

(cr43585_state[(3)] = null);

(cr43585_state[(4)] = null);

(cr43585_state[(5)] = null);

(cr43585_state[(7)] = null);

(cr43585_state[(6)] = null);

throw cr43585_exception;
}});
var cr43585_block_6 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43585_block_6(cr43585_state){
try{var cr43585_place_22 = (cr43585_state[(7)]);
var cr43585_place_30 = missionary.core.unpark();
var cr43585_place_31 = cr43585_place_22;
(cr43585_state[(0)] = cr43585_block_4);

(cr43585_state[(7)] = null);

(cr43585_state[(1)] = cr43585_place_30);

(cr43585_state[(4)] = cr43585_place_31);

return cr43585_state;
}catch (e43687){var cr43585_exception = e43687;
(cr43585_state[(0)] = null);

(cr43585_state[(1)] = null);

(cr43585_state[(2)] = null);

(cr43585_state[(3)] = null);

(cr43585_state[(4)] = null);

(cr43585_state[(5)] = null);

(cr43585_state[(7)] = null);

(cr43585_state[(6)] = null);

throw cr43585_exception;
}});
return cloroutine.impl.coroutine((function (){var G__43688 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8));
(G__43688[(0)] = cr43585_block_0);

return G__43688;
})());
})(),missionary.core.sp_run);
});
/**
 * Returns a function taking an Electric message and returning a task writing it as individual frames using provided
 * function. Might cut a message into chunks if its size would exceed the server payload limit.
 * An empty message (0b) is written to notify the end of frame.
 */
hyperfiddle.electric.impl.io.message_writer = (function hyperfiddle$electric$impl$io$message_writer(write){
return (function (p1__43689_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43690_block_6 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43690_block_6(cr43690_state){
try{var cr43690_place_21 = (cr43690_state[(3)]);
var cr43690_place_44 = missionary.core.unpark();
var cr43690_place_45 = cr43690_place_21;
(cr43690_state[(0)] = cr43690_block_1);

(cr43690_state[(3)] = null);

(cr43690_state[(1)] = cr43690_place_45);

return cr43690_state;
}catch (e43778){var cr43690_exception = e43778;
(cr43690_state[(0)] = null);

(cr43690_state[(3)] = null);

(cr43690_state[(1)] = null);

throw cr43690_exception;
}});
var cr43690_block_2 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43690_block_2(cr43690_state){
try{var cr43690_place_5 = (cr43690_state[(2)]);
var cr43690_place_10 = cr43690_place_5;
var cr43690_place_11 = cljs.core.seq;
var cr43690_place_12 = cr43690_place_10;
var cr43690_place_13 = (function (){var G__43782 = cr43690_place_12;
var fexpr__43781 = cr43690_place_11;
return (fexpr__43781.cljs$core$IFn$_invoke$arity$1 ? fexpr__43781.cljs$core$IFn$_invoke$arity$1(G__43782) : fexpr__43781.call(null,G__43782));
})();
var cr43690_place_14 = cljs.core.first;
var cr43690_place_15 = cr43690_place_13;
var cr43690_place_16 = (function (){var G__43784 = cr43690_place_15;
var fexpr__43783 = cr43690_place_14;
return (fexpr__43783.cljs$core$IFn$_invoke$arity$1 ? fexpr__43783.cljs$core$IFn$_invoke$arity$1(G__43784) : fexpr__43783.call(null,G__43784));
})();
var cr43690_place_17 = cljs.core.next;
var cr43690_place_18 = cr43690_place_13;
var cr43690_place_19 = (function (){var G__43786 = cr43690_place_18;
var fexpr__43785 = cr43690_place_17;
return (fexpr__43785.cljs$core$IFn$_invoke$arity$1 ? fexpr__43785.cljs$core$IFn$_invoke$arity$1(G__43786) : fexpr__43785.call(null,G__43786));
})();
var cr43690_place_20 = cr43690_place_16;
var cr43690_place_21 = cr43690_place_19;
var cr43690_place_22 = console.debug;
var cr43690_place_23 = "\uD83D\uDD3C";
var cr43690_place_24 = cr43690_place_20;
var cr43690_place_25 = (function (){var G__43788 = cr43690_place_23;
var G__43789 = cr43690_place_24;
var fexpr__43787 = cr43690_place_22;
return (fexpr__43787.cljs$core$IFn$_invoke$arity$2 ? fexpr__43787.cljs$core$IFn$_invoke$arity$2(G__43788,G__43789) : fexpr__43787.call(null,G__43788,G__43789));
})();
var cr43690_place_26 = null;
var cr43690_place_27 = false;
(cr43690_state[(0)] = cr43690_block_3);

(cr43690_state[(2)] = null);

(cr43690_state[(2)] = cr43690_place_26);

(cr43690_state[(3)] = cr43690_place_21);

(cr43690_state[(4)] = cr43690_place_27);

(cr43690_state[(5)] = cr43690_place_20);

return cr43690_state;
}catch (e43779){var cr43690_exception = e43779;
(cr43690_state[(0)] = null);

(cr43690_state[(1)] = null);

(cr43690_state[(2)] = null);

throw cr43690_exception;
}});
var cr43690_block_11 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43690_block_11(cr43690_state){
try{var cr43690_place_48 = (cr43690_state[(2)]);
var cr43690_place_62 = hyperfiddle.electric.impl.io.encode_numbers;
var cr43690_place_63 = cljs.core.subvec;
var cr43690_place_64 = cr43690_place_48;
var cr43690_place_65 = (0);
var cr43690_place_66 = hyperfiddle.electric.impl.io.chunk_size;
var cr43690_place_67 = (function (){var G__43796 = cr43690_place_64;
var G__43797 = cr43690_place_65;
var G__43798 = cr43690_place_66;
var fexpr__43795 = cr43690_place_63;
return (fexpr__43795.cljs$core$IFn$_invoke$arity$3 ? fexpr__43795.cljs$core$IFn$_invoke$arity$3(G__43796,G__43797,G__43798) : fexpr__43795.call(null,G__43796,G__43797,G__43798));
})();
var cr43690_place_68 = (function (){var G__43800 = cr43690_place_67;
var fexpr__43799 = cr43690_place_62;
return (fexpr__43799.cljs$core$IFn$_invoke$arity$1 ? fexpr__43799.cljs$core$IFn$_invoke$arity$1(G__43800) : fexpr__43799.call(null,G__43800));
})();
var cr43690_place_69 = write;
var cr43690_place_70 = cr43690_place_68;
var cr43690_place_71 = (function (){var G__43802 = cr43690_place_70;
var fexpr__43801 = cr43690_place_69;
return (fexpr__43801.cljs$core$IFn$_invoke$arity$1 ? fexpr__43801.cljs$core$IFn$_invoke$arity$1(G__43802) : fexpr__43801.call(null,G__43802));
})();
(cr43690_state[(0)] = cr43690_block_12);

return missionary.core.park(cr43690_place_71);
}catch (e43791){var cr43690_exception = e43791;
(cr43690_state[(0)] = null);

(cr43690_state[(1)] = null);

(cr43690_state[(2)] = null);

throw cr43690_exception;
}});
var cr43690_block_7 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43690_block_7(cr43690_state){
try{var cr43690_place_46 = cljs.core.peek;
var cr43690_place_47 = p1__43689_SHARP_;
var cr43690_place_48 = (function (){var G__43805 = cr43690_place_47;
var fexpr__43804 = cr43690_place_46;
return (fexpr__43804.cljs$core$IFn$_invoke$arity$1 ? fexpr__43804.cljs$core$IFn$_invoke$arity$1(G__43805) : fexpr__43804.call(null,G__43805));
})();
(cr43690_state[(0)] = cr43690_block_8);

(cr43690_state[(2)] = cr43690_place_48);

return cr43690_state;
}catch (e43803){var cr43690_exception = e43803;
(cr43690_state[(0)] = null);

(cr43690_state[(1)] = null);

throw cr43690_exception;
}});
var cr43690_block_9 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43690_block_9(cr43690_state){
try{var cr43690_place_48 = (cr43690_state[(2)]);
var cr43690_place_55 = hyperfiddle.electric.impl.io.encode_numbers;
var cr43690_place_56 = cr43690_place_48;
var cr43690_place_57 = (function (){var G__43809 = cr43690_place_56;
var fexpr__43808 = cr43690_place_55;
return (fexpr__43808.cljs$core$IFn$_invoke$arity$1 ? fexpr__43808.cljs$core$IFn$_invoke$arity$1(G__43809) : fexpr__43808.call(null,G__43809));
})();
var cr43690_place_58 = write;
var cr43690_place_59 = cr43690_place_57;
var cr43690_place_60 = (function (){var G__43811 = cr43690_place_59;
var fexpr__43810 = cr43690_place_58;
return (fexpr__43810.cljs$core$IFn$_invoke$arity$1 ? fexpr__43810.cljs$core$IFn$_invoke$arity$1(G__43811) : fexpr__43810.call(null,G__43811));
})();
(cr43690_state[(0)] = cr43690_block_10);

(cr43690_state[(2)] = null);

return missionary.core.park(cr43690_place_60);
}catch (e43806){var cr43690_exception = e43806;
(cr43690_state[(0)] = null);

(cr43690_state[(3)] = null);

(cr43690_state[(1)] = null);

(cr43690_state[(2)] = null);

throw cr43690_exception;
}});
var cr43690_block_8 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43690_block_8(cr43690_state){
try{var cr43690_place_48 = (cr43690_state[(2)]);
var cr43690_place_49 = cljs.core.count;
var cr43690_place_50 = cr43690_place_48;
var cr43690_place_51 = (function (){var G__43814 = cr43690_place_50;
var fexpr__43813 = cr43690_place_49;
return (fexpr__43813.cljs$core$IFn$_invoke$arity$1 ? fexpr__43813.cljs$core$IFn$_invoke$arity$1(G__43814) : fexpr__43813.call(null,G__43814));
})();
var cr43690_place_52 = hyperfiddle.electric.impl.io.chunk_size;
var cr43690_place_53 = (cr43690_place_51 >= cr43690_place_52);
var cr43690_place_54 = null;
if(cr43690_place_53){
(cr43690_state[(0)] = cr43690_block_11);

return cr43690_state;
} else {
(cr43690_state[(0)] = cr43690_block_9);

(cr43690_state[(3)] = cr43690_place_54);

return cr43690_state;
}
}catch (e43812){var cr43690_exception = e43812;
(cr43690_state[(0)] = null);

(cr43690_state[(1)] = null);

(cr43690_state[(2)] = null);

throw cr43690_exception;
}});
var cr43690_block_0 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43690_block_0(cr43690_state){
try{var cr43690_place_0 = cljs.core.seq;
var cr43690_place_1 = cljs.core.pop;
var cr43690_place_2 = p1__43689_SHARP_;
var cr43690_place_3 = (function (){var G__43818 = cr43690_place_2;
var fexpr__43817 = cr43690_place_1;
return (fexpr__43817.cljs$core$IFn$_invoke$arity$1 ? fexpr__43817.cljs$core$IFn$_invoke$arity$1(G__43818) : fexpr__43817.call(null,G__43818));
})();
var cr43690_place_4 = (function (){var G__43821 = cr43690_place_3;
var fexpr__43820 = cr43690_place_0;
return (fexpr__43820.cljs$core$IFn$_invoke$arity$1 ? fexpr__43820.cljs$core$IFn$_invoke$arity$1(G__43821) : fexpr__43820.call(null,G__43821));
})();
(cr43690_state[(0)] = cr43690_block_1);

(cr43690_state[(1)] = cr43690_place_4);

return cr43690_state;
}catch (e43816){var cr43690_exception = e43816;
(cr43690_state[(0)] = null);

throw cr43690_exception;
}});
var cr43690_block_14 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43690_block_14(cr43690_state){
try{var cr43690_place_9 = (cr43690_state[(1)]);
(cr43690_state[(0)] = null);

(cr43690_state[(1)] = null);

return cr43690_place_9;
}catch (e43825){var cr43690_exception = e43825;
(cr43690_state[(0)] = null);

(cr43690_state[(1)] = null);

throw cr43690_exception;
}});
var cr43690_block_13 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43690_block_13(cr43690_state){
try{var cr43690_place_54 = (cr43690_state[(3)]);
(cr43690_state[(0)] = cr43690_block_14);

(cr43690_state[(3)] = null);

(cr43690_state[(1)] = cr43690_place_54);

return cr43690_state;
}catch (e43826){var cr43690_exception = e43826;
(cr43690_state[(0)] = null);

(cr43690_state[(3)] = null);

(cr43690_state[(1)] = null);

throw cr43690_exception;
}});
var cr43690_block_12 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43690_block_12(cr43690_state){
try{var cr43690_place_48 = (cr43690_state[(2)]);
var cr43690_place_72 = missionary.core.unpark();
var cr43690_place_73 = cljs.core.subvec;
var cr43690_place_74 = cr43690_place_48;
var cr43690_place_75 = hyperfiddle.electric.impl.io.chunk_size;
var cr43690_place_76 = (function (){var G__43829 = cr43690_place_74;
var G__43830 = cr43690_place_75;
var fexpr__43828 = cr43690_place_73;
return (fexpr__43828.cljs$core$IFn$_invoke$arity$2 ? fexpr__43828.cljs$core$IFn$_invoke$arity$2(G__43829,G__43830) : fexpr__43828.call(null,G__43829,G__43830));
})();
(cr43690_state[(0)] = cr43690_block_8);

(cr43690_state[(2)] = cr43690_place_76);

return cr43690_state;
}catch (e43827){var cr43690_exception = e43827;
(cr43690_state[(0)] = null);

(cr43690_state[(1)] = null);

(cr43690_state[(2)] = null);

throw cr43690_exception;
}});
var cr43690_block_3 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43690_block_3(cr43690_state){
try{var cr43690_place_20 = (cr43690_state[(5)]);
var cr43690_place_28 = hyperfiddle.electric.impl.io.encode;
var cr43690_place_29 = cr43690_place_20;
var cr43690_place_30 = (function (){var G__43834 = cr43690_place_29;
var fexpr__43833 = cr43690_place_28;
return (fexpr__43833.cljs$core$IFn$_invoke$arity$1 ? fexpr__43833.cljs$core$IFn$_invoke$arity$1(G__43834) : fexpr__43833.call(null,G__43834));
})();
(cr43690_state[(0)] = cr43690_block_5);

(cr43690_state[(5)] = null);

(cr43690_state[(2)] = cr43690_place_30);

return cr43690_state;
}catch (e43832){var cr43690_exception = e43832;
(cr43690_state[(0)] = cr43690_block_4);

(cr43690_state[(2)] = cr43690_exception);

return cr43690_state;
}});
var cr43690_block_10 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43690_block_10(cr43690_state){
try{var cr43690_place_61 = missionary.core.unpark();
(cr43690_state[(0)] = cr43690_block_13);

(cr43690_state[(3)] = cr43690_place_61);

return cr43690_state;
}catch (e43835){var cr43690_exception = e43835;
(cr43690_state[(0)] = null);

(cr43690_state[(3)] = null);

(cr43690_state[(1)] = null);

throw cr43690_exception;
}});
var cr43690_block_5 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43690_block_5(cr43690_state){
try{var cr43690_place_26 = (cr43690_state[(2)]);
var cr43690_place_27 = (cr43690_state[(4)]);
var cr43690_place_40 = (cljs.core.truth_(cr43690_place_27)?(function(){throw cr43690_place_26})():cr43690_place_26);
var cr43690_place_41 = write;
var cr43690_place_42 = cr43690_place_40;
var cr43690_place_43 = (function (){var G__43838 = cr43690_place_42;
var fexpr__43837 = cr43690_place_41;
return (fexpr__43837.cljs$core$IFn$_invoke$arity$1 ? fexpr__43837.cljs$core$IFn$_invoke$arity$1(G__43838) : fexpr__43837.call(null,G__43838));
})();
(cr43690_state[(0)] = cr43690_block_6);

(cr43690_state[(2)] = null);

(cr43690_state[(4)] = null);

return missionary.core.park(cr43690_place_43);
}catch (e43836){var cr43690_exception = e43836;
(cr43690_state[(0)] = null);

(cr43690_state[(2)] = null);

(cr43690_state[(3)] = null);

(cr43690_state[(4)] = null);

(cr43690_state[(1)] = null);

throw cr43690_exception;
}});
var cr43690_block_4 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43690_block_4(cr43690_state){
try{var cr43690_place_26 = (cr43690_state[(2)]);
var cr43690_place_20 = (cr43690_state[(5)]);
var cr43690_place_31 = cr43690_place_26;
var cr43690_place_32 = cljs.core.ex_info;
var cr43690_place_33 = "Failed to encode";
var cr43690_place_34 = new cljs.core.Keyword(null,"value","value",305978217);
var cr43690_place_35 = cr43690_place_20;
var cr43690_place_36 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr43690_place_34,cr43690_place_35]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr43690_place_37 = cr43690_place_31;
var cr43690_place_38 = (function (){var G__43841 = cr43690_place_33;
var G__43842 = cr43690_place_36;
var G__43843 = cr43690_place_37;
var fexpr__43840 = cr43690_place_32;
return (fexpr__43840.cljs$core$IFn$_invoke$arity$3 ? fexpr__43840.cljs$core$IFn$_invoke$arity$3(G__43841,G__43842,G__43843) : fexpr__43840.call(null,G__43841,G__43842,G__43843));
})();
var cr43690_place_39 = (function(){throw cr43690_place_38})();
(cr43690_state[(0)] = null);

(cr43690_state[(2)] = null);

(cr43690_state[(3)] = null);

(cr43690_state[(4)] = null);

(cr43690_state[(1)] = null);

(cr43690_state[(5)] = null);

return null;
}catch (e43839){var cr43690_exception = e43839;
(cr43690_state[(0)] = cr43690_block_5);

(cr43690_state[(5)] = null);

(cr43690_state[(2)] = cr43690_exception);

(cr43690_state[(4)] = true);

return cr43690_state;
}});
var cr43690_block_1 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43690_block_1(cr43690_state){
try{var cr43690_place_4 = (cr43690_state[(1)]);
var cr43690_place_5 = cr43690_place_4;
var cr43690_place_6 = cr43690_place_5;
var cr43690_place_7 = null;
var cr43690_place_8 = (cr43690_place_6 == cr43690_place_7);
var cr43690_place_9 = null;
if(cr43690_place_8){
(cr43690_state[(0)] = cr43690_block_7);

(cr43690_state[(1)] = null);

(cr43690_state[(1)] = cr43690_place_9);

return cr43690_state;
} else {
(cr43690_state[(0)] = cr43690_block_2);

(cr43690_state[(2)] = cr43690_place_5);

return cr43690_state;
}
}catch (e43844){var cr43690_exception = e43844;
(cr43690_state[(0)] = null);

(cr43690_state[(1)] = null);

throw cr43690_exception;
}});
return cloroutine.impl.coroutine((function (){var G__43846 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__43846[(0)] = cr43690_block_0);

return G__43846;
})());
})(),missionary.core.sp_run);
});
});
/**
 * A transducer partitioning a sequence of network messages into Electric events.
 */
hyperfiddle.electric.impl.io.decoder = (function hyperfiddle$electric$impl$io$decoder(rf){
var data = (function (){var G__43849 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__43849[(0)] = cljs.core.PersistentVector.EMPTY);

(G__43849[(1)] = cljs.core.PersistentVector.EMPTY);

return G__43849;
})();
return (function() {
var G__43881 = null;
var G__43881__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__43881__1 = (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,(data[(0)]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(data[(1)])], 0))){
} else {
throw (new Error("Assert failed: (= [] (aget data 0) (aget data 1))"));
}

return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__43881__2 = (function (r,x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(data[(1)]))){
} else {
throw (new Error("Assert failed: (= [] (aget data 1))"));
}

(data[(0)] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((data[(0)]),hyperfiddle.electric.impl.io.decode_str(x)));

return r;
} else {
var xs = hyperfiddle.electric.impl.io.decode_numbers(x);
(data[(1)] = cljs.core.into.cljs$core$IFn$_invoke$arity$2((data[(1)]),xs));

if((cljs.core.count(xs) < hyperfiddle.electric.impl.io.chunk_size)){
var x__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((data[(0)]),(data[(1)]));
(data[(0)] = cljs.core.PersistentVector.EMPTY);

(data[(1)] = cljs.core.PersistentVector.EMPTY);

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(r,x__$1) : rf.call(null,r,x__$1));
} else {
return r;
}
}
});
G__43881 = function(r,x){
switch(arguments.length){
case 0:
return G__43881__0.call(this);
case 1:
return G__43881__1.call(this,r);
case 2:
return G__43881__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43881.cljs$core$IFn$_invoke$arity$0 = G__43881__0;
G__43881.cljs$core$IFn$_invoke$arity$1 = G__43881__1;
G__43881.cljs$core$IFn$_invoke$arity$2 = G__43881__2;
return G__43881;
})()
});
/**
 * A transducer expanding Electric events to a sequence of network messages.
 */
hyperfiddle.electric.impl.io.encoder = (function hyperfiddle$electric$impl$io$encoder(rf){
return (function() {
var G__43882 = null;
var G__43882__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__43882__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__43882__2 = (function (r,x){
var r__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode),cljs.core.pop(x)], 0)));
var r__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r__$1,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.chunk_size),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode_numbers),cljs.core.peek(x)], 0)));
var G__43850 = cljs.core.mod(cljs.core.count(cljs.core.peek(x)),hyperfiddle.electric.impl.io.chunk_size);
switch (G__43850) {
case (0):
var G__43851 = r__$2;
var G__43852 = hyperfiddle.electric.impl.io.encode_numbers(cljs.core.PersistentVector.EMPTY);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__43851,G__43852) : rf.call(null,G__43851,G__43852));

break;
default:
return r__$2;

}
});
G__43882 = function(r,x){
switch(arguments.length){
case 0:
return G__43882__0.call(this);
case 1:
return G__43882__1.call(this,r);
case 2:
return G__43882__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43882.cljs$core$IFn$_invoke$arity$0 = G__43882__0;
G__43882.cljs$core$IFn$_invoke$arity$1 = G__43882__1;
G__43882.cljs$core$IFn$_invoke$arity$2 = G__43882__2;
return G__43882;
})()
});
hyperfiddle.electric.impl.io.foreach = (function hyperfiddle$electric$impl$io$foreach(var_args){
var G__43854 = arguments.length;
switch (G__43854) {
case 1:
return hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$1 = (function (r){
return r;
}));

(hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$2 = (function (r,x){
(r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(x) : r.call(null,x));

return r;
}));

(hyperfiddle.electric.impl.io.foreach.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=hyperfiddle.electric.impl.io.js.map
