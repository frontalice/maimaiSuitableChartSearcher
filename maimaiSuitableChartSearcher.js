javascript:
$(".user_body td[style*='width: 40px;']").each(function(index, elem) {
  const bpm = Number($(elem).text());
  const note = Number($(elem).next().text());
  const title = $(elem).prev();
  if (bpm >= 150 && bpm < 160) {
      $(elem).css('background-color', 'lime');
  } else if (bpm < 150) {
      $(elem).css('background-color', 'aqua');
  } else if (bpm >= 160 && bpm < 170) {
	  $(elem).css('background-color', 'fuchsia');
  }
  if (note >= 16 && note < 700) {
	  $(elem).next().css('background-color', 'aqua');
  } else if (note >= 800 && note < 900) {
	  $(elem).next().css('background-color', 'fuchsia');
  } else if (note >= 700 && note < 800) {
	  $(elem).next().css('background-color', 'lime');
  }
})

// old version

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