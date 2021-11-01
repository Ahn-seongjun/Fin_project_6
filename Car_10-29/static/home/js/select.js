function categoryChange(e) {
	var hyundai = [ '그랜저', '제네시스', '쏘나타', '아슬란', '싼타페', '크루즈', '아반떼', '투싼', 'i3', '베뉴',
       '엑센트', '코나', '벨로스터', '스타렉스', '포터2', '에쿠스', '팰리세이드', '쏠라티', 'i40',
       '스타리아', 'i30', '그랜드스타렉스', '맥스크루즈', '엑센트(신형)', '투싼ix', '펠리세이드'];
    var kia = ['K5', 'K7', '모하비', '스포티지', '카니발', '쏘렌토', '레이', 'K9', '포르테', '모닝',
       'K8', '카렌스', '스팅어', 'K3', '오피러스', '프라이드', '로체', '스토닉', '셀토스', '쏘울',
       '쎄라토', '니로', '옵티마', '봉고3'];
    var benz = ['S350 블루텍', 'E300', 'E220', 'S560', 'GLE350', 'S4.0', 'S500L',
       'S63', 'E220 블루텍', 'S350', 'GLC43', 'S350L', 'S500', 'E350',
       'C200', 'S550', 'S600', 'E200', 'S350L 블루텍', 'E250 블루텍', 'C220',
       'CLA220', 'GLC220', 'GLK220', 'G63', 'A200', 'GLC300', 'GLA220',
       'E400', 'CLS4.0', 'CLS63', 'A220', 'CLA45', '200', 'GLC350e',
       'GLA45', 'GLC250', 'CLS350', 'C220 블루텍', 'B200', 'CLS250',
       'CLA250', 'ML350 블루텍', 'E250', 'C63', 'A45', 'CLS450'];
    var BMW = ['118', '320', '530', '520', '730Ld', 'X1  20', 'X4 20', 'X5  30',
       'X6 30', '740Li', '428   컨버터블', '750Li', '640    그란쿠페', '750Ld',
       '740', 'X6 40', '730', '330', '420  그란쿠페', 'i3', '528', '428   쿠페',
       '420   쿠페'];
    var chevolet = ['라세티', '다마스', '마티즈', '말리부', '아베오', '스파크', '알페온', '올란도', '윈스톰',
       '익스프레스밴', '임팔라', '카마로', '캡티바', '콜로라도', '크루즈', '트레일블레이저', '볼트',
       '트래버스', '트랙스'];
    var samsung = ['SM6', 'SM7', 'SM5', 'SM3', '클리오', '캡처', '트위지', '조에', 'QM5', 'QM6'];
    var ssang = ['티볼리', '코란도', '렉스턴', '렉스턴 RX7', '로디우스', '렉스턴 RX4', '액티언',
       '렉스턴 RX6', '코란도 어드벤처 60th 에디션', '체어맨', '코란도 익스트림', '카이런'];
    var audi = ['A7', 'TT', 'A3', 'A6', 'S7', 'A8', 'A4', 'A5', 'Q5', 'R8', 'Q3',
       'Q7', 'S5', 'S6', 'S8', 'e-트론', 'S3', 'Q8', 'S4'];
    var gene = ['EQ900', 'G80', 'G70', 'G90', 'GV80', 'GV70'];
    var mini = ['쿠퍼', '쿠퍼 SE', '쿠퍼 컨트리맨', '쿠퍼 5도어', '쿠퍼 JCW', '로드스터',
       '쿠퍼 컨트리맨 파크래인'];
    var land = ['레인지로버 SE', '레인지로버 AB', '디스커버리 SE', '레인지로버', '레인지로버 Vogue',
       '프리랜더 SE'];
    var ford = ['토러스 2.0 에코부스트', '몬데오 2.0 트렌드', '익스플로러', 'F150', '머스탱 쿠페', '토러스',
       '머스탱 컨버터블', '몬데오 2.0 티타늄'];
    var volks = ['티구안', '골프', '폴로', 'GT', '투아렉 블루모션', '아테온', '파사트', '페이톤', '제타',
       '골프 블루모션', '뉴 CC 블루모션', '비틀', 'CC', '제타 블루모션', '뉴 CC', '시로코', '티록',
       '투아렉', 'CC 블루모션'];

	var target = document.getElementById("model");

	if(e.value == "현대") var d = hyundai;
	else if(e.value == "기아") var d = kia;
	else if(e.value == "벤츠") var d = benz;
	else if(e.value == "BMW") var d = BMW;
	else if(e.value == "쉐보레") var d = chevolet;
	else if(e.value == "르노삼성") var d = samsung;
	else if(e.value == "쌍용") var d = ssang;
	else if(e.value == "아우디") var d = audi;
	else if(e.value == "제네시스") var d = gene;
	else if(e.value == "미니") var d = mini;
	else if(e.value == "랜드로버") var d = land;
	else if(e.value == "포드") var d = ford;
	else if(e.value == "폭스바겐") var d = volks;
	target.options.length = 0;

	for (x in d) {
		var opt = document.createElement("option");
		opt.value = d[x];
		opt.innerHTML = d[x];
		target.appendChild(opt);
	}

	var hyundai_t = ['스타일', '벨류 플러스', '케어플러스', '스마트', '모던 베이직','모던',
	               '프리미엄', '프리미엄스페셜',
	               '익스클루시브', '익스클루시브 스페셜', '셀러브리티',
	               '프레스티지', '인스퍼레이션'];
    var kia_t = ['럭셔리', '스탠다드', '레이디', '트립', '트렌디', '디럭스', '스마트', '캠핑카', '기본형', 'L', 'LX',
               '프레스티지', '스타일 에디션', 'X 에디션', '스페셜 에디션', '리미티드', 'W 스페셜', 'GL', 'GX', '플래티넘', '이그제큐티브', '고급형',
               '노블레스', '스포츠', '베스트 셀렉션', '파크', '프레지던트', '스페셜', 'VIP', '마스터즈', 'GLX',
               '퀸텀', '시그니처', '프리미엄', '프라임', 'GT Line', '마스터', 'RVIP', '월드컵 에디션'];
    var benz_t = ['기본', '아방가르드', '익스클루시브'];
    var BMW_t = ['조이 퍼스트 에디션','G20', 'M스포츠 F40','M스포츠 G20',
               '스포츠 F40','럭셔리 G20','럭셔리 플러스 G30','M 스포츠 G30','M스포츠 G12','M 스포츠 G02',' M 스포츠 F48','M스포츠 G05','M 스포츠 G06','M 스포츠 G11','M 스포츠 F33','F12 F06','F02','M스포츠 F01','스포츠 라인 F32','솔 플러스', 'M스포츠 F32',
               'M 스포츠 G20','M 스포츠 플러스 G30','M 스포츠 G12','인디비주얼 F02','럭셔리 LP F36','럭셔리 플러스 F10',
               'M 스포츠 퍼스트 F40','M 스포츠 블랙 수트 G20','M 스포츠 25주년 에디션','인디비주얼 G12','익스클루시브','M스포츠 G20','M 에어로 다이나믹'];
    var samsung_t = ['PE', 'SE', 'SE 플러스', 'D', 'D프리미엄',  'SE 블랙', 'SE 플레져', '클래식',
                   '인텐스', 'LE', 'LE 플러스', 'LE 익스클루시브',
                   'RE', 'RE 시그니처',
                   'Premiere', '프레스티지'];
    var ssang_t = ['일반형', '고급형', '최고급형'];
    var audi_t = ['기본형', '엔트리', '스포트라인', '다이나믹',
                '프레스티지', '프리미엄', '리미티드',
                'S-LINE',
                '쿠페', '카브리올레', '스포츠', '스파이더'];
    var gene_t = ['2.0', '2.0T', '2.2', '2.5', '2.5T',
                '3.0', '3.3', '3.3T', '3.5', '3.5T',
                '3.8', '5.0', '3.3 프레스티지', '3.3T 스포츠', '3.3 프리미엄 럭셔리', '3.3T 프리미엄 럭셔리', '3.8 럭셔리', '3.8 프리미엄 럭셔리',
                '3.8 프레스티지', '5.0 리무진', '5.0 프레스티지'];
    var mini_t = ['STANDARD','MID','HIGH'];
    var land_t = ['스탠다드', '다이나믹', '프리스테지'];
    var ford_t = ['스탠다드', '리미티드'];
    var volks_t = ['기본','컴포트','프리미엄','프레스티지'];
    var chevolet_t = ['코치','SE','팝','LS','LS','디럭스','5.3','SS 3.6 V8','익스트림',
                    '판넬밴','SX','X','재즈','LT','SLT','밴','패션','6','SS 6.2 V8','다이나믹레드','어드벤처패키지','익스트림-X','익스트림-X스포츠바',
                    'CDX','그루브','LTZ','RS','다이나믹','Z71-X','LTZ+','ACTIV',
                    'PREMIER','레드라인','퍼펙트블랙','마이핏에디션','스페셜','플래티넘패키지','최고급형','미드나이트블랙','Z71-X미드나잇','프리미엄'];
	var target_t = document.getElementById("trim");

	if(e.value == "현대") var d = hyundai_t;
	else if(e.value == "기아") var d = kia_t;
	else if(e.value == "벤츠") var d = benz_t;
	else if(e.value == "BMW") var d = BMW_t;
	else if(e.value == "르노삼성") var d = samsung_t;
	else if(e.value == "쌍용") var d = ssang_t;
	else if(e.value == "아우디") var d = audi_t;
	else if(e.value == "제네시스") var d = gene_t;
	else if(e.value == "미니") var d = mini_t;
	else if(e.value == "랜드로버") var d = land_t;
	else if(e.value == "쉐보레") var d = chevolet_t;
	else if(e.value == "포드") var d = ford_t;
	else if(e.value == "폭스바겐") var d = volks_t;


	target_t.options.length = 0;

	for (x in d) {
		var opt = document.createElement("option");
		opt.value = d[x];
		opt.innerHTML = d[x];
		target_t.appendChild(opt);
	}
}

