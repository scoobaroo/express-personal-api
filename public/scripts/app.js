console.log("Sanity Check: JS is working!");

var allHobbies = [];
var template;
var $hobbyList = $('#hobbyTarget');
$('.deleteHobby').on('click', function(e) {
  e.preventDefault();
  console.log($(this));
  console.log('MONEY'+$(this).context.dataset.hobbyid);
  console.log($(this).attr('data-hobbyId'));
  console.log('HelloHelloHello'+$(".deleteBtn").attr('data-hobbyId'));
  var hobbyId = $(this).context.dataset.hobbyid;
  $.ajax({
    method: 'DELETE',
    url: '/api/hobbies/'+hobbyId,
    success: console.log('huray'),
    error: console.log('boo')
    // success: deleteHobbySuccess,
    // error: deleteHobbyError
  });
});
$(document).ready(function(){

var source = $('#hobby-template').html();
template = Handlebars.compile(source);

$('.deleteHobby').on('click', function(e) {
  e.preventDefault();
  console.log($(this));
  console.log('MONEY'+$(this).context.dataset.hobbyid);
  console.log($(this).attr('data-hobbyId'));
  console.log('HelloHelloHello'+$(".deleteBtn").attr('data-hobbyId'));
  var hobbyId = $(this).context.dataset.hobbyid;
  $.ajax({
    method: 'DELETE',
    url: '/api/hobbies/'+hobbyId,
    success: console.log('huray'),
    error: console.log('boo')
    // success: deleteHobbySuccess,
    // error: deleteHobbyError
  });
});

$('.deleteHobby').on("click", function(e){
  console.log("delete hobby clicked");
});
$hobbyList.on('click','.deleteHobby',function(e){
  console.log('delete');
});

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

$('.deleteHobby').on('click', function(e) {
  e.preventDefault();
  console.log($(this));
  console.log('MONEY'+$(this).context.dataset.hobbyid);
  console.log($(this).attr('data-hobbyId'));
  console.log('HelloHelloHello'+$(".deleteBtn").attr('data-hobbyId'));
  var hobbyId = $(this).context.dataset.hobbyid;
  $.ajax({
    method: 'DELETE',
    url: '/api/hobbies/'+hobbyId,
    success: console.log('huray'),
    error: console.log('boo')
    // success: deleteHobbySuccess,
    // error: deleteHobbyError
  });
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
  var hobbyHtml = template({ hobby:allHobbies });
  $('.col-md-8').append(hobbyHtml);
}

function deleteHobbySuccess(json){
 console.log(json);
}

function deleteHobbyError(json) {
  console.log('deleting Hobby error');
}

function getHobbyError(){
  console.log('get hobby error');
}

function getProfileSuccess(json){
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
