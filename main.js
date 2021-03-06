
function croakIndex(func){
  fetch("https://hidden-plains-75908.herokuapp.com/posts")
  .then( response => response.json()) //convert from json
  .then( data => func(data))
}

function showdata(data){
  var list = document.querySelector("#croaks")
  data.forEach(
    croak => {
      media = `<div class="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 col-xs-10 col-xs-offset-1 panel btn-default">
        <div class="media">
          <div class="media-left">
            <a href="#">
              <img class="media-object img-circle" src="${croak.photo_url}" alt="img">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">${croak.username}<a class="text-right"> ${moment(croak.created_at).fromNow()}</a></h4>
            ${croak.message}
          </div>
        </div>
      </div>`
    list.innerHTML += media
    }
  )
}


croakIndex(showdata)
