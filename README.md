eSugar
======

Syntax generator for building HTML and XML strings

Example Usage:
======

  **ES(Tag Name, Inner Content *[optional]*, JSON List of Tab Attributes *[optional]*, 
  Prefix String to a Tag *[optional]*, Sufix String to a Tag *[optional]*, ) returns a string**

<pre>
  ES("br") generates &lt;br />
  ES("div", "Hello World!") generates &lt;div>Hello World!&lt;/div>
  ES("span", "Hello World in RED!", {style: "color: red;", id: "MySPAN"}) generates 
    &lt;span style="color: red;" id="MySPAN">Hello World in RED!&lt;/span>
</pre>
  
*Don't forget* you can encapsulate tags:
<pre>
ES("div",
  ES("p", "This is a paragraph") +
  ES("p", "This is a blue paragraph", {style: "color: blue;"})
  {style="margin-left: 10pt; padding: 5px; border: solid 1px blue;"}
);
</pre>

Disclaimer
=====
This code is provided without warranty. While I strive to maintain backwards compatibility with previous versions, the code is still under active development. As this is the case, some revisions may break compatibility with earlier versions of the library. Please keep this in mind when using eSugar.

Copyright and Licensing
======
Copyright (c) 2012, 2016 Ervin Kosch, released under the GPL 3 license