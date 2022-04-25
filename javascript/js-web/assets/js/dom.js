console.log(document);
console.log(window.document);
console.log(document.head);
// regresa el head deldocumneto

console.log(document.body);
// regresa el body
console.log(document.documentElement);
// regresa el html
console.log(document.doctype);

console.log(document.charset);
console.log(document.links);

console.log(document.images);
console.log(document.stylesheets);
console.log(document.scripts);
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);
console.log(document.getSelection().toString());

document.write("Hola mundo desde document write");
