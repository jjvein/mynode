
var entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;'
};


function escapeHtml(string) {
  return String(string).replace(/[&<>"'\/]/g, s =>  entityMap[s]);
}


var html = "<h1>Hello World & How are you ?"
var l = console.log

l(escapeHtml(html))

