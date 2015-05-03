$(function (){
    $("button.signup")
	.button({"label":"Claim My Spot"})
        
        .click(function() {
	    $("div#signup_form").dialog({
		modal: true
	
	    }).show()

	    });
    
});
