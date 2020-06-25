function run21(a) {
		
	//var t1=document.getElementById("gnrr").value;
	$.get("https://api.themoviedb.org/3/genre/movie/list?api_key=54b2b3229745cf87be86c79703a78b4f",function(rawdata3){
    for (var i = 0; i < 19; i++) {
        if(a==rawdata3.genres[i].name){
          var t2=rawdata3.genres[i].id;
        }
       }
       run22(t2);
     })
}
function run22(t){
    $.get("https://api.themoviedb.org/3/discover/movie?api_key=54b2b3229745cf87be86c79703a78b4f&sort_by=popularity.desc&page=1&with_genres="+t+"",function(rawdata1){

    var pics=[6];
    for (var i = 6; i < 12; i++) {
       pics[i-6]=rawdata1.results[i].poster_path;
       }
       var title=[6];
       var rate=[6];
       for (var i = 6; i < 12; i++) {
          title[i-6]=rawdata1.results[i].title;
          rate[i-6]=rawdata1.results[i].vote_average;
       }
       for (var i = 6; i <=11; i++) {
         
      document.images[i-5].src="https://image.tmdb.org/t/p/w342/"+pics[i-6];
     
      }
       document.getElementById("d[0]").innerHTML="<h5> Title:  "+title[0]+" <br/> Rating:  "+rate[0]+"</h5> ";
       document.getElementById("d[1]").innerHTML="<h5> Title:  "+title[1]+" <br/> Rating:  "+rate[1]+"</h5> ";
       document.getElementById("d[2]").innerHTML="<h5> Title:  "+title[2]+" <br/> Rating:  "+rate[2]+"</h5> ";
       document.getElementById("d[3]").innerHTML="<h5> Title:  "+title[3]+" <br/> Rating:  "+rate[3]+"</h5> ";
       document.getElementById("d[4]").innerHTML="<h5> Title:  "+title[4]+" <br/> Rating:  "+rate[4]+"</h5> ";
       document.getElementById("d[5]").innerHTML="<h5> Title:  "+title[5]+" <br/> Rating:  "+rate[5]+"</h5> ";

    })
  }
  function run41(a) {
    
  //var t1=document.getElementById("gnrr").value;
  $.get("https://api.themoviedb.org/3/genre/movie/list?api_key=54b2b3229745cf87be86c79703a78b4f",function(rawdata3){
    for (var i = 0; i < 19; i++) {
        if(a==rawdata3.genres[i].name){
          var t2=rawdata3.genres[i].id;
        }
       }
       run42(t2);
     })
}
function run42(t){
    $.get("https://api.themoviedb.org/3/discover/movie?api_key=54b2b3229745cf87be86c79703a78b4f&sort_by=popularity.desc&page=1&with_genres="+t+"",function(rawdata1){

    var pics=[6];
    for (var i = 12; i < 18; i++) {
       pics[i-12]=rawdata1.results[i].poster_path;
       }
       var title=[6];
       var rate=[6];
       for (var i = 12; i < 18; i++) {
          title[i-12]=rawdata1.results[i].title;
          rate[i-12]=rawdata1.results[i].vote_average;
       }
       for (var i = 12; i <=17; i++) {
         
      document.images[i-11].src="https://image.tmdb.org/t/p/w342/"+pics[i-12];
     
      }
       document.getElementById("d[0]").innerHTML="<h5> Title:  "+title[0]+" <br/> Rating:  "+rate[0]+"</h5> ";
       document.getElementById("d[1]").innerHTML="<h5> Title:  "+title[1]+" <br/> Rating:  "+rate[1]+"</h5> ";
       document.getElementById("d[2]").innerHTML="<h5> Title:  "+title[2]+" <br/> Rating:  "+rate[2]+"</h5> ";
       document.getElementById("d[3]").innerHTML="<h5> Title:  "+title[3]+" <br/> Rating:  "+rate[3]+"</h5> ";
       document.getElementById("d[4]").innerHTML="<h5> Title:  "+title[4]+" <br/> Rating:  "+rate[4]+"</h5> ";
       document.getElementById("d[5]").innerHTML="<h5> Title:  "+title[5]+" <br/> Rating:  "+rate[5]+"</h5> ";

    })
  }