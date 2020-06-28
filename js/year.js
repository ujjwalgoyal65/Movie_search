function run11() {
		
	var t1=document.getElementById("yrss").value;
	$.get("https://api.themoviedb.org/3/discover/movie?api_key=54b2b3229745cf87be86c79703a78b4f&sort_by=popularity.desc&page=1&year="+t1+"",function(rawdata1){

    var pics=[6];
    for (var i = 0; i < 6; i++) {
       pics[i]=rawdata1.results[i].poster_path;
       }
       var title=[6];
       var rate=[6];
       for (var i = 0; i < 6; i++) {
          title[i]=rawdata1.results[i].title;
          rate[i]=rawdata1.results[i].vote_average;
       }
       for (var i = 1; i <=6; i++) {
         
      document.images[i].src="https://image.tmdb.org/t/p/w342/"+pics[i-1];
     
      }
       document.getElementById("d[0]").innerHTML="<h5> Title:  "+title[0]+" <br/> Rating:  "+rate[0]+"</h5> ";
       document.getElementById("d[1]").innerHTML="<h5> Title:  "+title[1]+" <br/> Rating:  "+rate[1]+"</h5> ";
       document.getElementById("d[2]").innerHTML="<h5> Title:  "+title[2]+" <br/> Rating:  "+rate[2]+"</h5> ";
       document.getElementById("d[3]").innerHTML="<h5> Title:  "+title[3]+" <br/> Rating:  "+rate[3]+"</h5> ";
       document.getElementById("d[4]").innerHTML="<h5> Title:  "+title[4]+" <br/> Rating:  "+rate[4]+"</h5> ";
       document.getElementById("d[5]").innerHTML="<h5> Title:  "+title[5]+" <br/> Rating:  "+rate[5]+"</h5> ";

    })
  }
  function run2() {
    
  var a=document.getElementById("yrss").value;
  $.get("https://api.themoviedb.org/3/discover/movie?api_key=54b2b3229745cf87be86c79703a78b4f&sort_by=popularity.desc&page=1&year="+a+"",function(rawdata1){
   //alert(a);
    var pics=[6];
    for (var i = 6; i <12; i++) {
       pics[i-6]=rawdata1.results[i].poster_path;
       }
       var title=[6];
       var rate=[6];
       for (var i = 6; i < 12; i++) {
          title[i-6]=rawdata1.results[i].title;
          rate[i-6]=rawdata1.results[i].vote_average;
       }
      // alert(title[1]);
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
  function run31() {
    
  var a=document.getElementById("yrss").value;
  $.get("https://api.themoviedb.org/3/discover/movie?api_key=54b2b3229745cf87be86c79703a78b4f&sort_by=popularity.desc&page=1&year="+a+"",function(rawdata1){
   //alert(a);
    var pics=[6];
    for (var i = 12; i <18; i++) {
       pics[i-12]=rawdata1.results[i].poster_path;
       }
       var title=[6];
       var rate=[6];
       for (var i = 12; i < 18; i++) {
          title[i-12]=rawdata1.results[i].title;
          rate[i-12]=rawdata1.results[i].vote_average;
       }
      // alert(title[1]);
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
  