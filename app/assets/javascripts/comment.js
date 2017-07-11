$(document).on('turbolinks:load', function(){

  jQuery(document).ready(function($) {
    // new comment in post
    $('body').on('submit', '.new_comment', function(event) {
      event.preventDefault();
      var form = $(this);
      var url = form.attr('action');
      var params = form.serialize();
      var input = form.find('#comment_content');
      $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        data: params,
      })
      .done(function(res) {
        if(res.status == 'success'){
          form.closest('.col-sm-10').find('#list-comment').prepend(res.res);
          custom_toastr('success', 'Comment success!');
          input.val('');
        } else {
          custom_toastr('error', res.messsages);
          input.val('');
        }
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });
    return false;
    });

    // edit comment in post
    $('body').on('click', '.edit-comment', function(event) {
      event.preventDefault();
      var comment = $(this);
      var comment_id = comment.data('comment-id');
      var post_id = comment.data('post-id');
      // var url = 'posts/'+post_id+'/comments/'+comment_id+'/edit'
      var url = comment.attr('href');
      var form_comment = comment.closest('.comment-'+comment_id).find('.comment');
      $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        data: comment_id,
      })
      .done(function(res) {
        if (res.status == 'success') {
          console.log("success");
          $('#comment_content')
          form_comment.html(res.html);
          console.log(res.html);
          // $('.list-post-'+post_id).find('#new_comment').remove();
        } else {

        }
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });
      return false;
    });

    $('body').on('submit', '.update-comment-form', function(event) {
      event.preventDefault();
      var form_comment = $(this);
      var url = form_comment.attr('action');
      var params = form_comment.serialize();
      var comment_id = form_comment.data('id');
      console.log(url);
      $.ajax({
        url: url,
        type: 'PATCH',
        dataType: 'json',
        data: params,
      })
      .done(function(res) {
        if (res.status == 'success') {
          $('.comment-'+comment_id).html(res.res);
          custom_toastr('success', 'Update comment success');
        } else {
          console.log(res.messsages);
        }
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });
    return false;
    });

    // delete comment in post
    $('body').on('click', '.delete-comment', function(event) {
      event.preventDefault();
      var comment = $(this);
      var comment_id = comment.data('comment-id');
      var post_id = comment.data('post-id');
      var url = comment.attr('href');
      var form_comment = comment.closest('.comment-'+comment_id);
      var cf = confirm('Delete this comment, sure?');
      if(cf == true){
        $.ajax({
        url: url,
        type: 'DELETE',
        dataType: 'json',
        data: comment_id,
      })
      .done(function(res) {
        if (res.status == 'success') {
          form_comment.fadeOut();
          custom_toastr('success', 'Delete comment success');
        } else {

        }
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });
      }
      return false;
    });
  });
});
