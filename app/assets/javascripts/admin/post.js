$(document).on('turbolinks:load', function() {
    // delete post by admin
  $(document).ready(function() {
    $('body').on('click', '.admin-delete-post', function(event) {
    event.preventDefault();
    var post = $(this);
    var url = post.attr('href');
    var post_id = post.data('id');

    $.ajax({
      url: url,
      type: 'DELETE',
      dataType: 'json',
      data: {id: post_id},
    })
    .done(function(res) {
      if (res.status == 'success') {
        post.closest('.post-id-' + post_id).fadeOut();
        custom_toastr('success', 'Delete post success');
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
