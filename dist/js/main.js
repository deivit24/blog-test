window.addEventListener("load", getJson);
window.addEventListener("load", recent);


function getJson() {
  fetch('dist/json/post.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {

      let output = '';
      data.forEach(function (post) {
        output += `
        <div class="title">
        <h1> ${post.title}</h1>
        </div>
        <div class="tag">
        <h4 class="${post.color}">${post.tag}</h4>
      </div>
      <div class="date">
    <p>${post.date}</p>
  </div>
  <div class="body">
        <p>${post.body}</p>
  </div>
        `;

      });
      document.querySelector('#output').innerHTML = output;


    })

    .catch(function (err) {
      console.log(err);
    });
}

function recent() {
  fetch('dist/json/post.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {

      let recent = '';

      recent += `
      <div class="title">
      <h1>${data[0].title}</h1>
    </div>
    <div class="tag">
      <h4 class="${data[0].color}">${data[0].tag}</h4>
    </div>
    <div class="date">
      <p>${data[0].date}</p>
    </div>
    <div class="body">
      <p>${data[0].body}</p>
    </div>
        
        
        
        
        `;



      document.querySelector('#recent').innerHTML = recent;

    })

    .catch(function (err) {
      console.log(err);
    });
}