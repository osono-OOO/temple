'use strict';
//帰るボタンを隠しておく
document.getElementById('home').style.display = 'none';
const visit = document.getElementById('visitor');

//おみくじをひくボタンを押すと起こること
function omikuziDraw() {
    //おみくじをひくボタンを隠す
    document.getElementById('omikuzi').style.display = 'block';
    if(omikuzi.style.display=='block') {
        omikuzi.style.display = 'none';
    }
    //帰るボタンを表示
    if(home.style.display=='none') {
        home.style.display = 'block';
    }

    //ひくおみくじを決める
    var rand = Math.floor(Math.random()*100); //floor:小数点以下切り捨て random:0.0～1.0を生成
    var result = null;
    //特別 (5%)
	result = "純金の金塊500g"; //0（1%）
	if (rand > 0) result = "5000万円当たってる宝くじ"; //1（1%）
	if (rand > 1) result = "人のお金で焼肉食べれる券"; //2（1%）
	if (rand > 2) result = "帰宅懇願寺の鍵"; //3（1%）
    if (rand > 3) result = "「理想の恋人」"; //4（1%）
    //大吉 (10%)
    if (rand > 4) result = "「大吉の中の大吉！この世界に生まれてくれたあなたに感謝！いつもありがとね！今日のラッキーヘアはピンクのアフロ。それじゃあ元気に、Let's take a nup！」"; //5～9 (5%)
    if (rand > 9) result = "「大吉の寄せ集め！頑張りすぎない＆無理しないでね！辛かったら休んでね！今日のラッキーヘアはどどめ色のドレッドヘア。それじゃあ元気に、Let's take a nup！」"; //10～14 (5%)
    //中吉 (15%)
    if (rand > 14) result = "「大吉よりの中吉！何よりも自分を大切に！自分の幸せが一番大事よ！今日のラッキースタチューはモアイ像。それじゃあ元気に、Let's go home！」"; //15～19 (5%)
    if (rand > 19) result = "「大吉に見せかけた中吉！いいやつに見せかけた悪い奴に騙されないで！世の中そういう人が多いのよ！今日のラッキースタチューはラオコーン。それじゃあ元気に、Let's go home！」"; //20～24 (5%)
    if (rand > 24) result = "「ご機嫌な中吉！太陽の光を浴びてリフレッシュ！これで夜もぐっすり寝れるよ！今日のラッキースタチューは真実の口。それじゃあ元気に、Let's go home！」"; //25～29 (5%)
    //小吉 (15%)
    if (rand > 29) result = "「いい感じの小吉！大盛ご飯の小吉！あなたが素敵な1日をおくれますように！今日のラッキーベビーはプーズーの赤ちゃん。それじゃあ元気に、Let's go home！」"; //30～34 (5%)
    if (rand > 34) result = "「昭和っぽい小吉！ちゃんと休んでる？時には思いっきりゆっくりしてね！今日のラッキーべビーはベビースター。それじゃあ元気に、Let's go home！」"; //35～39 (5%)
    if (rand > 39) result = "「チョコ味の小吉！糖分は大事！ちゃんと頭も体も休めてね！今日のラッキーべビーはカモノハシの赤ちゃん。それじゃあ元気に、Let's go home！」"; //4～44 (5%)
    //吉 (20%)
    if (rand > 44) result = "「大御所感が出てる吉！今日もあなたはいい感じ！あなたの幸せを私は祈っています！今日のラッキーオーシャンはナトゥーナ海。それじゃあ元気に、Let's go home！」"; //45～49 (5%)
    if (rand > 49) result = "「結構よさげな吉！私は何があってもあなたの味方！大丈夫大丈夫！今日のラッキーオーシャンは瀬戸内海。それじゃあ元気に、Let's go home！」"; //50～54 (5%)
    if (rand > 54) result = "「神秘的な吉！自然の景色を見てリラックス！今日もあなたはすごくえらい！今日のラッキーオーシャンは月の海。それじゃあ元気に、Let's go home！」"; //55～59 (5%)
    if (rand > 59) result = "「古びた吉！他人がなんぼのもんじゃい！自分のペースで生きていこう！今日のラッキーオーシャンはマグマオーシャン。それじゃあ元気に、Let's go home！」"; //60～64 (5%)
    //末吉 (20%)
    if (rand > 64) result = "「執行猶予中の末吉！毎日ちゃんと起きれてえらい！ちゃんと寝るのも大事だよ！今日のラッキー料理はオッソブーコ。それじゃあ元気に、Let's go home！」"; //65～69 (5%)
    if (rand > 69) result = "「どすこい末吉！焦らずゆっくりどすこいどすこい！何事もこころが辛くならない程度に！今日のラッキー料理はクスクス。それじゃあ元気に、Let's go home！」"; //70～74 (5%)
    if (rand > 74) result = "「すばらしい末吉！買ってない宝くじが当たりそう！あなたにめちゃんこいいことがありますように！今日のラッキー料理はスピナーチョ。それじゃあ元気に、Let's go home！」"; //75～79 (5%)
    if (rand > 79) result = "「メタリックな末吉！縛られすぎはよくない！自由に動き回るのが1番！今日のラッキー料理はボンゴレ。それじゃあ元気に、Let's go home！」"; //80～84 (5%)
    //凶 (10%)
    if (rand > 84) result = "「すごく高級そうな凶！こんな凶は売ってお金にしてしまおう！よし、悪いことは起こりません！今日のラッキーマネーは二千円札。それじゃあ元気に、Let's take a nup！」"; //85～89 (5%)
    if (rand > 89) result = "「癒し系な凶！何も悪いことは起こりません！あなたが一生健康でいるように祈ってる凶です！今日のラッキーマネーは穴のない五十円玉。それじゃあ元気に、Let's take a nup！」"; //90～94 (5%)
    //大凶 (5%)
    if ( rand > 94) result = "「大吉よりの大凶！限りなく大吉に近い！いっぱい食べて元気でいてね！今日のラッキー四字熟語は焼肉定食。それじゃあ元気に、Let's teake a nup！」"; //95～99 (5%)

    //result-areaにメッセージを表示
    const resultArea = document.getElementById('result-area');
    const kekkaH1 = document.createElement('h4');
    kekkaH1.innerText = '-------------------あなたはおみくじをひいた-------------------';
    resultArea.appendChild(kekkaH1);
    
    if (rand < 5) {

        const kekkaP2 = document.createElement('p');
        kekkaP2.innerText = 'お、当たりじゃん。えっと...';
        resultArea.appendChild(kekkaP2);

        kekkaP3.innerText = result + 'だってさ。おめでとう。'
        resultArea.appendChild(kekkaP3);

        const kekkaP4 = document.createElement('p');
        kekkaP4.innerText = 'これあげるけど、寺から離れると不思議な力で消えちゃうから気を付けてね。'
        resultArea.appendChild(kekkaP4);

    } else {

        const kekkaP2 = document.createElement('p');
        kekkaP2.innerText = '何ひいたの？ちょっと見せてよ。';
        resultArea.appendChild(kekkaP2);
    
        const kekkaP3 = document.createElement('p');
        kekkaP3.innerText = 'へぇ、' + result + 'だってさ。';
        resultArea.appendChild(kekkaP3);

        const kekkaP4 = document.createElement('p');
        kekkaP4.innerText = 'このおみくじ、寺から離れると不思議な力で消えちゃうから気を付けてね。'
        resultArea.appendChild(kekkaP4);
    }

    const kekkaP5 = document.createElement('p');
    kekkaP5.innerText = '...よければ明日も遊びに来てな。'
    resultArea.appendChild(kekkaP5);


//cookieの削除期間指定（明日の0時) これにより明日0時までおみくじを引けない
    var tomorrow = new Date();
    tomorrow.setHours(24,0,0,0); //明日の0時0分0秒

    var today = new Date();      //今の時間

    var difTime = tomorrow.getTime() - today.getTime(); //今から明日0時0分0秒までの時間
    var difSecond = Math.floor(difTime / 1000); //今から明日0時0分0秒までの秒数

    document.cookie = "name=temple;max-age=" + difSecond;
}

//帰るボタンを押すと起こること
function visitor() {
    //帰るボタンを消す
    if(home.style.display=='block') {
        home.style.display = 'none';
    }

    const visitorH1 = document.createElement('h4');
    visitorH1.innerText = '--------------帰ろうとすると誰かが目の前に現れた-------------';
    visit.appendChild(visitorH1);

    //確率で誰かが出る
    var rand2 = Math.floor(Math.random()*100); //floor:小数点以下切り捨て random:0.0～1.0を生成
    if (rand2 > 50) { //100～51（50%）
        kaeru();
    } else if (rand2 > 38) { //25～49（25%）
        ago();
    } else if (rand2 > 13) { //50～74（25%）
        adventurer();
    } else {                //75～99（25%）
        doraemon();
    }

    const visitorH2 = document.createElement('h4');
    visitorH2.innerText = '-----------こう言い残して謎の人物は森に帰っていった----------';
    visit.appendChild(visitorH2);
    
    const visitorP3 = document.createElement('p');
    visitorP3.innerText = '...一体なんだったんだ。';
    visit.appendChild(visitorP3);

}

//訪問者たち
//かえるの画像と言葉を表示
function kaeru() {
    const kaeru = document.createElement('img');
    kaeru.src = "https://cdn.discordapp.com/attachments/678442042908606465/687224329372827649/144_20200311173128.png";
    kaeru.alt = "かえる";
    visit.appendChild(kaeru);

    var rand3 = Math.floor(Math.random()*100);
    var kSerihu = null;
	kSerihu = '「昼寝した後って今何時かわからないから、夜ごはん食べ損ねたかと思って焦るよね。」'; //0～24（25%）
	if (rand3 > 24) kSerihu = '「休憩は頭が整理されるから大事だよね。まぁボクは毎秒休憩してるんだけどさ。ガハハ。'; //25～49（25%）
    if (rand3 > 49) kSerihu = '「他人のお金で食べる焼肉は8億倍おいしいよね。他人のお金で食べたことないけど。」'; //50～74 (25%)
    if (rand3 > 74) kSerihu = '「家にずっといると外行きたいって思うけど、外にずっといると家帰りたいって思うよね。」'; //75～99 (25%)

    const kaeruP1 = document.createElement('p');
    kaeruP1.innerText = kSerihu;
    visit.appendChild(kaeruP1);
}

//顎の長い人の画像と言葉を表示
function ago() {
    const ago = document.createElement('img');
    ago.src = "https://cdn.discordapp.com/attachments/678442042908606465/687224329687138319/144_20200311173721.png";
    ago.alt = "顎が長い人";
    visit.appendChild(ago);

    const agoP1 = document.createElement('p');
    agoP1.innerText = '「long long ago. HAHAHA.」'
    visit.appendChild(agoP1);
}

//冒険家の画像と言葉を表示
function adventurer() {
    const adventure = document.createElement('img');
    adventure.src = "https://cdn.discordapp.com/attachments/678442042908606465/687224329922281482/144_20200311175233.png";
    adventure.alt = "冒険家"
    visit.appendChild(adventure);

    var rand4 = Math.floor(Math.random()*100);
    var aSerihu = null;
	aSerihu = '「なぜシロクマは白いのか。その真相を探るため、我々は極寒の南極大陸へ向かった。」'; //0～49 (50%)
	if (rand4 > 49) aSerihu = '「なぜパンダは笹を食べるのか。その真相を探るため、我々はアマゾンの奥地へ向かった。」'; //50～99（50%）

    const adventureP1 = document.createElement('p');
    adventureP1.innerText = aSerihu
    visit.appendChild(adventureP1);
	
}

//ドラえもんの画像と言葉を表示
function doraemon() {
    const doraemon = document.createElement('img');
    doraemon.src = "https://cdn.discordapp.com/attachments/678442042908606465/687224330207363072/144_20200311180305.png";
    doraemon.alt = "ドラえもん";
    visit.appendChild(doraemon);

    const doraP1 = document.createElement('p');
    doraP1.innerText = '「キミはのび太クンを探してるの？...なぁんだ違うのか。ここが警察にバレるのも時間の問題だな。」';
    visit.appendChild(doraP1);
}

//cookieがある場合表示
function changeFirst() {

    //welcomeメッセージを削除
        const welcome = document.getElementById('welcome');
        const first = document.getElementById('first');
        first.removeChild(welcome);

    //おみくじをひくボタンを隠す
    document.getElementById('omikuzi').style.display = 'block';
    if(omikuzi.style.display=='block') {
        omikuzi.style.display = 'none';
    }
    
    //２回目の訪問用メッセージを表示
        const unwelcome = document.getElementById('first');
        const p1 = document.createElement('h4');
        p1.innerText = '----------------------------------------------------------------';
        unwelcome.appendChild(p1);
    
        const p2 = document.createElement('p');
        p2.innerText = 'あれ、また来てくれたの？';
        unwelcome.appendChild(p2);
    
        const p3 = document.createElement('p');
        p3.innerText = 'でもおみくじ引けるの1日1回って決まってるのさ。';
        unwelcome.appendChild(p3);
    
        const p4 = document.createElement('p');
        p4.innerText = 'よければまた明日遊びに来てな。';
        unwelcome.appendChild(p4);
    }


var cook = document.cookie.indexOf('name');
 
if(cook !== -1) {
 
    changeFirst();
 
} else {
    console.log('cookieないんだけど？は？');
}
