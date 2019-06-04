// $(function() {
//
//   // User clicks the "getData" button
//   $("#getData").click(function() {
//
//     // Put artistList element and JSON file location into a variable
//     var artistList = $("#artistList");
//     var url = "https://bigpappidavid.github.io/Devices/model.json";
//
//     // Get the JSON file
//     $.getJSON(url, function(data) {
//
//       // Put artist info into a variable
//       var artists = data.manufacture.map(function(item) {
//         return item.manufacture + " (" + item.born + ")";
//       });
//
//       // Remove all child nodes (including text nodes)
//       artistList.empty();
//
//       // Format artists with HTML tags
//       if (artists.length) {
//         var content = "<li>" + artists.join("</li><li>") + "</li>";
//         var list = $("<ul>").html(content);
//         artistList.append(list);
//       }
//     });
//   });
//
// });
