$(function (){
    $("button.signup")
        .click(function() {
	    $("div#signup_form").dialog({
		modal		: true,
		title		: false,
		width		: 450,
		closeOnEscape	: false
	
	    }).show()

	    });
    
});

$(function(){
    $(".sample_chapter")
        .click(function(){
            var ID = $(this).attr("data-form-id");
            $('<iframe src="https://madmimi.com/signups/'+ ID +'/iframe" scrolling="no" frameborder="0" height="439" style="max-width: 450px; width: 100%;"></iframe>')
                .dialog({
                    modal		: true,
		    title		: false,
		    width		: 350,
                    height              : 520,
		    closeOnEscape	: false})
                .attachTo("body")
                .show()
            

        })

});
