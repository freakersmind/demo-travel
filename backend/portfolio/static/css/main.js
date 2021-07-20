$('.submit-button').on('click', function(){
  var country_id = $('#countryselect option:selected').val();
  console.log("country_id",country_id)
  $.ajax({
    headers: { "X-CSRFToken": $.cookie("csrftoken") },
    url: 'travel-history/', 
    type: 'POST',
    data: {
      'country_id': country_id,
    },
    success: function (response) {
      if(response.success == true){
        location.href = "travel-history-details/"+response.country_id
      }
    }
});
});