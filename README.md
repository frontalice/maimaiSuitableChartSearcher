# maimaiSuitableChartSearcher
かつて存在したmaimai wiki( [https://maimai.wiki.fc2.com](https://web.archive.org/web/20210727053005/http://maimai.wiki.fc2.com/) )内の  
- [曲リスト（レベル順）](https://web.archive.org/web/20210727052735/http://maimai.wiki.fc2.com/wiki/%E6%9B%B2%E3%83%AA%E3%82%B9%E3%83%88%28%E3%83%AC%E3%83%99%E3%83%AB%E9%A0%86%29)
- [曲リスト（旧曲レベル順 13~15)](https://web.archive.org/web/20210727052757/http://maimai.wiki.fc2.com/wiki/%E6%9B%B2%E3%83%AA%E3%82%B9%E3%83%88%28%E6%97%A7%E6%9B%B2%E3%83%AC%E3%83%99%E3%83%AB%E9%A0%86%2013%EF%BD%9E15%29)
- [曲リスト（旧曲レベル順 11~12+)](https://web.archive.org/web/20210727052828/http://maimai.wiki.fc2.com/wiki/%E6%9B%B2%E3%83%AA%E3%82%B9%E3%83%88%28%E6%97%A7%E6%9B%B2%E3%83%AC%E3%83%99%E3%83%AB%E9%A0%86%2011%EF%BD%9E12%EF%BC%8B%29)

上記ページで使用できたブックマークレットです。   
ページ内の譜面テーブルをBPMや難易度で抽出します。  
上記リンクのウェブアーカイブ上でも動作する事を確認出来た為、jQueryの学習記録として公開しています。

## 各ファイル説明
各ファイルの絞り込み条件についてはsubjectSearcherByLevel.js以外自分用に固定されている為、ここでの記述は省略します。  
下のファイルに行くほど実用的になります。　　
forBookMarklet.js以外はブックマークレット用の処理を施していない為、開発者ツールをご利用ください。
### forBookMarkLet.js
条件を満たすBPMセルの背景色を変更します。

### maimaiSuitableChartSearcher.js
条件を満たすNoteセル、BPMセルの背景色を変更します。  
old versionは条件が違うのみで同じ機能です。

### subjectSearcher.js
上記機能に加え、条件に該当しない行を消去しています。

### subjectSearcherByLevel.js
実行時に表示されるウィンドウに条件となる譜面定数を入力し、それを元に行を抽出した上で  
各Noteセル、BPMセルの色分けを行います。
