javascript:
$(".user_body td[style*='width: 40px;']").each(function(index, elem) {
    const bpm = Number($(elem).text())
  if (bpm >= 150) {
      $(elem).css('background-color', 'red');
  } else if (bpm < 140) {
      $(elem).css('background-color', 'aqua');
  } 
})
$(".user_body td[style*='width: 60px;']").each(function(index, elem) {
    const note = Number($(elem).text())
  if (note >= 800) {
      $(elem).css('background-color', 'red');
  } else if (note < 700 && note >= 16) {
      $(elem).css('background-color', 'aqua');
  } 
})

// added comment through Working Copy