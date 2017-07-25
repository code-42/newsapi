$(document).ready(function(){
    var apiKey = "2117363bf3ed40fbb54a480ca6852fbc";
    var url = "https://newsapi.org/v1/sources";
    var data = {language:"en",country:"us"};
    var srcId = "";
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
                $.each(sources, function(index, source){
                    // console.log(source);
                    html += "<option value='"+source.id+"'>" + source.name + "</option>";
                    // console.log("source.id == " + source.id);
                    srcId = source.id;
                    console.log("21.srcId == " + srcId);
                })
                html += "</select>";
                // console.log(html);
                $(".form-group").html(html);
                
    //         }
    // })
    

    url = "https://newsapi.org/v1/articles";
    data = {source: srcId, apiKey: apiKey};
    $.ajax({
            url: url,
            data: data,
            type: "GET",
            success: function(response){
                var articles = response.articles;
                console.log("67.articles.url == " + articles);
                var html = "<p>Below are the news articles for the news source you selected:</p>";
                $.each(articles, function(index, article){
                    // console.log("article.title == " + article.title);    
                    html += "<a href='"+article.url+"'>"+article.title+"</a><br>";
                })
                $(".newsId").html(html);                 
            }
    })
    
            
    function getArticles(){
        console.log("35.in showEl()");
        // var e = document.getElementById("src").value;
        var e = $("src").val;
        console.log("37.getElementById == " + e);
        // $("newsId").innerHTML = e;
}

// getArticles();

function reqListener() {
    var result = this.responseText;
    var jsonResult = JSON.parse(result);
    var news = jsonResult.value;

    //console.log(this.responseText);
    console.log("80.news == " + news);

    //document.getElementById('news').innerText(news)
    // updatenews(news)

    return console.log("It worked!" + news);
}

// GET https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=2117363bf3ed40fbb54a480ca6852fbc

function getNews() {
    var url = "https://newsapi.org/v1/articles?source=";
    var apiKey = "2117363bf3ed40fbb54a480ca6852fbc";
    var source = "cnn";
    var data = {source: "cnn", apiKey: apiKey};
    var request = new XMLHttpRequest();

    request.open("GET", url+source+"&apiKey="+apiKey);
    request.addEventListener("click", reqListener);

    var result = request.send();
}

getNews();

    // get the selected item and put it into a variable
    // use that variable in the api call
    //  https://newsapi.org/v1/articles?source=variable&sortBy=latest&apiKey=apiKey
    //  https://newsapi.org/v1/articles?source="cnn"&sortBy=latest&apiKey="2117363bf3ed40fbb54a480ca6852fbc"

            
    var selectedValue = document.getElementById("src").value;
    console.log("117.selectedValue == " + selectedValue);    
    
        }
    })
});
