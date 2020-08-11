// Wait until DOM is fully loaded to attach our handlers
$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newDevourStatus = {
        devoured: newDevour
      };
  
      // Ajax PUT request to update burger status
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourStatus
      }).then(
        function() {
          console.log("Changed burger status");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".addBurger").on("submit", function(event) {
      // preventDefault on a submit event to not reload the page
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newBur").val().trim(),
        devoured: $("[name=devour]:checked").val().trim()
      };
  
      // Ajax POST request to add new burger to api/burgers
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("New burger added");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

});