$(function() {	
	$('#ID1_eleprice2').blur(function() { $('#ID1_eleprice').val($(this).val());});$('#ID1_count2').blur(function() { $('#ID1_count').val($(this).val());});$('#ID1_hour2').blur(function() { $('#ID1_hour').val($(this).val());});$('#ID1_days2').blur(function() { $('#ID1_days').val($(this).val());});

	$('#btnAdd2').click(
			function() {
				var num2 = $('.clonedInput2').length, 
				newNum2 = new Number(num2 + 1), 
				newElem2 = $('#number' + num2).clone().attr('id',
						'number' + newNum2).fadeIn('slow'); 		
				newElem2.find('.heading-reference2').attr('id',
						'ID' + newNum2 + '_reference2').attr('name',
						'ID' + newNum2 + '_reference2').html('סוג נורה ' + newNum2);
				newElem2.find('.input_lamp2')
				.attr('id', 'ID' + newNum2 + '_lamp2')
				.attr('name', 'ID' + newNum2 + '_lamp2').val('');
				// Title - select
				newElem2.find('.label_watt2').attr('for',
						'ID' + newNum2 + '_watt2');
				newElem2.find('.input_watt2')
						.attr('id', 'ID' + newNum2 + '_watt2')
						.attr('name', 'ID' + newNum2 + '_watt2').val('');
				newElem2.find('.label_eleprice2').attr('for',
						'ID' + newNum2 + '_eleprice2');
				newElem2.find('.input_eleprice2')
						.attr('id', 'ID' + newNum2 + '_eleprice2')
						.attr('name', 'ID' + newNum2 + '_eleprice2').val('');
				newElem2.find('.label_hour2').attr('for',
						'ID' + newNum2 + '_hour2');
				newElem2.find('.input_hour2').attr('id',
						'ID' + newNum2 + '_hour2').attr('name',
						'ID' + newNum2 + '_hour2').val('');

				newElem2.find('.label_days2').attr('for',
						'ID' + newNum2 + '_days2');
				newElem2.find('.input_days2').attr('id',
						'ID' + newNum2 + '_days2').attr('name',
						'ID' + newNum2 + '_days2').val('');

				// First name - text
				newElem2.find('.label_time2').attr('for',
						'ID' + newNum2 + '_time2');
				newElem2.find('.input_time2').attr('id',
						'ID' + newNum2 + '_time2').attr('name',
						'ID' + newNum2 + '_time2').val('');

				// Last name - text
				newElem2.find('.label_count2').attr('for',
						'ID' + newNum2 + '_count2');
				newElem2.find('.input_count2').attr('id',
						'ID' + newNum2 + '_count2').attr('name',
						'ID' + newNum2 + '_count2').val('');

				// Email - text
				newElem2.find('.label_price2').attr('for',
						'ID' + newNum2 + '_price2');
				newElem2.find('.input_price2').attr('id',
						'ID' + newNum2 + '_price2').attr('name',
						'ID' + newNum2 + '_price2').val('');

				// insert the new element after the last "duplicatable" input
				// field
				$('#number' + num2).after(newElem2);
				$('#ID' + newNum2 + '_watt2').focus();

				// enable the "remove" button
				$('#btnDel2').attr('disabled', false);

				// right now you can only add 5 sections. change '5' below to
				// the max number of times the form can be duplicated
				if (newNum2 == 5) {
					$('#btnAdd2').attr('disabled', true).prop('value',
							"you are lemit to 5");
				}
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
				$('#ID2_eleprice2').blur(function() { $('#ID2_eleprice').val($(this).val());});$('#ID2_count2').blur(function() { $('#ID2_count').val($(this).val());});$('#ID2_hour2').blur(function() { $('#ID2_hour').val($(this).val());});$('#ID2_days2').blur(function() { $('#ID2_days').val($(this).val());});
				$('#ID3_eleprice2').blur(function() { $('#ID3_eleprice').val($(this).val());});$('#ID3_count2').blur(function() { $('#ID3_count').val($(this).val());});$('#ID3_hour2').blur(function() { $('#ID3_hour').val($(this).val());});$('#ID3_days2').blur(function() { $('#ID3_days').val($(this).val());});
				$('#ID4_eleprice2').blur(function() { $('#ID4_eleprice').val($(this).val());});$('#ID4_count2').blur(function() { $('#ID4_count').val($(this).val());});$('#ID4_hour2').blur(function() { $('#ID4_hour').val($(this).val());});$('#ID4_days2').blur(function() { $('#ID4_days').val($(this).val());});
				$('#ID5_eleprice2').blur(function() { $('#ID5_eleprice').val($(this).val());});$('#ID5_count2').blur(function() { $('#ID5_count').val($(this).val());});$('#ID5_hour2').blur(function() { $('#ID5_hour').val($(this).val());});$('#ID5_days2').blur(function() { $('#ID5_days').val($(this).val());});
				
				
			});

	$('#btnDel2')
			.click(
					function() {
						// confirmation
						if (confirm("האם אתה בטוח שברצונך למחוק נורה זו? פעולה זו אינה ניתנת לחזרה.")) {
							var num2 = $('.clonedInput2').length;
							// how many "duplicatable" input fields we currently
							// have
							$('#number' + num2 ).slideUp('slow', function() {
										$(this).remove();			
										// if only one element remains, disable
										// the "remove" button
										if (num2 - 1 === 1)
											$('#btnDel2').attr('disabled', true);
										// enable the "add" button
										$('#btnAdd2').attr('disabled', false).prop('value', "הוסף סוג נורה");
									});
							$('#entry'+num2 ).slideUp('slow', function() {
								$(this).remove();
							});
							
						}
						return false;
						// remove the last element

						// enable the "add" button
						$('#btnAdd2').attr('disabled', false);
					});

	$('#btnDel2').attr('disabled', true);


	$('#btnResult2').click(function() {
		  $('#btnResultTotalAB').css('visibility','visible');
		var num2 = $('.clonedInput2').length; // how many "duplicatable" input
											// fields we currently have
		var num = $('.clonedInput').length; // how many "duplicatable" input
		// fields we currently have
		var lamp2 = [];
		$(".clonedInput2 .input_lamp2").each(function() {
			lamp2.push($(this).val());

		});
		var lamp = [];
		$(".clonedInput .input_lamp").each(function() {
			lamp.push($(this).val());

		});
		var watt2 = [];
		$(".clonedInput2 .input_watt2").each(function() {
			watt2.push($(this).val());

		});
		var watt = [];
		$(".clonedInput .input_watt").each(function() {
			watt.push($(this).val());

		});
		var eleprice2 = [];
		$(".clonedInput2 .input_eleprice2").each(function() {
			eleprice2.push($(this).val());

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
		var hour2 = [];
		$(".clonedInput2 .input_hour2").each(function() {
			hour2.push($(this).val());
		});
		var days2 = [];
		$(".clonedInput2 .input_days2").each(function() {
			days2.push($(this).val());

		});
		var time2 = [];
		$(".clonedInput2 .input_time2").each(function() {
			time2.push($(this).val());
		});
		var count2= [];
		$(".clonedInput2 .input_count2").each(function() {
			count2.push($(this).val());

		});
		var price2 = [];
		$(".clonedInput2 .input_price2").each(function() {
			price2.push($(this).val());
		});
		var totalPriceTimeAmountDay2 =0;
		var totalPriceTimeAmountMounth2 =0;
		var totalTotalCost2 =0;
		var totalCostLifeTime2 =0;
		var totalPriceTimeAmountDay =0;
		var totalPriceTimeAmountMounth =0;
		var totalTotalCost =0;
		var totalCostLifeTime =0;

		$('#resultin2').empty();
		$('#resultin').empty();
		for(var i=0;i< $('.clonedInput2').length ;i++){
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
			//calculate per hour
			var priceTimeHour2 = price2[i]/time2[i]+watt2[i]*eleprice2[i];
			//calculate per HOUR and number of lights
			var priceTimeAmountHour2 = count2[i]*priceTimeHour2;
			//calculate per DAY 
			var priceTimeAmountDay2 = count2[i]*priceTimeHour2*hour2[i];
			//calculate per MOUNTH
			var priceTimeAmountMounth2 = priceTimeAmountDay2*days2[i];
			//calculate how many light have to change after 50000 work hours
			var timeLife2 = 50000/time2[i];
			//calculate what is the price of changing of lights in the duration of 50000 work hours
			var costLifeTime2 = timeLife2 * price2[i] * count2[i] ;
			//calculate the total cost for 50000 work hour 
			var costLife2 = price2[i] * timeLife2;
			var totalCost2 = 50000 * watt2[i] * eleprice2[i] * count2[i] + costLife2 * count2[i];
			
			//add all day to total 
			totalPriceTimeAmountDay2 += priceTimeAmountDay2; 
			//add all 
			totalPriceTimeAmountMounth2 += priceTimeAmountMounth2; 
			//
			totalTotalCost2 +=totalCost2;
			//add all cost life for 50000 hours
			totalCostLifeTime2 +=costLifeTime2;
		$('#resultin2').append(' <table>\
				<tr><td>' + lamp2[i] + '</td><td>סוג נורה  </td></tr>\
			       <tr><td>&#8362;' + priceTimeAmountHour2.toFixed(2) + '</td><td>עלות כוללת לשעה</td></tr>\
				<tr><td>&#8362;' + priceTimeAmountDay2.toFixed(2)+ '</td><td>עלות כוללת ליום</td></tr>\
				   <tr><td>&#8362;' + priceTimeAmountMounth2.toFixed(2)  + '</td><td>עלות כוללת לחודש</td></tr>\
				   <tr><td>'+timeLife2.toFixed(2) * count2[i] +'</td><td>לתקופה של 50000 שעות תצתרך להחליף</td></tr>\
				   <tr><td>&#8362;'+ costLifeTime2.toFixed(2) +'</td><td>עלות החלפת נורות לפי 50000 שעות</td></tr>\
				   <tr><td>&#8362;'+ totalCost2.toFixed(2) +'</td><td>סה"כ עלות לפי 50000 שעות</td></tr>\
				   </table');
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
		$('#resultTotal2').empty();

		$('#resultTotal2').append(' <table>\
				   <tr><td>&#8362;'+ totalPriceTimeAmountDay2.toFixed(2) +'</td><td>חישוב כולל של עלות חשמל יומית</td></tr>\
				   <tr><td>&#8362;'+ totalPriceTimeAmountMounth2.toFixed(2) +'</td><td>חישוב כולל של עלות חשמל חודשית</td></tr>\
				   <tr><td>&#8362;'+ (totalPriceTimeAmountMounth2* 12).toFixed(2) +'</td><td>חישוב כולל של עלות חשמל שנתית</td></tr>\
				   <tr><td>&#8362;'+ totalCostLifeTime2.toFixed(2) +'</td><td>עלות החלפת נורות לפי 50000 שעות</td></tr>\
				   <tr><td>&#8362;'+ totalTotalCost2.toFixed(2)+'</td><td>סה"כ עלות לפי 50000 שעות</td></tr>\
				   </table');
		$('#resultTotal1').append(' <table>\
				   <tr><td>&#8362;'+ totalPriceTimeAmountDay.toFixed(2) +'</td><td>חישוב כולל של עלות חשמל יומית</td></tr>\
				   <tr><td>&#8362;'+ totalPriceTimeAmountMounth.toFixed(2) +'</td><td>חישוב כולל של עלות חשמל חודשית</td></tr>\
				   <tr><td>&#8362;'+ (totalPriceTimeAmountMounth* 12).toFixed(2) +'</td><td>חישוב כולל של עלות חשמל שנתית</td></tr>\
				   <tr><td>&#8362;'+ totalCostLifeTime.toFixed(2)+'</td><td>עלות החלפת נורות לפי 50000 שעות</td></tr>\
				   <tr><td>&#8362;'+ totalTotalCost.toFixed(2)+'</td><td>סה"כ עלות לפי 50000 שעות</td></tr>\
				   </table');

		
	});
});