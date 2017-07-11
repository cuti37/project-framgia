$(document).on('turbolinks:load', function(){

  jQuery(document).ready(function($) {
    $('body').on('click', '.title-post', function(event) {
      event.preventDefault();
      var post = $(this).closest('.pointer');
      var link = post.find('.title-post').attr('href');
      var post_id = post.find('.title-post').data('id');
      $.ajax({
        url: link,
        type: 'GET',
        dataType: 'json',
        data: {post_id: post_id},
      })
        .done(function(res) {
          if(res.status == 'success'){
            $('#myModal2').modal();
            $('#myModal2').html(res.html);
          }
        })
        .fail(function() {
        })
        .always(function() {
        });
    });
    return false;
  });

  jQuery(document).ready(function($) {
    $('body').on('submit','.new_post', function(event) {
      event.preventDefault();
      var form = $(this);
      var url = form.attr('action');
      var params = form.serialize();
      var arr_tags = form.find('#input-tags').attr('value');
      console.log(arr_tags);
      $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        data: params,
      })
        .done(function(data) {
          if (data.status == 'success') {
            $('#list-post').prepend(data.res);
            custom_toastr('success', 'Post complete!');
            form.find('#post_title').val('');
            form.find('#post_content').val('');
            $select = $('#input-tags').selectize();
            var control = $select[0].selectize;
            control.clear();
          } else {
            $.each(data.res,function(index, el) {
              custom_toastr('error',el);
            });
          }
        })
        .fail(function() {
        })
        .always(function() {
        });
      return false;
    });
  });
  jQuery(document).ready(function($) {
    $('body').on('click', '.edit-post', function(event) {
      event.preventDefault();
      var post = $(this);
      var link = post.attr('href');
      var post_id = post.data('id');

      $.ajax({
        url: link,
        type: 'GET',
        dataType: 'json',
        data: {post_id: post_id},
      })
        .done(function(res) {
          if(res.status == 'success'){
            $('#post-form').html(res.html);
            // $('#input-tags').hide();
            $select = $('#input-tags').selectize();
            var control = $select[0].selectize;
            control.clear();
            var wall = $('#post-form').offset().top;
            $('body').animate({scrollTop: wall}, 1000);
          }
        })
        .fail(function() {
        })
        .always(function() {
        });
    });
    return false;
  });

  jQuery(document).ready(function($) {
    $('body').on('submit', '.edit_post', function(event) {
      event.preventDefault();
      var form = $(this);
      var url = form.attr('action');
      var arr_tags = form.find('#input-tags').attr('value');
      var params = form.serialize();
      $.ajax({
        url: url,
        type: 'PATCH',
        dataType: 'json',
        data: params,
      })
        .done(function(data) {
          if (data.status == 'success') {
            $('.list-post-'+data.post_id).html(data.res);
            custom_toastr('success', 'Update post complete!');
            form.find('#post_title').val('');
            form.find('#post_content').val('');
            form.attr('class', 'new_post');
            $select = $('#input-tags').selectize();
            var control = $select[0].selectize;
            control.clear();
            var wall = $('.list-post-'+data.post_id).offset().top;
            $('body').animate({scrollTop: wall}, 1000);
          } else {
            $.each(data.res,function(index, el) {
              custom_toastr('error',el);
            });
          }
        })
        .fail(function() {

        })
        .always(function() {
        });
      return false;
    });
  });

  jQuery(document).ready(function($) {
    $('body').on('click', '.delete-post', function(event) {
      event.preventDefault();
      var post = $(this);
      var link = post.attr('href');
      var post_id = post.data('id');
      var cf = confirm('You sure?');
      if(cf == true){
        $.ajax({
          url: link,
          type: 'DELETE',
          dataType: 'json',
          data: {post_id: post_id},
        })
          .done(function(res) {
            if(res.status == 'success'){
              $('.list-post-'+post_id).fadeOut();
              custom_toastr('success', 'Delete post success');
            } else {
              custom_toastr('error', 'Delete post error');
            }
          })
          .fail(function() {
          })
          .always(function() {
          });
      }
    });
    return false;
  });
    $('#input-tags').selectize({
    plugins: ['remove_button'],
    delimiter: ',',
    persist: false,
    create: function(input) {
        return {
            value: input,
            text: input
        }
    }
  });
});
