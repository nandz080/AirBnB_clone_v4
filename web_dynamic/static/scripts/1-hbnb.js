$(document).ready(function () {
  let clicked_amenities = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      clicked_amenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete clicked_amenities[$(this).data('id')];
    }
    let list = Object.values(clicked_amenities);
    if (list.length > 0) {
      $('div.amenities > h4').text(Object.values(clicked_amenities).join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
});
