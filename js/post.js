$(function(){
  $('#fetch').click(function() {
     let id = $('#input').val();
     $.ajax("http://jsonplaceholder.typicode.com/users?id=" + id, {
       "type": "get"
     }).done(function(data) {
       let r = "<dl>";
       for (let d in data[0]) {
         if(typeof data[0][d] !== 'object') {
           r+= "<dt>" + d + "</dt>" + "<dd>" + data[0][d] + "</dd>";
         }
       }
       r = r + "</dl>";
       $("#info").html(r);

     });
   $.ajax("http://jsonplaceholder.typicode.com/posts?userId=" + id, {
     "type": "get"
   }).done(function(data) {
       let r = data.reduce((prev, obj)=> prev += "<ul>" + process(obj) + "</ul>" + "<button>comment</button>", "")
       $("#post").html(r);
   });
   function process(post){
     return "<li>" + post.title + "</li><li>" + post.body + "</li>";
   }
  });

})
