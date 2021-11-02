function categoryChange(e) {
	var hyundai = ['그랜저', '쏘나타', '아반떼', '스타렉스', '싼타페', '제네시스', '투싼', '에쿠스', '크루즈', '코나', 'i3', '팰리세이드', '엑센트', '벨로스터', '쿠페', 'i40', '아슬란', '아이오닉', '갤로퍼', '쏠라티', '베뉴', '테라칸', '스타리아', '베르나', 'X4', '클릭', '투스카니', '넥쏘', '트라제', '다이너스티', '포니투', '레이', '마르샤', '티뷰론', '스텔라', '아토스', '뉴엘란트라', '라비타', '엑셀', '프레스토'];
    var kia = ['카니발', 'K7', '모닝', 'K5', '레이', '쏘렌토', '스포티지', 'K3', 'K9', '모하비', '스팅어', '카렌스', '오피러스', '프라이드', '쏘울', '니로', '셀토스', '포르테', '스토닉', '로체', 'K8', '쎄라토', '엔터프라이즈', '프레지오', '뉴포텐샤', '옵티마', '레토나', '엘란', '포텐샤', '세피아', '크레도스', '타우너', '봉고', '스펙트라', '비스토', '리갈', '아벨라'];
    var benz = ['E-클래스', 'S-클래스', 'C-클래스', 'LS', '57', 'CLA-클래스', 'GLA-클래스', 'A-클래스 W176', 'A-클래스 W177', 'G-클래스', 'GT', 'M-클래스', 'SLK-클래스', 'GLK-클래스', 'B-클래스 W246', '스프린터', 'B-클래스 W245', 'EQC', 'SL-클래스', 'CL-클래스', 'X2', 'V-클래스', 'CLK-클래스', 'SEL/SEC', 'GL-클래스', 'R-클래스', '208', '기타', 'A-클래스 W169'];
    var BMW = ['5시리즈', '3시리즈', '7시리즈', 'X5', 'X6', '4시리즈', '1시리즈', 'X3', 'X4', '6시리즈', 'X1', '2시리즈', 'M5', 'Z4', 'X7', 'M4', 'M3', 'M2', 'i3', 'M6', 'i8', '8시리즈', 'X2', 'M8', 'Z3', '1M'];
    var chevolet = ['스파크', '말리부', '크루즈', '올란도', '트랙스', '다마스', '라보', '마티즈', '알페온', '라세티', '임팔라', '레이', '캡티바', '윈스톰', '콜로라도', '토스카', '아베오', '트래버스', '볼트', '카마로', '이쿼녹스', '베리타스', '젠트라', '티코', '프린스', '매그너스', '스테이츠맨', '뉴프린스', '아카디아', 'G2X', '칼로스', '레조', '익스프레스밴', '콜벳', '서버밴', '실버라도', '체비밴', '기타', '아스트로밴', '콜로라도', '레이', 'S-10', '아발란치'];
    var samsung = ['SM5', 'SM6', 'SM3', 'SM7', '클리오', '마스터', '트위지', '캡처', '조에'];
    var ssang = ['티볼리', '코란도', '렉스턴', '체어맨', '액티언', '로디우스', '카이런', '무쏘 스포츠', '이스타나', '무쏘 밴', '무쏘'];
    var audi = ['A6', 'A4', 'A7', 'A8', 'Q5', 'A5', 'Q7', '뉴 A3', 'Q3', 'S7', 'TT', 'R8', 'Q8', 'S6', 'S5', 'e-트론', 'S8', 'R8 (4S)', 'S3', 'S4', 'A1', 'Q2', '올로드 콰트로'];
    var gene = ['G80', 'EQ900', 'G70', 'G90', 'GV80', 'GV70'];
    var mini = ['쿠퍼', '로드스터', '원', '로버 미니'];
    var land = ['레인지로버', '디스커버리', '프리랜더', '디펜더'];
    var ford = ['익스플로러', '머스탱', '토러스', 'F150', '몬데오', '포커스', '이스케이프', '퓨전', 'E-Series', 'F350', '쿠가', '익스페디션', '레인저', '파이브', 'S-MAX', '트랜짓'];
    var volks = ['티구안', '골프', '폴로', 'GT', '투아렉 블루모션', '아테온', '파사트', '페이톤', '제타','골프 블루모션', '뉴 CC 블루모션', '비틀', 'CC', '제타 블루모션', '뉴 CC', '시로코', '티록','투아렉', 'CC 블루모션'];

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

