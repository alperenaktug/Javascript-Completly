/*
ES6 Module = An external file that contains reusable code
write can be imported into other Javascript files.
can contain variables, classes , function... and more
ıntroduced as part of ECMAScript 2015 update 

ES6 Modülü = Yeniden kullanılabilir kod içeren harici bir dosya
yazma diğer Javascript dosyalarına aktarılabilir.
değişkenler, sınıflar, işlevler içerebilir... ve daha fazlası
ECMAScript 2015 güncellemesinin bir parçası olarak tanıtıldı

*/

import { PI, getArea, getVolume, getCircumference } from "./mathutil.js";

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);
