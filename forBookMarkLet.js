// suitableChartSearcher
javascript:$(".user_body td[style*='width: 40px;']").each(function(c,a){var b=Number($(a).text());150<=b?$(a).css("background-color","red"):140>b&&$(a).css("background-color","aqua")});$(".user_body td[style*=%27width: 60px;%27]").each(function(c,a){var b=Number($(a).text());800<=b?$(a).css("background-color","red"):700>b&&16<=b&&$(a).css("background-color","aqua")});

//subjectSearcher
javascript:$(".user_body td[style*='width: 40px;']").each(function(c,b){var a=Number($(b).text());130<=a&&140>a?$(b).css("background-color","aqua"):150<=a&&160>a?$(b).css("background-color","fuchsia"):140<=a&&150>a&&$(b).css("background-color","lime")});$(".user_body td[style*=%27width: 60px;%27]").each(function(c,b){var a=Number($(b).text());16<=a&&700>a?$(b).css("background-color","aqua"):800<=a&&900>a?$(b).css("background-color","fuchsia"):700<=a&&800>a&&$(b).css("background-color","lime")});