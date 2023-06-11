goog.provide('hyperfiddle.electric_client');
/**
 * @define {string}
 */
hyperfiddle.electric_client.VERSION = goog.define("hyperfiddle.electric_client.VERSION","");
hyperfiddle.electric_client.server_url = (function hyperfiddle$electric_client$server_url(){
var url = (new URL(window.location));
var proto = url.protocol;
(url.protocol = (function (){var G__44050 = proto;
switch (G__44050) {
case "http:":
return "ws:";

break;
case "https:":
return "wss:";

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected protocol",proto);

}
})());

url.searchParams.set("HYPERFIDDLE_ELECTRIC_CLIENT_VERSION",hyperfiddle.electric_client.VERSION);

return url.toString();
});
hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = hyperfiddle.electric_client.server_url();
hyperfiddle.electric_client.remove_listeners = (function hyperfiddle$electric_client$remove_listeners(ws){
(ws.onopen = null);

return (ws.onclose = null);
});
hyperfiddle.electric_client.connect = (function hyperfiddle$electric_client$connect(url){
return (function (s,f){
try{var ws = (new WebSocket(url));
(ws.binaryType = "arraybuffer");

(ws.onopen = (function (_){
hyperfiddle.electric_client.remove_listeners(ws);

return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(ws) : s.call(null,ws));
}));

(ws.onclose = (function (_){
hyperfiddle.electric_client.remove_listeners(ws);

return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
}));

return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(WebSocket.CONNECTING,ws.readyState)){
return ws.close();
} else {
return null;
}
});
}catch (e44060){var e = e44060;
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));

return (function (){
return cljs.core.List.EMPTY;
});
}});
});
hyperfiddle.electric_client.wait_for_flush = (function hyperfiddle$electric_client$wait_for_flush(ws){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44071_block_0 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44071_block_0(cr44071_state){
try{(cr44071_state[(0)] = cr44071_block_1);

return cr44071_state;
}catch (e44100){var cr44071_exception = e44100;
(cr44071_state[(0)] = null);

throw cr44071_exception;
}});
var cr44071_block_1 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44071_block_1(cr44071_state){
try{var cr44071_place_0 = (4096);
var cr44071_place_1 = ws;
var cr44071_place_2 = cr44071_place_1.bufferedAmount;
var cr44071_place_3 = (cr44071_place_0 < cr44071_place_2);
var cr44071_place_4 = null;
if(cr44071_place_3){
(cr44071_state[(0)] = cr44071_block_3);

return cr44071_state;
} else {
(cr44071_state[(0)] = cr44071_block_2);

(cr44071_state[(1)] = cr44071_place_4);

return cr44071_state;
}
}catch (e44101){var cr44071_exception = e44101;
(cr44071_state[(0)] = null);

throw cr44071_exception;
}});
var cr44071_block_2 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44071_block_2(cr44071_state){
try{var cr44071_place_5 = null;
(cr44071_state[(0)] = cr44071_block_5);

(cr44071_state[(1)] = cr44071_place_5);

return cr44071_state;
}catch (e44103){var cr44071_exception = e44103;
(cr44071_state[(0)] = null);

(cr44071_state[(1)] = null);

throw cr44071_exception;
}});
var cr44071_block_3 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44071_block_3(cr44071_state){
try{var cr44071_place_6 = missionary.core.sleep;
var cr44071_place_7 = (50);
var cr44071_place_8 = (function (){var G__44106 = cr44071_place_7;
var fexpr__44105 = cr44071_place_6;
return (fexpr__44105.cljs$core$IFn$_invoke$arity$1 ? fexpr__44105.cljs$core$IFn$_invoke$arity$1(G__44106) : fexpr__44105.call(null,G__44106));
})();
(cr44071_state[(0)] = cr44071_block_4);

return missionary.core.park(cr44071_place_8);
}catch (e44104){var cr44071_exception = e44104;
(cr44071_state[(0)] = null);

throw cr44071_exception;
}});
var cr44071_block_4 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44071_block_4(cr44071_state){
try{var cr44071_place_9 = missionary.core.unpark();
(cr44071_state[(0)] = cr44071_block_1);

return cr44071_state;
}catch (e44110){var cr44071_exception = e44110;
(cr44071_state[(0)] = null);

throw cr44071_exception;
}});
var cr44071_block_5 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44071_block_5(cr44071_state){
try{var cr44071_place_4 = (cr44071_state[(1)]);
(cr44071_state[(0)] = null);

(cr44071_state[(1)] = null);

return cr44071_place_4;
}catch (e44111){var cr44071_exception = e44111;
(cr44071_state[(0)] = null);

(cr44071_state[(1)] = null);

throw cr44071_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44116 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__44116[(0)] = cr44071_block_0);

return G__44116;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.wait_for_close = (function hyperfiddle$electric_client$wait_for_close(ws){
return (function (s,f){
(ws.onclose = (function (e){
(ws.onclose = null);

var G__44130 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),e.code,new cljs.core.Keyword(null,"reason","reason",-2070751759),e.reason], null);
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__44130) : s.call(null,G__44130));
}));

return (function (){
if((ws.onclose == null)){
return null;
} else {
(ws.onclose = null);

var G__44135 = (new missionary.Cancelled());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44135) : f.call(null,G__44135));
}
});
});
});
hyperfiddle.electric_client.payload = (function hyperfiddle$electric_client$payload(x){
return x.data;
});
hyperfiddle.electric_client.send_BANG_ = (function hyperfiddle$electric_client$send_BANG_(ws,msg){
var G__44136 = ws;
G__44136.send(msg);

return G__44136;
});
hyperfiddle.electric_client.send_all = (function hyperfiddle$electric_client$send_all(ws,msgs){
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44137_block_0 = (function hyperfiddle$electric_client$send_all_$_cr44137_block_0(cr44137_state){
try{var cr44137_place_0 = hyperfiddle.electric_client.wait_for_flush;
var cr44137_place_1 = hyperfiddle.electric_client.send_BANG_;
var cr44137_place_2 = ws;
var cr44137_place_3 = hyperfiddle.electric.impl.io.encode;
var cr44137_place_4 = (1);
var cr44137_place_5 = msgs;
(cr44137_state[(0)] = cr44137_block_1);

(cr44137_state[(1)] = cr44137_place_0);

(cr44137_state[(2)] = cr44137_place_1);

(cr44137_state[(4)] = cr44137_place_2);

(cr44137_state[(3)] = cr44137_place_3);

return missionary.core.fork(cr44137_place_4,cr44137_place_5);
}catch (e44170){var cr44137_exception = e44170;
(cr44137_state[(0)] = null);

throw cr44137_exception;
}});
var cr44137_block_1 = (function hyperfiddle$electric_client$send_all_$_cr44137_block_1(cr44137_state){
try{var cr44137_place_0 = (cr44137_state[(1)]);
var cr44137_place_1 = (cr44137_state[(2)]);
var cr44137_place_3 = (cr44137_state[(3)]);
var cr44137_place_2 = (cr44137_state[(4)]);
var cr44137_place_6 = missionary.core.unpark();
var cr44137_place_7 = (function (){var G__44181 = cr44137_place_6;
var fexpr__44180 = cr44137_place_3;
return (fexpr__44180.cljs$core$IFn$_invoke$arity$1 ? fexpr__44180.cljs$core$IFn$_invoke$arity$1(G__44181) : fexpr__44180.call(null,G__44181));
})();
var cr44137_place_8 = (function (){var G__44183 = cr44137_place_2;
var G__44184 = cr44137_place_7;
var fexpr__44182 = cr44137_place_1;
return (fexpr__44182.cljs$core$IFn$_invoke$arity$2 ? fexpr__44182.cljs$core$IFn$_invoke$arity$2(G__44183,G__44184) : fexpr__44182.call(null,G__44183,G__44184));
})();
var cr44137_place_9 = (function (){var G__44189 = cr44137_place_8;
var fexpr__44188 = cr44137_place_0;
return (fexpr__44188.cljs$core$IFn$_invoke$arity$1 ? fexpr__44188.cljs$core$IFn$_invoke$arity$1(G__44189) : fexpr__44188.call(null,G__44189));
})();
(cr44137_state[(0)] = cr44137_block_2);

(cr44137_state[(1)] = null);

(cr44137_state[(2)] = null);

(cr44137_state[(3)] = null);

(cr44137_state[(4)] = null);

return missionary.core.park(cr44137_place_9);
}catch (e44179){var cr44137_exception = e44179;
(cr44137_state[(0)] = null);

(cr44137_state[(1)] = null);

(cr44137_state[(2)] = null);

(cr44137_state[(3)] = null);

(cr44137_state[(4)] = null);

throw cr44137_exception;
}});
var cr44137_block_2 = (function hyperfiddle$electric_client$send_all_$_cr44137_block_2(cr44137_state){
try{var cr44137_place_10 = missionary.core.unpark();
(cr44137_state[(0)] = null);

return cr44137_place_10;
}catch (e44193){var cr44137_exception = e44193;
(cr44137_state[(0)] = null);

throw cr44137_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44194 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__44194[(0)] = cr44137_block_0);

return G__44194;
})());
})(),missionary.core.ap_run));
});
/**
 * 
 * server : the server part of the program
 * cb : the callback for incoming messages.
 * msgs : the discrete flow of messages to send, spawned when websocket is connected, cancelled on websocket close.
 * Returns a task producing nil or failing if the websocket was closed before end of reduction.
 */
hyperfiddle.electric_client.connector = (function hyperfiddle$electric_client$connector(server){
return (function (cb,msgs){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44199_block_10 = (function hyperfiddle$electric_client$connector_$_cr44199_block_10(cr44199_state){
try{var cr44199_place_9 = (cr44199_state[(1)]);
var cr44199_place_10 = (cr44199_state[(3)]);
var cr44199_place_42 = (cr44199_state[(5)]);
var cr44199_place_50 = (cljs.core.truth_(cr44199_place_10)?(function(){throw cr44199_place_9})():cr44199_place_9);
(cr44199_state[(0)] = cr44199_block_12);

(cr44199_state[(1)] = null);

(cr44199_state[(3)] = null);

(cr44199_state[(5)] = null);

(cr44199_state[(2)] = cr44199_place_50);

return cr44199_state;
}catch (e44316){var cr44199_exception = e44316;
(cr44199_state[(0)] = null);

(cr44199_state[(1)] = null);

(cr44199_state[(3)] = null);

(cr44199_state[(2)] = null);

(cr44199_state[(5)] = null);

throw cr44199_exception;
}});
var cr44199_block_3 = (function hyperfiddle$electric_client$connector_$_cr44199_block_3(cr44199_state){
try{var cr44199_place_8 = (cr44199_state[(4)]);
var cr44199_place_11 = hyperfiddle.electric_client.send_BANG_;
var cr44199_place_12 = cr44199_place_8;
var cr44199_place_13 = hyperfiddle.electric.impl.io.encode;
var cr44199_place_14 = server;
var cr44199_place_15 = (function (){var G__44322 = cr44199_place_14;
var fexpr__44321 = cr44199_place_13;
return (fexpr__44321.cljs$core$IFn$_invoke$arity$1 ? fexpr__44321.cljs$core$IFn$_invoke$arity$1(G__44322) : fexpr__44321.call(null,G__44322));
})();
var cr44199_place_16 = (function (){var G__44324 = cr44199_place_12;
var G__44325 = cr44199_place_15;
var fexpr__44323 = cr44199_place_11;
return (fexpr__44323.cljs$core$IFn$_invoke$arity$2 ? fexpr__44323.cljs$core$IFn$_invoke$arity$2(G__44324,G__44325) : fexpr__44323.call(null,G__44324,G__44325));
})();
var cr44199_place_17 = cr44199_place_8;
var cr44199_place_18 = cljs.core.comp;
var cr44199_place_19 = cb;
var cr44199_place_20 = hyperfiddle.electric.impl.io.decode;
var cr44199_place_21 = hyperfiddle.electric_client.payload;
var cr44199_place_22 = (function (){var G__44328 = cr44199_place_19;
var G__44329 = cr44199_place_20;
var G__44330 = cr44199_place_21;
var fexpr__44326 = cr44199_place_18;
return (fexpr__44326.cljs$core$IFn$_invoke$arity$3 ? fexpr__44326.cljs$core$IFn$_invoke$arity$3(G__44328,G__44329,G__44330) : fexpr__44326.call(null,G__44328,G__44329,G__44330));
})();
var cr44199_place_23 = (cr44199_place_17.onmessage = cr44199_place_22);
var cr44199_place_24 = missionary.core.race;
var cr44199_place_25 = hyperfiddle.electric_client.send_all;
var cr44199_place_26 = cr44199_place_8;
var cr44199_place_27 = msgs;
var cr44199_place_28 = (function (){var G__44332 = cr44199_place_26;
var G__44333 = cr44199_place_27;
var fexpr__44331 = cr44199_place_25;
return (fexpr__44331.cljs$core$IFn$_invoke$arity$2 ? fexpr__44331.cljs$core$IFn$_invoke$arity$2(G__44332,G__44333) : fexpr__44331.call(null,G__44332,G__44333));
})();
var cr44199_place_29 = hyperfiddle.electric_client.wait_for_close;
var cr44199_place_30 = cr44199_place_8;
var cr44199_place_31 = (function (){var G__44335 = cr44199_place_30;
var fexpr__44334 = cr44199_place_29;
return (fexpr__44334.cljs$core$IFn$_invoke$arity$1 ? fexpr__44334.cljs$core$IFn$_invoke$arity$1(G__44335) : fexpr__44334.call(null,G__44335));
})();
var cr44199_place_32 = (function (){var G__44337 = cr44199_place_28;
var G__44338 = cr44199_place_31;
var fexpr__44336 = cr44199_place_24;
return (fexpr__44336.cljs$core$IFn$_invoke$arity$2 ? fexpr__44336.cljs$core$IFn$_invoke$arity$2(G__44337,G__44338) : fexpr__44336.call(null,G__44337,G__44338));
})();
(cr44199_state[(0)] = cr44199_block_4);

return missionary.core.park(cr44199_place_32);
}catch (e44320){var cr44199_exception = e44320;
(cr44199_state[(0)] = cr44199_block_5);

(cr44199_state[(1)] = cr44199_exception);

return cr44199_state;
}});
var cr44199_block_12 = (function hyperfiddle$electric_client$connector_$_cr44199_block_12(cr44199_state){
try{var cr44199_place_7 = (cr44199_state[(2)]);
(cr44199_state[(0)] = null);

(cr44199_state[(2)] = null);

return cr44199_place_7;
}catch (e44344){var cr44199_exception = e44344;
(cr44199_state[(0)] = null);

(cr44199_state[(2)] = null);

throw cr44199_exception;
}});
var cr44199_block_9 = (function hyperfiddle$electric_client$connector_$_cr44199_block_9(cr44199_state){
try{var cr44199_place_49 = null;
(cr44199_state[(0)] = cr44199_block_10);

(cr44199_state[(5)] = cr44199_place_49);

return cr44199_state;
}catch (e44352){var cr44199_exception = e44352;
(cr44199_state[(0)] = null);

(cr44199_state[(1)] = null);

(cr44199_state[(3)] = null);

(cr44199_state[(2)] = null);

(cr44199_state[(5)] = null);

throw cr44199_exception;
}});
var cr44199_block_11 = (function hyperfiddle$electric_client$connector_$_cr44199_block_11(cr44199_state){
try{var cr44199_place_51 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
(cr44199_state[(0)] = cr44199_block_12);

(cr44199_state[(2)] = cr44199_place_51);

return cr44199_state;
}catch (e44354){var cr44199_exception = e44354;
(cr44199_state[(0)] = null);

(cr44199_state[(2)] = null);

throw cr44199_exception;
}});
var cr44199_block_6 = (function hyperfiddle$electric_client$connector_$_cr44199_block_6(cr44199_state){
try{var cr44199_place_8 = (cr44199_state[(4)]);
var cr44199_place_36 = cljs.core._EQ_;
var cr44199_place_37 = WebSocket;
var cr44199_place_38 = cr44199_place_37.CLOSED;
var cr44199_place_39 = cr44199_place_8;
var cr44199_place_40 = cr44199_place_39.readyState;
var cr44199_place_41 = (function (){var G__44359 = cr44199_place_38;
var G__44360 = cr44199_place_40;
var fexpr__44358 = cr44199_place_36;
return (fexpr__44358.cljs$core$IFn$_invoke$arity$2 ? fexpr__44358.cljs$core$IFn$_invoke$arity$2(G__44359,G__44360) : fexpr__44358.call(null,G__44359,G__44360));
})();
var cr44199_place_42 = null;
if(cljs.core.truth_(cr44199_place_41)){
(cr44199_state[(0)] = cr44199_block_9);

(cr44199_state[(4)] = null);

(cr44199_state[(5)] = cr44199_place_42);

return cr44199_state;
} else {
(cr44199_state[(0)] = cr44199_block_7);

(cr44199_state[(5)] = cr44199_place_42);

return cr44199_state;
}
}catch (e44357){var cr44199_exception = e44357;
(cr44199_state[(0)] = null);

(cr44199_state[(1)] = null);

(cr44199_state[(3)] = null);

(cr44199_state[(2)] = null);

(cr44199_state[(4)] = null);

throw cr44199_exception;
}});
var cr44199_block_2 = (function hyperfiddle$electric_client$connector_$_cr44199_block_2(cr44199_state){
try{var cr44199_place_3 = (cr44199_state[(1)]);
var cr44199_place_8 = cr44199_place_3;
var cr44199_place_9 = null;
var cr44199_place_10 = false;
(cr44199_state[(0)] = cr44199_block_3);

(cr44199_state[(1)] = null);

(cr44199_state[(4)] = cr44199_place_8);

(cr44199_state[(1)] = cr44199_place_9);

(cr44199_state[(3)] = cr44199_place_10);

return cr44199_state;
}catch (e44361){var cr44199_exception = e44361;
(cr44199_state[(0)] = null);

(cr44199_state[(1)] = null);

(cr44199_state[(2)] = null);

throw cr44199_exception;
}});
var cr44199_block_1 = (function hyperfiddle$electric_client$connector_$_cr44199_block_1(cr44199_state){
try{var cr44199_place_3 = missionary.core.unpark();
var cr44199_place_4 = cr44199_place_3;
var cr44199_place_5 = null;
var cr44199_place_6 = (cr44199_place_4 == cr44199_place_5);
var cr44199_place_7 = null;
if(cr44199_place_6){
(cr44199_state[(0)] = cr44199_block_11);

(cr44199_state[(2)] = cr44199_place_7);

return cr44199_state;
} else {
(cr44199_state[(0)] = cr44199_block_2);

(cr44199_state[(1)] = cr44199_place_3);

(cr44199_state[(2)] = cr44199_place_7);

return cr44199_state;
}
}catch (e44362){var cr44199_exception = e44362;
(cr44199_state[(0)] = null);

throw cr44199_exception;
}});
var cr44199_block_8 = (function hyperfiddle$electric_client$connector_$_cr44199_block_8(cr44199_state){
try{var cr44199_place_48 = missionary.core.unpark();
(cr44199_state[(0)] = cr44199_block_10);

(cr44199_state[(5)] = cr44199_place_48);

return cr44199_state;
}catch (e44363){var cr44199_exception = e44363;
(cr44199_state[(0)] = null);

(cr44199_state[(1)] = null);

(cr44199_state[(3)] = null);

(cr44199_state[(2)] = null);

(cr44199_state[(5)] = null);

throw cr44199_exception;
}});
var cr44199_block_0 = (function hyperfiddle$electric_client$connector_$_cr44199_block_0(cr44199_state){
try{var cr44199_place_0 = hyperfiddle.electric_client.connect;
var cr44199_place_1 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr44199_place_2 = (function (){var G__44366 = cr44199_place_1;
var fexpr__44365 = cr44199_place_0;
return (fexpr__44365.cljs$core$IFn$_invoke$arity$1 ? fexpr__44365.cljs$core$IFn$_invoke$arity$1(G__44366) : fexpr__44365.call(null,G__44366));
})();
(cr44199_state[(0)] = cr44199_block_1);

return missionary.core.park(cr44199_place_2);
}catch (e44364){var cr44199_exception = e44364;
(cr44199_state[(0)] = null);

throw cr44199_exception;
}});
var cr44199_block_4 = (function hyperfiddle$electric_client$connector_$_cr44199_block_4(cr44199_state){
try{var cr44199_place_33 = missionary.core.unpark();
(cr44199_state[(0)] = cr44199_block_6);

(cr44199_state[(1)] = cr44199_place_33);

return cr44199_state;
}catch (e44369){var cr44199_exception = e44369;
(cr44199_state[(0)] = cr44199_block_5);

(cr44199_state[(1)] = cr44199_exception);

return cr44199_state;
}});
var cr44199_block_7 = (function hyperfiddle$electric_client$connector_$_cr44199_block_7(cr44199_state){
try{var cr44199_place_8 = (cr44199_state[(4)]);
var cr44199_place_43 = cr44199_place_8;
var cr44199_place_44 = cr44199_place_43.close();
var cr44199_place_45 = missionary.core.compel;
var cr44199_place_46 = hyperfiddle.electric_client.wait_for_close;
var cr44199_place_47 = (function (){var G__44378 = cr44199_place_46;
var fexpr__44377 = cr44199_place_45;
return (fexpr__44377.cljs$core$IFn$_invoke$arity$1 ? fexpr__44377.cljs$core$IFn$_invoke$arity$1(G__44378) : fexpr__44377.call(null,G__44378));
})();
(cr44199_state[(0)] = cr44199_block_8);

(cr44199_state[(4)] = null);

return missionary.core.park(cr44199_place_47);
}catch (e44373){var cr44199_exception = e44373;
(cr44199_state[(0)] = null);

(cr44199_state[(1)] = null);

(cr44199_state[(3)] = null);

(cr44199_state[(2)] = null);

(cr44199_state[(4)] = null);

(cr44199_state[(5)] = null);

throw cr44199_exception;
}});
var cr44199_block_5 = (function hyperfiddle$electric_client$connector_$_cr44199_block_5(cr44199_state){
try{var cr44199_place_9 = (cr44199_state[(1)]);
var cr44199_place_34 = cr44199_place_9;
var cr44199_place_35 = (function(){throw cr44199_place_34})();
(cr44199_state[(0)] = null);

(cr44199_state[(1)] = null);

(cr44199_state[(3)] = null);

(cr44199_state[(2)] = null);

(cr44199_state[(4)] = null);

return null;
}catch (e44379){var cr44199_exception = e44379;
(cr44199_state[(0)] = cr44199_block_6);

(cr44199_state[(3)] = true);

(cr44199_state[(1)] = cr44199_exception);

return cr44199_state;
}});
return cloroutine.impl.coroutine((function (){var G__44383 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__44383[(0)] = cr44199_block_0);

return G__44383;
})());
})(),missionary.core.sp_run);
});
});
hyperfiddle.electric_client.fib_iter = (function hyperfiddle$electric_client$fib_iter(p__44389){
var vec__44390 = p__44389;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44390,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44390,(1),null);
var G__44394 = b;
switch (G__44394) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,(a + b)], null);

}
});
hyperfiddle.electric_client.fib = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.iterate(hyperfiddle.electric_client.fib_iter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)));
hyperfiddle.electric_client.retry_delays = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(100)),hyperfiddle.electric_client.fib);
hyperfiddle.electric_client.boot_with_retry = (function hyperfiddle$electric_client$boot_with_retry(client,conn){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44401_block_17 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44401_block_17(cr44401_state){
try{var cr44401_place_130 = missionary.core.unpark();
(cr44401_state[(0)] = cr44401_block_1);

(cr44401_state[(1)] = cr44401_place_130);

return cr44401_state;
}catch (e44720){var cr44401_exception = e44720;
(cr44401_state[(0)] = null);

(cr44401_state[(1)] = null);

(cr44401_state[(2)] = null);

throw cr44401_exception;
}});
var cr44401_block_16 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44401_block_16(cr44401_state){
try{var cr44401_place_60 = (cr44401_state[(4)]);
var cr44401_place_106 = cr44401_place_60;
var cr44401_place_107 = cljs.core.seq;
var cr44401_place_108 = cr44401_place_106;
var cr44401_place_109 = (function (){var G__44723 = cr44401_place_108;
var fexpr__44722 = cr44401_place_107;
return (fexpr__44722.cljs$core$IFn$_invoke$arity$1 ? fexpr__44722.cljs$core$IFn$_invoke$arity$1(G__44723) : fexpr__44722.call(null,G__44723));
})();
var cr44401_place_110 = cljs.core.first;
var cr44401_place_111 = cr44401_place_109;
var cr44401_place_112 = (function (){var G__44725 = cr44401_place_111;
var fexpr__44724 = cr44401_place_110;
return (fexpr__44724.cljs$core$IFn$_invoke$arity$1 ? fexpr__44724.cljs$core$IFn$_invoke$arity$1(G__44725) : fexpr__44724.call(null,G__44725));
})();
var cr44401_place_113 = cljs.core.next;
var cr44401_place_114 = cr44401_place_109;
var cr44401_place_115 = (function (){var G__44727 = cr44401_place_114;
var fexpr__44726 = cr44401_place_113;
return (fexpr__44726.cljs$core$IFn$_invoke$arity$1 ? fexpr__44726.cljs$core$IFn$_invoke$arity$1(G__44727) : fexpr__44726.call(null,G__44727));
})();
var cr44401_place_116 = cr44401_place_112;
var cr44401_place_117 = cr44401_place_115;
var cr44401_place_118 = console;
var cr44401_place_119 = "Next attempt in ";
var cr44401_place_120 = cr44401_place_116;
var cr44401_place_121 = (1000);
var cr44401_place_122 = (cr44401_place_120 / cr44401_place_121);
var cr44401_place_123 = " seconds.";
var cr44401_place_124 = [cr44401_place_119,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44401_place_122),cr44401_place_123].join('');
var cr44401_place_125 = cr44401_place_118.log(cr44401_place_124);
var cr44401_place_126 = missionary.core.sleep;
var cr44401_place_127 = cr44401_place_116;
var cr44401_place_128 = cr44401_place_117;
var cr44401_place_129 = (function (){var G__44729 = cr44401_place_127;
var G__44730 = cr44401_place_128;
var fexpr__44728 = cr44401_place_126;
return (fexpr__44728.cljs$core$IFn$_invoke$arity$2 ? fexpr__44728.cljs$core$IFn$_invoke$arity$2(G__44729,G__44730) : fexpr__44728.call(null,G__44729,G__44730));
})();
(cr44401_state[(0)] = cr44401_block_17);

(cr44401_state[(4)] = null);

return missionary.core.park(cr44401_place_129);
}catch (e44721){var cr44401_exception = e44721;
(cr44401_state[(0)] = null);

(cr44401_state[(1)] = null);

(cr44401_state[(4)] = null);

(cr44401_state[(2)] = null);

throw cr44401_exception;
}});
var cr44401_block_18 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44401_block_18(cr44401_state){
try{var cr44401_place_131 = null;
(cr44401_state[(0)] = cr44401_block_19);

(cr44401_state[(1)] = cr44401_place_131);

return cr44401_state;
}catch (e44731){var cr44401_exception = e44731;
(cr44401_state[(0)] = null);

(cr44401_state[(1)] = null);

throw cr44401_exception;
}});
var cr44401_block_10 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44401_block_10(cr44401_state){
try{var cr44401_place_69 = (cr44401_state[(1)]);
var cr44401_place_61 = (cr44401_state[(6)]);
var cr44401_place_86 = cljs.core.ex_info;
var cr44401_place_87 = "Remote error - ";
var cr44401_place_88 = cr44401_place_69;
var cr44401_place_89 = " ";
var cr44401_place_90 = new cljs.core.Keyword(null,"reason","reason",-2070751759);
var cr44401_place_91 = cr44401_place_61;
var cr44401_place_92 = cr44401_place_90.cljs$core$IFn$_invoke$arity$1(cr44401_place_91);
var cr44401_place_93 = [cr44401_place_87,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44401_place_88),cr44401_place_89,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44401_place_92)].join('');
var cr44401_place_94 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr44401_place_95 = (function (){var G__44734 = cr44401_place_93;
var G__44735 = cr44401_place_94;
var fexpr__44733 = cr44401_place_86;
return (fexpr__44733.cljs$core$IFn$_invoke$arity$2 ? fexpr__44733.cljs$core$IFn$_invoke$arity$2(G__44734,G__44735) : fexpr__44733.call(null,G__44734,G__44735));
})();
var cr44401_place_96 = (function(){throw cr44401_place_95})();
(cr44401_state[(0)] = null);

(cr44401_state[(1)] = null);

(cr44401_state[(6)] = null);

return null;
}catch (e44732){var cr44401_exception = e44732;
(cr44401_state[(0)] = null);

(cr44401_state[(1)] = null);

(cr44401_state[(6)] = null);

throw cr44401_exception;
}});
var cr44401_block_1 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44401_block_1(cr44401_state){
try{var cr44401_place_0 = (cr44401_state[(2)]);
var cr44401_place_2 = cljs.core.object_array;
var cr44401_place_3 = (1);
var cr44401_place_4 = (function (){var G__44738 = cr44401_place_3;
var fexpr__44737 = cr44401_place_2;
return (fexpr__44737.cljs$core$IFn$_invoke$arity$1 ? fexpr__44737.cljs$core$IFn$_invoke$arity$1(G__44738) : fexpr__44737.call(null,G__44738));
})();
var cr44401_place_5 = console;
var cr44401_place_6 = "Connecting...";
var cr44401_place_7 = cr44401_place_5.log(cr44401_place_6);
var cr44401_place_8 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr44401_place_9 = cr44401_place_0;
var cr44401_place_10 = cr44401_place_9;
var cr44401_place_11 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr44401_place_10);
var cr44401_place_12 = null;
var cr44401_place_13 = false;
(cr44401_state[(0)] = cr44401_block_2);

(cr44401_state[(3)] = cr44401_place_4);

(cr44401_state[(4)] = cr44401_place_13);

(cr44401_state[(5)] = cr44401_place_12);

(cr44401_state[(6)] = cr44401_place_8);

return cr44401_state;
}catch (e44736){var cr44401_exception = e44736;
(cr44401_state[(0)] = null);

(cr44401_state[(1)] = null);

(cr44401_state[(2)] = null);

throw cr44401_exception;
}});
var cr44401_block_2 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44401_block_2(cr44401_state){
try{var cr44401_place_4 = (cr44401_state[(3)]);
var cr44401_place_14 = (function (x){
var fexpr__44513 = (cr44401_place_4[(0)]);
var G__44741 = x;
var fexpr__44740 = fexpr__44513;
return (fexpr__44740.cljs$core$IFn$_invoke$arity$1 ? fexpr__44740.cljs$core$IFn$_invoke$arity$1(G__44741) : fexpr__44740.call(null,G__44741));
});
var cr44401_place_15 = cljs.core.partial;
var cr44401_place_30 = (function (cr44514_state){
try{var cr44514_place_11 = missionary.core.unpark();
var cr44514_place_12 = cr44514_place_11;
var cr44514_place_13 = null;
var G__44576 = cr44514_place_12;
var G__44779 = G__44576;
switch (G__44779) {
case (0):
(cr44514_state[(0)] = cr44401_place_33);

(cr44514_state[(2)] = cr44514_place_13);

return cr44514_state;

break;
case (1):
(cr44514_state[(0)] = cr44401_place_17);

(cr44514_state[(2)] = cr44514_place_13);

return cr44514_state;

break;
default:
(cr44514_state[(0)] = cr44401_place_23);

(cr44514_state[(1)] = null);

(cr44514_state[(1)] = cr44514_place_11);

return cr44514_state;

}
}catch (e44778){var e44575 = e44778;
var cr44514_exception = e44575;
(cr44514_state[(0)] = null);

(cr44514_state[(1)] = null);

throw cr44514_exception;
}});
var cr44401_place_16 = (function (cr44514_state){
try{(cr44514_state[(0)] = cr44401_place_24);

return cr44514_state;
}catch (e44780){var e44555 = e44780;
var cr44514_exception = e44555;
(cr44514_state[(0)] = null);

(cr44514_state[(2)] = null);

(cr44514_state[(1)] = null);

throw cr44514_exception;
}});
var cr44401_place_22 = (function (cr44514_state){
try{var cr44514_place_42 = (cr44514_state[(1)]);
(cr44514_state[(0)] = cr44401_place_21);

(cr44514_state[(1)] = null);

(cr44514_state[(4)] = cr44514_place_42);

return cr44514_state;
}catch (e44781){var e44561 = e44781;
var cr44514_exception = e44561;
(cr44514_state[(0)] = null);

(cr44514_state[(4)] = null);

(cr44514_state[(1)] = null);

(cr44514_state[(2)] = null);

throw cr44514_exception;
}});
var cr44401_place_32 = (function (cr44514_state){
try{var cr44514_place_28 = (cr44514_state[(3)]);
var cr44514_place_33 = cr44514_place_28;
var cr44514_place_34 = (1);
var cr44514_place_35 = missionary.core.seed;
var cr44514_place_36 = cljs.core.range;
var cr44514_place_37 = (2);
var cr44514_place_38 = (function (){var G__44580 = cr44514_place_37;
var fexpr__44579 = cr44514_place_36;
var G__44784 = G__44580;
var fexpr__44783 = fexpr__44579;
return (fexpr__44783.cljs$core$IFn$_invoke$arity$1 ? fexpr__44783.cljs$core$IFn$_invoke$arity$1(G__44784) : fexpr__44783.call(null,G__44784));
})();
var cr44514_place_39 = (function (){var G__44582 = cr44514_place_38;
var fexpr__44581 = cr44514_place_35;
var G__44786 = G__44582;
var fexpr__44785 = fexpr__44581;
return (fexpr__44785.cljs$core$IFn$_invoke$arity$1 ? fexpr__44785.cljs$core$IFn$_invoke$arity$1(G__44786) : fexpr__44785.call(null,G__44786));
})();
(cr44514_state[(0)] = cr44401_place_27);

(cr44514_state[(3)] = null);

(cr44514_state[(3)] = cr44514_place_33);

return missionary.core.fork(cr44514_place_34,cr44514_place_39);
}catch (e44782){var e44578 = e44782;
var cr44514_exception = e44578;
(cr44514_state[(0)] = null);

(cr44514_state[(3)] = null);

(cr44514_state[(4)] = null);

(cr44514_state[(2)] = null);

(cr44514_state[(1)] = null);

throw cr44514_exception;
}});
var cr44401_place_23 = (function (cr44514_state){
try{var cr44514_place_11 = (cr44514_state[(1)]);
var cr44514_place_52 = "No matching clause: ";
var cr44514_place_53 = cr44514_place_11;
var cr44514_place_54 = [cr44514_place_52,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44514_place_53)].join('');
var cr44514_place_55 = (new Error(cr44514_place_54));
var cr44514_place_56 = (function(){throw cr44514_place_55})();
(cr44514_state[(0)] = null);

(cr44514_state[(1)] = null);

return null;
}catch (e44787){var e44562 = e44787;
var cr44514_exception = e44562;
(cr44514_state[(0)] = null);

(cr44514_state[(1)] = null);

throw cr44514_exception;
}});
var cr44401_place_26 = (function (cr44514_state){
try{var cr44514_place_51 = missionary.core.unpark();
(cr44514_state[(0)] = cr44401_place_21);

(cr44514_state[(4)] = cr44514_place_51);

return cr44514_state;
}catch (e44788){var e44565 = e44788;
var cr44514_exception = e44565;
(cr44514_state[(0)] = null);

(cr44514_state[(4)] = null);

(cr44514_state[(2)] = null);

throw cr44514_exception;
}});
var cr44401_place_18 = (function (cr44514_state){
try{var cr44514_place_26 = missionary.core.unpark();
(cr44514_state[(0)] = cr44401_place_34);

(cr44514_state[(2)] = cr44514_place_26);

return cr44514_state;
}catch (e44789){var e44557 = e44789;
var cr44514_exception = e44557;
(cr44514_state[(0)] = null);

(cr44514_state[(2)] = null);

throw cr44514_exception;
}});
var cr44401_place_24 = (function (cr44514_state){
try{var cr44514_place_4 = (cr44514_state[(1)]);
var cr44514_place_27 = cr44514_place_4;
(cr44514_state[(0)] = cr44401_place_19);

return missionary.core.park(cr44514_place_27);
}catch (e44790){var e44563 = e44790;
var cr44514_exception = e44563;
(cr44514_state[(0)] = null);

(cr44514_state[(2)] = null);

(cr44514_state[(1)] = null);

throw cr44514_exception;
}});
var cr44401_place_25 = (function (cr44514_state){
try{var cr44514_place_40 = (cr44514_state[(1)]);
var cr44514_place_44 = "No matching clause: ";
var cr44514_place_45 = cr44514_place_40;
var cr44514_place_46 = [cr44514_place_44,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44514_place_45)].join('');
var cr44514_place_47 = (new Error(cr44514_place_46));
var cr44514_place_48 = (function(){throw cr44514_place_47})();
(cr44514_state[(0)] = null);

(cr44514_state[(1)] = null);

return null;
}catch (e44791){var e44564 = e44791;
var cr44514_exception = e44564;
(cr44514_state[(0)] = null);

(cr44514_state[(1)] = null);

throw cr44514_exception;
}});
var cr44401_place_17 = (function (cr44514_state){
try{(cr44514_state[(0)] = cr44401_place_24);

return cr44514_state;
}catch (e44792){var e44556 = e44792;
var cr44514_exception = e44556;
(cr44514_state[(0)] = null);

(cr44514_state[(2)] = null);

(cr44514_state[(1)] = null);

throw cr44514_exception;
}});
var cr44401_place_20 = (function (cr44514_state){
try{var cr44514_place_49 = (1);
var cr44514_place_50 = missionary.core.none;
(cr44514_state[(0)] = cr44401_place_26);

return missionary.core.fork(cr44514_place_49,cr44514_place_50);
}catch (e44793){var e44559 = e44793;
var cr44514_exception = e44559;
(cr44514_state[(0)] = null);

(cr44514_state[(4)] = null);

(cr44514_state[(2)] = null);

throw cr44514_exception;
}});
var cr44401_place_28 = (function (cr44514_state){
try{var cr44514_place_0 = console;
var cr44514_place_1 = "Connected.";
var cr44514_place_2 = cr44514_place_0.log(cr44514_place_1);
var cr44514_place_3 = missionary.core.rdv;
var cr44514_place_4 = (function (){var fexpr__44569 = cr44514_place_3;
var fexpr__44795 = fexpr__44569;
return (fexpr__44795.cljs$core$IFn$_invoke$arity$0 ? fexpr__44795.cljs$core$IFn$_invoke$arity$0() : fexpr__44795.call(null));
})();
var cr44514_place_5 = (2);
var cr44514_place_6 = missionary.core.seed;
var cr44514_place_7 = cljs.core.range;
var cr44514_place_8 = (2);
var cr44514_place_9 = (function (){var G__44571 = cr44514_place_8;
var fexpr__44570 = cr44514_place_7;
var G__44797 = G__44571;
var fexpr__44796 = fexpr__44570;
return (fexpr__44796.cljs$core$IFn$_invoke$arity$1 ? fexpr__44796.cljs$core$IFn$_invoke$arity$1(G__44797) : fexpr__44796.call(null,G__44797));
})();
var cr44514_place_10 = (function (){var G__44573 = cr44514_place_9;
var fexpr__44572 = cr44514_place_6;
var G__44799 = G__44573;
var fexpr__44798 = fexpr__44572;
return (fexpr__44798.cljs$core$IFn$_invoke$arity$1 ? fexpr__44798.cljs$core$IFn$_invoke$arity$1(G__44799) : fexpr__44798.call(null,G__44799));
})();
(cr44514_state[(0)] = cr44401_place_30);

(cr44514_state[(1)] = cr44514_place_4);

return missionary.core.fork(cr44514_place_5,cr44514_place_10);
}catch (e44794){var e44568 = e44794;
var cr44514_exception = e44568;
(cr44514_state[(0)] = null);

throw cr44514_exception;
}});
var cr44401_place_21 = (function (cr44514_state){
try{var cr44514_place_32 = (cr44514_state[(4)]);
(cr44514_state[(0)] = cr44401_place_34);

(cr44514_state[(4)] = null);

(cr44514_state[(2)] = cr44514_place_32);

return cr44514_state;
}catch (e44800){var e44560 = e44800;
var cr44514_exception = e44560;
(cr44514_state[(0)] = null);

(cr44514_state[(4)] = null);

(cr44514_state[(2)] = null);

throw cr44514_exception;
}});
var cr44401_place_31 = (function (cr44514_state){
try{var cr44514_place_33 = (cr44514_state[(3)]);
var cr44514_place_43 = cr44514_place_33;
(cr44514_state[(0)] = cr44401_place_22);

(cr44514_state[(3)] = null);

(cr44514_state[(1)] = cr44514_place_43);

return cr44514_state;
}catch (e44801){var e44577 = e44801;
var cr44514_exception = e44577;
(cr44514_state[(0)] = null);

(cr44514_state[(4)] = null);

(cr44514_state[(1)] = null);

(cr44514_state[(2)] = null);

(cr44514_state[(3)] = null);

throw cr44514_exception;
}});
var cr44401_place_27 = (function (cr44514_state){
try{var cr44514_place_40 = missionary.core.unpark();
var cr44514_place_41 = cr44514_place_40;
var cr44514_place_42 = null;
var G__44567 = cr44514_place_41;
var G__44803 = G__44567;
switch (G__44803) {
case (0):
(cr44514_state[(0)] = cr44401_place_31);

(cr44514_state[(1)] = null);

(cr44514_state[(1)] = cr44514_place_42);

return cr44514_state;

break;
case (1):
(cr44514_state[(0)] = cr44401_place_16);

(cr44514_state[(4)] = null);

(cr44514_state[(3)] = null);

return cr44514_state;

break;
default:
(cr44514_state[(0)] = cr44401_place_25);

(cr44514_state[(4)] = null);

(cr44514_state[(2)] = null);

(cr44514_state[(3)] = null);

(cr44514_state[(1)] = null);

(cr44514_state[(1)] = cr44514_place_40);

return cr44514_state;

}
}catch (e44802){var e44566 = e44802;
var cr44514_exception = e44566;
(cr44514_state[(0)] = null);

(cr44514_state[(4)] = null);

(cr44514_state[(2)] = null);

(cr44514_state[(3)] = null);

(cr44514_state[(1)] = null);

throw cr44514_exception;
}});
var cr44401_place_34 = (function (cr44514_state){
try{var cr44514_place_13 = (cr44514_state[(2)]);
(cr44514_state[(0)] = null);

(cr44514_state[(2)] = null);

return cr44514_place_13;
}catch (e44804){var e44590 = e44804;
var cr44514_exception = e44590;
(cr44514_state[(0)] = null);

(cr44514_state[(2)] = null);

throw cr44514_exception;
}});
var cr44401_place_19 = (function (cr44514_state){
try{var cr44514_place_28 = missionary.core.unpark();
var cr44514_place_29 = cr44514_place_28;
var cr44514_place_30 = null;
var cr44514_place_31 = (cr44514_place_29 == cr44514_place_30);
var cr44514_place_32 = null;
if(cr44514_place_31){
(cr44514_state[(0)] = cr44401_place_20);

(cr44514_state[(1)] = null);

(cr44514_state[(4)] = cr44514_place_32);

return cr44514_state;
} else {
(cr44514_state[(0)] = cr44401_place_32);

(cr44514_state[(3)] = cr44514_place_28);

(cr44514_state[(4)] = cr44514_place_32);

return cr44514_state;
}
}catch (e44805){var e44558 = e44805;
var cr44514_exception = e44558;
(cr44514_state[(0)] = null);

(cr44514_state[(2)] = null);

(cr44514_state[(1)] = null);

throw cr44514_exception;
}});
var cr44401_place_33 = (function (cr44514_state){
try{var cr44514_place_4 = (cr44514_state[(1)]);
var cr44514_place_14 = cr44514_place_4;
var cr44514_place_15 = hyperfiddle.electric.impl.runtime.subject_at;
var cr44514_place_16 = cr44401_place_4;
var cr44514_place_17 = (0);
var cr44514_place_18 = (function (){var G__44585 = cr44514_place_16;
var G__44586 = cr44514_place_17;
var fexpr__44584 = cr44514_place_15;
var G__44808 = G__44585;
var G__44809 = G__44586;
var fexpr__44807 = fexpr__44584;
return (fexpr__44807.cljs$core$IFn$_invoke$arity$2 ? fexpr__44807.cljs$core$IFn$_invoke$arity$2(G__44808,G__44809) : fexpr__44807.call(null,G__44808,G__44809));
})();
var cr44514_place_19 = client;
var cr44514_place_20 = cr44514_place_14;
var cr44514_place_21 = cr44514_place_18;
var cr44514_place_22 = (function (){var G__44588 = cr44514_place_20;
var G__44589 = cr44514_place_21;
var fexpr__44587 = cr44514_place_19;
var G__44811 = G__44588;
var G__44812 = G__44589;
var fexpr__44810 = fexpr__44587;
return (fexpr__44810.cljs$core$IFn$_invoke$arity$2 ? fexpr__44810.cljs$core$IFn$_invoke$arity$2(G__44811,G__44812) : fexpr__44810.call(null,G__44811,G__44812));
})();
(cr44514_state[(0)] = cr44401_place_29);

(cr44514_state[(1)] = null);

return missionary.core.park(cr44514_place_22);
}catch (e44806){var e44583 = e44806;
var cr44514_exception = e44583;
(cr44514_state[(0)] = null);

(cr44514_state[(2)] = null);

(cr44514_state[(1)] = null);

throw cr44514_exception;
}});
var cr44401_place_29 = (function (cr44514_state){
try{var cr44514_place_23 = missionary.core.unpark();
var cr44514_place_24 = (1);
var cr44514_place_25 = missionary.core.none;
(cr44514_state[(0)] = cr44401_place_18);

return missionary.core.fork(cr44514_place_24,cr44514_place_25);
}catch (e44813){var e44574 = e44813;
var cr44514_exception = e44574;
(cr44514_state[(0)] = null);

(cr44514_state[(2)] = null);

throw cr44514_exception;
}});
var cr44401_place_35 = cloroutine.impl.coroutine;
var cr44401_place_36 = cljs.core.object_array;
var cr44401_place_37 = (5);
var cr44401_place_38 = (function (){var G__44815 = cr44401_place_37;
var fexpr__44814 = cr44401_place_36;
return (fexpr__44814.cljs$core$IFn$_invoke$arity$1 ? fexpr__44814.cljs$core$IFn$_invoke$arity$1(G__44815) : fexpr__44814.call(null,G__44815));
})();
var cr44401_place_39 = cr44401_place_38;
var cr44401_place_40 = (0);
var cr44401_place_41 = cr44401_place_28;
var cr44401_place_42 = (cr44401_place_39[cr44401_place_40] = cr44401_place_41);
var cr44401_place_43 = cr44401_place_38;
var cr44401_place_44 = (function (){var G__44817 = cr44401_place_43;
var fexpr__44816 = cr44401_place_35;
return (fexpr__44816.cljs$core$IFn$_invoke$arity$1 ? fexpr__44816.cljs$core$IFn$_invoke$arity$1(G__44817) : fexpr__44816.call(null,G__44817));
})();
var cr44401_place_45 = missionary.core.ap_run;
var cr44401_place_46 = (function (){var G__44819 = cr44401_place_44;
var G__44820 = cr44401_place_45;
var fexpr__44818 = cr44401_place_15;
return (fexpr__44818.cljs$core$IFn$_invoke$arity$2 ? fexpr__44818.cljs$core$IFn$_invoke$arity$2(G__44819,G__44820) : fexpr__44818.call(null,G__44819,G__44820));
})();
var cr44401_place_47 = conn;
var cr44401_place_48 = cr44401_place_14;
var cr44401_place_49 = cr44401_place_46;
var cr44401_place_50 = (function (){var G__44822 = cr44401_place_48;
var G__44823 = cr44401_place_49;
var fexpr__44821 = cr44401_place_47;
return (fexpr__44821.cljs$core$IFn$_invoke$arity$2 ? fexpr__44821.cljs$core$IFn$_invoke$arity$2(G__44822,G__44823) : fexpr__44821.call(null,G__44822,G__44823));
})();
(cr44401_state[(0)] = cr44401_block_3);

(cr44401_state[(3)] = null);

return missionary.core.park(cr44401_place_50);
}catch (e44739){var cr44401_exception = e44739;
(cr44401_state[(0)] = cr44401_block_4);

(cr44401_state[(3)] = null);

(cr44401_state[(5)] = cr44401_exception);

return cr44401_state;
}});
var cr44401_block_0 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44401_block_0(cr44401_state){
try{var cr44401_place_0 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr44401_place_1 = hyperfiddle.electric_client.retry_delays;
(cr44401_state[(0)] = cr44401_block_1);

(cr44401_state[(2)] = cr44401_place_0);

(cr44401_state[(1)] = cr44401_place_1);

return cr44401_state;
}catch (e44824){var cr44401_exception = e44824;
(cr44401_state[(0)] = null);

throw cr44401_exception;
}});
var cr44401_block_6 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44401_block_6(cr44401_state){
try{var cr44401_place_56 = (cr44401_state[(3)]);
var cr44401_place_61 = cr44401_place_56;
var cr44401_place_62 = new cljs.core.Keyword(null,"code","code",1586293142);
var cr44401_place_63 = cr44401_place_61;
var cr44401_place_64 = cr44401_place_62.cljs$core$IFn$_invoke$arity$1(cr44401_place_63);
var cr44401_place_65 = cr44401_place_64;
var cr44401_place_66 = null;
var cr44401_place_67 = (cr44401_place_65 == cr44401_place_66);
var cr44401_place_68 = null;
if(cr44401_place_67){
(cr44401_state[(0)] = cr44401_block_12);

(cr44401_state[(3)] = null);

(cr44401_state[(3)] = cr44401_place_68);

return cr44401_state;
} else {
(cr44401_state[(0)] = cr44401_block_7);

(cr44401_state[(3)] = null);

(cr44401_state[(6)] = cr44401_place_61);

(cr44401_state[(5)] = cr44401_place_64);

(cr44401_state[(3)] = cr44401_place_68);

return cr44401_state;
}
}catch (e44825){var cr44401_exception = e44825;
(cr44401_state[(0)] = null);

(cr44401_state[(1)] = null);

(cr44401_state[(3)] = null);

(cr44401_state[(4)] = null);

(cr44401_state[(2)] = null);

throw cr44401_exception;
}});
var cr44401_block_3 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44401_block_3(cr44401_state){
try{var cr44401_place_51 = missionary.core.unpark();
(cr44401_state[(0)] = cr44401_block_5);

(cr44401_state[(5)] = cr44401_place_51);

return cr44401_state;
}catch (e44826){var cr44401_exception = e44826;
(cr44401_state[(0)] = cr44401_block_4);

(cr44401_state[(5)] = cr44401_exception);

return cr44401_state;
}});
var cr44401_block_15 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44401_block_15(cr44401_state){
try{var cr44401_place_60 = (cr44401_state[(4)]);
var cr44401_place_102 = cr44401_place_60;
var cr44401_place_103 = null;
var cr44401_place_104 = (cr44401_place_102 == cr44401_place_103);
var cr44401_place_105 = null;
if(cr44401_place_104){
(cr44401_state[(0)] = cr44401_block_18);

(cr44401_state[(1)] = null);

(cr44401_state[(4)] = null);

(cr44401_state[(2)] = null);

(cr44401_state[(1)] = cr44401_place_105);

return cr44401_state;
} else {
(cr44401_state[(0)] = cr44401_block_16);

return cr44401_state;
}
}catch (e44827){var cr44401_exception = e44827;
(cr44401_state[(0)] = null);

(cr44401_state[(1)] = null);

(cr44401_state[(4)] = null);

(cr44401_state[(2)] = null);

throw cr44401_exception;
}});
var cr44401_block_19 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44401_block_19(cr44401_state){
try{var cr44401_place_105 = (cr44401_state[(1)]);
(cr44401_state[(0)] = null);

(cr44401_state[(1)] = null);

return cr44401_place_105;
}catch (e44828){var cr44401_exception = e44828;
(cr44401_state[(0)] = null);

(cr44401_state[(1)] = null);

throw cr44401_exception;
}});
var cr44401_block_5 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44401_block_5(cr44401_state){
try{var cr44401_place_13 = (cr44401_state[(4)]);
var cr44401_place_12 = (cr44401_state[(5)]);
var cr44401_place_8 = (cr44401_state[(6)]);
var cr44401_place_54 = cr44401_place_8;
var cr44401_place_55 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr44401_place_54);
var cr44401_place_56 = (cljs.core.truth_(cr44401_place_13)?(function(){throw cr44401_place_12})():cr44401_place_12);
var cr44401_place_57 = cr44401_place_56;
var cr44401_place_58 = null;
var cr44401_place_59 = (cr44401_place_57 == cr44401_place_58);
var cr44401_place_60 = null;
if(cr44401_place_59){
(cr44401_state[(0)] = cr44401_block_14);

(cr44401_state[(4)] = null);

(cr44401_state[(5)] = null);

(cr44401_state[(6)] = null);

(cr44401_state[(4)] = cr44401_place_60);

return cr44401_state;
} else {
(cr44401_state[(0)] = cr44401_block_6);

(cr44401_state[(4)] = null);

(cr44401_state[(5)] = null);

(cr44401_state[(6)] = null);

(cr44401_state[(3)] = cr44401_place_56);

(cr44401_state[(4)] = cr44401_place_60);

return cr44401_state;
}
}catch (e44829){var cr44401_exception = e44829;
(cr44401_state[(0)] = null);

(cr44401_state[(4)] = null);

(cr44401_state[(1)] = null);

(cr44401_state[(5)] = null);

(cr44401_state[(2)] = null);

(cr44401_state[(6)] = null);

throw cr44401_exception;
}});
var cr44401_block_4 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44401_block_4(cr44401_state){
try{var cr44401_place_12 = (cr44401_state[(5)]);
var cr44401_place_52 = cr44401_place_12;
var cr44401_place_53 = (function(){throw cr44401_place_52})();
(cr44401_state[(0)] = null);

(cr44401_state[(4)] = null);

(cr44401_state[(1)] = null);

(cr44401_state[(5)] = null);

(cr44401_state[(2)] = null);

(cr44401_state[(6)] = null);

return null;
}catch (e44830){var cr44401_exception = e44830;
(cr44401_state[(0)] = cr44401_block_5);

(cr44401_state[(4)] = true);

(cr44401_state[(5)] = cr44401_exception);

return cr44401_state;
}});
var cr44401_block_14 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44401_block_14(cr44401_state){
try{var cr44401_place_101 = null;
(cr44401_state[(0)] = cr44401_block_15);

(cr44401_state[(4)] = cr44401_place_101);

return cr44401_state;
}catch (e44831){var cr44401_exception = e44831;
(cr44401_state[(0)] = null);

(cr44401_state[(1)] = null);

(cr44401_state[(4)] = null);

(cr44401_state[(2)] = null);

throw cr44401_exception;
}});
var cr44401_block_12 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44401_block_12(cr44401_state){
try{var cr44401_place_1 = (cr44401_state[(1)]);
var cr44401_place_97 = console;
var cr44401_place_98 = "Failed to connect.";
var cr44401_place_99 = cr44401_place_97.log(cr44401_place_98);
var cr44401_place_100 = cr44401_place_1;
(cr44401_state[(0)] = cr44401_block_13);

(cr44401_state[(3)] = cr44401_place_100);

return cr44401_state;
}catch (e44832){var cr44401_exception = e44832;
(cr44401_state[(0)] = null);

(cr44401_state[(3)] = null);

(cr44401_state[(1)] = null);

(cr44401_state[(4)] = null);

(cr44401_state[(2)] = null);

throw cr44401_exception;
}});
var cr44401_block_13 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44401_block_13(cr44401_state){
try{var cr44401_place_68 = (cr44401_state[(3)]);
(cr44401_state[(0)] = cr44401_block_15);

(cr44401_state[(3)] = null);

(cr44401_state[(4)] = cr44401_place_68);

return cr44401_state;
}catch (e44833){var cr44401_exception = e44833;
(cr44401_state[(0)] = null);

(cr44401_state[(3)] = null);

(cr44401_state[(1)] = null);

(cr44401_state[(4)] = null);

(cr44401_state[(2)] = null);

throw cr44401_exception;
}});
var cr44401_block_11 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44401_block_11(cr44401_state){
try{var cr44401_place_72 = (cr44401_state[(5)]);
(cr44401_state[(0)] = cr44401_block_13);

(cr44401_state[(5)] = null);

(cr44401_state[(3)] = cr44401_place_72);

return cr44401_state;
}catch (e44834){var cr44401_exception = e44834;
(cr44401_state[(0)] = null);

(cr44401_state[(3)] = null);

(cr44401_state[(1)] = null);

(cr44401_state[(5)] = null);

(cr44401_state[(4)] = null);

(cr44401_state[(2)] = null);

throw cr44401_exception;
}});
var cr44401_block_8 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44401_block_8(cr44401_state){
try{var cr44401_place_73 = console;
var cr44401_place_74 = "Connection lost.";
var cr44401_place_75 = cr44401_place_73.log(cr44401_place_74);
var cr44401_place_76 = cljs.core.seq;
var cr44401_place_77 = hyperfiddle.electric_client.retry_delays;
var cr44401_place_78 = (function (){var G__44837 = cr44401_place_77;
var fexpr__44836 = cr44401_place_76;
return (fexpr__44836.cljs$core$IFn$_invoke$arity$1 ? fexpr__44836.cljs$core$IFn$_invoke$arity$1(G__44837) : fexpr__44836.call(null,G__44837));
})();
(cr44401_state[(0)] = cr44401_block_11);

(cr44401_state[(5)] = cr44401_place_78);

return cr44401_state;
}catch (e44835){var cr44401_exception = e44835;
(cr44401_state[(0)] = null);

(cr44401_state[(3)] = null);

(cr44401_state[(1)] = null);

(cr44401_state[(5)] = null);

(cr44401_state[(4)] = null);

(cr44401_state[(2)] = null);

throw cr44401_exception;
}});
var cr44401_block_9 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44401_block_9(cr44401_state){
try{var cr44401_place_79 = cljs.core.ex_info;
var cr44401_place_80 = "Stale client";
var cr44401_place_81 = new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079);
var cr44401_place_82 = new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405);
var cr44401_place_83 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr44401_place_81,cr44401_place_82]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr44401_place_84 = (function (){var G__44840 = cr44401_place_80;
var G__44841 = cr44401_place_83;
var fexpr__44839 = cr44401_place_79;
return (fexpr__44839.cljs$core$IFn$_invoke$arity$2 ? fexpr__44839.cljs$core$IFn$_invoke$arity$2(G__44840,G__44841) : fexpr__44839.call(null,G__44840,G__44841));
})();
var cr44401_place_85 = (function(){throw cr44401_place_84})();
(cr44401_state[(0)] = null);

return null;
}catch (e44838){var cr44401_exception = e44838;
(cr44401_state[(0)] = null);

throw cr44401_exception;
}});
var cr44401_block_7 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44401_block_7(cr44401_state){
try{var cr44401_place_64 = (cr44401_state[(5)]);
var cr44401_place_69 = cr44401_place_64;
var cr44401_place_70 = cr44401_place_69;
var cr44401_place_71 = cr44401_place_70;
var cr44401_place_72 = null;
var G__44843 = cr44401_place_71;
switch (G__44843) {
case (1005):
case (1006):
(cr44401_state[(0)] = cr44401_block_8);

(cr44401_state[(5)] = null);

(cr44401_state[(6)] = null);

(cr44401_state[(5)] = cr44401_place_72);

return cr44401_state;

break;
case (1008):
(cr44401_state[(0)] = cr44401_block_9);

(cr44401_state[(3)] = null);

(cr44401_state[(5)] = null);

(cr44401_state[(1)] = null);

(cr44401_state[(6)] = null);

(cr44401_state[(4)] = null);

(cr44401_state[(2)] = null);

return cr44401_state;

break;
default:
(cr44401_state[(0)] = cr44401_block_10);

(cr44401_state[(3)] = null);

(cr44401_state[(5)] = null);

(cr44401_state[(1)] = null);

(cr44401_state[(4)] = null);

(cr44401_state[(2)] = null);

(cr44401_state[(1)] = cr44401_place_69);

return cr44401_state;

}
}catch (e44842){var cr44401_exception = e44842;
(cr44401_state[(0)] = null);

(cr44401_state[(3)] = null);

(cr44401_state[(5)] = null);

(cr44401_state[(1)] = null);

(cr44401_state[(6)] = null);

(cr44401_state[(4)] = null);

(cr44401_state[(2)] = null);

throw cr44401_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44844 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((7));
(G__44844[(0)] = cr44401_block_0);

return G__44844;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.reload_when_stale = (function hyperfiddle$electric_client$reload_when_stale(task){
return (function (s,f){
var G__44845 = s;
var G__44846 = (function (error){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405),new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(error)))){
console.log("Server and client version mismatch. Refreshing page.");

window.location.reload();
} else {
}

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(error) : f.call(null,error));
});
return (task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(G__44845,G__44846) : task.call(null,G__44845,G__44846));
});
});

//# sourceMappingURL=hyperfiddle.electric_client.js.map
