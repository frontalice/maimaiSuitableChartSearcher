javascript: (function(){
const LEVEL_IN = Number(prompt("譜面定数を入力（入力値から+0.2までの譜面定数の曲が絞り込まれます。）"));
$(".user_body table:first").remove();
$(".user_body > ul").remove();
$(".user_body table").each(function(index, elem) {
		// 結合しているジャンルセルを分解
		let genre_txt; let genre_color;
		for (let i=2;i<$(elem).find("tr").length;i++){
			const genres = ["P&ア","nico","東方","バラ","mai","ゲ&チ"];
			const head_txt = $(elem).find("tr").eq(i).find("td").eq(0).text();
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
			const $level = $(elem).find("tr").eq(i).find("td").eq(4);
			const LEVEL = Number($($level).text());
			
			if (LEVEL < LEVEL_IN || LEVEL > LEVEL_IN+0.2) {
				$(elem).find("tr").eq(i).remove();
			} else {
				// 譜面定数で色分け
				if (LEVEL == LEVEL_IN) {
					$($level).css("background-color", "#00ff00"); // lime
				} else if (LEVEL == LEVEL_IN + 0.1) {
					$($level).css("background-color", "#fff700"); // yellow
				} else if (LEVEL == LEVEL_IN + 0.2) {
					$($level).css("background-color", "#ff8400"); // orange
				}
				// BPMで色分け
				if (BPM >= 140 && BPM < 200) {
					$($bpm).css("background-color", "#00ff00"); // lime
				} else if (BPM < 140) {
					$($bpm).css("background-color", "#00ffff"); // aqua
				} else if (BPM >= 200) {
					$($bpm).css("background-color", "#ff8400"); // orange
				}
				// NOTESで色分け
				/* if (NOTES >= 700 && NOTES < 800) {
					$($notes).css("background-color", "lime");
				} else if (NOTES >= 16 && NOTES < 700) {
					$($notes).css("background-color", "aqua");
				} else if (NOTES >= 800 && NOTES < 900) {
					$($notes).css("background-color", "fuchsia");
				} */
			}
		}
	});
})()