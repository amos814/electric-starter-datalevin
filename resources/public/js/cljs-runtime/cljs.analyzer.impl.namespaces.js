goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__38832 = libspec;
var seq__38833 = cljs.core.seq(vec__38832);
var first__38834 = cljs.core.first(seq__38833);
var seq__38833__$1 = cljs.core.next(seq__38833);
var lib = first__38834;
var spec = seq__38833__$1;
var libspec__$1 = vec__38832;
var vec__38835 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38835,(0),null);
var vec__38838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38835,(1),null);
var seq__38839 = cljs.core.seq(vec__38838);
var first__38840 = cljs.core.first(seq__38839);
var seq__38839__$1 = cljs.core.next(seq__38839);
var _ = first__38840;
var first__38840__$1 = cljs.core.first(seq__38839__$1);
var seq__38839__$2 = cljs.core.next(seq__38839__$1);
var alias = first__38840__$1;
var post_spec = seq__38839__$2;
var post = vec__38838;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__38842 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38842,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__38842;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__38843 = cljs.core.seq(new_as_aliases);
var chunk__38844 = null;
var count__38845 = (0);
var i__38846 = (0);
while(true){
if((i__38846 < count__38845)){
var vec__38861 = chunk__38844.cljs$core$IIndexed$_nth$arity$2(null,i__38846);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38861,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38861,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__38925 = seq__38843;
var G__38926 = chunk__38844;
var G__38927 = count__38845;
var G__38928 = (i__38846 + (1));
seq__38843 = G__38925;
chunk__38844 = G__38926;
count__38845 = G__38927;
i__38846 = G__38928;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38843);
if(temp__5804__auto__){
var seq__38843__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38843__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38843__$1);
var G__38929 = cljs.core.chunk_rest(seq__38843__$1);
var G__38930 = c__5568__auto__;
var G__38931 = cljs.core.count(c__5568__auto__);
var G__38932 = (0);
seq__38843 = G__38929;
chunk__38844 = G__38930;
count__38845 = G__38931;
i__38846 = G__38932;
continue;
} else {
var vec__38868 = cljs.core.first(seq__38843__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38868,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38868,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__38933 = cljs.core.next(seq__38843__$1);
var G__38934 = null;
var G__38935 = (0);
var G__38936 = (0);
seq__38843 = G__38933;
chunk__38844 = G__38934;
count__38845 = G__38935;
i__38846 = G__38936;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__38882 = arguments.length;
switch (G__38882) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__38885 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__38885__$1 = cljs.core.__destructure_map(map__38885);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38885__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38885__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__38890 = ret__$1;
var G__38890__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38890,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__38890);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38890__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__38890__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__38900,p__38901){
var map__38902 = p__38900;
var map__38902__$1 = cljs.core.__destructure_map(map__38902);
var ret__$1 = map__38902__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38902__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__38903 = p__38901;
var seq__38904 = cljs.core.seq(vec__38903);
var first__38905 = cljs.core.first(seq__38904);
var seq__38904__$1 = cljs.core.next(seq__38904);
var spec_key = first__38905;
var libspecs = seq__38904__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__38907 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__38907__$1 = cljs.core.__destructure_map(map__38907);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38907__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38907__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__38908 = ret__$1;
var G__38908__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38908,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__38908);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38908__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__38908__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
