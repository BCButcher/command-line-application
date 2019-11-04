const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

function generateHTML(data) {
  console.log (data.login)
  console.log (data.location)
  console.log (data.blog)
  console.log (data.bio)
  console.log (data.repos_url)
  console.log (data.public_repos)
  console.log (data.followers)
  console.log (data.starred_url)
  console.log (data.following)
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Kalam|Permanent+Marker|Waiting+for+the+Sunrise&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <script src="generateHTML.js"></script>
      <title>Document</title>
      <style>
      @page {
        margin: 0=;
      }
          
      *, *::after, *::before {
        box-sizing: border-box;
      }

      html, body {
        padding: 0;
        margin: 0;
        height: 100%;
      }

      .wrapper {
        box-shadow: grey 4px 1px 20px 4px;
        padding-top: 100px;
        background-color: ${colors[data.color].wrapperBackground};
      }

      body {
        background-color: white;
        -webkit-print-color-adjust: exact !important;
      }

      main {
        background-color: #E9EDEE;
        height: auto;
        padding-top: 30px;
      }

      h1, h2, h3, h4, h5, h6 {
        margin: 0;
      }
        
      h1 {
        font-size: 3em;
      }
        
      h2 {
        font-size: 2.5em;
      }
        
      h3 {
        font-size: 2em;
      }
        
      h4 {
        font-size: 1.5em;
      }
        
      h5 {
        font-size: 1.3em;
      }
        
      h6 {
        font-size: 1.2em;
      }

      .photo-header {
        position: relative;
        padding: 10px;
        width: 95%;
        border-radius: 6px;
        margin: 0 auto;
        margin-bottom: -50px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        background-color: ${colors[data.color].headerBackground};
        color: ${colors[data.color].headerColor};
      }

      .photo-header img {
        box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        object-fit: cover;
        margin-top: -75px;
        border: 6px solid ${colors[data.color].photoBorderColor};
      }

      .photo-header h1, .photo-header h2 .photo-header h4 {
        width: 100%;
        text-align: center;
      }

      .photo-header h1 {
          margin-top: 10px;
      }

      .links-nav {
        width: 100%;
        text-align: center;
        padding: 20px 0;
        font-size: 1.1em;
      }

      .nav-link {
        display: inline-block;
        margin: 5px 10px;
      }

      .workExp-date {
        font-style: italic;
        font-size: .7em;
        text-align: right;
        margin-top: 10px;
      }

      .container {
        margin-bottom: 50px;
        padding: 50px;
        padding-left: 100px;
        padding-right: 100px;
        box-shadow: grey 5px 6px 5px 0px;
      }

      .row {
        font-family: 'Waiting for the Sunrise';
        font-size: 22px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 20px;
        margin-bottom: 20px;
      }

      .card {
        box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
        margin: 20px;
        padding: 20px;
        border-radius: 6px;
        background-color: ${colors[data.color].headerBackground};
        color: ${colors[data.color].headerColor};
      }
         
      .col {
        flex: 1;
        text-align: center;
      }

      a, a:hover {
        text-decoration: none;
        color: inherit;
        font-weight: bold;
      }

      @media print { 
        body { 
          zoom: .75; 
        } 
      }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <section class="photo-header">
          <p style="text-align: center">
            <img src="${data.avatar_url}">
          </p>
          <h1 style="font-family: 'Permanent Marker', cursive;">Hey</h1>
          <h1 style="font-family: 'Permanent Marker'">My name is Brian Butcher</h2>
          <h4 style="font-family: 'Kalam'">Currently a ${data.company}</h4>
          <h3 class="links-nav">
            <a href="https://www.google.com/maps/place/${data.location}" class="fas fa-map-marker-alt nav-link"> ${data.location}</a>
            <a href="${data.html_url}" class="fab fa=github nav-link"> GitHub</a>
            <a href="${data.blog}" class="fas fa=rss nav-link"> Blog</a>
          </h3>
        </section>
      </div>
      <main>
        <h3 class="container" style="text-align: center;"">${data.bio}</h3>
        <section class="container">
          <div class="row">
            <div class="col card">
              <h4 style="font-weight: bold">Public Repositories</h4>
              <h4 style="font-weight: bold">${data.public_repos}</h4>
            </div>
            <div class="col card">
              <h4 style="font-weight: bold">Followers</h4>
              <h4 style="font-weight: bold">${data.followers}</h4>
            </div>
          </div>
          <div class="row">
            <div class="col card">
              <h4 style="font-weight: bold">Following</h4>
              <h4 style="font-weight: bold">${data.following}</h4>
            </div>
            <div class="col card">
              <h4 style="font-weight: bold">GitHub Stars</h4>
              <h4 style="font-weight: bold">${data.starred}</h4>
            </div>
          </div>
        </section>
      </main>
  
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      </body>
  </html>`
  }
  
  module.exports = { generateHTML, colors }