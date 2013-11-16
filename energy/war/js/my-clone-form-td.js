$(function() {
	$('#btnAdd').click(
			function() {
				var num = $('.clonedInput').length, 
				newNum = new Number(num + 1), 	
				newElem = $('#entry' + num).clone()
						.attr('id', 'entry' + newNum).fadeIn('slow'); 
				newElem.find('.heading-reference').attr('id',
						'ID' + newNum + '_reference').attr('name',
						'ID' + newNum + '_reference').html('סוג נורה ' + newNum);
				newElem.find('.input_lamp').attr('id', 'ID' + newNum + '_lamp')
				.attr('name', 'ID' + newNum + '_lamp').val('');
				// Title - select
				newElem.find('.label_watt')
						.attr('for', 'ID' + newNum + '_watt');
				newElem.find('.input_watt').attr('id', 'ID' + newNum + '_watt')
						.attr('name', 'ID' + newNum + '_watt').val('');
				newElem.find('.label_eleprice').attr('for',
						'ID' + newNum + '_eleprice');
				newElem.find('.input_eleprice')
						.attr('id', 'ID' + newNum + '_eleprice')
						.attr('name', 'ID' + newNum + '_eleprice').val('');
				newElem.find('.label_hour')
						.attr('for', 'ID' + newNum + '_hour');
				newElem.find('.input_hour').attr('id', 'ID' + newNum + '_hour')
						.attr('name', 'ID' + newNum + '_hour').val('');

				newElem.find('.label_days')
						.attr('for', 'ID' + newNum + '_days');
				newElem.find('.input_days').attr('id', 'ID' + newNum + '_days')
						.attr('name', 'ID' + newNum + '_days').val('');

				// First name - text
				newElem.find('.label_time')
						.attr('for', 'ID' + newNum + '_time');
				newElem.find('.input_time').attr('id', 'ID' + newNum + '_time')
						.attr('name', 'ID' + newNum + '_time').val('50000');

				// Last name - text
				newElem.find('.label_count').attr('for',
						'ID' + newNum + '_count');
				newElem.find('.input_count').attr('id',
						'ID' + newNum + '_count').attr('name',
						'ID' + newNum + '_count').val('');

				// Email - text
				newElem.find('.label_price').attr('for',
						'ID' + newNum + '_price');
				newElem.find('.input_price').attr('id',
						'ID' + newNum + '_price').attr('name',
						'ID' + newNum + '_price').val('');

				// insert the new element after the last "duplicatable" input
				// field
				$('#entry' + num).after(newElem);
				$('#ID' + newNum + '_watt').focus();

				// enable the "remove" button
				$('#btnDel').attr('disabled', false);

				// right now you can only add 5 sections. change '5' below to
				// the max number of times the form can be duplicated
				if (newNum == 5) {

					$('#btnAdd').attr('disabled', true).prop('value',
							"You've reached the limit");
				}
			});

	$('#btnDel')
			.click(
					function() {
						// confirmation
						if (confirm("Are you sure you wish to remove this section? This cannot be undone.")) {
							var num = $('.clonedInput').length;
							// how many "duplicatable" input fields we currently
							// have
							$('#entry' + num)
									.slideUp(
											'slow',
											function() {
												$(this).remove();
												// if only one element remains,
												// disable the "remove" button
												if (num - 1 === 1)
													$('#btnDel').attr(
															'disabled', true);
												// enable the "add" button
												$('#btnAdd').attr('disabled',
														false).prop('value',
														"add section");
											});
						}
						return false;
						// remove the last element

						// enable the "add" button
						$('#btnAdd').attr('disabled', false);
					});

	$('#btnDel').attr('disabled', true);
	


	$('#btnResult').click(function() {
	    $('#btnResultTotalAB').css('visibility','visible');

		var num = $('.clonedInput').length; // how many "duplicatable" input
											// fields we currently have
		var lamp = [];
		$(".clonedInput .input_lamp").each(function() {
			lamp.push($(this).val());

		});
		var watt = [];
		$(".clonedInput .input_watt").each(function() {
			watt.push($(this).val());

		});
		var eleprice = [];
		$(".clonedInput .input_eleprice").each(function() {
			eleprice.push($(this).val());

		});
		var hour = [];
		$(".clonedInput .input_hour").each(function() {
			hour.push($(this).val());
		});
		var days = [];
		$(".clonedInput .input_days").each(function() {
			days.push($(this).val());

		});
		var time = [];
		$(".clonedInput .input_time").each(function() {
			time.push($(this).val());
		});
		var count = [];
		$(".clonedInput .input_count").each(function() {
			count.push($(this).val());

		});
		var price = [];
		$(".clonedInput .input_price").each(function() {
			price.push($(this).val());
		});
		var totalPriceTimeAmountDay =0;
		var totalPriceTimeAmountMounth =0;
		var totalTotalCost =0;
		var totalCostLifeTime =0;

		$('#resultin').empty();
		for(var i=0;i< $('.clonedInput').length ;i++){
			//calculate per hour
			var priceTimeHour = price[i]/time[i]+watt[i]*eleprice[i];
			//calculate per HOUR and number of lights
			var priceTimeAmountHour = count[i]*priceTimeHour;
			//calculate per DAY 
			var priceTimeAmountDay = count[i]*priceTimeHour*hour[i];
			//calculate per MOUNTH
			var priceTimeAmountMounth = priceTimeAmountDay*days[i];
			//calculate how many light have to change after 50000 work hours
			var timeLife = 50000/time[i];
			//calculate what is the price of changing of lights in the duration of 50000 work hours
			var costLifeTime = timeLife * price[i] * count[i] ;
			//calculate the total cost for 50000 work hour 
			var costLife = price[i] * timeLife;
			var totalCost = 50000 * watt[i] * eleprice[i] * count[i] + costLife * count[i];
			
			//add all day to total 
			totalPriceTimeAmountDay += priceTimeAmountDay; 
			//add all 
			totalPriceTimeAmountMounth += priceTimeAmountMounth; 
			//
			totalTotalCost +=totalCost;
			//add all cost life for 50000 hours
			totalCostLifeTime +=costLifeTime;
		$('#resultin').append(' <table>\
				<tr><td>' + lamp[i] + '</td><td>סוג נורה </td></tr>\
			       <tr><td>&#8362;' + priceTimeAmountHour.toFixed(2)+ '</td><td>עלות כוללת לשעה</td></tr>\
				<tr><td>&#8362;' + priceTimeAmountDay.toFixed(2) + '</td><td>עלות כוללת ליום</td></tr>\
				   <tr><td>&#8362;' + priceTimeAmountMounth.toFixed(2)  + '</td><td>עלות כוללת לחודש</td></tr>\
				   <tr><td>'+timeLife.toFixed(2)* count[i] +'</td><td>לתקופה של 50000 שעות תצתרך להחליף</td></tr>\
				   <tr><td>&#8362;'+ costLifeTime.toFixed(2)+'</td><td>עלות החלפת נורות לפי 50000 שעות</td></tr>\
				   <tr><td>&#8362;'+ totalCost.toFixed(2)+'</td><td>סה"כ עלות לפי 50000 שעות</td></tr>\
				   </table');

	}
		$('#resultTotal1').empty();

		$('#resultTotal1').append(' <table>\
				   <tr><td>&#8362;'+ totalPriceTimeAmountDay.toFixed(2) +'</td><td>חישוב כולל של עלות חשמל יומית</td></tr>\
				   <tr><td>&#8362;'+ totalPriceTimeAmountMounth.toFixed(2) +'</td><td>חישוב כולל של עלות חשמל חודשית</td></tr>\
				   <tr><td>&#8362;'+ (totalPriceTimeAmountMounth* 12).toFixed(2) +'</td><td>חישוב כולל של עלות חשמל שנתית</td></tr>\
				   <tr><td>&#8362;'+ totalCostLifeTime.toFixed(2)+'</td><td>עלות החלפת נורות לפי 50000 שעות</td></tr>\
				   <tr><td>&#8362;'+ totalTotalCost.toFixed(2)+'</td><td>סה"כ עלות לפי 50000 שעות</td></tr>\
				   </table');


	});
});