
$(document).ready(function(){
    
  $('#btn').click(function() {
    
    const place =  $('#place').val();
    
    loadWeather(place,''); 
    
  });
});
  function loadWeather(location, woeid)  {
    
    $.simpleWeather({
     
      location: location,
      woeid: woeid,
      unit: 'c',
      success: function(weather) {
      
    html = '<h2 class="blue-text"><img src='+weather.thumbnail+'> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
    html += '<ul ><li>'+weather.city+', '+weather.region+'</li>';
    html += '<li >'+weather.currently+'</li>';
    html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';  
    update ='<h6>Last Updated : ' +weather.updated+'</h6>';
   
    $("#up").html(update);
    $("#weather").html(html);  
    },
    error: function(error) {
        $("#weather").html('<h4>'+error+'</h4>');
      }
    });
    
  }
  