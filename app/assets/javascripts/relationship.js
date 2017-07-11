$(document).on('turbolinks:load', function(event) {
  event.preventDefault();
  // $('body').on('click', '#btn-follow', function(event) {
  //   event.preventDefault();
  //   var btn = $(this);
  //   var check = btn.attr('class');
  //   if (check == 'btn btn-success btn-block') {
  //     // follow
  //     var followed_id = btn.data('user-id');
  //     var url = '/relationships';
  //     var type = 'POST';
  //     $.ajax({
  //       url: url,
  //       type: type,
  //       dataType: 'json',
  //       data: {followed_id: followed_id},
  //     })
  //     .done(function(res) {
  //       if (res.status == 'success') {
  //         custom_toastr('success', 'Following '+ res.message + ' success');
  //         btn.attr('class', 'btn btn-default btn-block');
  //         btn.attr('data-id', res.rel_id);
  //       } else {

  //       }
  //       console.log("success");
  //     })
  //     .fail(function() {
  //       console.log("error");
  //     })
  //     .always(function() {
  //       console.log("complete");
  //     });

  //   } else {
  //     var rel_id = btn.attr('data-id');
  //     var url = '/relationships/'+ rel_id;
  //     var type = 'DELETE';

  //     $.ajax({
  //       url: url,
  //       type: type,
  //       dataType: 'json',
  //       async: true,
  //       data: {id: rel_id},
  //     })
  //     .done(function(res) {
  //       if (res.status == 'success') {
  //         custom_toastr('success', 'Unfollowing '+ res.message + ' success');
  //         btn.attr('class', 'btn btn-success btn-block');
  //         btn.attr('data-user-id', res.user_id);

  //       } else {

  //       }
  //       console.log("success");
  //     })
  //     .fail(function() {
  //       console.log("error");
  //     })
  //     .always(function() {
  //       console.log("complete");
  //     });
  //   }
  // });
  $('body').on('submit', '.new_relationship', function(event) {
    event.preventDefault();
    var followed_id = $(this).find('#followed_id').val();
    $.ajax({
      url: '/relationships/',
      type: 'POST',
      dataType: 'json',
      data: {followed_id: followed_id},
    })
    .done(function(res) {
      $('#follow_form').html(res.html);
      $('#followers').text(res.followers);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  });

  $('body').on('submit', '.edit_relationship', function(event) {
    event.preventDefault();
    var relationship_id = $(this).data('id');
    $.ajax({
      url: '/relationships/'+ relationship_id,
      type: 'DELETE',
      dataType: 'json',
      data: {relationship_id: relationship_id},
    })
    .done(function(res) {
      $('#follow_form').html(res.html);
      $('#followers').text(res.followers);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  });


});
