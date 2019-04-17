$(function(){
  $("#submit").click(function(){
        
    var searchTerm=$("#searchTerm").val();
    
    $.ajax( {
     type: 'GET',
     url: "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&callback=?",
     async:false,
    dataType: 'json',
    success: function(data) {
      // console.log(data[1][0]);
      
          $("#results").empty();

      
     for (var i =0; i<=9; i++){
       $("#results").append('<a href='+ data[3][i] + ' target="_blank">' + data[1][i] + '</h1></a><h3>' + data[2][i] + '</h3><br>');
     }
    },
      error: function(err){
        alert("Error") 
    }, 
}) 
     });
  
    $("#searchTerm").bind("keypress", function(enter){
      if (enter.keyCode==13){
               $("#submit").click();
      }
    })       
 });