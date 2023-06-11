goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33351 = arguments.length;
switch (G__33351) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33352 = (function (f,blockable,meta33353){
this.f = f;
this.blockable = blockable;
this.meta33353 = meta33353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33354,meta33353__$1){
var self__ = this;
var _33354__$1 = this;
return (new cljs.core.async.t_cljs$core$async33352(self__.f,self__.blockable,meta33353__$1));
}));

(cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33354){
var self__ = this;
var _33354__$1 = this;
return self__.meta33353;
}));

(cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33353","meta33353",-241501213,null)], null);
}));

(cljs.core.async.t_cljs$core$async33352.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33352");

(cljs.core.async.t_cljs$core$async33352.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33352");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33352.
 */
cljs.core.async.__GT_t_cljs$core$async33352 = (function cljs$core$async$__GT_t_cljs$core$async33352(f__$1,blockable__$1,meta33353){
return (new cljs.core.async.t_cljs$core$async33352(f__$1,blockable__$1,meta33353));
});

}

return (new cljs.core.async.t_cljs$core$async33352(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33383 = arguments.length;
switch (G__33383) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33463 = arguments.length;
switch (G__33463) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33472 = arguments.length;
switch (G__33472) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35602 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35602) : fn1.call(null,val_35602));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35602) : fn1.call(null,val_35602));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33476 = arguments.length;
switch (G__33476) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___35605 = n;
var x_35606 = (0);
while(true){
if((x_35606 < n__5636__auto___35605)){
(a[x_35606] = x_35606);

var G__35607 = (x_35606 + (1));
x_35606 = G__35607;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33478 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33478 = (function (flag,meta33479){
this.flag = flag;
this.meta33479 = meta33479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33480,meta33479__$1){
var self__ = this;
var _33480__$1 = this;
return (new cljs.core.async.t_cljs$core$async33478(self__.flag,meta33479__$1));
}));

(cljs.core.async.t_cljs$core$async33478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33480){
var self__ = this;
var _33480__$1 = this;
return self__.meta33479;
}));

(cljs.core.async.t_cljs$core$async33478.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33478.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33478.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33478.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33479","meta33479",-1040058334,null)], null);
}));

(cljs.core.async.t_cljs$core$async33478.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33478");

(cljs.core.async.t_cljs$core$async33478.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33478");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33478.
 */
cljs.core.async.__GT_t_cljs$core$async33478 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33478(flag__$1,meta33479){
return (new cljs.core.async.t_cljs$core$async33478(flag__$1,meta33479));
});

}

return (new cljs.core.async.t_cljs$core$async33478(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33483 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33483 = (function (flag,cb,meta33484){
this.flag = flag;
this.cb = cb;
this.meta33484 = meta33484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33485,meta33484__$1){
var self__ = this;
var _33485__$1 = this;
return (new cljs.core.async.t_cljs$core$async33483(self__.flag,self__.cb,meta33484__$1));
}));

(cljs.core.async.t_cljs$core$async33483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33485){
var self__ = this;
var _33485__$1 = this;
return self__.meta33484;
}));

(cljs.core.async.t_cljs$core$async33483.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33483.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33483.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33483.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33484","meta33484",-2024025573,null)], null);
}));

(cljs.core.async.t_cljs$core$async33483.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33483");

(cljs.core.async.t_cljs$core$async33483.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33483");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33483.
 */
cljs.core.async.__GT_t_cljs$core$async33483 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33483(flag__$1,cb__$1,meta33484){
return (new cljs.core.async.t_cljs$core$async33483(flag__$1,cb__$1,meta33484));
});

}

return (new cljs.core.async.t_cljs$core$async33483(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33487_SHARP_){
var G__33490 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33487_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33490) : fret.call(null,G__33490));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33488_SHARP_){
var G__33491 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33488_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33491) : fret.call(null,G__33491));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35610 = (i + (1));
i = G__35610;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35611 = arguments.length;
var i__5770__auto___35612 = (0);
while(true){
if((i__5770__auto___35612 < len__5769__auto___35611)){
args__5775__auto__.push((arguments[i__5770__auto___35612]));

var G__35613 = (i__5770__auto___35612 + (1));
i__5770__auto___35612 = G__35613;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33496){
var map__33497 = p__33496;
var map__33497__$1 = cljs.core.__destructure_map(map__33497);
var opts = map__33497__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33493){
var G__33494 = cljs.core.first(seq33493);
var seq33493__$1 = cljs.core.next(seq33493);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33494,seq33493__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33500 = arguments.length;
switch (G__33500) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33227__auto___35615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = (function (state_33528){
var state_val_33529 = (state_33528[(1)]);
if((state_val_33529 === (7))){
var inst_33524 = (state_33528[(2)]);
var state_33528__$1 = state_33528;
var statearr_33532_35616 = state_33528__$1;
(statearr_33532_35616[(2)] = inst_33524);

(statearr_33532_35616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33529 === (1))){
var state_33528__$1 = state_33528;
var statearr_33533_35617 = state_33528__$1;
(statearr_33533_35617[(2)] = null);

(statearr_33533_35617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33529 === (4))){
var inst_33506 = (state_33528[(7)]);
var inst_33506__$1 = (state_33528[(2)]);
var inst_33507 = (inst_33506__$1 == null);
var state_33528__$1 = (function (){var statearr_33534 = state_33528;
(statearr_33534[(7)] = inst_33506__$1);

return statearr_33534;
})();
if(cljs.core.truth_(inst_33507)){
var statearr_33535_35618 = state_33528__$1;
(statearr_33535_35618[(1)] = (5));

} else {
var statearr_33536_35619 = state_33528__$1;
(statearr_33536_35619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33529 === (13))){
var state_33528__$1 = state_33528;
var statearr_33537_35620 = state_33528__$1;
(statearr_33537_35620[(2)] = null);

(statearr_33537_35620[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33529 === (6))){
var inst_33506 = (state_33528[(7)]);
var state_33528__$1 = state_33528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33528__$1,(11),to,inst_33506);
} else {
if((state_val_33529 === (3))){
var inst_33526 = (state_33528[(2)]);
var state_33528__$1 = state_33528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33528__$1,inst_33526);
} else {
if((state_val_33529 === (12))){
var state_33528__$1 = state_33528;
var statearr_33539_35621 = state_33528__$1;
(statearr_33539_35621[(2)] = null);

(statearr_33539_35621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33529 === (2))){
var state_33528__$1 = state_33528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33528__$1,(4),from);
} else {
if((state_val_33529 === (11))){
var inst_33516 = (state_33528[(2)]);
var state_33528__$1 = state_33528;
if(cljs.core.truth_(inst_33516)){
var statearr_33540_35622 = state_33528__$1;
(statearr_33540_35622[(1)] = (12));

} else {
var statearr_33541_35623 = state_33528__$1;
(statearr_33541_35623[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33529 === (9))){
var state_33528__$1 = state_33528;
var statearr_33542_35624 = state_33528__$1;
(statearr_33542_35624[(2)] = null);

(statearr_33542_35624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33529 === (5))){
var state_33528__$1 = state_33528;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33543_35625 = state_33528__$1;
(statearr_33543_35625[(1)] = (8));

} else {
var statearr_33544_35626 = state_33528__$1;
(statearr_33544_35626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33529 === (14))){
var inst_33522 = (state_33528[(2)]);
var state_33528__$1 = state_33528;
var statearr_33546_35627 = state_33528__$1;
(statearr_33546_35627[(2)] = inst_33522);

(statearr_33546_35627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33529 === (10))){
var inst_33513 = (state_33528[(2)]);
var state_33528__$1 = state_33528;
var statearr_33547_35628 = state_33528__$1;
(statearr_33547_35628[(2)] = inst_33513);

(statearr_33547_35628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33529 === (8))){
var inst_33510 = cljs.core.async.close_BANG_(to);
var state_33528__$1 = state_33528;
var statearr_33548_35629 = state_33528__$1;
(statearr_33548_35629[(2)] = inst_33510);

(statearr_33548_35629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32825__auto__ = null;
var cljs$core$async$state_machine__32825__auto____0 = (function (){
var statearr_33549 = [null,null,null,null,null,null,null,null];
(statearr_33549[(0)] = cljs$core$async$state_machine__32825__auto__);

(statearr_33549[(1)] = (1));

return statearr_33549;
});
var cljs$core$async$state_machine__32825__auto____1 = (function (state_33528){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_33528);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e33550){var ex__32828__auto__ = e33550;
var statearr_33551_35631 = state_33528;
(statearr_33551_35631[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_33528[(4)]))){
var statearr_33552_35632 = state_33528;
(statearr_33552_35632[(1)] = cljs.core.first((state_33528[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35633 = state_33528;
state_33528 = G__35633;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
cljs$core$async$state_machine__32825__auto__ = function(state_33528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32825__auto____1.call(this,state_33528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32825__auto____0;
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32825__auto____1;
return cljs$core$async$state_machine__32825__auto__;
})()
})();
var state__33229__auto__ = (function (){var statearr_33553 = f__33228__auto__();
(statearr_33553[(6)] = c__33227__auto___35615);

return statearr_33553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__33555){
var vec__33556 = p__33555;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33556,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33556,(1),null);
var job = vec__33556;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33227__auto___35634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = (function (state_33563){
var state_val_33564 = (state_33563[(1)]);
if((state_val_33564 === (1))){
var state_33563__$1 = state_33563;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33563__$1,(2),res,v);
} else {
if((state_val_33564 === (2))){
var inst_33560 = (state_33563[(2)]);
var inst_33561 = cljs.core.async.close_BANG_(res);
var state_33563__$1 = (function (){var statearr_33566 = state_33563;
(statearr_33566[(7)] = inst_33560);

return statearr_33566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33563__$1,inst_33561);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____0 = (function (){
var statearr_33567 = [null,null,null,null,null,null,null,null];
(statearr_33567[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__);

(statearr_33567[(1)] = (1));

return statearr_33567;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____1 = (function (state_33563){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_33563);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e33568){var ex__32828__auto__ = e33568;
var statearr_33569_35635 = state_33563;
(statearr_33569_35635[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_33563[(4)]))){
var statearr_33570_35636 = state_33563;
(statearr_33570_35636[(1)] = cljs.core.first((state_33563[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35637 = state_33563;
state_33563 = G__35637;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__ = function(state_33563){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____1.call(this,state_33563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__;
})()
})();
var state__33229__auto__ = (function (){var statearr_33571 = f__33228__auto__();
(statearr_33571[(6)] = c__33227__auto___35634);

return statearr_33571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33573){
var vec__33574 = p__33573;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33574,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33574,(1),null);
var job = vec__33574;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___35639 = n;
var __35640 = (0);
while(true){
if((__35640 < n__5636__auto___35639)){
var G__33577_35641 = type;
var G__33577_35642__$1 = (((G__33577_35641 instanceof cljs.core.Keyword))?G__33577_35641.fqn:null);
switch (G__33577_35642__$1) {
case "compute":
var c__33227__auto___35644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35640,c__33227__auto___35644,G__33577_35641,G__33577_35642__$1,n__5636__auto___35639,jobs,results,process__$1,async){
return (function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = ((function (__35640,c__33227__auto___35644,G__33577_35641,G__33577_35642__$1,n__5636__auto___35639,jobs,results,process__$1,async){
return (function (state_33594){
var state_val_33595 = (state_33594[(1)]);
if((state_val_33595 === (1))){
var state_33594__$1 = state_33594;
var statearr_33596_35645 = state_33594__$1;
(statearr_33596_35645[(2)] = null);

(statearr_33596_35645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (2))){
var state_33594__$1 = state_33594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33594__$1,(4),jobs);
} else {
if((state_val_33595 === (3))){
var inst_33592 = (state_33594[(2)]);
var state_33594__$1 = state_33594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33594__$1,inst_33592);
} else {
if((state_val_33595 === (4))){
var inst_33584 = (state_33594[(2)]);
var inst_33585 = process__$1(inst_33584);
var state_33594__$1 = state_33594;
if(cljs.core.truth_(inst_33585)){
var statearr_33597_35647 = state_33594__$1;
(statearr_33597_35647[(1)] = (5));

} else {
var statearr_33598_35648 = state_33594__$1;
(statearr_33598_35648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (5))){
var state_33594__$1 = state_33594;
var statearr_33600_35649 = state_33594__$1;
(statearr_33600_35649[(2)] = null);

(statearr_33600_35649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (6))){
var state_33594__$1 = state_33594;
var statearr_33601_35650 = state_33594__$1;
(statearr_33601_35650[(2)] = null);

(statearr_33601_35650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (7))){
var inst_33590 = (state_33594[(2)]);
var state_33594__$1 = state_33594;
var statearr_33602_35651 = state_33594__$1;
(statearr_33602_35651[(2)] = inst_33590);

(statearr_33602_35651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35640,c__33227__auto___35644,G__33577_35641,G__33577_35642__$1,n__5636__auto___35639,jobs,results,process__$1,async))
;
return ((function (__35640,switch__32824__auto__,c__33227__auto___35644,G__33577_35641,G__33577_35642__$1,n__5636__auto___35639,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____0 = (function (){
var statearr_33603 = [null,null,null,null,null,null,null];
(statearr_33603[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__);

(statearr_33603[(1)] = (1));

return statearr_33603;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____1 = (function (state_33594){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_33594);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e33604){var ex__32828__auto__ = e33604;
var statearr_33605_35654 = state_33594;
(statearr_33605_35654[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_33594[(4)]))){
var statearr_33606_35655 = state_33594;
(statearr_33606_35655[(1)] = cljs.core.first((state_33594[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35656 = state_33594;
state_33594 = G__35656;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__ = function(state_33594){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____1.call(this,state_33594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__;
})()
;})(__35640,switch__32824__auto__,c__33227__auto___35644,G__33577_35641,G__33577_35642__$1,n__5636__auto___35639,jobs,results,process__$1,async))
})();
var state__33229__auto__ = (function (){var statearr_33608 = f__33228__auto__();
(statearr_33608[(6)] = c__33227__auto___35644);

return statearr_33608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
});})(__35640,c__33227__auto___35644,G__33577_35641,G__33577_35642__$1,n__5636__auto___35639,jobs,results,process__$1,async))
);


break;
case "async":
var c__33227__auto___35657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35640,c__33227__auto___35657,G__33577_35641,G__33577_35642__$1,n__5636__auto___35639,jobs,results,process__$1,async){
return (function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = ((function (__35640,c__33227__auto___35657,G__33577_35641,G__33577_35642__$1,n__5636__auto___35639,jobs,results,process__$1,async){
return (function (state_33621){
var state_val_33622 = (state_33621[(1)]);
if((state_val_33622 === (1))){
var state_33621__$1 = state_33621;
var statearr_33623_35659 = state_33621__$1;
(statearr_33623_35659[(2)] = null);

(statearr_33623_35659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33622 === (2))){
var state_33621__$1 = state_33621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33621__$1,(4),jobs);
} else {
if((state_val_33622 === (3))){
var inst_33619 = (state_33621[(2)]);
var state_33621__$1 = state_33621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33621__$1,inst_33619);
} else {
if((state_val_33622 === (4))){
var inst_33611 = (state_33621[(2)]);
var inst_33612 = async(inst_33611);
var state_33621__$1 = state_33621;
if(cljs.core.truth_(inst_33612)){
var statearr_33626_35660 = state_33621__$1;
(statearr_33626_35660[(1)] = (5));

} else {
var statearr_33627_35661 = state_33621__$1;
(statearr_33627_35661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33622 === (5))){
var state_33621__$1 = state_33621;
var statearr_33628_35662 = state_33621__$1;
(statearr_33628_35662[(2)] = null);

(statearr_33628_35662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33622 === (6))){
var state_33621__$1 = state_33621;
var statearr_33629_35663 = state_33621__$1;
(statearr_33629_35663[(2)] = null);

(statearr_33629_35663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33622 === (7))){
var inst_33617 = (state_33621[(2)]);
var state_33621__$1 = state_33621;
var statearr_33630_35664 = state_33621__$1;
(statearr_33630_35664[(2)] = inst_33617);

(statearr_33630_35664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35640,c__33227__auto___35657,G__33577_35641,G__33577_35642__$1,n__5636__auto___35639,jobs,results,process__$1,async))
;
return ((function (__35640,switch__32824__auto__,c__33227__auto___35657,G__33577_35641,G__33577_35642__$1,n__5636__auto___35639,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____0 = (function (){
var statearr_33631 = [null,null,null,null,null,null,null];
(statearr_33631[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__);

(statearr_33631[(1)] = (1));

return statearr_33631;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____1 = (function (state_33621){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_33621);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e33632){var ex__32828__auto__ = e33632;
var statearr_33633_35665 = state_33621;
(statearr_33633_35665[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_33621[(4)]))){
var statearr_33634_35666 = state_33621;
(statearr_33634_35666[(1)] = cljs.core.first((state_33621[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35667 = state_33621;
state_33621 = G__35667;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__ = function(state_33621){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____1.call(this,state_33621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__;
})()
;})(__35640,switch__32824__auto__,c__33227__auto___35657,G__33577_35641,G__33577_35642__$1,n__5636__auto___35639,jobs,results,process__$1,async))
})();
var state__33229__auto__ = (function (){var statearr_33636 = f__33228__auto__();
(statearr_33636[(6)] = c__33227__auto___35657);

return statearr_33636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
});})(__35640,c__33227__auto___35657,G__33577_35641,G__33577_35642__$1,n__5636__auto___35639,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33577_35642__$1)].join('')));

}

var G__35668 = (__35640 + (1));
__35640 = G__35668;
continue;
} else {
}
break;
}

var c__33227__auto___35669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = (function (state_33659){
var state_val_33660 = (state_33659[(1)]);
if((state_val_33660 === (7))){
var inst_33655 = (state_33659[(2)]);
var state_33659__$1 = state_33659;
var statearr_33661_35670 = state_33659__$1;
(statearr_33661_35670[(2)] = inst_33655);

(statearr_33661_35670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (1))){
var state_33659__$1 = state_33659;
var statearr_33662_35671 = state_33659__$1;
(statearr_33662_35671[(2)] = null);

(statearr_33662_35671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (4))){
var inst_33640 = (state_33659[(7)]);
var inst_33640__$1 = (state_33659[(2)]);
var inst_33641 = (inst_33640__$1 == null);
var state_33659__$1 = (function (){var statearr_33663 = state_33659;
(statearr_33663[(7)] = inst_33640__$1);

return statearr_33663;
})();
if(cljs.core.truth_(inst_33641)){
var statearr_33664_35672 = state_33659__$1;
(statearr_33664_35672[(1)] = (5));

} else {
var statearr_33665_35673 = state_33659__$1;
(statearr_33665_35673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (6))){
var inst_33645 = (state_33659[(8)]);
var inst_33640 = (state_33659[(7)]);
var inst_33645__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33646 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33647 = [inst_33640,inst_33645__$1];
var inst_33648 = (new cljs.core.PersistentVector(null,2,(5),inst_33646,inst_33647,null));
var state_33659__$1 = (function (){var statearr_33666 = state_33659;
(statearr_33666[(8)] = inst_33645__$1);

return statearr_33666;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33659__$1,(8),jobs,inst_33648);
} else {
if((state_val_33660 === (3))){
var inst_33657 = (state_33659[(2)]);
var state_33659__$1 = state_33659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33659__$1,inst_33657);
} else {
if((state_val_33660 === (2))){
var state_33659__$1 = state_33659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33659__$1,(4),from);
} else {
if((state_val_33660 === (9))){
var inst_33652 = (state_33659[(2)]);
var state_33659__$1 = (function (){var statearr_33667 = state_33659;
(statearr_33667[(9)] = inst_33652);

return statearr_33667;
})();
var statearr_33668_35674 = state_33659__$1;
(statearr_33668_35674[(2)] = null);

(statearr_33668_35674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (5))){
var inst_33643 = cljs.core.async.close_BANG_(jobs);
var state_33659__$1 = state_33659;
var statearr_33671_35675 = state_33659__$1;
(statearr_33671_35675[(2)] = inst_33643);

(statearr_33671_35675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (8))){
var inst_33645 = (state_33659[(8)]);
var inst_33650 = (state_33659[(2)]);
var state_33659__$1 = (function (){var statearr_33672 = state_33659;
(statearr_33672[(10)] = inst_33650);

return statearr_33672;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33659__$1,(9),results,inst_33645);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____0 = (function (){
var statearr_33673 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33673[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__);

(statearr_33673[(1)] = (1));

return statearr_33673;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____1 = (function (state_33659){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_33659);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e33674){var ex__32828__auto__ = e33674;
var statearr_33675_35676 = state_33659;
(statearr_33675_35676[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_33659[(4)]))){
var statearr_33676_35677 = state_33659;
(statearr_33676_35677[(1)] = cljs.core.first((state_33659[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35678 = state_33659;
state_33659 = G__35678;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__ = function(state_33659){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____1.call(this,state_33659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__;
})()
})();
var state__33229__auto__ = (function (){var statearr_33677 = f__33228__auto__();
(statearr_33677[(6)] = c__33227__auto___35669);

return statearr_33677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
}));


var c__33227__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = (function (state_33715){
var state_val_33716 = (state_33715[(1)]);
if((state_val_33716 === (7))){
var inst_33711 = (state_33715[(2)]);
var state_33715__$1 = state_33715;
var statearr_33717_35681 = state_33715__$1;
(statearr_33717_35681[(2)] = inst_33711);

(statearr_33717_35681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33716 === (20))){
var state_33715__$1 = state_33715;
var statearr_33718_35682 = state_33715__$1;
(statearr_33718_35682[(2)] = null);

(statearr_33718_35682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33716 === (1))){
var state_33715__$1 = state_33715;
var statearr_33722_35683 = state_33715__$1;
(statearr_33722_35683[(2)] = null);

(statearr_33722_35683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33716 === (4))){
var inst_33680 = (state_33715[(7)]);
var inst_33680__$1 = (state_33715[(2)]);
var inst_33681 = (inst_33680__$1 == null);
var state_33715__$1 = (function (){var statearr_33723 = state_33715;
(statearr_33723[(7)] = inst_33680__$1);

return statearr_33723;
})();
if(cljs.core.truth_(inst_33681)){
var statearr_33724_35685 = state_33715__$1;
(statearr_33724_35685[(1)] = (5));

} else {
var statearr_33725_35686 = state_33715__$1;
(statearr_33725_35686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33716 === (15))){
var inst_33693 = (state_33715[(8)]);
var state_33715__$1 = state_33715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33715__$1,(18),to,inst_33693);
} else {
if((state_val_33716 === (21))){
var inst_33706 = (state_33715[(2)]);
var state_33715__$1 = state_33715;
var statearr_33732_35687 = state_33715__$1;
(statearr_33732_35687[(2)] = inst_33706);

(statearr_33732_35687[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33716 === (13))){
var inst_33708 = (state_33715[(2)]);
var state_33715__$1 = (function (){var statearr_33733 = state_33715;
(statearr_33733[(9)] = inst_33708);

return statearr_33733;
})();
var statearr_33734_35688 = state_33715__$1;
(statearr_33734_35688[(2)] = null);

(statearr_33734_35688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33716 === (6))){
var inst_33680 = (state_33715[(7)]);
var state_33715__$1 = state_33715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33715__$1,(11),inst_33680);
} else {
if((state_val_33716 === (17))){
var inst_33701 = (state_33715[(2)]);
var state_33715__$1 = state_33715;
if(cljs.core.truth_(inst_33701)){
var statearr_33735_35689 = state_33715__$1;
(statearr_33735_35689[(1)] = (19));

} else {
var statearr_33736_35690 = state_33715__$1;
(statearr_33736_35690[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33716 === (3))){
var inst_33713 = (state_33715[(2)]);
var state_33715__$1 = state_33715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33715__$1,inst_33713);
} else {
if((state_val_33716 === (12))){
var inst_33690 = (state_33715[(10)]);
var state_33715__$1 = state_33715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33715__$1,(14),inst_33690);
} else {
if((state_val_33716 === (2))){
var state_33715__$1 = state_33715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33715__$1,(4),results);
} else {
if((state_val_33716 === (19))){
var state_33715__$1 = state_33715;
var statearr_33745_35691 = state_33715__$1;
(statearr_33745_35691[(2)] = null);

(statearr_33745_35691[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33716 === (11))){
var inst_33690 = (state_33715[(2)]);
var state_33715__$1 = (function (){var statearr_33747 = state_33715;
(statearr_33747[(10)] = inst_33690);

return statearr_33747;
})();
var statearr_33750_35693 = state_33715__$1;
(statearr_33750_35693[(2)] = null);

(statearr_33750_35693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33716 === (9))){
var state_33715__$1 = state_33715;
var statearr_33752_35695 = state_33715__$1;
(statearr_33752_35695[(2)] = null);

(statearr_33752_35695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33716 === (5))){
var state_33715__$1 = state_33715;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33753_35696 = state_33715__$1;
(statearr_33753_35696[(1)] = (8));

} else {
var statearr_33754_35697 = state_33715__$1;
(statearr_33754_35697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33716 === (14))){
var inst_33693 = (state_33715[(8)]);
var inst_33695 = (state_33715[(11)]);
var inst_33693__$1 = (state_33715[(2)]);
var inst_33694 = (inst_33693__$1 == null);
var inst_33695__$1 = cljs.core.not(inst_33694);
var state_33715__$1 = (function (){var statearr_33756 = state_33715;
(statearr_33756[(8)] = inst_33693__$1);

(statearr_33756[(11)] = inst_33695__$1);

return statearr_33756;
})();
if(inst_33695__$1){
var statearr_33757_35698 = state_33715__$1;
(statearr_33757_35698[(1)] = (15));

} else {
var statearr_33760_35699 = state_33715__$1;
(statearr_33760_35699[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33716 === (16))){
var inst_33695 = (state_33715[(11)]);
var state_33715__$1 = state_33715;
var statearr_33762_35700 = state_33715__$1;
(statearr_33762_35700[(2)] = inst_33695);

(statearr_33762_35700[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33716 === (10))){
var inst_33687 = (state_33715[(2)]);
var state_33715__$1 = state_33715;
var statearr_33764_35701 = state_33715__$1;
(statearr_33764_35701[(2)] = inst_33687);

(statearr_33764_35701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33716 === (18))){
var inst_33698 = (state_33715[(2)]);
var state_33715__$1 = state_33715;
var statearr_33767_35702 = state_33715__$1;
(statearr_33767_35702[(2)] = inst_33698);

(statearr_33767_35702[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33716 === (8))){
var inst_33684 = cljs.core.async.close_BANG_(to);
var state_33715__$1 = state_33715;
var statearr_33769_35703 = state_33715__$1;
(statearr_33769_35703[(2)] = inst_33684);

(statearr_33769_35703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____0 = (function (){
var statearr_33774 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33774[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__);

(statearr_33774[(1)] = (1));

return statearr_33774;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____1 = (function (state_33715){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_33715);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e33776){var ex__32828__auto__ = e33776;
var statearr_33777_35705 = state_33715;
(statearr_33777_35705[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_33715[(4)]))){
var statearr_33780_35706 = state_33715;
(statearr_33780_35706[(1)] = cljs.core.first((state_33715[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35707 = state_33715;
state_33715 = G__35707;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__ = function(state_33715){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____1.call(this,state_33715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32825__auto__;
})()
})();
var state__33229__auto__ = (function (){var statearr_33786 = f__33228__auto__();
(statearr_33786[(6)] = c__33227__auto__);

return statearr_33786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
}));

return c__33227__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33793 = arguments.length;
switch (G__33793) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33811 = arguments.length;
switch (G__33811) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33820 = arguments.length;
switch (G__33820) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33227__auto___35711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = (function (state_33850){
var state_val_33851 = (state_33850[(1)]);
if((state_val_33851 === (7))){
var inst_33845 = (state_33850[(2)]);
var state_33850__$1 = state_33850;
var statearr_33856_35712 = state_33850__$1;
(statearr_33856_35712[(2)] = inst_33845);

(statearr_33856_35712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (1))){
var state_33850__$1 = state_33850;
var statearr_33858_35713 = state_33850__$1;
(statearr_33858_35713[(2)] = null);

(statearr_33858_35713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (4))){
var inst_33824 = (state_33850[(7)]);
var inst_33824__$1 = (state_33850[(2)]);
var inst_33825 = (inst_33824__$1 == null);
var state_33850__$1 = (function (){var statearr_33863 = state_33850;
(statearr_33863[(7)] = inst_33824__$1);

return statearr_33863;
})();
if(cljs.core.truth_(inst_33825)){
var statearr_33864_35714 = state_33850__$1;
(statearr_33864_35714[(1)] = (5));

} else {
var statearr_33865_35715 = state_33850__$1;
(statearr_33865_35715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (13))){
var state_33850__$1 = state_33850;
var statearr_33867_35716 = state_33850__$1;
(statearr_33867_35716[(2)] = null);

(statearr_33867_35716[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (6))){
var inst_33824 = (state_33850[(7)]);
var inst_33830 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33824) : p.call(null,inst_33824));
var state_33850__$1 = state_33850;
if(cljs.core.truth_(inst_33830)){
var statearr_33871_35717 = state_33850__$1;
(statearr_33871_35717[(1)] = (9));

} else {
var statearr_33872_35718 = state_33850__$1;
(statearr_33872_35718[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (3))){
var inst_33847 = (state_33850[(2)]);
var state_33850__$1 = state_33850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33850__$1,inst_33847);
} else {
if((state_val_33851 === (12))){
var state_33850__$1 = state_33850;
var statearr_33877_35719 = state_33850__$1;
(statearr_33877_35719[(2)] = null);

(statearr_33877_35719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (2))){
var state_33850__$1 = state_33850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33850__$1,(4),ch);
} else {
if((state_val_33851 === (11))){
var inst_33824 = (state_33850[(7)]);
var inst_33834 = (state_33850[(2)]);
var state_33850__$1 = state_33850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33850__$1,(8),inst_33834,inst_33824);
} else {
if((state_val_33851 === (9))){
var state_33850__$1 = state_33850;
var statearr_33880_35720 = state_33850__$1;
(statearr_33880_35720[(2)] = tc);

(statearr_33880_35720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (5))){
var inst_33827 = cljs.core.async.close_BANG_(tc);
var inst_33828 = cljs.core.async.close_BANG_(fc);
var state_33850__$1 = (function (){var statearr_33884 = state_33850;
(statearr_33884[(8)] = inst_33827);

return statearr_33884;
})();
var statearr_33886_35721 = state_33850__$1;
(statearr_33886_35721[(2)] = inst_33828);

(statearr_33886_35721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (14))){
var inst_33843 = (state_33850[(2)]);
var state_33850__$1 = state_33850;
var statearr_33888_35722 = state_33850__$1;
(statearr_33888_35722[(2)] = inst_33843);

(statearr_33888_35722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (10))){
var state_33850__$1 = state_33850;
var statearr_33891_35723 = state_33850__$1;
(statearr_33891_35723[(2)] = fc);

(statearr_33891_35723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (8))){
var inst_33836 = (state_33850[(2)]);
var state_33850__$1 = state_33850;
if(cljs.core.truth_(inst_33836)){
var statearr_33893_35724 = state_33850__$1;
(statearr_33893_35724[(1)] = (12));

} else {
var statearr_33894_35725 = state_33850__$1;
(statearr_33894_35725[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32825__auto__ = null;
var cljs$core$async$state_machine__32825__auto____0 = (function (){
var statearr_33896 = [null,null,null,null,null,null,null,null,null];
(statearr_33896[(0)] = cljs$core$async$state_machine__32825__auto__);

(statearr_33896[(1)] = (1));

return statearr_33896;
});
var cljs$core$async$state_machine__32825__auto____1 = (function (state_33850){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_33850);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e33899){var ex__32828__auto__ = e33899;
var statearr_33901_35726 = state_33850;
(statearr_33901_35726[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_33850[(4)]))){
var statearr_33902_35727 = state_33850;
(statearr_33902_35727[(1)] = cljs.core.first((state_33850[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35728 = state_33850;
state_33850 = G__35728;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
cljs$core$async$state_machine__32825__auto__ = function(state_33850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32825__auto____1.call(this,state_33850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32825__auto____0;
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32825__auto____1;
return cljs$core$async$state_machine__32825__auto__;
})()
})();
var state__33229__auto__ = (function (){var statearr_33906 = f__33228__auto__();
(statearr_33906[(6)] = c__33227__auto___35711);

return statearr_33906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33227__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = (function (state_33950){
var state_val_33951 = (state_33950[(1)]);
if((state_val_33951 === (7))){
var inst_33946 = (state_33950[(2)]);
var state_33950__$1 = state_33950;
var statearr_33957_35729 = state_33950__$1;
(statearr_33957_35729[(2)] = inst_33946);

(statearr_33957_35729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (1))){
var inst_33917 = init;
var inst_33918 = inst_33917;
var state_33950__$1 = (function (){var statearr_33960 = state_33950;
(statearr_33960[(7)] = inst_33918);

return statearr_33960;
})();
var statearr_33961_35730 = state_33950__$1;
(statearr_33961_35730[(2)] = null);

(statearr_33961_35730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (4))){
var inst_33921 = (state_33950[(8)]);
var inst_33921__$1 = (state_33950[(2)]);
var inst_33922 = (inst_33921__$1 == null);
var state_33950__$1 = (function (){var statearr_33963 = state_33950;
(statearr_33963[(8)] = inst_33921__$1);

return statearr_33963;
})();
if(cljs.core.truth_(inst_33922)){
var statearr_33967_35731 = state_33950__$1;
(statearr_33967_35731[(1)] = (5));

} else {
var statearr_33968_35732 = state_33950__$1;
(statearr_33968_35732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (6))){
var inst_33918 = (state_33950[(7)]);
var inst_33921 = (state_33950[(8)]);
var inst_33926 = (state_33950[(9)]);
var inst_33926__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33918,inst_33921) : f.call(null,inst_33918,inst_33921));
var inst_33927 = cljs.core.reduced_QMARK_(inst_33926__$1);
var state_33950__$1 = (function (){var statearr_33971 = state_33950;
(statearr_33971[(9)] = inst_33926__$1);

return statearr_33971;
})();
if(inst_33927){
var statearr_33976_35733 = state_33950__$1;
(statearr_33976_35733[(1)] = (8));

} else {
var statearr_33978_35734 = state_33950__$1;
(statearr_33978_35734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (3))){
var inst_33948 = (state_33950[(2)]);
var state_33950__$1 = state_33950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33950__$1,inst_33948);
} else {
if((state_val_33951 === (2))){
var state_33950__$1 = state_33950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33950__$1,(4),ch);
} else {
if((state_val_33951 === (9))){
var inst_33926 = (state_33950[(9)]);
var inst_33918 = inst_33926;
var state_33950__$1 = (function (){var statearr_34002 = state_33950;
(statearr_34002[(7)] = inst_33918);

return statearr_34002;
})();
var statearr_34003_35735 = state_33950__$1;
(statearr_34003_35735[(2)] = null);

(statearr_34003_35735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (5))){
var inst_33918 = (state_33950[(7)]);
var state_33950__$1 = state_33950;
var statearr_34005_35737 = state_33950__$1;
(statearr_34005_35737[(2)] = inst_33918);

(statearr_34005_35737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (10))){
var inst_33944 = (state_33950[(2)]);
var state_33950__$1 = state_33950;
var statearr_34009_35739 = state_33950__$1;
(statearr_34009_35739[(2)] = inst_33944);

(statearr_34009_35739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (8))){
var inst_33926 = (state_33950[(9)]);
var inst_33939 = cljs.core.deref(inst_33926);
var state_33950__$1 = state_33950;
var statearr_34011_35740 = state_33950__$1;
(statearr_34011_35740[(2)] = inst_33939);

(statearr_34011_35740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32825__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32825__auto____0 = (function (){
var statearr_34015 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34015[(0)] = cljs$core$async$reduce_$_state_machine__32825__auto__);

(statearr_34015[(1)] = (1));

return statearr_34015;
});
var cljs$core$async$reduce_$_state_machine__32825__auto____1 = (function (state_33950){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_33950);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e34016){var ex__32828__auto__ = e34016;
var statearr_34018_35741 = state_33950;
(statearr_34018_35741[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_33950[(4)]))){
var statearr_34019_35742 = state_33950;
(statearr_34019_35742[(1)] = cljs.core.first((state_33950[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35744 = state_33950;
state_33950 = G__35744;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32825__auto__ = function(state_33950){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32825__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32825__auto____1.call(this,state_33950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32825__auto____0;
cljs$core$async$reduce_$_state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32825__auto____1;
return cljs$core$async$reduce_$_state_machine__32825__auto__;
})()
})();
var state__33229__auto__ = (function (){var statearr_34023 = f__33228__auto__();
(statearr_34023[(6)] = c__33227__auto__);

return statearr_34023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
}));

return c__33227__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33227__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = (function (state_34032){
var state_val_34033 = (state_34032[(1)]);
if((state_val_34033 === (1))){
var inst_34027 = cljs.core.async.reduce(f__$1,init,ch);
var state_34032__$1 = state_34032;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34032__$1,(2),inst_34027);
} else {
if((state_val_34033 === (2))){
var inst_34029 = (state_34032[(2)]);
var inst_34030 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34029) : f__$1.call(null,inst_34029));
var state_34032__$1 = state_34032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34032__$1,inst_34030);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32825__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32825__auto____0 = (function (){
var statearr_34036 = [null,null,null,null,null,null,null];
(statearr_34036[(0)] = cljs$core$async$transduce_$_state_machine__32825__auto__);

(statearr_34036[(1)] = (1));

return statearr_34036;
});
var cljs$core$async$transduce_$_state_machine__32825__auto____1 = (function (state_34032){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_34032);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e34037){var ex__32828__auto__ = e34037;
var statearr_34038_35746 = state_34032;
(statearr_34038_35746[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_34032[(4)]))){
var statearr_34039_35747 = state_34032;
(statearr_34039_35747[(1)] = cljs.core.first((state_34032[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35748 = state_34032;
state_34032 = G__35748;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32825__auto__ = function(state_34032){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32825__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32825__auto____1.call(this,state_34032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32825__auto____0;
cljs$core$async$transduce_$_state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32825__auto____1;
return cljs$core$async$transduce_$_state_machine__32825__auto__;
})()
})();
var state__33229__auto__ = (function (){var statearr_34040 = f__33228__auto__();
(statearr_34040[(6)] = c__33227__auto__);

return statearr_34040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
}));

return c__33227__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34042 = arguments.length;
switch (G__34042) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33227__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = (function (state_34067){
var state_val_34068 = (state_34067[(1)]);
if((state_val_34068 === (7))){
var inst_34049 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
var statearr_34069_35750 = state_34067__$1;
(statearr_34069_35750[(2)] = inst_34049);

(statearr_34069_35750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (1))){
var inst_34043 = cljs.core.seq(coll);
var inst_34044 = inst_34043;
var state_34067__$1 = (function (){var statearr_34070 = state_34067;
(statearr_34070[(7)] = inst_34044);

return statearr_34070;
})();
var statearr_34071_35751 = state_34067__$1;
(statearr_34071_35751[(2)] = null);

(statearr_34071_35751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (4))){
var inst_34044 = (state_34067[(7)]);
var inst_34047 = cljs.core.first(inst_34044);
var state_34067__$1 = state_34067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34067__$1,(7),ch,inst_34047);
} else {
if((state_val_34068 === (13))){
var inst_34061 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
var statearr_34072_35752 = state_34067__$1;
(statearr_34072_35752[(2)] = inst_34061);

(statearr_34072_35752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (6))){
var inst_34052 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
if(cljs.core.truth_(inst_34052)){
var statearr_34073_35753 = state_34067__$1;
(statearr_34073_35753[(1)] = (8));

} else {
var statearr_34074_35754 = state_34067__$1;
(statearr_34074_35754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (3))){
var inst_34065 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34067__$1,inst_34065);
} else {
if((state_val_34068 === (12))){
var state_34067__$1 = state_34067;
var statearr_34075_35755 = state_34067__$1;
(statearr_34075_35755[(2)] = null);

(statearr_34075_35755[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (2))){
var inst_34044 = (state_34067[(7)]);
var state_34067__$1 = state_34067;
if(cljs.core.truth_(inst_34044)){
var statearr_34076_35756 = state_34067__$1;
(statearr_34076_35756[(1)] = (4));

} else {
var statearr_34077_35757 = state_34067__$1;
(statearr_34077_35757[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (11))){
var inst_34058 = cljs.core.async.close_BANG_(ch);
var state_34067__$1 = state_34067;
var statearr_34078_35758 = state_34067__$1;
(statearr_34078_35758[(2)] = inst_34058);

(statearr_34078_35758[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (9))){
var state_34067__$1 = state_34067;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34079_35759 = state_34067__$1;
(statearr_34079_35759[(1)] = (11));

} else {
var statearr_34080_35760 = state_34067__$1;
(statearr_34080_35760[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (5))){
var inst_34044 = (state_34067[(7)]);
var state_34067__$1 = state_34067;
var statearr_34081_35761 = state_34067__$1;
(statearr_34081_35761[(2)] = inst_34044);

(statearr_34081_35761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (10))){
var inst_34063 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
var statearr_34082_35762 = state_34067__$1;
(statearr_34082_35762[(2)] = inst_34063);

(statearr_34082_35762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (8))){
var inst_34044 = (state_34067[(7)]);
var inst_34054 = cljs.core.next(inst_34044);
var inst_34044__$1 = inst_34054;
var state_34067__$1 = (function (){var statearr_34085 = state_34067;
(statearr_34085[(7)] = inst_34044__$1);

return statearr_34085;
})();
var statearr_34086_35763 = state_34067__$1;
(statearr_34086_35763[(2)] = null);

(statearr_34086_35763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32825__auto__ = null;
var cljs$core$async$state_machine__32825__auto____0 = (function (){
var statearr_34087 = [null,null,null,null,null,null,null,null];
(statearr_34087[(0)] = cljs$core$async$state_machine__32825__auto__);

(statearr_34087[(1)] = (1));

return statearr_34087;
});
var cljs$core$async$state_machine__32825__auto____1 = (function (state_34067){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_34067);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e34088){var ex__32828__auto__ = e34088;
var statearr_34089_35764 = state_34067;
(statearr_34089_35764[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_34067[(4)]))){
var statearr_34090_35765 = state_34067;
(statearr_34090_35765[(1)] = cljs.core.first((state_34067[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35766 = state_34067;
state_34067 = G__35766;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
cljs$core$async$state_machine__32825__auto__ = function(state_34067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32825__auto____1.call(this,state_34067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32825__auto____0;
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32825__auto____1;
return cljs$core$async$state_machine__32825__auto__;
})()
})();
var state__33229__auto__ = (function (){var statearr_34095 = f__33228__auto__();
(statearr_34095[(6)] = c__33227__auto__);

return statearr_34095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
}));

return c__33227__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34102 = arguments.length;
switch (G__34102) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35771 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35771(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35772 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35772(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35773 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35773(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35774 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35774(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34140 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34140 = (function (ch,cs,meta34141){
this.ch = ch;
this.cs = cs;
this.meta34141 = meta34141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34142,meta34141__$1){
var self__ = this;
var _34142__$1 = this;
return (new cljs.core.async.t_cljs$core$async34140(self__.ch,self__.cs,meta34141__$1));
}));

(cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34142){
var self__ = this;
var _34142__$1 = this;
return self__.meta34141;
}));

(cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34141","meta34141",846809801,null)], null);
}));

(cljs.core.async.t_cljs$core$async34140.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34140");

(cljs.core.async.t_cljs$core$async34140.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34140");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34140.
 */
cljs.core.async.__GT_t_cljs$core$async34140 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34140(ch__$1,cs__$1,meta34141){
return (new cljs.core.async.t_cljs$core$async34140(ch__$1,cs__$1,meta34141));
});

}

return (new cljs.core.async.t_cljs$core$async34140(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33227__auto___35775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = (function (state_34325){
var state_val_34326 = (state_34325[(1)]);
if((state_val_34326 === (7))){
var inst_34317 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34328_35776 = state_34325__$1;
(statearr_34328_35776[(2)] = inst_34317);

(statearr_34328_35776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (20))){
var inst_34197 = (state_34325[(7)]);
var inst_34209 = cljs.core.first(inst_34197);
var inst_34213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34209,(0),null);
var inst_34214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34209,(1),null);
var state_34325__$1 = (function (){var statearr_34329 = state_34325;
(statearr_34329[(8)] = inst_34213);

return statearr_34329;
})();
if(cljs.core.truth_(inst_34214)){
var statearr_34330_35777 = state_34325__$1;
(statearr_34330_35777[(1)] = (22));

} else {
var statearr_34331_35778 = state_34325__$1;
(statearr_34331_35778[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (27))){
var inst_34245 = (state_34325[(9)]);
var inst_34243 = (state_34325[(10)]);
var inst_34162 = (state_34325[(11)]);
var inst_34263 = (state_34325[(12)]);
var inst_34263__$1 = cljs.core._nth(inst_34243,inst_34245);
var inst_34264 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34263__$1,inst_34162,done);
var state_34325__$1 = (function (){var statearr_34332 = state_34325;
(statearr_34332[(12)] = inst_34263__$1);

return statearr_34332;
})();
if(cljs.core.truth_(inst_34264)){
var statearr_34333_35779 = state_34325__$1;
(statearr_34333_35779[(1)] = (30));

} else {
var statearr_34335_35780 = state_34325__$1;
(statearr_34335_35780[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (1))){
var state_34325__$1 = state_34325;
var statearr_34337_35781 = state_34325__$1;
(statearr_34337_35781[(2)] = null);

(statearr_34337_35781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (24))){
var inst_34197 = (state_34325[(7)]);
var inst_34220 = (state_34325[(2)]);
var inst_34221 = cljs.core.next(inst_34197);
var inst_34171 = inst_34221;
var inst_34172 = null;
var inst_34173 = (0);
var inst_34174 = (0);
var state_34325__$1 = (function (){var statearr_34338 = state_34325;
(statearr_34338[(13)] = inst_34171);

(statearr_34338[(14)] = inst_34174);

(statearr_34338[(15)] = inst_34220);

(statearr_34338[(16)] = inst_34172);

(statearr_34338[(17)] = inst_34173);

return statearr_34338;
})();
var statearr_34339_35782 = state_34325__$1;
(statearr_34339_35782[(2)] = null);

(statearr_34339_35782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (39))){
var state_34325__$1 = state_34325;
var statearr_34343_35783 = state_34325__$1;
(statearr_34343_35783[(2)] = null);

(statearr_34343_35783[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (4))){
var inst_34162 = (state_34325[(11)]);
var inst_34162__$1 = (state_34325[(2)]);
var inst_34163 = (inst_34162__$1 == null);
var state_34325__$1 = (function (){var statearr_34344 = state_34325;
(statearr_34344[(11)] = inst_34162__$1);

return statearr_34344;
})();
if(cljs.core.truth_(inst_34163)){
var statearr_34345_35784 = state_34325__$1;
(statearr_34345_35784[(1)] = (5));

} else {
var statearr_34346_35785 = state_34325__$1;
(statearr_34346_35785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (15))){
var inst_34171 = (state_34325[(13)]);
var inst_34174 = (state_34325[(14)]);
var inst_34172 = (state_34325[(16)]);
var inst_34173 = (state_34325[(17)]);
var inst_34193 = (state_34325[(2)]);
var inst_34194 = (inst_34174 + (1));
var tmp34340 = inst_34171;
var tmp34341 = inst_34172;
var tmp34342 = inst_34173;
var inst_34171__$1 = tmp34340;
var inst_34172__$1 = tmp34341;
var inst_34173__$1 = tmp34342;
var inst_34174__$1 = inst_34194;
var state_34325__$1 = (function (){var statearr_34347 = state_34325;
(statearr_34347[(13)] = inst_34171__$1);

(statearr_34347[(18)] = inst_34193);

(statearr_34347[(14)] = inst_34174__$1);

(statearr_34347[(16)] = inst_34172__$1);

(statearr_34347[(17)] = inst_34173__$1);

return statearr_34347;
})();
var statearr_34348_35786 = state_34325__$1;
(statearr_34348_35786[(2)] = null);

(statearr_34348_35786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (21))){
var inst_34224 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34352_35787 = state_34325__$1;
(statearr_34352_35787[(2)] = inst_34224);

(statearr_34352_35787[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (31))){
var inst_34263 = (state_34325[(12)]);
var inst_34267 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34263);
var state_34325__$1 = state_34325;
var statearr_34353_35788 = state_34325__$1;
(statearr_34353_35788[(2)] = inst_34267);

(statearr_34353_35788[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (32))){
var inst_34242 = (state_34325[(19)]);
var inst_34244 = (state_34325[(20)]);
var inst_34245 = (state_34325[(9)]);
var inst_34243 = (state_34325[(10)]);
var inst_34269 = (state_34325[(2)]);
var inst_34270 = (inst_34245 + (1));
var tmp34349 = inst_34242;
var tmp34350 = inst_34244;
var tmp34351 = inst_34243;
var inst_34242__$1 = tmp34349;
var inst_34243__$1 = tmp34351;
var inst_34244__$1 = tmp34350;
var inst_34245__$1 = inst_34270;
var state_34325__$1 = (function (){var statearr_34354 = state_34325;
(statearr_34354[(19)] = inst_34242__$1);

(statearr_34354[(20)] = inst_34244__$1);

(statearr_34354[(21)] = inst_34269);

(statearr_34354[(9)] = inst_34245__$1);

(statearr_34354[(10)] = inst_34243__$1);

return statearr_34354;
})();
var statearr_34355_35789 = state_34325__$1;
(statearr_34355_35789[(2)] = null);

(statearr_34355_35789[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (40))){
var inst_34290 = (state_34325[(22)]);
var inst_34294 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34290);
var state_34325__$1 = state_34325;
var statearr_34356_35790 = state_34325__$1;
(statearr_34356_35790[(2)] = inst_34294);

(statearr_34356_35790[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (33))){
var inst_34276 = (state_34325[(23)]);
var inst_34279 = cljs.core.chunked_seq_QMARK_(inst_34276);
var state_34325__$1 = state_34325;
if(inst_34279){
var statearr_34357_35791 = state_34325__$1;
(statearr_34357_35791[(1)] = (36));

} else {
var statearr_34358_35792 = state_34325__$1;
(statearr_34358_35792[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (13))){
var inst_34186 = (state_34325[(24)]);
var inst_34190 = cljs.core.async.close_BANG_(inst_34186);
var state_34325__$1 = state_34325;
var statearr_34359_35793 = state_34325__$1;
(statearr_34359_35793[(2)] = inst_34190);

(statearr_34359_35793[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (22))){
var inst_34213 = (state_34325[(8)]);
var inst_34217 = cljs.core.async.close_BANG_(inst_34213);
var state_34325__$1 = state_34325;
var statearr_34360_35794 = state_34325__$1;
(statearr_34360_35794[(2)] = inst_34217);

(statearr_34360_35794[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (36))){
var inst_34276 = (state_34325[(23)]);
var inst_34281 = cljs.core.chunk_first(inst_34276);
var inst_34282 = cljs.core.chunk_rest(inst_34276);
var inst_34287 = cljs.core.count(inst_34281);
var inst_34242 = inst_34282;
var inst_34243 = inst_34281;
var inst_34244 = inst_34287;
var inst_34245 = (0);
var state_34325__$1 = (function (){var statearr_34361 = state_34325;
(statearr_34361[(19)] = inst_34242);

(statearr_34361[(20)] = inst_34244);

(statearr_34361[(9)] = inst_34245);

(statearr_34361[(10)] = inst_34243);

return statearr_34361;
})();
var statearr_34362_35795 = state_34325__$1;
(statearr_34362_35795[(2)] = null);

(statearr_34362_35795[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (41))){
var inst_34276 = (state_34325[(23)]);
var inst_34296 = (state_34325[(2)]);
var inst_34297 = cljs.core.next(inst_34276);
var inst_34242 = inst_34297;
var inst_34243 = null;
var inst_34244 = (0);
var inst_34245 = (0);
var state_34325__$1 = (function (){var statearr_34363 = state_34325;
(statearr_34363[(19)] = inst_34242);

(statearr_34363[(20)] = inst_34244);

(statearr_34363[(9)] = inst_34245);

(statearr_34363[(25)] = inst_34296);

(statearr_34363[(10)] = inst_34243);

return statearr_34363;
})();
var statearr_34364_35796 = state_34325__$1;
(statearr_34364_35796[(2)] = null);

(statearr_34364_35796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (43))){
var state_34325__$1 = state_34325;
var statearr_34365_35797 = state_34325__$1;
(statearr_34365_35797[(2)] = null);

(statearr_34365_35797[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (29))){
var inst_34305 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34366_35798 = state_34325__$1;
(statearr_34366_35798[(2)] = inst_34305);

(statearr_34366_35798[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (44))){
var inst_34314 = (state_34325[(2)]);
var state_34325__$1 = (function (){var statearr_34367 = state_34325;
(statearr_34367[(26)] = inst_34314);

return statearr_34367;
})();
var statearr_34368_35799 = state_34325__$1;
(statearr_34368_35799[(2)] = null);

(statearr_34368_35799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (6))){
var inst_34234 = (state_34325[(27)]);
var inst_34233 = cljs.core.deref(cs);
var inst_34234__$1 = cljs.core.keys(inst_34233);
var inst_34235 = cljs.core.count(inst_34234__$1);
var inst_34236 = cljs.core.reset_BANG_(dctr,inst_34235);
var inst_34241 = cljs.core.seq(inst_34234__$1);
var inst_34242 = inst_34241;
var inst_34243 = null;
var inst_34244 = (0);
var inst_34245 = (0);
var state_34325__$1 = (function (){var statearr_34369 = state_34325;
(statearr_34369[(19)] = inst_34242);

(statearr_34369[(20)] = inst_34244);

(statearr_34369[(27)] = inst_34234__$1);

(statearr_34369[(28)] = inst_34236);

(statearr_34369[(9)] = inst_34245);

(statearr_34369[(10)] = inst_34243);

return statearr_34369;
})();
var statearr_34370_35800 = state_34325__$1;
(statearr_34370_35800[(2)] = null);

(statearr_34370_35800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (28))){
var inst_34242 = (state_34325[(19)]);
var inst_34276 = (state_34325[(23)]);
var inst_34276__$1 = cljs.core.seq(inst_34242);
var state_34325__$1 = (function (){var statearr_34371 = state_34325;
(statearr_34371[(23)] = inst_34276__$1);

return statearr_34371;
})();
if(inst_34276__$1){
var statearr_34373_35801 = state_34325__$1;
(statearr_34373_35801[(1)] = (33));

} else {
var statearr_34374_35802 = state_34325__$1;
(statearr_34374_35802[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (25))){
var inst_34244 = (state_34325[(20)]);
var inst_34245 = (state_34325[(9)]);
var inst_34260 = (inst_34245 < inst_34244);
var inst_34261 = inst_34260;
var state_34325__$1 = state_34325;
if(cljs.core.truth_(inst_34261)){
var statearr_34376_35803 = state_34325__$1;
(statearr_34376_35803[(1)] = (27));

} else {
var statearr_34377_35804 = state_34325__$1;
(statearr_34377_35804[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (34))){
var state_34325__$1 = state_34325;
var statearr_34378_35805 = state_34325__$1;
(statearr_34378_35805[(2)] = null);

(statearr_34378_35805[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (17))){
var state_34325__$1 = state_34325;
var statearr_34379_35806 = state_34325__$1;
(statearr_34379_35806[(2)] = null);

(statearr_34379_35806[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (3))){
var inst_34319 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34325__$1,inst_34319);
} else {
if((state_val_34326 === (12))){
var inst_34229 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34380_35807 = state_34325__$1;
(statearr_34380_35807[(2)] = inst_34229);

(statearr_34380_35807[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (2))){
var state_34325__$1 = state_34325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34325__$1,(4),ch);
} else {
if((state_val_34326 === (23))){
var state_34325__$1 = state_34325;
var statearr_34383_35809 = state_34325__$1;
(statearr_34383_35809[(2)] = null);

(statearr_34383_35809[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (35))){
var inst_34303 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34384_35810 = state_34325__$1;
(statearr_34384_35810[(2)] = inst_34303);

(statearr_34384_35810[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (19))){
var inst_34197 = (state_34325[(7)]);
var inst_34201 = cljs.core.chunk_first(inst_34197);
var inst_34202 = cljs.core.chunk_rest(inst_34197);
var inst_34203 = cljs.core.count(inst_34201);
var inst_34171 = inst_34202;
var inst_34172 = inst_34201;
var inst_34173 = inst_34203;
var inst_34174 = (0);
var state_34325__$1 = (function (){var statearr_34385 = state_34325;
(statearr_34385[(13)] = inst_34171);

(statearr_34385[(14)] = inst_34174);

(statearr_34385[(16)] = inst_34172);

(statearr_34385[(17)] = inst_34173);

return statearr_34385;
})();
var statearr_34386_35812 = state_34325__$1;
(statearr_34386_35812[(2)] = null);

(statearr_34386_35812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (11))){
var inst_34171 = (state_34325[(13)]);
var inst_34197 = (state_34325[(7)]);
var inst_34197__$1 = cljs.core.seq(inst_34171);
var state_34325__$1 = (function (){var statearr_34388 = state_34325;
(statearr_34388[(7)] = inst_34197__$1);

return statearr_34388;
})();
if(inst_34197__$1){
var statearr_34390_35813 = state_34325__$1;
(statearr_34390_35813[(1)] = (16));

} else {
var statearr_34391_35814 = state_34325__$1;
(statearr_34391_35814[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (9))){
var inst_34231 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34392_35815 = state_34325__$1;
(statearr_34392_35815[(2)] = inst_34231);

(statearr_34392_35815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (5))){
var inst_34169 = cljs.core.deref(cs);
var inst_34170 = cljs.core.seq(inst_34169);
var inst_34171 = inst_34170;
var inst_34172 = null;
var inst_34173 = (0);
var inst_34174 = (0);
var state_34325__$1 = (function (){var statearr_34393 = state_34325;
(statearr_34393[(13)] = inst_34171);

(statearr_34393[(14)] = inst_34174);

(statearr_34393[(16)] = inst_34172);

(statearr_34393[(17)] = inst_34173);

return statearr_34393;
})();
var statearr_34394_35818 = state_34325__$1;
(statearr_34394_35818[(2)] = null);

(statearr_34394_35818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (14))){
var state_34325__$1 = state_34325;
var statearr_34395_35819 = state_34325__$1;
(statearr_34395_35819[(2)] = null);

(statearr_34395_35819[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (45))){
var inst_34311 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34396_35821 = state_34325__$1;
(statearr_34396_35821[(2)] = inst_34311);

(statearr_34396_35821[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (26))){
var inst_34234 = (state_34325[(27)]);
var inst_34307 = (state_34325[(2)]);
var inst_34308 = cljs.core.seq(inst_34234);
var state_34325__$1 = (function (){var statearr_34397 = state_34325;
(statearr_34397[(29)] = inst_34307);

return statearr_34397;
})();
if(inst_34308){
var statearr_34398_35822 = state_34325__$1;
(statearr_34398_35822[(1)] = (42));

} else {
var statearr_34399_35823 = state_34325__$1;
(statearr_34399_35823[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (16))){
var inst_34197 = (state_34325[(7)]);
var inst_34199 = cljs.core.chunked_seq_QMARK_(inst_34197);
var state_34325__$1 = state_34325;
if(inst_34199){
var statearr_34400_35824 = state_34325__$1;
(statearr_34400_35824[(1)] = (19));

} else {
var statearr_34401_35825 = state_34325__$1;
(statearr_34401_35825[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (38))){
var inst_34300 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34402_35826 = state_34325__$1;
(statearr_34402_35826[(2)] = inst_34300);

(statearr_34402_35826[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (30))){
var state_34325__$1 = state_34325;
var statearr_34403_35827 = state_34325__$1;
(statearr_34403_35827[(2)] = null);

(statearr_34403_35827[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (10))){
var inst_34174 = (state_34325[(14)]);
var inst_34172 = (state_34325[(16)]);
var inst_34185 = cljs.core._nth(inst_34172,inst_34174);
var inst_34186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34185,(0),null);
var inst_34187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34185,(1),null);
var state_34325__$1 = (function (){var statearr_34404 = state_34325;
(statearr_34404[(24)] = inst_34186);

return statearr_34404;
})();
if(cljs.core.truth_(inst_34187)){
var statearr_34406_35828 = state_34325__$1;
(statearr_34406_35828[(1)] = (13));

} else {
var statearr_34407_35829 = state_34325__$1;
(statearr_34407_35829[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (18))){
var inst_34227 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34409_35830 = state_34325__$1;
(statearr_34409_35830[(2)] = inst_34227);

(statearr_34409_35830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (42))){
var state_34325__$1 = state_34325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34325__$1,(45),dchan);
} else {
if((state_val_34326 === (37))){
var inst_34290 = (state_34325[(22)]);
var inst_34276 = (state_34325[(23)]);
var inst_34162 = (state_34325[(11)]);
var inst_34290__$1 = cljs.core.first(inst_34276);
var inst_34291 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34290__$1,inst_34162,done);
var state_34325__$1 = (function (){var statearr_34410 = state_34325;
(statearr_34410[(22)] = inst_34290__$1);

return statearr_34410;
})();
if(cljs.core.truth_(inst_34291)){
var statearr_34411_35831 = state_34325__$1;
(statearr_34411_35831[(1)] = (39));

} else {
var statearr_34412_35832 = state_34325__$1;
(statearr_34412_35832[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (8))){
var inst_34174 = (state_34325[(14)]);
var inst_34173 = (state_34325[(17)]);
var inst_34176 = (inst_34174 < inst_34173);
var inst_34177 = inst_34176;
var state_34325__$1 = state_34325;
if(cljs.core.truth_(inst_34177)){
var statearr_34414_35833 = state_34325__$1;
(statearr_34414_35833[(1)] = (10));

} else {
var statearr_34418_35834 = state_34325__$1;
(statearr_34418_35834[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32825__auto__ = null;
var cljs$core$async$mult_$_state_machine__32825__auto____0 = (function (){
var statearr_34419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34419[(0)] = cljs$core$async$mult_$_state_machine__32825__auto__);

(statearr_34419[(1)] = (1));

return statearr_34419;
});
var cljs$core$async$mult_$_state_machine__32825__auto____1 = (function (state_34325){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_34325);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e34420){var ex__32828__auto__ = e34420;
var statearr_34421_35835 = state_34325;
(statearr_34421_35835[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_34325[(4)]))){
var statearr_34422_35836 = state_34325;
(statearr_34422_35836[(1)] = cljs.core.first((state_34325[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35837 = state_34325;
state_34325 = G__35837;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32825__auto__ = function(state_34325){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32825__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32825__auto____1.call(this,state_34325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32825__auto____0;
cljs$core$async$mult_$_state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32825__auto____1;
return cljs$core$async$mult_$_state_machine__32825__auto__;
})()
})();
var state__33229__auto__ = (function (){var statearr_34424 = f__33228__auto__();
(statearr_34424[(6)] = c__33227__auto___35775);

return statearr_34424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34428 = arguments.length;
switch (G__34428) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35839 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35839(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35840 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35840(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35841 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35841(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35842 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35842(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35844 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35844(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35845 = arguments.length;
var i__5770__auto___35846 = (0);
while(true){
if((i__5770__auto___35846 < len__5769__auto___35845)){
args__5775__auto__.push((arguments[i__5770__auto___35846]));

var G__35847 = (i__5770__auto___35846 + (1));
i__5770__auto___35846 = G__35847;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34474){
var map__34475 = p__34474;
var map__34475__$1 = cljs.core.__destructure_map(map__34475);
var opts = map__34475__$1;
var statearr_34476_35848 = state;
(statearr_34476_35848[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34478_35849 = state;
(statearr_34478_35849[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_34482_35850 = state;
(statearr_34482_35850[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34470){
var G__34471 = cljs.core.first(seq34470);
var seq34470__$1 = cljs.core.next(seq34470);
var G__34472 = cljs.core.first(seq34470__$1);
var seq34470__$2 = cljs.core.next(seq34470__$1);
var G__34473 = cljs.core.first(seq34470__$2);
var seq34470__$3 = cljs.core.next(seq34470__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34471,G__34472,G__34473,seq34470__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34487 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34487 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34488){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34488 = meta34488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34489,meta34488__$1){
var self__ = this;
var _34489__$1 = this;
return (new cljs.core.async.t_cljs$core$async34487(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34488__$1));
}));

(cljs.core.async.t_cljs$core$async34487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34489){
var self__ = this;
var _34489__$1 = this;
return self__.meta34488;
}));

(cljs.core.async.t_cljs$core$async34487.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34487.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34487.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34487.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34487.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34487.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34487.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34487.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34488","meta34488",550985882,null)], null);
}));

(cljs.core.async.t_cljs$core$async34487.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34487");

(cljs.core.async.t_cljs$core$async34487.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34487");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34487.
 */
cljs.core.async.__GT_t_cljs$core$async34487 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34487(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34488){
return (new cljs.core.async.t_cljs$core$async34487(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34488));
});

}

return (new cljs.core.async.t_cljs$core$async34487(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33227__auto___35859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = (function (state_34569){
var state_val_34570 = (state_34569[(1)]);
if((state_val_34570 === (7))){
var inst_34524 = (state_34569[(2)]);
var state_34569__$1 = state_34569;
if(cljs.core.truth_(inst_34524)){
var statearr_34573_35860 = state_34569__$1;
(statearr_34573_35860[(1)] = (8));

} else {
var statearr_34574_35861 = state_34569__$1;
(statearr_34574_35861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (20))){
var inst_34517 = (state_34569[(7)]);
var state_34569__$1 = state_34569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34569__$1,(23),out,inst_34517);
} else {
if((state_val_34570 === (1))){
var inst_34500 = calc_state();
var inst_34501 = cljs.core.__destructure_map(inst_34500);
var inst_34502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34501,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34501,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34501,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34505 = inst_34500;
var state_34569__$1 = (function (){var statearr_34575 = state_34569;
(statearr_34575[(8)] = inst_34503);

(statearr_34575[(9)] = inst_34505);

(statearr_34575[(10)] = inst_34504);

(statearr_34575[(11)] = inst_34502);

return statearr_34575;
})();
var statearr_34577_35868 = state_34569__$1;
(statearr_34577_35868[(2)] = null);

(statearr_34577_35868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (24))){
var inst_34508 = (state_34569[(12)]);
var inst_34505 = inst_34508;
var state_34569__$1 = (function (){var statearr_34579 = state_34569;
(statearr_34579[(9)] = inst_34505);

return statearr_34579;
})();
var statearr_34580_35869 = state_34569__$1;
(statearr_34580_35869[(2)] = null);

(statearr_34580_35869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (4))){
var inst_34517 = (state_34569[(7)]);
var inst_34519 = (state_34569[(13)]);
var inst_34516 = (state_34569[(2)]);
var inst_34517__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34516,(0),null);
var inst_34518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34516,(1),null);
var inst_34519__$1 = (inst_34517__$1 == null);
var state_34569__$1 = (function (){var statearr_34584 = state_34569;
(statearr_34584[(7)] = inst_34517__$1);

(statearr_34584[(14)] = inst_34518);

(statearr_34584[(13)] = inst_34519__$1);

return statearr_34584;
})();
if(cljs.core.truth_(inst_34519__$1)){
var statearr_34585_35870 = state_34569__$1;
(statearr_34585_35870[(1)] = (5));

} else {
var statearr_34586_35871 = state_34569__$1;
(statearr_34586_35871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (15))){
var inst_34509 = (state_34569[(15)]);
var inst_34538 = (state_34569[(16)]);
var inst_34538__$1 = cljs.core.empty_QMARK_(inst_34509);
var state_34569__$1 = (function (){var statearr_34587 = state_34569;
(statearr_34587[(16)] = inst_34538__$1);

return statearr_34587;
})();
if(inst_34538__$1){
var statearr_34588_35872 = state_34569__$1;
(statearr_34588_35872[(1)] = (17));

} else {
var statearr_34589_35873 = state_34569__$1;
(statearr_34589_35873[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (21))){
var inst_34508 = (state_34569[(12)]);
var inst_34505 = inst_34508;
var state_34569__$1 = (function (){var statearr_34590 = state_34569;
(statearr_34590[(9)] = inst_34505);

return statearr_34590;
})();
var statearr_34591_35874 = state_34569__$1;
(statearr_34591_35874[(2)] = null);

(statearr_34591_35874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (13))){
var inst_34531 = (state_34569[(2)]);
var inst_34532 = calc_state();
var inst_34505 = inst_34532;
var state_34569__$1 = (function (){var statearr_34592 = state_34569;
(statearr_34592[(9)] = inst_34505);

(statearr_34592[(17)] = inst_34531);

return statearr_34592;
})();
var statearr_34593_35876 = state_34569__$1;
(statearr_34593_35876[(2)] = null);

(statearr_34593_35876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (22))){
var inst_34558 = (state_34569[(2)]);
var state_34569__$1 = state_34569;
var statearr_34594_35877 = state_34569__$1;
(statearr_34594_35877[(2)] = inst_34558);

(statearr_34594_35877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (6))){
var inst_34518 = (state_34569[(14)]);
var inst_34522 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34518,change);
var state_34569__$1 = state_34569;
var statearr_34595_35879 = state_34569__$1;
(statearr_34595_35879[(2)] = inst_34522);

(statearr_34595_35879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (25))){
var state_34569__$1 = state_34569;
var statearr_34596_35880 = state_34569__$1;
(statearr_34596_35880[(2)] = null);

(statearr_34596_35880[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (17))){
var inst_34510 = (state_34569[(18)]);
var inst_34518 = (state_34569[(14)]);
var inst_34540 = (inst_34510.cljs$core$IFn$_invoke$arity$1 ? inst_34510.cljs$core$IFn$_invoke$arity$1(inst_34518) : inst_34510.call(null,inst_34518));
var inst_34541 = cljs.core.not(inst_34540);
var state_34569__$1 = state_34569;
var statearr_34597_35881 = state_34569__$1;
(statearr_34597_35881[(2)] = inst_34541);

(statearr_34597_35881[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (3))){
var inst_34562 = (state_34569[(2)]);
var state_34569__$1 = state_34569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34569__$1,inst_34562);
} else {
if((state_val_34570 === (12))){
var state_34569__$1 = state_34569;
var statearr_34598_35882 = state_34569__$1;
(statearr_34598_35882[(2)] = null);

(statearr_34598_35882[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (2))){
var inst_34505 = (state_34569[(9)]);
var inst_34508 = (state_34569[(12)]);
var inst_34508__$1 = cljs.core.__destructure_map(inst_34505);
var inst_34509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34508__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34508__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34508__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34569__$1 = (function (){var statearr_34603 = state_34569;
(statearr_34603[(15)] = inst_34509);

(statearr_34603[(18)] = inst_34510);

(statearr_34603[(12)] = inst_34508__$1);

return statearr_34603;
})();
return cljs.core.async.ioc_alts_BANG_(state_34569__$1,(4),inst_34511);
} else {
if((state_val_34570 === (23))){
var inst_34549 = (state_34569[(2)]);
var state_34569__$1 = state_34569;
if(cljs.core.truth_(inst_34549)){
var statearr_34608_35883 = state_34569__$1;
(statearr_34608_35883[(1)] = (24));

} else {
var statearr_34609_35884 = state_34569__$1;
(statearr_34609_35884[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (19))){
var inst_34544 = (state_34569[(2)]);
var state_34569__$1 = state_34569;
var statearr_34610_35885 = state_34569__$1;
(statearr_34610_35885[(2)] = inst_34544);

(statearr_34610_35885[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (11))){
var inst_34518 = (state_34569[(14)]);
var inst_34528 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34518);
var state_34569__$1 = state_34569;
var statearr_34611_35886 = state_34569__$1;
(statearr_34611_35886[(2)] = inst_34528);

(statearr_34611_35886[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (9))){
var inst_34535 = (state_34569[(19)]);
var inst_34509 = (state_34569[(15)]);
var inst_34518 = (state_34569[(14)]);
var inst_34535__$1 = (inst_34509.cljs$core$IFn$_invoke$arity$1 ? inst_34509.cljs$core$IFn$_invoke$arity$1(inst_34518) : inst_34509.call(null,inst_34518));
var state_34569__$1 = (function (){var statearr_34612 = state_34569;
(statearr_34612[(19)] = inst_34535__$1);

return statearr_34612;
})();
if(cljs.core.truth_(inst_34535__$1)){
var statearr_34613_35887 = state_34569__$1;
(statearr_34613_35887[(1)] = (14));

} else {
var statearr_34614_35888 = state_34569__$1;
(statearr_34614_35888[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (5))){
var inst_34519 = (state_34569[(13)]);
var state_34569__$1 = state_34569;
var statearr_34615_35889 = state_34569__$1;
(statearr_34615_35889[(2)] = inst_34519);

(statearr_34615_35889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (14))){
var inst_34535 = (state_34569[(19)]);
var state_34569__$1 = state_34569;
var statearr_34616_35890 = state_34569__$1;
(statearr_34616_35890[(2)] = inst_34535);

(statearr_34616_35890[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (26))){
var inst_34554 = (state_34569[(2)]);
var state_34569__$1 = state_34569;
var statearr_34617_35892 = state_34569__$1;
(statearr_34617_35892[(2)] = inst_34554);

(statearr_34617_35892[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (16))){
var inst_34546 = (state_34569[(2)]);
var state_34569__$1 = state_34569;
if(cljs.core.truth_(inst_34546)){
var statearr_34618_35893 = state_34569__$1;
(statearr_34618_35893[(1)] = (20));

} else {
var statearr_34621_35894 = state_34569__$1;
(statearr_34621_35894[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (10))){
var inst_34560 = (state_34569[(2)]);
var state_34569__$1 = state_34569;
var statearr_34622_35895 = state_34569__$1;
(statearr_34622_35895[(2)] = inst_34560);

(statearr_34622_35895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (18))){
var inst_34538 = (state_34569[(16)]);
var state_34569__$1 = state_34569;
var statearr_34623_35896 = state_34569__$1;
(statearr_34623_35896[(2)] = inst_34538);

(statearr_34623_35896[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34570 === (8))){
var inst_34517 = (state_34569[(7)]);
var inst_34526 = (inst_34517 == null);
var state_34569__$1 = state_34569;
if(cljs.core.truth_(inst_34526)){
var statearr_34627_35897 = state_34569__$1;
(statearr_34627_35897[(1)] = (11));

} else {
var statearr_34628_35898 = state_34569__$1;
(statearr_34628_35898[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32825__auto__ = null;
var cljs$core$async$mix_$_state_machine__32825__auto____0 = (function (){
var statearr_34629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34629[(0)] = cljs$core$async$mix_$_state_machine__32825__auto__);

(statearr_34629[(1)] = (1));

return statearr_34629;
});
var cljs$core$async$mix_$_state_machine__32825__auto____1 = (function (state_34569){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_34569);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e34630){var ex__32828__auto__ = e34630;
var statearr_34631_35900 = state_34569;
(statearr_34631_35900[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_34569[(4)]))){
var statearr_34632_35901 = state_34569;
(statearr_34632_35901[(1)] = cljs.core.first((state_34569[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35902 = state_34569;
state_34569 = G__35902;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32825__auto__ = function(state_34569){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32825__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32825__auto____1.call(this,state_34569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32825__auto____0;
cljs$core$async$mix_$_state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32825__auto____1;
return cljs$core$async$mix_$_state_machine__32825__auto__;
})()
})();
var state__33229__auto__ = (function (){var statearr_34633 = f__33228__auto__();
(statearr_34633[(6)] = c__33227__auto___35859);

return statearr_34633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35906 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35906(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35907 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35907(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35910 = (function() {
var G__35911 = null;
var G__35911__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35911__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35911 = function(p,v){
switch(arguments.length){
case 1:
return G__35911__1.call(this,p);
case 2:
return G__35911__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35911.cljs$core$IFn$_invoke$arity$1 = G__35911__1;
G__35911.cljs$core$IFn$_invoke$arity$2 = G__35911__2;
return G__35911;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34635 = arguments.length;
switch (G__34635) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35910(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35910(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34639 = arguments.length;
switch (G__34639) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34636_SHARP_){
if(cljs.core.truth_((p1__34636_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34636_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34636_SHARP_.call(null,topic)))){
return p1__34636_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34636_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34643 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34643 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34644){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34644 = meta34644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34645,meta34644__$1){
var self__ = this;
var _34645__$1 = this;
return (new cljs.core.async.t_cljs$core$async34643(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34644__$1));
}));

(cljs.core.async.t_cljs$core$async34643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34645){
var self__ = this;
var _34645__$1 = this;
return self__.meta34644;
}));

(cljs.core.async.t_cljs$core$async34643.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34643.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34643.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34643.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34643.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34643.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34643.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34644","meta34644",531098110,null)], null);
}));

(cljs.core.async.t_cljs$core$async34643.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34643");

(cljs.core.async.t_cljs$core$async34643.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34643");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34643.
 */
cljs.core.async.__GT_t_cljs$core$async34643 = (function cljs$core$async$__GT_t_cljs$core$async34643(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34644){
return (new cljs.core.async.t_cljs$core$async34643(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34644));
});

}

return (new cljs.core.async.t_cljs$core$async34643(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33227__auto___35923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = (function (state_34763){
var state_val_34764 = (state_34763[(1)]);
if((state_val_34764 === (7))){
var inst_34757 = (state_34763[(2)]);
var state_34763__$1 = state_34763;
var statearr_34766_35924 = state_34763__$1;
(statearr_34766_35924[(2)] = inst_34757);

(statearr_34766_35924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (20))){
var state_34763__$1 = state_34763;
var statearr_34767_35925 = state_34763__$1;
(statearr_34767_35925[(2)] = null);

(statearr_34767_35925[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (1))){
var state_34763__$1 = state_34763;
var statearr_34768_35926 = state_34763__$1;
(statearr_34768_35926[(2)] = null);

(statearr_34768_35926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (24))){
var inst_34740 = (state_34763[(7)]);
var inst_34749 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34740);
var state_34763__$1 = state_34763;
var statearr_34769_35927 = state_34763__$1;
(statearr_34769_35927[(2)] = inst_34749);

(statearr_34769_35927[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (4))){
var inst_34652 = (state_34763[(8)]);
var inst_34652__$1 = (state_34763[(2)]);
var inst_34653 = (inst_34652__$1 == null);
var state_34763__$1 = (function (){var statearr_34773 = state_34763;
(statearr_34773[(8)] = inst_34652__$1);

return statearr_34773;
})();
if(cljs.core.truth_(inst_34653)){
var statearr_34774_35928 = state_34763__$1;
(statearr_34774_35928[(1)] = (5));

} else {
var statearr_34775_35930 = state_34763__$1;
(statearr_34775_35930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (15))){
var inst_34734 = (state_34763[(2)]);
var state_34763__$1 = state_34763;
var statearr_34776_35931 = state_34763__$1;
(statearr_34776_35931[(2)] = inst_34734);

(statearr_34776_35931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (21))){
var inst_34754 = (state_34763[(2)]);
var state_34763__$1 = (function (){var statearr_34777 = state_34763;
(statearr_34777[(9)] = inst_34754);

return statearr_34777;
})();
var statearr_34778_35934 = state_34763__$1;
(statearr_34778_35934[(2)] = null);

(statearr_34778_35934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (13))){
var inst_34676 = (state_34763[(10)]);
var inst_34678 = cljs.core.chunked_seq_QMARK_(inst_34676);
var state_34763__$1 = state_34763;
if(inst_34678){
var statearr_34779_35935 = state_34763__$1;
(statearr_34779_35935[(1)] = (16));

} else {
var statearr_34780_35936 = state_34763__$1;
(statearr_34780_35936[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (22))){
var inst_34746 = (state_34763[(2)]);
var state_34763__$1 = state_34763;
if(cljs.core.truth_(inst_34746)){
var statearr_34781_35938 = state_34763__$1;
(statearr_34781_35938[(1)] = (23));

} else {
var statearr_34782_35939 = state_34763__$1;
(statearr_34782_35939[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (6))){
var inst_34740 = (state_34763[(7)]);
var inst_34742 = (state_34763[(11)]);
var inst_34652 = (state_34763[(8)]);
var inst_34740__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34652) : topic_fn.call(null,inst_34652));
var inst_34741 = cljs.core.deref(mults);
var inst_34742__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34741,inst_34740__$1);
var state_34763__$1 = (function (){var statearr_34783 = state_34763;
(statearr_34783[(7)] = inst_34740__$1);

(statearr_34783[(11)] = inst_34742__$1);

return statearr_34783;
})();
if(cljs.core.truth_(inst_34742__$1)){
var statearr_34784_35940 = state_34763__$1;
(statearr_34784_35940[(1)] = (19));

} else {
var statearr_34785_35941 = state_34763__$1;
(statearr_34785_35941[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (25))){
var inst_34751 = (state_34763[(2)]);
var state_34763__$1 = state_34763;
var statearr_34786_35942 = state_34763__$1;
(statearr_34786_35942[(2)] = inst_34751);

(statearr_34786_35942[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (17))){
var inst_34676 = (state_34763[(10)]);
var inst_34699 = cljs.core.first(inst_34676);
var inst_34720 = cljs.core.async.muxch_STAR_(inst_34699);
var inst_34727 = cljs.core.async.close_BANG_(inst_34720);
var inst_34728 = cljs.core.next(inst_34676);
var inst_34662 = inst_34728;
var inst_34663 = null;
var inst_34664 = (0);
var inst_34665 = (0);
var state_34763__$1 = (function (){var statearr_34787 = state_34763;
(statearr_34787[(12)] = inst_34727);

(statearr_34787[(13)] = inst_34665);

(statearr_34787[(14)] = inst_34663);

(statearr_34787[(15)] = inst_34664);

(statearr_34787[(16)] = inst_34662);

return statearr_34787;
})();
var statearr_34788_35943 = state_34763__$1;
(statearr_34788_35943[(2)] = null);

(statearr_34788_35943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (3))){
var inst_34759 = (state_34763[(2)]);
var state_34763__$1 = state_34763;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34763__$1,inst_34759);
} else {
if((state_val_34764 === (12))){
var inst_34736 = (state_34763[(2)]);
var state_34763__$1 = state_34763;
var statearr_34789_35944 = state_34763__$1;
(statearr_34789_35944[(2)] = inst_34736);

(statearr_34789_35944[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (2))){
var state_34763__$1 = state_34763;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34763__$1,(4),ch);
} else {
if((state_val_34764 === (23))){
var state_34763__$1 = state_34763;
var statearr_34790_35945 = state_34763__$1;
(statearr_34790_35945[(2)] = null);

(statearr_34790_35945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (19))){
var inst_34742 = (state_34763[(11)]);
var inst_34652 = (state_34763[(8)]);
var inst_34744 = cljs.core.async.muxch_STAR_(inst_34742);
var state_34763__$1 = state_34763;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34763__$1,(22),inst_34744,inst_34652);
} else {
if((state_val_34764 === (11))){
var inst_34676 = (state_34763[(10)]);
var inst_34662 = (state_34763[(16)]);
var inst_34676__$1 = cljs.core.seq(inst_34662);
var state_34763__$1 = (function (){var statearr_34791 = state_34763;
(statearr_34791[(10)] = inst_34676__$1);

return statearr_34791;
})();
if(inst_34676__$1){
var statearr_34792_35946 = state_34763__$1;
(statearr_34792_35946[(1)] = (13));

} else {
var statearr_34793_35947 = state_34763__$1;
(statearr_34793_35947[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (9))){
var inst_34738 = (state_34763[(2)]);
var state_34763__$1 = state_34763;
var statearr_34794_35949 = state_34763__$1;
(statearr_34794_35949[(2)] = inst_34738);

(statearr_34794_35949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (5))){
var inst_34659 = cljs.core.deref(mults);
var inst_34660 = cljs.core.vals(inst_34659);
var inst_34661 = cljs.core.seq(inst_34660);
var inst_34662 = inst_34661;
var inst_34663 = null;
var inst_34664 = (0);
var inst_34665 = (0);
var state_34763__$1 = (function (){var statearr_34795 = state_34763;
(statearr_34795[(13)] = inst_34665);

(statearr_34795[(14)] = inst_34663);

(statearr_34795[(15)] = inst_34664);

(statearr_34795[(16)] = inst_34662);

return statearr_34795;
})();
var statearr_34796_35951 = state_34763__$1;
(statearr_34796_35951[(2)] = null);

(statearr_34796_35951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (14))){
var state_34763__$1 = state_34763;
var statearr_34800_35952 = state_34763__$1;
(statearr_34800_35952[(2)] = null);

(statearr_34800_35952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (16))){
var inst_34676 = (state_34763[(10)]);
var inst_34688 = cljs.core.chunk_first(inst_34676);
var inst_34689 = cljs.core.chunk_rest(inst_34676);
var inst_34690 = cljs.core.count(inst_34688);
var inst_34662 = inst_34689;
var inst_34663 = inst_34688;
var inst_34664 = inst_34690;
var inst_34665 = (0);
var state_34763__$1 = (function (){var statearr_34801 = state_34763;
(statearr_34801[(13)] = inst_34665);

(statearr_34801[(14)] = inst_34663);

(statearr_34801[(15)] = inst_34664);

(statearr_34801[(16)] = inst_34662);

return statearr_34801;
})();
var statearr_34802_35953 = state_34763__$1;
(statearr_34802_35953[(2)] = null);

(statearr_34802_35953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (10))){
var inst_34665 = (state_34763[(13)]);
var inst_34663 = (state_34763[(14)]);
var inst_34664 = (state_34763[(15)]);
var inst_34662 = (state_34763[(16)]);
var inst_34670 = cljs.core._nth(inst_34663,inst_34665);
var inst_34671 = cljs.core.async.muxch_STAR_(inst_34670);
var inst_34672 = cljs.core.async.close_BANG_(inst_34671);
var inst_34673 = (inst_34665 + (1));
var tmp34797 = inst_34663;
var tmp34798 = inst_34664;
var tmp34799 = inst_34662;
var inst_34662__$1 = tmp34799;
var inst_34663__$1 = tmp34797;
var inst_34664__$1 = tmp34798;
var inst_34665__$1 = inst_34673;
var state_34763__$1 = (function (){var statearr_34803 = state_34763;
(statearr_34803[(13)] = inst_34665__$1);

(statearr_34803[(14)] = inst_34663__$1);

(statearr_34803[(15)] = inst_34664__$1);

(statearr_34803[(17)] = inst_34672);

(statearr_34803[(16)] = inst_34662__$1);

return statearr_34803;
})();
var statearr_34804_35971 = state_34763__$1;
(statearr_34804_35971[(2)] = null);

(statearr_34804_35971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (18))){
var inst_34731 = (state_34763[(2)]);
var state_34763__$1 = state_34763;
var statearr_34805_35972 = state_34763__$1;
(statearr_34805_35972[(2)] = inst_34731);

(statearr_34805_35972[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (8))){
var inst_34665 = (state_34763[(13)]);
var inst_34664 = (state_34763[(15)]);
var inst_34667 = (inst_34665 < inst_34664);
var inst_34668 = inst_34667;
var state_34763__$1 = state_34763;
if(cljs.core.truth_(inst_34668)){
var statearr_34806_35973 = state_34763__$1;
(statearr_34806_35973[(1)] = (10));

} else {
var statearr_34807_35974 = state_34763__$1;
(statearr_34807_35974[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32825__auto__ = null;
var cljs$core$async$state_machine__32825__auto____0 = (function (){
var statearr_34810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34810[(0)] = cljs$core$async$state_machine__32825__auto__);

(statearr_34810[(1)] = (1));

return statearr_34810;
});
var cljs$core$async$state_machine__32825__auto____1 = (function (state_34763){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_34763);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e34817){var ex__32828__auto__ = e34817;
var statearr_34818_35979 = state_34763;
(statearr_34818_35979[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_34763[(4)]))){
var statearr_34819_35983 = state_34763;
(statearr_34819_35983[(1)] = cljs.core.first((state_34763[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35984 = state_34763;
state_34763 = G__35984;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
cljs$core$async$state_machine__32825__auto__ = function(state_34763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32825__auto____1.call(this,state_34763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32825__auto____0;
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32825__auto____1;
return cljs$core$async$state_machine__32825__auto__;
})()
})();
var state__33229__auto__ = (function (){var statearr_34823 = f__33228__auto__();
(statearr_34823[(6)] = c__33227__auto___35923);

return statearr_34823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34825 = arguments.length;
switch (G__34825) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34827 = arguments.length;
switch (G__34827) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34829 = arguments.length;
switch (G__34829) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__33227__auto___36033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = (function (state_34878){
var state_val_34879 = (state_34878[(1)]);
if((state_val_34879 === (7))){
var state_34878__$1 = state_34878;
var statearr_34882_36034 = state_34878__$1;
(statearr_34882_36034[(2)] = null);

(statearr_34882_36034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34879 === (1))){
var state_34878__$1 = state_34878;
var statearr_34883_36039 = state_34878__$1;
(statearr_34883_36039[(2)] = null);

(statearr_34883_36039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34879 === (4))){
var inst_34835 = (state_34878[(7)]);
var inst_34834 = (state_34878[(8)]);
var inst_34837 = (inst_34835 < inst_34834);
var state_34878__$1 = state_34878;
if(cljs.core.truth_(inst_34837)){
var statearr_34884_36042 = state_34878__$1;
(statearr_34884_36042[(1)] = (6));

} else {
var statearr_34885_36044 = state_34878__$1;
(statearr_34885_36044[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34879 === (15))){
var inst_34864 = (state_34878[(9)]);
var inst_34869 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34864);
var state_34878__$1 = state_34878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34878__$1,(17),out,inst_34869);
} else {
if((state_val_34879 === (13))){
var inst_34864 = (state_34878[(9)]);
var inst_34864__$1 = (state_34878[(2)]);
var inst_34865 = cljs.core.some(cljs.core.nil_QMARK_,inst_34864__$1);
var state_34878__$1 = (function (){var statearr_34886 = state_34878;
(statearr_34886[(9)] = inst_34864__$1);

return statearr_34886;
})();
if(cljs.core.truth_(inst_34865)){
var statearr_34887_36052 = state_34878__$1;
(statearr_34887_36052[(1)] = (14));

} else {
var statearr_34888_36053 = state_34878__$1;
(statearr_34888_36053[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34879 === (6))){
var state_34878__$1 = state_34878;
var statearr_34889_36054 = state_34878__$1;
(statearr_34889_36054[(2)] = null);

(statearr_34889_36054[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34879 === (17))){
var inst_34871 = (state_34878[(2)]);
var state_34878__$1 = (function (){var statearr_34891 = state_34878;
(statearr_34891[(10)] = inst_34871);

return statearr_34891;
})();
var statearr_34892_36055 = state_34878__$1;
(statearr_34892_36055[(2)] = null);

(statearr_34892_36055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34879 === (3))){
var inst_34876 = (state_34878[(2)]);
var state_34878__$1 = state_34878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34878__$1,inst_34876);
} else {
if((state_val_34879 === (12))){
var _ = (function (){var statearr_34893 = state_34878;
(statearr_34893[(4)] = cljs.core.rest((state_34878[(4)])));

return statearr_34893;
})();
var state_34878__$1 = state_34878;
var ex34890 = (state_34878__$1[(2)]);
var statearr_34894_36064 = state_34878__$1;
(statearr_34894_36064[(5)] = ex34890);


if((ex34890 instanceof Object)){
var statearr_34895_36065 = state_34878__$1;
(statearr_34895_36065[(1)] = (11));

(statearr_34895_36065[(5)] = null);

} else {
throw ex34890;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34879 === (2))){
var inst_34833 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34834 = cnt;
var inst_34835 = (0);
var state_34878__$1 = (function (){var statearr_34899 = state_34878;
(statearr_34899[(7)] = inst_34835);

(statearr_34899[(11)] = inst_34833);

(statearr_34899[(8)] = inst_34834);

return statearr_34899;
})();
var statearr_34900_36066 = state_34878__$1;
(statearr_34900_36066[(2)] = null);

(statearr_34900_36066[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34879 === (11))){
var inst_34841 = (state_34878[(2)]);
var inst_34842 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34878__$1 = (function (){var statearr_34901 = state_34878;
(statearr_34901[(12)] = inst_34841);

return statearr_34901;
})();
var statearr_34902_36067 = state_34878__$1;
(statearr_34902_36067[(2)] = inst_34842);

(statearr_34902_36067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34879 === (9))){
var inst_34835 = (state_34878[(7)]);
var _ = (function (){var statearr_34903 = state_34878;
(statearr_34903[(4)] = cljs.core.cons((12),(state_34878[(4)])));

return statearr_34903;
})();
var inst_34849 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34835) : chs__$1.call(null,inst_34835));
var inst_34850 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34835) : done.call(null,inst_34835));
var inst_34851 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34849,inst_34850);
var ___$1 = (function (){var statearr_34904 = state_34878;
(statearr_34904[(4)] = cljs.core.rest((state_34878[(4)])));

return statearr_34904;
})();
var state_34878__$1 = state_34878;
var statearr_34905_36072 = state_34878__$1;
(statearr_34905_36072[(2)] = inst_34851);

(statearr_34905_36072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34879 === (5))){
var inst_34861 = (state_34878[(2)]);
var state_34878__$1 = (function (){var statearr_34909 = state_34878;
(statearr_34909[(13)] = inst_34861);

return statearr_34909;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34878__$1,(13),dchan);
} else {
if((state_val_34879 === (14))){
var inst_34867 = cljs.core.async.close_BANG_(out);
var state_34878__$1 = state_34878;
var statearr_34917_36073 = state_34878__$1;
(statearr_34917_36073[(2)] = inst_34867);

(statearr_34917_36073[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34879 === (16))){
var inst_34874 = (state_34878[(2)]);
var state_34878__$1 = state_34878;
var statearr_34921_36075 = state_34878__$1;
(statearr_34921_36075[(2)] = inst_34874);

(statearr_34921_36075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34879 === (10))){
var inst_34835 = (state_34878[(7)]);
var inst_34854 = (state_34878[(2)]);
var inst_34855 = (inst_34835 + (1));
var inst_34835__$1 = inst_34855;
var state_34878__$1 = (function (){var statearr_34922 = state_34878;
(statearr_34922[(7)] = inst_34835__$1);

(statearr_34922[(14)] = inst_34854);

return statearr_34922;
})();
var statearr_34923_36076 = state_34878__$1;
(statearr_34923_36076[(2)] = null);

(statearr_34923_36076[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34879 === (8))){
var inst_34859 = (state_34878[(2)]);
var state_34878__$1 = state_34878;
var statearr_34924_36077 = state_34878__$1;
(statearr_34924_36077[(2)] = inst_34859);

(statearr_34924_36077[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32825__auto__ = null;
var cljs$core$async$state_machine__32825__auto____0 = (function (){
var statearr_34925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34925[(0)] = cljs$core$async$state_machine__32825__auto__);

(statearr_34925[(1)] = (1));

return statearr_34925;
});
var cljs$core$async$state_machine__32825__auto____1 = (function (state_34878){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_34878);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e34926){var ex__32828__auto__ = e34926;
var statearr_34931_36079 = state_34878;
(statearr_34931_36079[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_34878[(4)]))){
var statearr_34935_36080 = state_34878;
(statearr_34935_36080[(1)] = cljs.core.first((state_34878[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36081 = state_34878;
state_34878 = G__36081;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
cljs$core$async$state_machine__32825__auto__ = function(state_34878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32825__auto____1.call(this,state_34878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32825__auto____0;
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32825__auto____1;
return cljs$core$async$state_machine__32825__auto__;
})()
})();
var state__33229__auto__ = (function (){var statearr_34939 = f__33228__auto__();
(statearr_34939[(6)] = c__33227__auto___36033);

return statearr_34939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34952 = arguments.length;
switch (G__34952) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33227__auto___36083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = (function (state_34993){
var state_val_34994 = (state_34993[(1)]);
if((state_val_34994 === (7))){
var inst_34972 = (state_34993[(7)]);
var inst_34973 = (state_34993[(8)]);
var inst_34972__$1 = (state_34993[(2)]);
var inst_34973__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34972__$1,(0),null);
var inst_34974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34972__$1,(1),null);
var inst_34975 = (inst_34973__$1 == null);
var state_34993__$1 = (function (){var statearr_34995 = state_34993;
(statearr_34995[(7)] = inst_34972__$1);

(statearr_34995[(8)] = inst_34973__$1);

(statearr_34995[(9)] = inst_34974);

return statearr_34995;
})();
if(cljs.core.truth_(inst_34975)){
var statearr_34996_36084 = state_34993__$1;
(statearr_34996_36084[(1)] = (8));

} else {
var statearr_34997_36085 = state_34993__$1;
(statearr_34997_36085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (1))){
var inst_34960 = cljs.core.vec(chs);
var inst_34961 = inst_34960;
var state_34993__$1 = (function (){var statearr_34998 = state_34993;
(statearr_34998[(10)] = inst_34961);

return statearr_34998;
})();
var statearr_34999_36086 = state_34993__$1;
(statearr_34999_36086[(2)] = null);

(statearr_34999_36086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (4))){
var inst_34961 = (state_34993[(10)]);
var state_34993__$1 = state_34993;
return cljs.core.async.ioc_alts_BANG_(state_34993__$1,(7),inst_34961);
} else {
if((state_val_34994 === (6))){
var inst_34989 = (state_34993[(2)]);
var state_34993__$1 = state_34993;
var statearr_35000_36087 = state_34993__$1;
(statearr_35000_36087[(2)] = inst_34989);

(statearr_35000_36087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (3))){
var inst_34991 = (state_34993[(2)]);
var state_34993__$1 = state_34993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34993__$1,inst_34991);
} else {
if((state_val_34994 === (2))){
var inst_34961 = (state_34993[(10)]);
var inst_34963 = cljs.core.count(inst_34961);
var inst_34964 = (inst_34963 > (0));
var state_34993__$1 = state_34993;
if(cljs.core.truth_(inst_34964)){
var statearr_35002_36089 = state_34993__$1;
(statearr_35002_36089[(1)] = (4));

} else {
var statearr_35003_36090 = state_34993__$1;
(statearr_35003_36090[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (11))){
var inst_34961 = (state_34993[(10)]);
var inst_34982 = (state_34993[(2)]);
var tmp35001 = inst_34961;
var inst_34961__$1 = tmp35001;
var state_34993__$1 = (function (){var statearr_35004 = state_34993;
(statearr_35004[(10)] = inst_34961__$1);

(statearr_35004[(11)] = inst_34982);

return statearr_35004;
})();
var statearr_35005_36091 = state_34993__$1;
(statearr_35005_36091[(2)] = null);

(statearr_35005_36091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (9))){
var inst_34973 = (state_34993[(8)]);
var state_34993__$1 = state_34993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34993__$1,(11),out,inst_34973);
} else {
if((state_val_34994 === (5))){
var inst_34987 = cljs.core.async.close_BANG_(out);
var state_34993__$1 = state_34993;
var statearr_35006_36092 = state_34993__$1;
(statearr_35006_36092[(2)] = inst_34987);

(statearr_35006_36092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (10))){
var inst_34985 = (state_34993[(2)]);
var state_34993__$1 = state_34993;
var statearr_35007_36094 = state_34993__$1;
(statearr_35007_36094[(2)] = inst_34985);

(statearr_35007_36094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (8))){
var inst_34972 = (state_34993[(7)]);
var inst_34973 = (state_34993[(8)]);
var inst_34961 = (state_34993[(10)]);
var inst_34974 = (state_34993[(9)]);
var inst_34977 = (function (){var cs = inst_34961;
var vec__34968 = inst_34972;
var v = inst_34973;
var c = inst_34974;
return (function (p1__34940_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34940_SHARP_);
});
})();
var inst_34978 = cljs.core.filterv(inst_34977,inst_34961);
var inst_34961__$1 = inst_34978;
var state_34993__$1 = (function (){var statearr_35010 = state_34993;
(statearr_35010[(10)] = inst_34961__$1);

return statearr_35010;
})();
var statearr_35011_36095 = state_34993__$1;
(statearr_35011_36095[(2)] = null);

(statearr_35011_36095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32825__auto__ = null;
var cljs$core$async$state_machine__32825__auto____0 = (function (){
var statearr_35012 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35012[(0)] = cljs$core$async$state_machine__32825__auto__);

(statearr_35012[(1)] = (1));

return statearr_35012;
});
var cljs$core$async$state_machine__32825__auto____1 = (function (state_34993){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_34993);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e35013){var ex__32828__auto__ = e35013;
var statearr_35014_36097 = state_34993;
(statearr_35014_36097[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_34993[(4)]))){
var statearr_35015_36098 = state_34993;
(statearr_35015_36098[(1)] = cljs.core.first((state_34993[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36099 = state_34993;
state_34993 = G__36099;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
cljs$core$async$state_machine__32825__auto__ = function(state_34993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32825__auto____1.call(this,state_34993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32825__auto____0;
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32825__auto____1;
return cljs$core$async$state_machine__32825__auto__;
})()
})();
var state__33229__auto__ = (function (){var statearr_35027 = f__33228__auto__();
(statearr_35027[(6)] = c__33227__auto___36083);

return statearr_35027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35031 = arguments.length;
switch (G__35031) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33227__auto___36101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = (function (state_35055){
var state_val_35056 = (state_35055[(1)]);
if((state_val_35056 === (7))){
var inst_35037 = (state_35055[(7)]);
var inst_35037__$1 = (state_35055[(2)]);
var inst_35038 = (inst_35037__$1 == null);
var inst_35039 = cljs.core.not(inst_35038);
var state_35055__$1 = (function (){var statearr_35057 = state_35055;
(statearr_35057[(7)] = inst_35037__$1);

return statearr_35057;
})();
if(inst_35039){
var statearr_35058_36102 = state_35055__$1;
(statearr_35058_36102[(1)] = (8));

} else {
var statearr_35059_36103 = state_35055__$1;
(statearr_35059_36103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (1))){
var inst_35032 = (0);
var state_35055__$1 = (function (){var statearr_35060 = state_35055;
(statearr_35060[(8)] = inst_35032);

return statearr_35060;
})();
var statearr_35061_36105 = state_35055__$1;
(statearr_35061_36105[(2)] = null);

(statearr_35061_36105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (4))){
var state_35055__$1 = state_35055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35055__$1,(7),ch);
} else {
if((state_val_35056 === (6))){
var inst_35050 = (state_35055[(2)]);
var state_35055__$1 = state_35055;
var statearr_35062_36106 = state_35055__$1;
(statearr_35062_36106[(2)] = inst_35050);

(statearr_35062_36106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (3))){
var inst_35052 = (state_35055[(2)]);
var inst_35053 = cljs.core.async.close_BANG_(out);
var state_35055__$1 = (function (){var statearr_35063 = state_35055;
(statearr_35063[(9)] = inst_35052);

return statearr_35063;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35055__$1,inst_35053);
} else {
if((state_val_35056 === (2))){
var inst_35032 = (state_35055[(8)]);
var inst_35034 = (inst_35032 < n);
var state_35055__$1 = state_35055;
if(cljs.core.truth_(inst_35034)){
var statearr_35064_36107 = state_35055__$1;
(statearr_35064_36107[(1)] = (4));

} else {
var statearr_35065_36108 = state_35055__$1;
(statearr_35065_36108[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (11))){
var inst_35032 = (state_35055[(8)]);
var inst_35042 = (state_35055[(2)]);
var inst_35043 = (inst_35032 + (1));
var inst_35032__$1 = inst_35043;
var state_35055__$1 = (function (){var statearr_35066 = state_35055;
(statearr_35066[(8)] = inst_35032__$1);

(statearr_35066[(10)] = inst_35042);

return statearr_35066;
})();
var statearr_35067_36109 = state_35055__$1;
(statearr_35067_36109[(2)] = null);

(statearr_35067_36109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (9))){
var state_35055__$1 = state_35055;
var statearr_35068_36110 = state_35055__$1;
(statearr_35068_36110[(2)] = null);

(statearr_35068_36110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (5))){
var state_35055__$1 = state_35055;
var statearr_35069_36111 = state_35055__$1;
(statearr_35069_36111[(2)] = null);

(statearr_35069_36111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (10))){
var inst_35047 = (state_35055[(2)]);
var state_35055__$1 = state_35055;
var statearr_35070_36112 = state_35055__$1;
(statearr_35070_36112[(2)] = inst_35047);

(statearr_35070_36112[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (8))){
var inst_35037 = (state_35055[(7)]);
var state_35055__$1 = state_35055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35055__$1,(11),out,inst_35037);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32825__auto__ = null;
var cljs$core$async$state_machine__32825__auto____0 = (function (){
var statearr_35073 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35073[(0)] = cljs$core$async$state_machine__32825__auto__);

(statearr_35073[(1)] = (1));

return statearr_35073;
});
var cljs$core$async$state_machine__32825__auto____1 = (function (state_35055){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_35055);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e35074){var ex__32828__auto__ = e35074;
var statearr_35075_36113 = state_35055;
(statearr_35075_36113[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_35055[(4)]))){
var statearr_35076_36114 = state_35055;
(statearr_35076_36114[(1)] = cljs.core.first((state_35055[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36115 = state_35055;
state_35055 = G__36115;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
cljs$core$async$state_machine__32825__auto__ = function(state_35055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32825__auto____1.call(this,state_35055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32825__auto____0;
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32825__auto____1;
return cljs$core$async$state_machine__32825__auto__;
})()
})();
var state__33229__auto__ = (function (){var statearr_35078 = f__33228__auto__();
(statearr_35078[(6)] = c__33227__auto___36101);

return statearr_35078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35080 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35080 = (function (f,ch,meta35081){
this.f = f;
this.ch = ch;
this.meta35081 = meta35081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35082,meta35081__$1){
var self__ = this;
var _35082__$1 = this;
return (new cljs.core.async.t_cljs$core$async35080(self__.f,self__.ch,meta35081__$1));
}));

(cljs.core.async.t_cljs$core$async35080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35082){
var self__ = this;
var _35082__$1 = this;
return self__.meta35081;
}));

(cljs.core.async.t_cljs$core$async35080.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35080.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35080.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35080.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35080.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35093 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35093 = (function (f,ch,meta35081,_,fn1,meta35094){
this.f = f;
this.ch = ch;
this.meta35081 = meta35081;
this._ = _;
this.fn1 = fn1;
this.meta35094 = meta35094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35095,meta35094__$1){
var self__ = this;
var _35095__$1 = this;
return (new cljs.core.async.t_cljs$core$async35093(self__.f,self__.ch,self__.meta35081,self__._,self__.fn1,meta35094__$1));
}));

(cljs.core.async.t_cljs$core$async35093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35095){
var self__ = this;
var _35095__$1 = this;
return self__.meta35094;
}));

(cljs.core.async.t_cljs$core$async35093.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35093.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35079_SHARP_){
var G__35096 = (((p1__35079_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35079_SHARP_) : self__.f.call(null,p1__35079_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35096) : f1.call(null,G__35096));
});
}));

(cljs.core.async.t_cljs$core$async35093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35081","meta35081",-876696791,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35080","cljs.core.async/t_cljs$core$async35080",225222409,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35094","meta35094",851181929,null)], null);
}));

(cljs.core.async.t_cljs$core$async35093.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35093");

(cljs.core.async.t_cljs$core$async35093.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35093");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35093.
 */
cljs.core.async.__GT_t_cljs$core$async35093 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35093(f__$1,ch__$1,meta35081__$1,___$2,fn1__$1,meta35094){
return (new cljs.core.async.t_cljs$core$async35093(f__$1,ch__$1,meta35081__$1,___$2,fn1__$1,meta35094));
});

}

return (new cljs.core.async.t_cljs$core$async35093(self__.f,self__.ch,self__.meta35081,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35097 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35097) : self__.f.call(null,G__35097));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35080.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35080.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35080.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35081","meta35081",-876696791,null)], null);
}));

(cljs.core.async.t_cljs$core$async35080.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35080");

(cljs.core.async.t_cljs$core$async35080.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35080");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35080.
 */
cljs.core.async.__GT_t_cljs$core$async35080 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35080(f__$1,ch__$1,meta35081){
return (new cljs.core.async.t_cljs$core$async35080(f__$1,ch__$1,meta35081));
});

}

return (new cljs.core.async.t_cljs$core$async35080(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35100 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35100 = (function (f,ch,meta35101){
this.f = f;
this.ch = ch;
this.meta35101 = meta35101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35102,meta35101__$1){
var self__ = this;
var _35102__$1 = this;
return (new cljs.core.async.t_cljs$core$async35100(self__.f,self__.ch,meta35101__$1));
}));

(cljs.core.async.t_cljs$core$async35100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35102){
var self__ = this;
var _35102__$1 = this;
return self__.meta35101;
}));

(cljs.core.async.t_cljs$core$async35100.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35100.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35100.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35100.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35100.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35100.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35101","meta35101",945822874,null)], null);
}));

(cljs.core.async.t_cljs$core$async35100.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35100");

(cljs.core.async.t_cljs$core$async35100.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35100");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35100.
 */
cljs.core.async.__GT_t_cljs$core$async35100 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35100(f__$1,ch__$1,meta35101){
return (new cljs.core.async.t_cljs$core$async35100(f__$1,ch__$1,meta35101));
});

}

return (new cljs.core.async.t_cljs$core$async35100(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35105 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35105 = (function (p,ch,meta35106){
this.p = p;
this.ch = ch;
this.meta35106 = meta35106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35107,meta35106__$1){
var self__ = this;
var _35107__$1 = this;
return (new cljs.core.async.t_cljs$core$async35105(self__.p,self__.ch,meta35106__$1));
}));

(cljs.core.async.t_cljs$core$async35105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35107){
var self__ = this;
var _35107__$1 = this;
return self__.meta35106;
}));

(cljs.core.async.t_cljs$core$async35105.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35105.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35105.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35105.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35105.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35105.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35105.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35106","meta35106",-1974821215,null)], null);
}));

(cljs.core.async.t_cljs$core$async35105.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35105");

(cljs.core.async.t_cljs$core$async35105.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35105");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35105.
 */
cljs.core.async.__GT_t_cljs$core$async35105 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35105(p__$1,ch__$1,meta35106){
return (new cljs.core.async.t_cljs$core$async35105(p__$1,ch__$1,meta35106));
});

}

return (new cljs.core.async.t_cljs$core$async35105(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35117 = arguments.length;
switch (G__35117) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33227__auto___36144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = (function (state_35159){
var state_val_35160 = (state_35159[(1)]);
if((state_val_35160 === (7))){
var inst_35154 = (state_35159[(2)]);
var state_35159__$1 = state_35159;
var statearr_35161_36149 = state_35159__$1;
(statearr_35161_36149[(2)] = inst_35154);

(statearr_35161_36149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (1))){
var state_35159__$1 = state_35159;
var statearr_35162_36150 = state_35159__$1;
(statearr_35162_36150[(2)] = null);

(statearr_35162_36150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (4))){
var inst_35140 = (state_35159[(7)]);
var inst_35140__$1 = (state_35159[(2)]);
var inst_35141 = (inst_35140__$1 == null);
var state_35159__$1 = (function (){var statearr_35163 = state_35159;
(statearr_35163[(7)] = inst_35140__$1);

return statearr_35163;
})();
if(cljs.core.truth_(inst_35141)){
var statearr_35164_36155 = state_35159__$1;
(statearr_35164_36155[(1)] = (5));

} else {
var statearr_35165_36156 = state_35159__$1;
(statearr_35165_36156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (6))){
var inst_35140 = (state_35159[(7)]);
var inst_35145 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35140) : p.call(null,inst_35140));
var state_35159__$1 = state_35159;
if(cljs.core.truth_(inst_35145)){
var statearr_35168_36158 = state_35159__$1;
(statearr_35168_36158[(1)] = (8));

} else {
var statearr_35169_36159 = state_35159__$1;
(statearr_35169_36159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (3))){
var inst_35157 = (state_35159[(2)]);
var state_35159__$1 = state_35159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35159__$1,inst_35157);
} else {
if((state_val_35160 === (2))){
var state_35159__$1 = state_35159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35159__$1,(4),ch);
} else {
if((state_val_35160 === (11))){
var inst_35148 = (state_35159[(2)]);
var state_35159__$1 = state_35159;
var statearr_35170_36161 = state_35159__$1;
(statearr_35170_36161[(2)] = inst_35148);

(statearr_35170_36161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (9))){
var state_35159__$1 = state_35159;
var statearr_35171_36162 = state_35159__$1;
(statearr_35171_36162[(2)] = null);

(statearr_35171_36162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (5))){
var inst_35143 = cljs.core.async.close_BANG_(out);
var state_35159__$1 = state_35159;
var statearr_35177_36163 = state_35159__$1;
(statearr_35177_36163[(2)] = inst_35143);

(statearr_35177_36163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (10))){
var inst_35151 = (state_35159[(2)]);
var state_35159__$1 = (function (){var statearr_35178 = state_35159;
(statearr_35178[(8)] = inst_35151);

return statearr_35178;
})();
var statearr_35179_36168 = state_35159__$1;
(statearr_35179_36168[(2)] = null);

(statearr_35179_36168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (8))){
var inst_35140 = (state_35159[(7)]);
var state_35159__$1 = state_35159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35159__$1,(11),out,inst_35140);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32825__auto__ = null;
var cljs$core$async$state_machine__32825__auto____0 = (function (){
var statearr_35180 = [null,null,null,null,null,null,null,null,null];
(statearr_35180[(0)] = cljs$core$async$state_machine__32825__auto__);

(statearr_35180[(1)] = (1));

return statearr_35180;
});
var cljs$core$async$state_machine__32825__auto____1 = (function (state_35159){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_35159);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e35181){var ex__32828__auto__ = e35181;
var statearr_35183_36169 = state_35159;
(statearr_35183_36169[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_35159[(4)]))){
var statearr_35184_36170 = state_35159;
(statearr_35184_36170[(1)] = cljs.core.first((state_35159[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36171 = state_35159;
state_35159 = G__36171;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
cljs$core$async$state_machine__32825__auto__ = function(state_35159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32825__auto____1.call(this,state_35159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32825__auto____0;
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32825__auto____1;
return cljs$core$async$state_machine__32825__auto__;
})()
})();
var state__33229__auto__ = (function (){var statearr_35190 = f__33228__auto__();
(statearr_35190[(6)] = c__33227__auto___36144);

return statearr_35190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35199 = arguments.length;
switch (G__35199) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33227__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = (function (state_35279){
var state_val_35280 = (state_35279[(1)]);
if((state_val_35280 === (7))){
var inst_35269 = (state_35279[(2)]);
var state_35279__$1 = state_35279;
var statearr_35294_36176 = state_35279__$1;
(statearr_35294_36176[(2)] = inst_35269);

(statearr_35294_36176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (20))){
var inst_35233 = (state_35279[(7)]);
var inst_35245 = (state_35279[(2)]);
var inst_35246 = cljs.core.next(inst_35233);
var inst_35218 = inst_35246;
var inst_35219 = null;
var inst_35220 = (0);
var inst_35221 = (0);
var state_35279__$1 = (function (){var statearr_35295 = state_35279;
(statearr_35295[(8)] = inst_35221);

(statearr_35295[(9)] = inst_35219);

(statearr_35295[(10)] = inst_35245);

(statearr_35295[(11)] = inst_35218);

(statearr_35295[(12)] = inst_35220);

return statearr_35295;
})();
var statearr_35296_36179 = state_35279__$1;
(statearr_35296_36179[(2)] = null);

(statearr_35296_36179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (1))){
var state_35279__$1 = state_35279;
var statearr_35297_36180 = state_35279__$1;
(statearr_35297_36180[(2)] = null);

(statearr_35297_36180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (4))){
var inst_35205 = (state_35279[(13)]);
var inst_35205__$1 = (state_35279[(2)]);
var inst_35206 = (inst_35205__$1 == null);
var state_35279__$1 = (function (){var statearr_35298 = state_35279;
(statearr_35298[(13)] = inst_35205__$1);

return statearr_35298;
})();
if(cljs.core.truth_(inst_35206)){
var statearr_35299_36181 = state_35279__$1;
(statearr_35299_36181[(1)] = (5));

} else {
var statearr_35300_36182 = state_35279__$1;
(statearr_35300_36182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (15))){
var state_35279__$1 = state_35279;
var statearr_35310_36183 = state_35279__$1;
(statearr_35310_36183[(2)] = null);

(statearr_35310_36183[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (21))){
var state_35279__$1 = state_35279;
var statearr_35311_36184 = state_35279__$1;
(statearr_35311_36184[(2)] = null);

(statearr_35311_36184[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (13))){
var inst_35221 = (state_35279[(8)]);
var inst_35219 = (state_35279[(9)]);
var inst_35218 = (state_35279[(11)]);
var inst_35220 = (state_35279[(12)]);
var inst_35228 = (state_35279[(2)]);
var inst_35230 = (inst_35221 + (1));
var tmp35301 = inst_35219;
var tmp35302 = inst_35218;
var tmp35303 = inst_35220;
var inst_35218__$1 = tmp35302;
var inst_35219__$1 = tmp35301;
var inst_35220__$1 = tmp35303;
var inst_35221__$1 = inst_35230;
var state_35279__$1 = (function (){var statearr_35312 = state_35279;
(statearr_35312[(8)] = inst_35221__$1);

(statearr_35312[(9)] = inst_35219__$1);

(statearr_35312[(11)] = inst_35218__$1);

(statearr_35312[(14)] = inst_35228);

(statearr_35312[(12)] = inst_35220__$1);

return statearr_35312;
})();
var statearr_35313_36185 = state_35279__$1;
(statearr_35313_36185[(2)] = null);

(statearr_35313_36185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (22))){
var state_35279__$1 = state_35279;
var statearr_35314_36186 = state_35279__$1;
(statearr_35314_36186[(2)] = null);

(statearr_35314_36186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (6))){
var inst_35205 = (state_35279[(13)]);
var inst_35214 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35205) : f.call(null,inst_35205));
var inst_35215 = cljs.core.seq(inst_35214);
var inst_35218 = inst_35215;
var inst_35219 = null;
var inst_35220 = (0);
var inst_35221 = (0);
var state_35279__$1 = (function (){var statearr_35315 = state_35279;
(statearr_35315[(8)] = inst_35221);

(statearr_35315[(9)] = inst_35219);

(statearr_35315[(11)] = inst_35218);

(statearr_35315[(12)] = inst_35220);

return statearr_35315;
})();
var statearr_35316_36187 = state_35279__$1;
(statearr_35316_36187[(2)] = null);

(statearr_35316_36187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (17))){
var inst_35233 = (state_35279[(7)]);
var inst_35238 = cljs.core.chunk_first(inst_35233);
var inst_35239 = cljs.core.chunk_rest(inst_35233);
var inst_35240 = cljs.core.count(inst_35238);
var inst_35218 = inst_35239;
var inst_35219 = inst_35238;
var inst_35220 = inst_35240;
var inst_35221 = (0);
var state_35279__$1 = (function (){var statearr_35324 = state_35279;
(statearr_35324[(8)] = inst_35221);

(statearr_35324[(9)] = inst_35219);

(statearr_35324[(11)] = inst_35218);

(statearr_35324[(12)] = inst_35220);

return statearr_35324;
})();
var statearr_35325_36188 = state_35279__$1;
(statearr_35325_36188[(2)] = null);

(statearr_35325_36188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (3))){
var inst_35271 = (state_35279[(2)]);
var state_35279__$1 = state_35279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35279__$1,inst_35271);
} else {
if((state_val_35280 === (12))){
var inst_35254 = (state_35279[(2)]);
var state_35279__$1 = state_35279;
var statearr_35331_36189 = state_35279__$1;
(statearr_35331_36189[(2)] = inst_35254);

(statearr_35331_36189[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (2))){
var state_35279__$1 = state_35279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35279__$1,(4),in$);
} else {
if((state_val_35280 === (23))){
var inst_35267 = (state_35279[(2)]);
var state_35279__$1 = state_35279;
var statearr_35333_36190 = state_35279__$1;
(statearr_35333_36190[(2)] = inst_35267);

(statearr_35333_36190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (19))){
var inst_35249 = (state_35279[(2)]);
var state_35279__$1 = state_35279;
var statearr_35334_36192 = state_35279__$1;
(statearr_35334_36192[(2)] = inst_35249);

(statearr_35334_36192[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (11))){
var inst_35233 = (state_35279[(7)]);
var inst_35218 = (state_35279[(11)]);
var inst_35233__$1 = cljs.core.seq(inst_35218);
var state_35279__$1 = (function (){var statearr_35335 = state_35279;
(statearr_35335[(7)] = inst_35233__$1);

return statearr_35335;
})();
if(inst_35233__$1){
var statearr_35336_36197 = state_35279__$1;
(statearr_35336_36197[(1)] = (14));

} else {
var statearr_35337_36198 = state_35279__$1;
(statearr_35337_36198[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (9))){
var inst_35256 = (state_35279[(2)]);
var inst_35261 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35279__$1 = (function (){var statearr_35339 = state_35279;
(statearr_35339[(15)] = inst_35256);

return statearr_35339;
})();
if(cljs.core.truth_(inst_35261)){
var statearr_35340_36199 = state_35279__$1;
(statearr_35340_36199[(1)] = (21));

} else {
var statearr_35346_36200 = state_35279__$1;
(statearr_35346_36200[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (5))){
var inst_35208 = cljs.core.async.close_BANG_(out);
var state_35279__$1 = state_35279;
var statearr_35347_36204 = state_35279__$1;
(statearr_35347_36204[(2)] = inst_35208);

(statearr_35347_36204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (14))){
var inst_35233 = (state_35279[(7)]);
var inst_35235 = cljs.core.chunked_seq_QMARK_(inst_35233);
var state_35279__$1 = state_35279;
if(inst_35235){
var statearr_35348_36205 = state_35279__$1;
(statearr_35348_36205[(1)] = (17));

} else {
var statearr_35349_36206 = state_35279__$1;
(statearr_35349_36206[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (16))){
var inst_35252 = (state_35279[(2)]);
var state_35279__$1 = state_35279;
var statearr_35350_36207 = state_35279__$1;
(statearr_35350_36207[(2)] = inst_35252);

(statearr_35350_36207[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (10))){
var inst_35221 = (state_35279[(8)]);
var inst_35219 = (state_35279[(9)]);
var inst_35226 = cljs.core._nth(inst_35219,inst_35221);
var state_35279__$1 = state_35279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35279__$1,(13),out,inst_35226);
} else {
if((state_val_35280 === (18))){
var inst_35233 = (state_35279[(7)]);
var inst_35243 = cljs.core.first(inst_35233);
var state_35279__$1 = state_35279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35279__$1,(20),out,inst_35243);
} else {
if((state_val_35280 === (8))){
var inst_35221 = (state_35279[(8)]);
var inst_35220 = (state_35279[(12)]);
var inst_35223 = (inst_35221 < inst_35220);
var inst_35224 = inst_35223;
var state_35279__$1 = state_35279;
if(cljs.core.truth_(inst_35224)){
var statearr_35351_36212 = state_35279__$1;
(statearr_35351_36212[(1)] = (10));

} else {
var statearr_35352_36213 = state_35279__$1;
(statearr_35352_36213[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32825__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32825__auto____0 = (function (){
var statearr_35353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35353[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32825__auto__);

(statearr_35353[(1)] = (1));

return statearr_35353;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32825__auto____1 = (function (state_35279){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_35279);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e35354){var ex__32828__auto__ = e35354;
var statearr_35355_36217 = state_35279;
(statearr_35355_36217[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_35279[(4)]))){
var statearr_35360_36218 = state_35279;
(statearr_35360_36218[(1)] = cljs.core.first((state_35279[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36222 = state_35279;
state_35279 = G__36222;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32825__auto__ = function(state_35279){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32825__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32825__auto____1.call(this,state_35279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32825__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32825__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32825__auto__;
})()
})();
var state__33229__auto__ = (function (){var statearr_35361 = f__33228__auto__();
(statearr_35361[(6)] = c__33227__auto__);

return statearr_35361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
}));

return c__33227__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35370 = arguments.length;
switch (G__35370) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35375 = arguments.length;
switch (G__35375) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35380 = arguments.length;
switch (G__35380) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33227__auto___36234 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = (function (state_35404){
var state_val_35405 = (state_35404[(1)]);
if((state_val_35405 === (7))){
var inst_35399 = (state_35404[(2)]);
var state_35404__$1 = state_35404;
var statearr_35406_36239 = state_35404__$1;
(statearr_35406_36239[(2)] = inst_35399);

(statearr_35406_36239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (1))){
var inst_35381 = null;
var state_35404__$1 = (function (){var statearr_35407 = state_35404;
(statearr_35407[(7)] = inst_35381);

return statearr_35407;
})();
var statearr_35408_36240 = state_35404__$1;
(statearr_35408_36240[(2)] = null);

(statearr_35408_36240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (4))){
var inst_35384 = (state_35404[(8)]);
var inst_35384__$1 = (state_35404[(2)]);
var inst_35385 = (inst_35384__$1 == null);
var inst_35386 = cljs.core.not(inst_35385);
var state_35404__$1 = (function (){var statearr_35409 = state_35404;
(statearr_35409[(8)] = inst_35384__$1);

return statearr_35409;
})();
if(inst_35386){
var statearr_35410_36241 = state_35404__$1;
(statearr_35410_36241[(1)] = (5));

} else {
var statearr_35411_36242 = state_35404__$1;
(statearr_35411_36242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (6))){
var state_35404__$1 = state_35404;
var statearr_35412_36243 = state_35404__$1;
(statearr_35412_36243[(2)] = null);

(statearr_35412_36243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (3))){
var inst_35401 = (state_35404[(2)]);
var inst_35402 = cljs.core.async.close_BANG_(out);
var state_35404__$1 = (function (){var statearr_35413 = state_35404;
(statearr_35413[(9)] = inst_35401);

return statearr_35413;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35404__$1,inst_35402);
} else {
if((state_val_35405 === (2))){
var state_35404__$1 = state_35404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35404__$1,(4),ch);
} else {
if((state_val_35405 === (11))){
var inst_35384 = (state_35404[(8)]);
var inst_35393 = (state_35404[(2)]);
var inst_35381 = inst_35384;
var state_35404__$1 = (function (){var statearr_35414 = state_35404;
(statearr_35414[(7)] = inst_35381);

(statearr_35414[(10)] = inst_35393);

return statearr_35414;
})();
var statearr_35415_36247 = state_35404__$1;
(statearr_35415_36247[(2)] = null);

(statearr_35415_36247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (9))){
var inst_35384 = (state_35404[(8)]);
var state_35404__$1 = state_35404;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35404__$1,(11),out,inst_35384);
} else {
if((state_val_35405 === (5))){
var inst_35384 = (state_35404[(8)]);
var inst_35381 = (state_35404[(7)]);
var inst_35388 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35384,inst_35381);
var state_35404__$1 = state_35404;
if(inst_35388){
var statearr_35417_36249 = state_35404__$1;
(statearr_35417_36249[(1)] = (8));

} else {
var statearr_35418_36252 = state_35404__$1;
(statearr_35418_36252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (10))){
var inst_35396 = (state_35404[(2)]);
var state_35404__$1 = state_35404;
var statearr_35419_36255 = state_35404__$1;
(statearr_35419_36255[(2)] = inst_35396);

(statearr_35419_36255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (8))){
var inst_35381 = (state_35404[(7)]);
var tmp35416 = inst_35381;
var inst_35381__$1 = tmp35416;
var state_35404__$1 = (function (){var statearr_35420 = state_35404;
(statearr_35420[(7)] = inst_35381__$1);

return statearr_35420;
})();
var statearr_35421_36259 = state_35404__$1;
(statearr_35421_36259[(2)] = null);

(statearr_35421_36259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32825__auto__ = null;
var cljs$core$async$state_machine__32825__auto____0 = (function (){
var statearr_35422 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35422[(0)] = cljs$core$async$state_machine__32825__auto__);

(statearr_35422[(1)] = (1));

return statearr_35422;
});
var cljs$core$async$state_machine__32825__auto____1 = (function (state_35404){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_35404);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e35423){var ex__32828__auto__ = e35423;
var statearr_35424_36265 = state_35404;
(statearr_35424_36265[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_35404[(4)]))){
var statearr_35425_36267 = state_35404;
(statearr_35425_36267[(1)] = cljs.core.first((state_35404[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36268 = state_35404;
state_35404 = G__36268;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
cljs$core$async$state_machine__32825__auto__ = function(state_35404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32825__auto____1.call(this,state_35404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32825__auto____0;
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32825__auto____1;
return cljs$core$async$state_machine__32825__auto__;
})()
})();
var state__33229__auto__ = (function (){var statearr_35426 = f__33228__auto__();
(statearr_35426[(6)] = c__33227__auto___36234);

return statearr_35426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35429 = arguments.length;
switch (G__35429) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33227__auto___36273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = (function (state_35473){
var state_val_35474 = (state_35473[(1)]);
if((state_val_35474 === (7))){
var inst_35469 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
var statearr_35475_36274 = state_35473__$1;
(statearr_35475_36274[(2)] = inst_35469);

(statearr_35475_36274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (1))){
var inst_35433 = (new Array(n));
var inst_35434 = inst_35433;
var inst_35435 = (0);
var state_35473__$1 = (function (){var statearr_35476 = state_35473;
(statearr_35476[(7)] = inst_35434);

(statearr_35476[(8)] = inst_35435);

return statearr_35476;
})();
var statearr_35477_36275 = state_35473__$1;
(statearr_35477_36275[(2)] = null);

(statearr_35477_36275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (4))){
var inst_35441 = (state_35473[(9)]);
var inst_35441__$1 = (state_35473[(2)]);
var inst_35442 = (inst_35441__$1 == null);
var inst_35443 = cljs.core.not(inst_35442);
var state_35473__$1 = (function (){var statearr_35478 = state_35473;
(statearr_35478[(9)] = inst_35441__$1);

return statearr_35478;
})();
if(inst_35443){
var statearr_35479_36277 = state_35473__$1;
(statearr_35479_36277[(1)] = (5));

} else {
var statearr_35480_36278 = state_35473__$1;
(statearr_35480_36278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (15))){
var inst_35463 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
var statearr_35481_36279 = state_35473__$1;
(statearr_35481_36279[(2)] = inst_35463);

(statearr_35481_36279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (13))){
var state_35473__$1 = state_35473;
var statearr_35482_36281 = state_35473__$1;
(statearr_35482_36281[(2)] = null);

(statearr_35482_36281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (6))){
var inst_35435 = (state_35473[(8)]);
var inst_35459 = (inst_35435 > (0));
var state_35473__$1 = state_35473;
if(cljs.core.truth_(inst_35459)){
var statearr_35483_36282 = state_35473__$1;
(statearr_35483_36282[(1)] = (12));

} else {
var statearr_35484_36283 = state_35473__$1;
(statearr_35484_36283[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (3))){
var inst_35471 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35473__$1,inst_35471);
} else {
if((state_val_35474 === (12))){
var inst_35434 = (state_35473[(7)]);
var inst_35461 = cljs.core.vec(inst_35434);
var state_35473__$1 = state_35473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35473__$1,(15),out,inst_35461);
} else {
if((state_val_35474 === (2))){
var state_35473__$1 = state_35473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35473__$1,(4),ch);
} else {
if((state_val_35474 === (11))){
var inst_35453 = (state_35473[(2)]);
var inst_35454 = (new Array(n));
var inst_35434 = inst_35454;
var inst_35435 = (0);
var state_35473__$1 = (function (){var statearr_35486 = state_35473;
(statearr_35486[(7)] = inst_35434);

(statearr_35486[(8)] = inst_35435);

(statearr_35486[(10)] = inst_35453);

return statearr_35486;
})();
var statearr_35487_36285 = state_35473__$1;
(statearr_35487_36285[(2)] = null);

(statearr_35487_36285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (9))){
var inst_35434 = (state_35473[(7)]);
var inst_35451 = cljs.core.vec(inst_35434);
var state_35473__$1 = state_35473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35473__$1,(11),out,inst_35451);
} else {
if((state_val_35474 === (5))){
var inst_35446 = (state_35473[(11)]);
var inst_35434 = (state_35473[(7)]);
var inst_35441 = (state_35473[(9)]);
var inst_35435 = (state_35473[(8)]);
var inst_35445 = (inst_35434[inst_35435] = inst_35441);
var inst_35446__$1 = (inst_35435 + (1));
var inst_35447 = (inst_35446__$1 < n);
var state_35473__$1 = (function (){var statearr_35488 = state_35473;
(statearr_35488[(12)] = inst_35445);

(statearr_35488[(11)] = inst_35446__$1);

return statearr_35488;
})();
if(cljs.core.truth_(inst_35447)){
var statearr_35489_36286 = state_35473__$1;
(statearr_35489_36286[(1)] = (8));

} else {
var statearr_35490_36287 = state_35473__$1;
(statearr_35490_36287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (14))){
var inst_35466 = (state_35473[(2)]);
var inst_35467 = cljs.core.async.close_BANG_(out);
var state_35473__$1 = (function (){var statearr_35492 = state_35473;
(statearr_35492[(13)] = inst_35466);

return statearr_35492;
})();
var statearr_35493_36288 = state_35473__$1;
(statearr_35493_36288[(2)] = inst_35467);

(statearr_35493_36288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (10))){
var inst_35457 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
var statearr_35498_36289 = state_35473__$1;
(statearr_35498_36289[(2)] = inst_35457);

(statearr_35498_36289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (8))){
var inst_35446 = (state_35473[(11)]);
var inst_35434 = (state_35473[(7)]);
var tmp35491 = inst_35434;
var inst_35434__$1 = tmp35491;
var inst_35435 = inst_35446;
var state_35473__$1 = (function (){var statearr_35499 = state_35473;
(statearr_35499[(7)] = inst_35434__$1);

(statearr_35499[(8)] = inst_35435);

return statearr_35499;
})();
var statearr_35500_36290 = state_35473__$1;
(statearr_35500_36290[(2)] = null);

(statearr_35500_36290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32825__auto__ = null;
var cljs$core$async$state_machine__32825__auto____0 = (function (){
var statearr_35501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35501[(0)] = cljs$core$async$state_machine__32825__auto__);

(statearr_35501[(1)] = (1));

return statearr_35501;
});
var cljs$core$async$state_machine__32825__auto____1 = (function (state_35473){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_35473);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e35502){var ex__32828__auto__ = e35502;
var statearr_35507_36291 = state_35473;
(statearr_35507_36291[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_35473[(4)]))){
var statearr_35508_36292 = state_35473;
(statearr_35508_36292[(1)] = cljs.core.first((state_35473[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36293 = state_35473;
state_35473 = G__36293;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
cljs$core$async$state_machine__32825__auto__ = function(state_35473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32825__auto____1.call(this,state_35473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32825__auto____0;
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32825__auto____1;
return cljs$core$async$state_machine__32825__auto__;
})()
})();
var state__33229__auto__ = (function (){var statearr_35509 = f__33228__auto__();
(statearr_35509[(6)] = c__33227__auto___36273);

return statearr_35509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35511 = arguments.length;
switch (G__35511) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33227__auto___36296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33228__auto__ = (function (){var switch__32824__auto__ = (function (state_35558){
var state_val_35559 = (state_35558[(1)]);
if((state_val_35559 === (7))){
var inst_35554 = (state_35558[(2)]);
var state_35558__$1 = state_35558;
var statearr_35560_36297 = state_35558__$1;
(statearr_35560_36297[(2)] = inst_35554);

(statearr_35560_36297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (1))){
var inst_35512 = [];
var inst_35513 = inst_35512;
var inst_35514 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35558__$1 = (function (){var statearr_35561 = state_35558;
(statearr_35561[(7)] = inst_35514);

(statearr_35561[(8)] = inst_35513);

return statearr_35561;
})();
var statearr_35562_36298 = state_35558__$1;
(statearr_35562_36298[(2)] = null);

(statearr_35562_36298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (4))){
var inst_35517 = (state_35558[(9)]);
var inst_35517__$1 = (state_35558[(2)]);
var inst_35518 = (inst_35517__$1 == null);
var inst_35519 = cljs.core.not(inst_35518);
var state_35558__$1 = (function (){var statearr_35563 = state_35558;
(statearr_35563[(9)] = inst_35517__$1);

return statearr_35563;
})();
if(inst_35519){
var statearr_35564_36299 = state_35558__$1;
(statearr_35564_36299[(1)] = (5));

} else {
var statearr_35565_36300 = state_35558__$1;
(statearr_35565_36300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (15))){
var inst_35513 = (state_35558[(8)]);
var inst_35546 = cljs.core.vec(inst_35513);
var state_35558__$1 = state_35558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35558__$1,(18),out,inst_35546);
} else {
if((state_val_35559 === (13))){
var inst_35540 = (state_35558[(2)]);
var state_35558__$1 = state_35558;
var statearr_35566_36301 = state_35558__$1;
(statearr_35566_36301[(2)] = inst_35540);

(statearr_35566_36301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (6))){
var inst_35513 = (state_35558[(8)]);
var inst_35542 = inst_35513.length;
var inst_35543 = (inst_35542 > (0));
var state_35558__$1 = state_35558;
if(cljs.core.truth_(inst_35543)){
var statearr_35567_36303 = state_35558__$1;
(statearr_35567_36303[(1)] = (15));

} else {
var statearr_35568_36304 = state_35558__$1;
(statearr_35568_36304[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (17))){
var inst_35551 = (state_35558[(2)]);
var inst_35552 = cljs.core.async.close_BANG_(out);
var state_35558__$1 = (function (){var statearr_35569 = state_35558;
(statearr_35569[(10)] = inst_35551);

return statearr_35569;
})();
var statearr_35570_36305 = state_35558__$1;
(statearr_35570_36305[(2)] = inst_35552);

(statearr_35570_36305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (3))){
var inst_35556 = (state_35558[(2)]);
var state_35558__$1 = state_35558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35558__$1,inst_35556);
} else {
if((state_val_35559 === (12))){
var inst_35513 = (state_35558[(8)]);
var inst_35532 = cljs.core.vec(inst_35513);
var state_35558__$1 = state_35558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35558__$1,(14),out,inst_35532);
} else {
if((state_val_35559 === (2))){
var state_35558__$1 = state_35558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35558__$1,(4),ch);
} else {
if((state_val_35559 === (11))){
var inst_35517 = (state_35558[(9)]);
var inst_35521 = (state_35558[(11)]);
var inst_35513 = (state_35558[(8)]);
var inst_35529 = inst_35513.push(inst_35517);
var tmp35571 = inst_35513;
var inst_35513__$1 = tmp35571;
var inst_35514 = inst_35521;
var state_35558__$1 = (function (){var statearr_35572 = state_35558;
(statearr_35572[(7)] = inst_35514);

(statearr_35572[(12)] = inst_35529);

(statearr_35572[(8)] = inst_35513__$1);

return statearr_35572;
})();
var statearr_35573_36306 = state_35558__$1;
(statearr_35573_36306[(2)] = null);

(statearr_35573_36306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (9))){
var inst_35514 = (state_35558[(7)]);
var inst_35525 = cljs.core.keyword_identical_QMARK_(inst_35514,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35558__$1 = state_35558;
var statearr_35574_36307 = state_35558__$1;
(statearr_35574_36307[(2)] = inst_35525);

(statearr_35574_36307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (5))){
var inst_35514 = (state_35558[(7)]);
var inst_35517 = (state_35558[(9)]);
var inst_35521 = (state_35558[(11)]);
var inst_35522 = (state_35558[(13)]);
var inst_35521__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35517) : f.call(null,inst_35517));
var inst_35522__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35521__$1,inst_35514);
var state_35558__$1 = (function (){var statearr_35575 = state_35558;
(statearr_35575[(11)] = inst_35521__$1);

(statearr_35575[(13)] = inst_35522__$1);

return statearr_35575;
})();
if(inst_35522__$1){
var statearr_35576_36308 = state_35558__$1;
(statearr_35576_36308[(1)] = (8));

} else {
var statearr_35577_36309 = state_35558__$1;
(statearr_35577_36309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (14))){
var inst_35517 = (state_35558[(9)]);
var inst_35521 = (state_35558[(11)]);
var inst_35534 = (state_35558[(2)]);
var inst_35536 = [];
var inst_35537 = inst_35536.push(inst_35517);
var inst_35513 = inst_35536;
var inst_35514 = inst_35521;
var state_35558__$1 = (function (){var statearr_35578 = state_35558;
(statearr_35578[(7)] = inst_35514);

(statearr_35578[(14)] = inst_35537);

(statearr_35578[(8)] = inst_35513);

(statearr_35578[(15)] = inst_35534);

return statearr_35578;
})();
var statearr_35579_36310 = state_35558__$1;
(statearr_35579_36310[(2)] = null);

(statearr_35579_36310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (16))){
var state_35558__$1 = state_35558;
var statearr_35580_36311 = state_35558__$1;
(statearr_35580_36311[(2)] = null);

(statearr_35580_36311[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (10))){
var inst_35527 = (state_35558[(2)]);
var state_35558__$1 = state_35558;
if(cljs.core.truth_(inst_35527)){
var statearr_35581_36312 = state_35558__$1;
(statearr_35581_36312[(1)] = (11));

} else {
var statearr_35582_36313 = state_35558__$1;
(statearr_35582_36313[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (18))){
var inst_35548 = (state_35558[(2)]);
var state_35558__$1 = state_35558;
var statearr_35583_36314 = state_35558__$1;
(statearr_35583_36314[(2)] = inst_35548);

(statearr_35583_36314[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (8))){
var inst_35522 = (state_35558[(13)]);
var state_35558__$1 = state_35558;
var statearr_35584_36315 = state_35558__$1;
(statearr_35584_36315[(2)] = inst_35522);

(statearr_35584_36315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32825__auto__ = null;
var cljs$core$async$state_machine__32825__auto____0 = (function (){
var statearr_35585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35585[(0)] = cljs$core$async$state_machine__32825__auto__);

(statearr_35585[(1)] = (1));

return statearr_35585;
});
var cljs$core$async$state_machine__32825__auto____1 = (function (state_35558){
while(true){
var ret_value__32826__auto__ = (function (){try{while(true){
var result__32827__auto__ = switch__32824__auto__(state_35558);
if(cljs.core.keyword_identical_QMARK_(result__32827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32827__auto__;
}
break;
}
}catch (e35586){var ex__32828__auto__ = e35586;
var statearr_35587_36316 = state_35558;
(statearr_35587_36316[(2)] = ex__32828__auto__);


if(cljs.core.seq((state_35558[(4)]))){
var statearr_35588_36320 = state_35558;
(statearr_35588_36320[(1)] = cljs.core.first((state_35558[(4)])));

} else {
throw ex__32828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36321 = state_35558;
state_35558 = G__36321;
continue;
} else {
return ret_value__32826__auto__;
}
break;
}
});
cljs$core$async$state_machine__32825__auto__ = function(state_35558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32825__auto____1.call(this,state_35558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32825__auto____0;
cljs$core$async$state_machine__32825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32825__auto____1;
return cljs$core$async$state_machine__32825__auto__;
})()
})();
var state__33229__auto__ = (function (){var statearr_35589 = f__33228__auto__();
(statearr_35589[(6)] = c__33227__auto___36296);

return statearr_35589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33229__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
