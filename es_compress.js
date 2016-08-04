/*
eSugar - Ervin Kosch - GPL 3
https://github.com/tekrat/eSugar
*/
function ES(a,b,c,d,e){var f=(d||"")+"<"+a;for(var g in c)f+=" "+g+'="'+c[g]+'"';return f+="undefined"==typeof b?" />"+(e||""):">"+b+"</"+a+">"+(e||"")}