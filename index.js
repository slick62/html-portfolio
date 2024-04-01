// button links
$(".home").click(function(){
    var buttonID=$(this).attr("id");
    var URL=("./pages/" + buttonID + ".html");
    open(URL,"_self");
   });

  
$(".pages").click(function(){
    var buttonID=$(this).attr("id");
    var URL=("./"+ buttonID + ".html");
    open(URL,"_self");
   }); 

$(".back").click(function(){
    var buttonID=$(this).attr("id");
    var URL=("../"+ buttonID + ".html");
    open(URL,"_self");
   }); 

   