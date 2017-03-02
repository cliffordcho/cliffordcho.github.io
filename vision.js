//&subscription-key=f94adc036b6c4e57b65ffafa8c8cf3ff
document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){

  document.getElementById('urlSubmit').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    var payload = {url:null};
    payload.url = document.getElementById("urlCode").value;
    //req.open("POST", "https://westus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Description,Tags,Categories,Faces,ImageType,Color,Adult&details=Celebrities&language=en", true);
    req.open("POST", "https://westus.api.cognitive.microsoft.com/vision/v1.0/describe?maxCandidates=1", true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.setRequestHeader("OCP-Apim-Subscription-Key", "f94adc036b6c4e57b65ffafa8c8cf3ff");
    req.addEventListener('load', function() {
      if (req.status >= 200 && req.status < 400) {
        var response = JSON.parse(req.responseText);
        console.log(response);
        console.log(response.description.captions[0].text);
        response = JSON.stringify(response);
        document.getElementById('postResult').textContent = response;
      }
      else {
        console.log("Error in network request: " + req.statusText);
      }
    })
    req.send(JSON.stringify(payload));
    event.preventDefault();
  })
}
