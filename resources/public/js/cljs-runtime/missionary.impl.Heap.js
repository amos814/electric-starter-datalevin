goog.provide('missionary.impl.Heap');
missionary.impl.Heap.create = (function missionary$impl$Heap$create(cap){
var G__39606 = (new Array((cap + (1))));
(G__39606[(0)] = (0));

return G__39606;
});
missionary.impl.Heap.size = (function missionary$impl$Heap$size(heap){
return (heap[(0)]);
});
missionary.impl.Heap.enqueue = (function missionary$impl$Heap$enqueue(heap,i){
var j = ((heap[(0)]) + (1));
(heap[(0)] = j);

(heap[j] = i);

var j__$1 = j;
while(true){
if(((1) === j__$1)){
return null;
} else {
var p = (j__$1 >> (1));
var x = (heap[j__$1]);
var y = (heap[p]);
if((y < x)){
return null;
} else {
(heap[p] = x);

(heap[j__$1] = y);

var G__39622 = p;
j__$1 = G__39622;
continue;
}
}
break;
}
});
missionary.impl.Heap.dequeue = (function missionary$impl$Heap$dequeue(heap){
var s = (heap[(0)]);
var i = (heap[(1)]);
(heap[(0)] = (s - (1)));

(heap[(1)] = (heap[s]));

var j_39635 = (1);
while(true){
var l_39636 = (j_39635 << (1));
if((l_39636 < s)){
var x_39638 = (heap[j_39635]);
var y_39639 = (heap[l_39636]);
var r_39640 = (l_39636 + (1));
if((r_39640 < s)){
var z_39641 = (heap[r_39640]);
if((y_39639 < z_39641)){
if((z_39641 < x_39638)){
(heap[r_39640] = x_39638);

(heap[j_39635] = z_39641);

var G__39642 = r_39640;
j_39635 = G__39642;
continue;
} else {
}
} else {
if((y_39639 < x_39638)){
(heap[l_39636] = x_39638);

(heap[j_39635] = y_39639);

var G__39643 = l_39636;
j_39635 = G__39643;
continue;
} else {
}
}
} else {
if((y_39639 < x_39638)){
(heap[l_39636] = x_39638);

(heap[j_39635] = y_39639);

var G__39644 = l_39636;
j_39635 = G__39644;
continue;
} else {
}
}
} else {
}
break;
}

return i;
});

//# sourceMappingURL=missionary.impl.Heap.js.map
