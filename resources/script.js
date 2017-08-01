$(document).ready(function(){
    var apiKey = "#";
    var url = "https://newsapi.org/v1/sources";
    var data = {language:"en",country:"us"};

    $.ajax({
        url: url,
        data: data,
        type: "GET",
        success: function(response){
            // console.log(response);
            // console.log(response.sources[2]);
            var sources = response.sources;
            // console.log(sources[2]);
            var html = "<select class='form-control' id='src'>";
            html += "<option value='' disabled hidden selected>Please select your news source here...</option>"
            $.each(sources, function(index, source){
                // console.log(source);
                html += "<option value='"+source.id+"'>" + source.name + "</option>";
                // console.log("source.id == " + source.id);
                // srcId = source.id;
                // console.log("21.srcId == " + srcId);
            })
            html += "</select>";
            // console.log(html);
            $(".form-group").html(html);
        }
    })

    // $("#source").submit(function(event){
    $("#source").change(function(event){
        event.preventDefault();
        var id = $('#src').val();
        var url = "https://newsapi.org/v1/articles";
        var data = {apiKey: apiKey, source: id};
        $.ajax({
            url:url,
            data: data,
            type: "GET",
            success: function(response){
                // console.log(response);
                var articles = response.articles;
                var html = "<ul class='list-group'>"
                $.each(articles, function(index, article){
                    html += 
                    "<li class='list-group-item'>" +
                    // "<span class='headline-img'><img src='" + article.urlToImage + "'></span>" +
                    "<a href='" + article.url + "' target='_blank' class='title'>" + article.title + "</a>" +
                    "<p class='articleDescription'>" + article.description + "</p>" + 
                    "<p class='articlePublishedAt'>" + article.publishedAt + " &middot; " + article.author + "</p>" +
                    "</li>"
                })
                html += "</ul>";
                $("#articles").html(html);
            }
        })
    })    
});
