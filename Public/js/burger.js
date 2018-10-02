
$("#update").on("click", "#burgerEatBtn", function(event){
  event.preventDefault();
  var burgerClickedId = $(this).attr("data-burgerId");
  console.log(burgerClickedId);

  $.ajax({
    url: `/burgers/inhaled/${burgerClickedId}`,
    method: "PUT",
    data: {
      inhaled: 1
    }
  }).then(function (burgerData) {
      console.log(burgerData);
      window.location.href = "/burgers"
  })
})