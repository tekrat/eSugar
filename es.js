/*
eSugar
Syntax generator for building HTML and XML strings

Latest version may be found at: https://github.com/tekrat/eSugar

** Example Usage:
ES(Tag Name, Inner Content [optional], JSON List of Tab Attributes [optional]) returns a string

  ES("br") generates <br />
  ES("div", "Hello World!") generates <div>Hello World!</div>
  ES("span", "Hello World in RED!", {style: "color: red;", id: "MySPAN"})
	generates <span style="color: red;" id="MySPAN">Hello World in RED!</span>
  ES("div", "Indent text and break at the end", {}, "\t", "\r\n")
	generates
	<div>Indent text and break at the end</div>
	
Don't forget you can encapsulate tags:

ES("div",
  ES("p", "This is a paragraph") +
  ES("p", "This is a blue paragraph", {style: "color: blue;"})
  {style="margin-left: 10pt; padding: 5px; border: solid 1px blue;"}
);

You can see the code in action at: https://jsfiddle.net/ervkosch/kz7edvqL/

** Disclaimer
This code is provided without warranty. While I strive to maintain backwards 
compatibility with previous versions, the code is still under active development. 
As this is the case, some revisions may break compatibility with earlier versions 
of the library. Please keep this in mind when using eSugar.

** Copyright and Licensing
Copyright (c) 2016 Ervin Kosch, released under the GPL 3 license

*/
function ES(t, c, a, p, s){
	var r = 
		(p || "") +	"<" + t;
	// loop through JSON attribute(s) if any
	for (var k in a) {
		r += " " + k + '="' + a[k] + '"';
	}

	if(typeof c == "undefined"){
		r+= " />" + (s || "");
	}else{
		r+=">" + c + "</" + t + ">" + (s || "");	
	}
	return r;	
}