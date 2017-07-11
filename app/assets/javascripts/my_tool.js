function custom_toastr(type,message) {
  toastr_opptions();
  switch (type){
  case 'success':
    toastr.success(message);
    break;
  case 'error':
    toastr.error(message);
    break;
  case 'warning':
    toastr.warning(message);
    break;
  case 'info':
    toastr.info(message);
    break;
  default:
    toastr.success(message);
  }
}
function toastr_opptions() {
  toastr.options = {
    'closeButton': true,
    'timeOut': '5000',
    'positionClass': 'toast-bottom-right'
  };
}

$(document).on('turbolinks:load', function(){
  jQuery(document).ready(function($) {
    $('#login_modal').on('click', function(event) {
      event.preventDefault();
      $('#login').modal();
    });
    $('#signup_modal').on('click', function(event) {
      event.preventDefault();
      $('#signup').modal();
    });
    $('#search').keypress(function(event) {
      var params = $('#search').val();
      $.ajax({
        url: '/posts?utf8=✓&search=' + params,
        type: 'POST',
        dataType: 'json',
        data: params,
      })
      .done(function(res) {

        console.log(res.data);
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });
    });
    return false;
  });
});

