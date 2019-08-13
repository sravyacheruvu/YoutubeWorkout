//YouTube Videos

let key = 'AIzaSyDHl_PCtAdN-5XSgFbt9M4ctS53QEJzDkM';
let playlistId = 'PLjK5tXSC0DLteSVrCKtvibyPMNeijB0Wj';
let URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

const options = {
  playlistId: playlistId,
  maxResults: 6,
  key: key,
  part: 'snippet'
};

function loadMainVideo() {
  URL += '?' + Object.keys(options).map((k) => k + '=' + encodeURIComponent(options[k])).join('&');
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then(data => {

      let id0 = data.items[0].snippet.resourceId.videoId;
      document.getElementById('youtube_feed').innerHTML = `<iframe width="400" height="400" src="https://www.youtube.com/embed/${id0}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > < /iframe>`;
      let id1 = data.items[1].snippet.resourceId.videoId;
      document.getElementById('youtube_feed1').innerHTML = `<iframe width="400" height="400" src="https://www.youtube.com/embed/${id1}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > < /iframe>`;
      let id2 = data.items[2].snippet.resourceId.videoId;
      document.getElementById('youtube_feed2').innerHTML = `<iframe width="400" height="400" src="https://www.youtube.com/embed/${id2}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > < /iframe>`;
      let id3 = data.items[3].snippet.resourceId.videoId;
      document.getElementById('youtube_feed3').innerHTML = `<iframe width="400" height="400" src="https://www.youtube.com/embed/${id3}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > < /iframe>`;
      let id4 = data.items[4].snippet.resourceId.videoId;
      document.getElementById('youtube_feed4').innerHTML = `<iframe width="400" height="400" src="https://www.youtube.com/embed/${id4}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > < /iframe>`;
      let id5 = data.items[5].snippet.resourceId.videoId;
      document.getElementById('youtube_feed5').innerHTML = `<iframe width="400" height="400" src="https://www.youtube.com/embed/${id5}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > < /iframe>`;
    })
    .catch(err => console.log(err));

}

//Weather details

const appKey = 'f24f40b1c24505685fce3b8acd0fcffc';

function findWeatherDetails() {

  let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + "stockholm" + "&appid=" + appKey;
  httpRequestAsync(searchLink, theResponse);

}

function httpRequestAsync(url, callback) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState == 4 && httpRequest.status == 200)
      callback(httpRequest.responseText);
  }
  httpRequest.open('GET', url, true);
  httpRequest.send();
}

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  document.getElementById('temperature').innerHTML = parseInt(jsonObject.main.temp - 273) + '°';
  document.getElementById('pressure').innerHTML = jsonObject.main.pressure + 'mbar';
  document.getElementById('windSpeed').innerHTML = jsonObject.wind.speed;
  document.getElementById('humidity').innerHTML = jsonObject.main.humidity + '%';
}
