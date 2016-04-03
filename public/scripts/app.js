console.log("Sanity Check: JS is working!");

var allHobbies = [];
var template;

$(document).ready(function(){

  var source = $('#hobby-template').html();
  template = Handlebars.compile(source);

$('form').on('submit', function(e) {
  e.preventDefault();
  $.ajax({
    method: 'POST',
    url: '/api/hobbies',
    data: $(this).serialize(),
    success: newHobbySuccess,
    error: newHobbyError
  });
  console.log('new hobby serialized', $(this).serialize());
  $('body').append(
    '<p>'+$('#hobbyname').val()+'</p>'
  );
});

$.ajax({
  method: 'GET',
  url: '/api/hobbies',
  success: getHobbySuccess,
  error: getHobbyError
});

$.ajax({
    method: 'GET',
    url: '/api/profile',
    success:getProfileSuccess,
    error: getProfileError
});

function getHobbySuccess(json){
  allHobbies=json;
  $('body').append(json[0].name);
  console.log(json[0].name);
  var hobbyHtml = template({ hobby:allHobbies });
  $('.col-md-8').append(hobbyHtml);
}

function getHobbyError(){
  console.log('get hobby error');
}
function getProfileSuccess(json){
  console.log(json[1].github_profile_image);
  $('.col-md-8').append(json[1].github_profile_image);
}
function getProfileError(){
  console.log("profile get error");
}

function newHobbySuccess(json) {
  $('form').val('');
  allHobbies.push(json);
}
function newHobbyError(){
  console.log("adding new hobby error");
}

});
