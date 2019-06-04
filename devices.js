$(document).ready(function() {

        // $.ajaxSetup({ cache: false });

        $.getJSON('model.json',function(data) {
            $.each(data, function(key, value) {
              //search bias
                if (value.manufacture.search(expression) != -1 || value.Model.search(expression) != -1)
                {





                  $('#result').append('<li class="list-group-item link-class"><a href=" '+value.manuelurl+' " class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>'+value.manufacture+' | <span class="text-muted">'+value.Model+'</span></li>');
                }






        });
    });

});
