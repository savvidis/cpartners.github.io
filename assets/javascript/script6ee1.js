$(function(){
	if ($('body').hasClass('wbg')){
		$('html').addClass('wbg');
	}
	$(".header h2 a").click(function(){
		$("body").toggleClass('m-open');
	});
	$("form .line .sixcol:last-child").addClass('last');

	var w = $(window).width();
	$("html").attr('data-attr-ww', w);

	$("#global_regions_countries").on('change', function(){
		var countries = $(this).val();
		isUs = countries.indexOf("US");
		if (isUs >= 0){
			// true
			$("#us_workforce_solutions").show();
		} else {
			// false
			$("#us_workforce_solutions").hide();
		}
	});
		
	if ($("#supplier_agree").is(':checked')){
		$("#supplier_form_submit").prop('checked', false);
	}
	$("#supplier_agree").on('click', function(){
		if ($(this).is(':checked')){
			$("#supplier_form_submit").attr('disabled', false);
		} else {
			$("#supplier_form_submit").attr('disabled', true);
		}
	});


	if ($("html").hasClass('ipad')||($("html").hasClass('mobile'))){

		$("form select").addClass('default-select');

	} else {

		// $("form select#state_one").selectmenu({
		// 	width:160,
		// 	menuWidth:160,
		// 	style:'dropdown',
		// 	positionOptions: {
		// 		my: "left top",
		// 		at: "left bottom",
		// 		collision: 'none'
		// 	}
		// });

		$("form select#supplier_country").selectmenu({
			width:280,
			menuWidth:280,
			style:'dropdown',
			positionOptions: {
				my: "left top",
				at: "left bottom",
				collision: 'none'
			}
		});

		$("form select#supplier_hq_country").selectmenu({
			width:280,
			menuWidth:280,
			style:'dropdown',
			positionOptions: {
				my: "left top",
				at: "left bottom",
				collision: 'none'
			}
		});		


		// $("form select#state_two").selectmenu({
		// 	width:160,
		// 	menuWidth:160,
		// 	style:'dropdown',
		// 	positionOptions: {
		// 		my: "left top",
		// 		at: "left bottom",
		// 		collision: 'none'
		// 	}
		// });

		$("form select#in_business").selectmenu({
			width:60,
			menuWidth:60,
			style:'dropdown',
			positionOptions: {
				my: "left top",
				at: "left bottom",
				collision: 'none'
			}
		});

		$("form select#annual_revenue").selectmenu({
			width:160,
			menuWidth:160,
			style:'dropdown',
			positionOptions: {
				my: "left top",
				at: "left bottom",
				collision: 'none'
			}
		});

		$("form select#msp_accounts").selectmenu({
			width:80,
			menuWidth:80,
			style:'dropdown',
			positionOptions: {
				my: "left top",
				at: "left bottom",
				collision: 'none'
			}
		});

		// $("form select#global_regions").selectmenu({
		// 	width:220,
		// 	menuWidth:220,
		// 	style:'dropdown',
		// 	positionOptions: {
		// 		my: "left top",
		// 		at: "left bottom",
		// 		collision: 'none'
		// 	}
		// });

		// $("form select#us_regions").selectmenu({
		// 	width:220,
		// 	menuWidth:220,
		// 	style:'dropdown',
		// 	positionOptions: {
		// 		my: "left top",
		// 		at: "left bottom",
		// 		collision: 'none'
		// 	}
		// });

		$("form select#diversity_type").selectmenu({
			width:220,
			menuWidth:220,
			style:'dropdown',
			positionOptions: {
				my: "left top",
				at: "left bottom",
				collision: 'none'
			}
		});

		// $("form select").selectmenu({
		// 	width:280,
		// 	menuWidth:280,
		// 	style:'dropdown',
		// 	positionOptions: {
		// 		my: "left top",
		// 		at: "left bottom",
		// 		collision: 'none'
		// 	}
		// });

		if (!$("form select").hasClass('multi-choice-default')){

			$("form select").selectmenu({
				width:280,
				menuWidth:280,
				style:'dropdown',
				positionOptions: {
					my: "left top",
					at: "left bottom",
					collision: 'none'
				}
			});

		} else {

			var w = parseInt($("html").attr('data-attr-ww'));
			
			if (w > 480){

				$('#global_regions').removeClass('multi-choice-default').multiSelect();

				$('#us_regions').removeClass('multi-choice-default').multiSelect();

				$('#global_regions_countries').removeClass('multi-choice-default').multiSelect();

			}


		}
		
	}

	$(window).resize(function(){

		var w = $(window).width();
		$("html").attr('data-attr-ww', w);

		ww = parseInt(w);

		if (ww > 480){

			$('#global_regions').removeClass('multi-choice-default').multiSelect();

			$('#us_regions').removeClass('multi-choice-default').multiSelect();

			$('#global_regions_countries').removeClass('multi-choice-default').multiSelect();

		} else {

			$('#global_regions').multiSelect('destroy').attr('style', '').addClass('multi-choice-default');

			$('#us_regions').multiSelect('destroy').attr('style', '').addClass('multi-choice-default');

			$('#global_regions_countries').multiSelect('destroy').attr('style', '').addClass('multi-choice-default');

		}

	});

});
