// 現行バージョン
javascript:
$(".user_body table:first").remove();
$(".user_body > ul").remove();
$(".user_body table").each(function(index, elem) {
		// 結合しているジャンルセルを分解
		for (let i=2;i<$(elem).find("tr").length;i++){
			const genres = ["P&ア","nico","東方","バラ","mai","ゲ&チ"];
			const head_txt = $(elem).find("tr").eq(i).find("td").eq(0).text();
			var genre_txt; var genre_color;
			if (genres.includes(head_txt)) {
				$(elem).find("tr").eq(i).find("td").eq(0).removeAttr("rowspan");
				genre_txt = head_txt;
				genre_color = $(elem).find("tr").eq(i).find("td").eq(0).css("background-color");
			} else {
				$(elem).find("tr").eq(i).prepend($("<td></td>"));
				$(elem).find("tr").eq(i).find("td").eq(0).text(genre_txt);
				$(elem).find("tr").eq(i).find("td").eq(0).css({
						"text-align" : "center",
						"background-color" : genre_color,
						"width" : "50px"
				});
			}
		}
		
		// 課題曲を絞り込み
		for (let i=$(elem).find("tr").length-1; i>1; i--) {
			const $bpm = $(elem).find("tr").eq(i).find("td").eq(2);
			const BPM = Number($($bpm).text());
			const $notes = $(elem).find("tr").eq(i).find("td").eq(3);
			const NOTES = Number($($notes).text());
			if (BPM >= 140 && BPM < 150) {
				$($bpm).css("background-color", "lime");
			} else if (BPM >= 130 && BPM < 140) {
				$($bpm).css("background-color", "aqua");
			} else if (BPM >= 150 && BPM < 160) {
				$($bpm).css("background-color", "fuchsia");
			}
			if (NOTES >= 700 && NOTES < 800) {
				$($notes).css("background-color", "lime");
			} else if (NOTES >= 16 && NOTES < 700) {
				$($notes).css("background-color", "aqua");
			} else if (NOTES >= 800 && NOTES < 900) {
				$($notes).css("background-color", "fuchsia");
			}
			if ($($bpm).css("background-color") == "rgba(0, 0, 0, 0)"){
				$(elem).find("tr").eq(i).remove();
			}
		}
})

// 過去バージョン
/*javascript:
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
}) */