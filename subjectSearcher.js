javascript:
$(".user_body td[style*='width: 40px;']").each(function(index, elem) {
	const bpm = Number($(elem).text())
	if (bpm >= 130 && bpm < 140) {
		$(elem).css('background-color', 'aqua');
	} else if (bpm >= 150 && bpm < 160) {
		$(elem).css('background-color', 'fuchsia');
	} else if (bpm >= 140 && bpm < 150) {
		$(elem).css('background-color', 'lime');
	}
})
$(".user_body td[style*='width: 60px;']").each(function(index, elem) {
    const note = Number($(elem).text())
	if (note >= 16 && note < 700) {
		$(elem).css('background-color', 'aqua');
	} else if (note >= 800 && note < 900) {
		$(elem).css('background-color', 'fuchsia');
	} else if (note >= 700 && note < 800) {
		$(elem).css('background-color', 'lime');
	}
})