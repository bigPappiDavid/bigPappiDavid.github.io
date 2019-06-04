$(function() {


   var people = [];

   $.getJSON('data.json', function(data) {
       $.each(data.person, function(i, f) {
          var tblRow = "<tr>" + "<td>" + f.manufacture + "</td>" +
           "<td>" + f.manufacture + "</td>" + "<td>" + f.manufacture + "</td>" + "<td>" + f.manufacture + "</td>" + "</tr>"
           $(tblRow).appendTo("#userdata tbody");
     });

   });

});
