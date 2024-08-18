
$(document).ready(function() {
  $(".bike").hover(function() {
      var info = $(this).data("info");
      $("#bike-info").text(info);
  }, function() {
      $("#bike-info").text('');
  });

  $(document).ready(function() {
    $('#add-item').click(function() {
        var newItemName = $('#new-item').val(); 

        if (newItemName) {
            var newItem = $('<div class="custom-item"></div>').text(newItemName);
            $('#custom-items').append(newItem);
            $('#new-item').val('');
        } else {
            alert("Будь ласка, введіть назву."); 
        }
    });
});

});

function showOrHide(cb, cat, tex, bloggood, size) {
    cb = document.getElementById(cb);
    cat = document.getElementById(cat);
    tex = document.getElementById(tex);
    size = document.getElementById(size);

    if (cb.checked) cat.style.display = "block";
    else cat.style.display = "none";

    if (cb.checked) tex.style.display = "block";
    else tex.style.display = "none";

    if (bloggood.checked) size.style.display = "block";
    else size.style.display = "none";
    }

  function numberRose(number){
alert(document.getElementById(number).value);
}



	    var Entering=document.getElementById('input') ; ;
		var out = document.getElementById('rez2') ;
		
		Entering.addEventListener('keydown' , KeyDown) ;
		
		function KeyDown() {
		if (window.event.keyCode == 13) {
		rez2.textContent = Entering.value ;}
		
		
		} ;
		
 
  
	
	