//app.js

//This the data I will fill the model
var promo = {
    "origin": "Buenos Aires",
    "destination": "El Calafate",
    "price": 1200,
    "currency": "ARS",
    "currencySymbol": "$"
};

// receive the data - array of videos

var data = {
    "videos": [

      {
        "id" : 1,
        "link" : "https://www.youtube.com/watch?v=pawZ59OQZ3g",
        "capture": "https://i.ytimg.com/vi/pawZ59OQZ3g/hqdefault.jpg?custom=true&w=246&h=138&stc=true&jpg444=true&jpgq=90&sp=68&sigh=6SLjEYdkb_plVj2QZrH26sSNsn4",
        "duration": "3:45",
        "title": "Vida Salvaje: El Humano de Boliche | Hecatombe!",
        "visualizations": "187.182",
        "uploaded": "2 days ago",    
        "user": {
          "name": "Hecatombe Producciones",
          "profile": "https://www.youtube.com/user/HecatombeOk"
        }
      },
      {
        "id" : 2,
        "link" : "https://www.youtube.com/watch?v=vISMADNi2c8",
        "capture": "https://i.ytimg.com/vi/vISMADNi2c8/hqdefault.jpg?custom=true&w=246&h=138&stc=true&jpg444=true&jpgq=90&sp=68&sigh=M6DmX0NKDICJGGXqepBiFlu2ORs",
        "duration": "5:42",
        "title": "LA VIDA EN CANCIONES | Hecatombe! | Video Oficial",
        "visualizations": "4.935.016",
        "uploaded": "1 year ago",    
        "user": {
          "name": "Hecatombe Producciones",
          "profile": "https://www.youtube.com/user/HecatombeOk"
        }
      },
      {
        "id" : 3,
        "link": "https://www.youtube.com/watch?v=908a2IgPPBs",
        "capture": "https://i.ytimg.com/vi/908a2IgPPBs/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=MAMxUEIL_oKrEmtqm_hr_TpjvN8",
        "duration": "56:35",
        "title": "Feeling Happy - New Best Of Vocal Deep House Tropical Music Chill Out 2017",
        "visualizations": "880.016",
        "uploaded": "2 months ago",    
        "user": {
          "name": "DjRegard Official",
          "profile": "https://www.youtube.com/channel/UCw39ZmFGboKvrHv4n6LviCA"
        }
      },
      {
        "id" : 4,
        "link" : "https://www.youtube.com/watch?v=6K3aLDjmm7s",
        "capture": "https://i.ytimg.com/vi/6K3aLDjmm7s/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=2eqRVldt59a1lw-LAQd_1hYWLRI",
        "duration": "6:03",
        "title": "TOOLS OF TITANS | BEST QUOTES | TIM FERRISS",
        "visualizations": "333",
        "uploaded": "1 day ago",    
        "user": {
          "name": "Wolfsuka",
          "profile": "https://www.youtube.com/channel/UC1QAOyWvkQ5cn9V81g4f8Iw"
        }
      },
      {
        "id" : 5,
        "link": "https://www.youtube.com/watch?v=908a2IgPPBs",
        "capture": "https://i.ytimg.com/vi/908a2IgPPBs/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=MAMxUEIL_oKrEmtqm_hr_TpjvN8",
        "duration": "56:35",
        "title": "Feeling Happy - New Best Of Vocal Deep House Tropical Music Chill Out 2017",
        "visualizations": "880.016",
        "uploaded": "2 months ago",    
        "user": {
          "name": "DjRegard Official",
          "profile": "https://www.youtube.com/channel/UCw39ZmFGboKvrHv4n6LviCA"
        }
      },
      {
        "id" : 6,
        "link": "https://www.youtube.com/watch?v=908a2IgPPBs",
        "capture": "https://i.ytimg.com/vi/908a2IgPPBs/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=MAMxUEIL_oKrEmtqm_hr_TpjvN8",
        "duration": "56:35",
        "title": "Feeling Happy - New Best Of Vocal Deep House Tropical Music Chill Out 2017",
        "visualizations": "880.016",
        "uploaded": "2 months ago",    
        "user": {
          "name": "DjRegard Official",
          "profile": "https://www.youtube.com/channel/UCw39ZmFGboKvrHv4n6LviCA"
        }
      }


    ]
}



// Creating view to render
var promoView = new PromoView({
    el: '#promos',
    model: new Promo(promo)
});

//As I set attributes to the view I just render its content
promoView.render();



/*I use a map function for iterate the data */
/*
var videoView;

data.videos.map(function(video){ 
    videoView = new VideoView({
      el: '#videos',
      model: new Video(video)
    });

    videoView.render();
})*/

