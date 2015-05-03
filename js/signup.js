$(function (){
    $("button.signup")
	.button({"label":"Claim My Spot"})
        
        .click(function() {
	    $("div#signup_form").dialog({
		modal		: true,
		title		: false,
		width		: 450,
		closeOnEscape	: false
	
	    }).show()

	    });
    
});
