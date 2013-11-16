$(function() {
	

	$('#btnResultTotalAB')
			.click(
					function() {

						var num = $('.clonedInput').length; // how many
															// "duplicatable"
															// input
						// fields we currently have
						var num2 = $('.clonedInput2').length;
						var watt = [];
						$(".clonedInput .input_watt").each(function() {
							watt.push($(this).val());

						});
						var watt2 = [];
						$(".clonedInput2 .input_watt2").each(function() {
							watt2.push($(this).val());

						});
						var eleprice = [];
						$(".clonedInput .input_eleprice").each(function() {
							eleprice.push($(this).val());

						});
						var eleprice2 = [];
						$(".clonedInput2 .input_eleprice2").each(function() {
							eleprice2.push($(this).val());

						});
						var hour = [];
						$(".clonedInput .input_hour").each(function() {
							hour.push($(this).val());
						});
						var hour2 = [];
						$(".clonedInput2 .input_hour2").each(function() {
							hour2.push($(this).val());
						});
						var days = [];
						$(".clonedInput .input_days").each(function() {
							days.push($(this).val());

						});
						var days2 = [];
						$(".clonedInput2 .input_days2").each(function() {
							days2.push($(this).val());

						});
						var time = [];
						$(".clonedInput .input_time").each(function() {
							time.push($(this).val());
						});
						var time2 = [];
						$(".clonedInput2 .input_time2").each(function() {
							time2.push($(this).val());
						});
						var count = [];
						$(".clonedInput .input_count").each(function() {
							count.push($(this).val());

						});
						var count2 = [];
						$(".clonedInput2 .input_count2").each(function() {
							count2.push($(this).val());

						});
						var price = [];
						$(".clonedInput .input_price").each(function() {
							price.push($(this).val());
						});
						var price2 = [];
						$(".clonedInput2 .input_price2").each(function() {
							price2.push($(this).val());
						});
						
						var totalPriceTimeAmountDay1 = 0;
						var totalPriceTimeAmountDay2 = 0;
						var totalPriceTimeAmountMounth1 = 0;
						var totalPriceTimeAmountMounth2 = 0;
						var SavePriceTimeAmountDay = 0;
						var saveTotalPriceTimeAmountMounth = 0;
						var priceTimeTotal = 0;
						var totalPriceCount = 0;
						$('#resultTotalABin').empty();
						for ( var i = 0; i < $('.clonedInput').length; i++) {
							//calculate per hour 1
							var priceTimeHour1 = price[i]/time[i]+watt[i]*eleprice[i];
							//calculate per hour 2
							var priceTimeHour2= price2[i]/time2[i]+watt2[i]*eleprice2[i];
							//calculate per HOUR and number of lights 1
							var priceTimeAmountHour1 = count[i]*priceTimeHour1;
							//calculate per HOUR and number of lights 2
							var priceTimeAmountHour2 = count2[i]*priceTimeHour2;
							//calculate per DAY 1
							var priceTimeAmountDay1 = count[i]*priceTimeHour1*hour[i];
							//calculate per DAY 2
							var priceTimeAmountDay2 = count2[i]*priceTimeHour2*hour2[i];
							//calculate per MOUNTH 1
							var priceTimeAmountMounth1 = priceTimeAmountDay1*days[i];
							//calculate per MOUNTH 2
							var priceTimeAmountMounth2 = priceTimeAmountDay2*days2[i];
							//calculate how many light have to change after 50000 work hours 1
							var timeLife1 = 50000 / time[i];
							//calculate how many light have to change after 50000 work hours 2
							var timeLife2 = 50000 / time2[i];
							//calculate what is the price of changing of lights in the duration of 50000 work hours 1
							var costLifeTime1 = timeLife1 * price[i] * count[i];
							//calculate what is the price of changing of lights in the duration of 50000 work hours 2
							var costLifeTime2 = timeLife2 * price2[i] * count2[i];
							//price of light * number of led 
							var priceCount = price[i] * count[i];
							//calculate the total cost for 50000 work hour 1
							var totalCost1 = 50000 * watt[i] * eleprice[i] * count[i]+ costLifeTime1;
							//calculate the total cost for 50000 work hour 2
							var totalCost2 = 50000 * watt2[i] * eleprice2[i]* count2[i] + costLifeTime2;
							//calculate the price for time of light
							var priceTime = price[i]/time[i];
							//add all to one
							priceTimeTotal +=priceTime;
							//price/time
							totalPriceTimeAmountDay1 += priceTimeAmountDay1;
							totalPriceTimeAmountDay2 += priceTimeAmountDay2;

							totalPriceTimeAmountMounth1 += priceTimeAmountMounth1;
							totalPriceTimeAmountMounth2 += priceTimeAmountMounth2;
							totalPriceCount += priceCount;
						}
						

						SavePriceTimeAmountDay =totalPriceTimeAmountDay2 -totalPriceTimeAmountDay1;
						saveTotalPriceTimeAmountMounth=totalPriceTimeAmountMounth2 -totalPriceTimeAmountMounth1;
						var returnCash = totalPriceCount/saveTotalPriceTimeAmountMounth;
							$('#resultTotalABin')
									.append(' <table>\<tr><td>&#8362;'+ SavePriceTimeAmountDay.toFixed(2)+ '</td><td>חיסכון יומי</td></tr>\
			                                <tr><td>&#8362;'+ saveTotalPriceTimeAmountMounth.toFixed(2)+ '</td><td>חיסכון חודשי</td></tr>\
			                                <tr><td>&#8362;'+ (saveTotalPriceTimeAmountMounth* 12).toFixed(2)+ '</td><td>חיסכון שנתי</td></tr>\
			                                <tr><td>'+ returnCash.toFixed(2)+ '</td><td> החזר השקעה בחודשים</td></tr>\
									</table>');

						

					});

});