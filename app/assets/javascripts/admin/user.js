$(document).on('turbolinks:load', function() {
    // delete user admin
  $(document).ready(function() {
    $('body').on('click', '.admin-delete-user', function(event) {
    event.preventDefault();
    var user = $(this);
    var url = user.attr('href');
    var user_id = user.data('id');

    $.ajax({
      url: url,
      type: 'DELETE',
      dataType: 'json',
      data: {id: user_id},
    })
    .done(function(res) {
      if (res.status == 'success') {
        user.closest('.user-id-'+user_id).fadeOut();
        custom_toastr('success', 'Delete user success');
      } else {

      }
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
