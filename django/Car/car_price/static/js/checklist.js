        $(function() {
    $('#select1').change(function() {

    var hyundai = ['그랜저', '쏘나타', '아반떼', '스타렉스', '싼타페', '제네시스', '투싼', '에쿠스', '크루즈', '코나', 'i3', '팰리세이드', '엑센트', '벨로스터', '쿠페', 'i40', '아슬란', '아이오닉', '갤로퍼', '쏠라티', '베뉴', '테라칸', '스타리아', '베르나', 'X4', '클릭', '투스카니', '넥쏘', '트라제', '다이너스티', '포니투', '레이', '마르샤', '티뷰론', '스텔라', '아토스', '뉴엘란트라', '라비타', '엑셀', '프레스토'];
    var kia = ['카니발', 'K7', '모닝', 'K5', '레이', '쏘렌토', '스포티지', 'K3', 'K9', '모하비', '스팅어', '카렌스', '오피러스', '프라이드', '쏘울', '니로', '셀토스', '포르테', '스토닉', '로체', 'K8', '쎄라토', '엔터프라이즈', '프레지오', '뉴포텐샤', '옵티마', '레토나', '엘란', '포텐샤', '세피아', '크레도스', '타우너', '봉고', '스펙트라', '비스토', '리갈', '아벨라'];
    var benz = ['E-클래스', 'S-클래스', 'C-클래스', 'LS', '57', 'CLA-클래스', 'GLA-클래스', 'A-클래스 W176', 'A-클래스 W177', 'G-클래스', 'GT', 'M-클래스', 'SLK-클래스', 'GLK-클래스', 'B-클래스 W246', '스프린터', 'B-클래스 W245', 'EQC', 'SL-클래스', 'CL-클래스', 'X2', 'V-클래스', 'CLK-클래스', 'SEL/SEC', 'GL-클래스', 'R-클래스', '208', '기타', 'A-클래스 W169'];
    var BMW = ['5시리즈', '3시리즈', '7시리즈', 'X5', 'X6', '4시리즈', '1시리즈', 'X3', 'X4', '6시리즈', 'X1', '2시리즈', 'M5', 'Z4', 'X7', 'M4', 'M3', 'M2', 'i3', 'M6', 'i8', '8시리즈', 'X2', 'M8', 'Z3', '1M'];
    var gm = ['스파크', '말리부', '크루즈', '올란도', '트랙스', '다마스', '라보', '마티즈', '알페온', '라세티', '임팔라', '레이', '캡티바', '윈스톰', '콜로라도', '토스카', '아베오', '트래버스', '볼트', '카마로', '이쿼녹스', '베리타스', '젠트라', '티코', '프린스', '매그너스', '스테이츠맨', '뉴프린스', '아카디아', 'G2X', '칼로스', '레조'];
    var samsung = ['SM5', 'SM6', 'SM3', 'SM7', '클리오', '마스터', '트위지', '캡처', '조에'];
    var ssang = ['티볼리', '코란도', '렉스턴', '체어맨', '액티언', '로디우스', '카이런', '무쏘 스포츠', '이스타나', '무쏘 밴', '무쏘'];
    var audi = ['A6', 'A4', 'A7', 'A8', 'Q5', 'A5', 'Q7', '뉴 A3', 'Q3', 'S7', 'TT', 'R8', 'Q8', 'S6', 'S5', 'e-트론', 'S8', 'R8 (4S)', 'S3', 'S4', 'A1', 'Q2', '올로드 콰트로'];
    var gene = ['G80', 'EQ900', 'G70', 'G90', 'GV80', 'GV70'];
    var volfs = ['티구안', '골프', '파사트', '제타', '뉴 CC', '아테온', '폴로', '비틀', '투아렉', '페이톤', '시로코', 'CC', 'GT', '티록', 'EOS', '보라', '벤토'];
    var mini = ['쿠퍼', '로드스터', '원', '로버 미니'];
    var land = ['레인지로버', '디스커버리', '프리랜더', '디펜더'];
    var porche = ['파나메라', '카이엔', '박스터', '911', '마칸', '카이맨', '타이칸'];
    var ford = ['익스플로러', '머스탱', '토러스', 'F150', '몬데오', '포커스', '이스케이프', '퓨전', 'E-Series', 'F350', '쿠가', '익스페디션', '레인저', '파이브', 'S-MAX', '트랜짓'];
    var jaguar = ['XF', 'XJ', 'XE', 'X2', 'F-PACE', 'F-TYPE', 'E-PACE', 'X-TYPE', 'S-TYPE', 'XK', 'I-PACE', '다임러'];
    var jeep = ['체로키', '랭글러', '컴패스', '레니게이드', '글래디에이터', '커맨더'];
    var volvo = ['XC60', 'S6', 'XC90', 'V40', 'S8', 'S90', 'V60', 'V90', 'C70', 'C3', 'C4', 'S4', 'V50', '960'];
    var lexus = ['S3', 'X3', '200', 'LS', 'IS250', 'X4', '500', 'S4', 'X2', 'GS250', 'C4', 'LC', 'IS F', 'RC F', 'LX'];
    var mace = ['기블리', '포르테', '르반떼', '그란투리스모', '그란카브리오', '스파이더', '쿠페'];
    var pujot = ['200', '3008', '508', '308', '207', '208', '500', '206', '407', '307', 'RCZ', '607', '1007'];
    var lincoln = ['MKZ', 'MKX', 'MKS', '컨티넨탈', 'MKC', '에비에이터', '네비게이터', '코세어', '노틸러스', 'MKT', '타운카', 'LS'];
    var infi = ['Q5', 'X3', 'G37', 'M3', 'Q3', 'Q7', 'G35', 'X5', 'X6', 'G25', 'X7', 'M5', 'X4', 'QX80', 'Q45'];
    var toyo = ['캠리', '프리우스', '시에나', 'RAV4', '아발론', '86', '툰드라', '수프라', '벤자', '아이고', 'FJ 크루져', 'bB', '타코마', 'MR-S', 'WiLL', '알파드', '파쏘', '하이에이스', '프리비아', '알테자', '셀리카', '하이랜더', '4Runner'];
    var cadilac = ['레이', 'CTS', 'CT6', 'ATS', 'XT5', 'DTS', 'STS', 'SRX', 'CT4', 'CT5', '드빌', 'XT6', 'XTS', 'LS', '컨코어'];
    var honda = ['어코드', '오딧세이', '시빅', 'CR-V', '파일럿', 'S6', '레전드', 'HR-V', 'N-ONE', '인사이트', '리지라인', 'Fit', 'N-BOX', '프렐류드', '크로스투어', '델솔'];
    var nissan = ['알티마', '큐브', '쥬크', '패스파인더', '맥시마', '캐시카이', '무라노', '370Z', '리프', '엑스트레일', '마치', '로그', '350Z', '프론티어', 'GT', '알마다', '파오', '버사', '센트라', '스카이라인', '휘가로', '라페스타'];
    var cry = ['300C', '200', 'PT 크루저', '세브링', '퍼시피카', '그랜드 보이저', '크로스파이어', '캐러밴', '프라울러'];
    var chevolet = ['익스프레스밴', '콜벳', '서버밴', '실버라도', '체비밴', '기타', '아스트로밴', '콜로라도', '레이', 'S-10', '아발란치'];
    var bently = ['GT', '플라잉스퍼', '벤테이가', '뮬산'];
    var citro = ['C4', 'S3', 'C5', 'C3', 'S7', 'S4', 'S5'];
    var piat = ['500', '프리몬트'];
    var dodge = ['램픽업', '챌린저', '캘리버', '다코타', '차저', '니트로', '램밴', '듀랑고', '매그넘'];
    var tesla = ['모델 3', '모델 S', '모델 Y', '모델 X'];
    var smart = ['쿠페', '포투 카브리오', '로드스터', '포포'];
    var ferrari = ['488', '캘리포니아', 'C4', 'FF', '458', '포르토피노', '812', '스파이더', '로마', 'F8 트리뷰토', 'SF90', 'F430', '360'];
    var lambo = ['우라칸', '아벤타도르', '가야르도', '우루스'];
    var lols = ['고스트', '레이', '컬리넌', '팬텀', '던'];
var changeItem;
if(this.value == "현대"){
  changeItem = hyundai;
}
else if(this.value == "기아"){
  changeItem = kia;
}
else if(this.value == "벤츠"){
  changeItem =  benz;
}
else if(this.value == "BMW"){
  changeItem =  BMW;
}
else if(this.value == "쉐보레(GM대우)"){
  changeItem =  gm;
}
else if(this.value == "르노삼성"){
  changeItem =  samsung;
}
else if(this.value == "쌍용"){
  changeItem =  ssang;
}
else if(this.value == "아우디"){
  changeItem =  audi;
}
else if(this.value == "제네시스"){
  changeItem =  gene;
}
else if(this.value == "폭스바겐"){
  changeItem =  volfs;
}
else if(this.value == "미니"){
  changeItem =  mini;
}
else if(this.value == "랜드로버"){
  changeItem =  land;
}
else if(this.value == "포르쉐"){
  changeItem =  porche;
}
else if(this.value == "포드"){
  changeItem =  ford;
}
else if(this.value == "재규어"){
  changeItem =  jaguar;
}
else if(this.value == "지프"){
  changeItem =  jeep;
}
else if(this.value == "볼보"){
  changeItem =  volvo;
}
else if(this.value == "렉서스"){
  changeItem =  lexus;
}
else if(this.value == "마세라티"){
  changeItem =  mace;
}
else if(this.value == "푸조"){
  changeItem =  pujot;
}
else if(this.value == "링컨"){
  changeItem =  lincoln;
}
else if(this.value == "인피니티"){
  changeItem =  infi;
}
else if(this.value == "도요타"){
  changeItem =  toyo;
}
else if(this.value == "캐딜락"){
  changeItem =  cadilac;
}
else if(this.value == "혼다"){
  changeItem =  honda;
}
else if(this.value == "닷지"){
  changeItem =  dodge;
}
else if(this.value == "테슬라"){
  changeItem =  tesla;
}
else if(this.value == "스마트"){
  changeItem =  smart;
}
else if(this.value == "페라리"){
  changeItem =  ferrari;
}
else if(this.value == "람보르기니"){
  changeItem =  lambo;
}
else if(this.value == "롤스로이스"){
  changeItem =  lols;
}


<!--alert(changeItem)-->

$('#select2').empty();

for(var count = 0; count < changeItem.length; count++){
                var option = $("<option>"+changeItem[count]+"</option>");
                $('#select2').append(option);
            }

  });

        });