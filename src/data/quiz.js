const quiz = [
  {
    count: "01",
    genre: "",
    question:
      "'당신'과 '브라운관'의 합성어로 google이 현재까지도 운영하는 동영상 공유 서비스 사이트의 이름은 무엇인가요?",
    multiple_choice_view1: "afreecaTV(아프리카TV)",
    multiple_choice_view2: "YouTube(유튜브)",
    multiple_choice_view3: "Twitch(트위치)",
    correct: "YouTube(유튜브)",
  },
  {
    count: "02",
    genre: "",
    question:
      "인조반정으로 폐위된 조선의 제 15대 왕으로 임진왜란 이후 부국강병의 기틀을 다졌습니다. 이 조선의 왕은 누구인가요?",
    multiple_choice_view1: "광해군",
    multiple_choice_view2: "연산군",
    multiple_choice_view3: "인조",
    correct: "광해군",
  },
  {
    count: "03",
    genre: "",
    question:
      "독일의 철학자 '니체'의 운명관을 나타내는 용어인 이것은 자신의 운명을 사랑하라는 의미로 가수 '김연자'가 부르는 노래제목이기도 한 이 용어는 무엇인가요?",
    multiple_choice_view1: "디너파티",
    multiple_choice_view2: "댄스파티",
    multiple_choice_view3: "아모르파티",
    correct: "아모르파티",
  },
  {
    count: "04",
    genre: "",
    question:
      "미국 제32대 대통령 'F.D.루스벨트'의 지도아래 대공항 극복을 위하여 추진하였던 이 제반 정책은 무엇인가요?",
    multiple_choice_view1: "뉴딜(New Deal)",
    multiple_choice_view2: "뉴브랜다이스(New Brandeis)",
    multiple_choice_view3: "티파티(Tea Party)",
    correct: "뉴딜(New Deal)",
  },
  {
    count: "05",
    genre: "",
    question:
      "기업이 임직원에게 일정수량의 자기 회사의 주식을 일정한 가격으로 매수할 수 있는 권리를 부여하는 제도는 무엇인가요?",
    multiple_choice_view1: "마진 콜(Margin Call)",
    multiple_choice_view2: "스톡 옵션(Stock Option)",
    multiple_choice_view3: "블루 칩 스톡(Blue Chip Stocks)",
    correct: "스톡 옵션(Stock Option)",
  },
  {
    count: "06",
    genre: "",
    question:
      "밤에 잠을 충분히 잤어도 낮에 갑자기 졸음이 빠져드는 증세, 낮에 이유없이 졸리고 무기력감을 느끼는 증세는 무엇인가요?",
    multiple_choice_view1: "기면증",
    multiple_choice_view2: "불면증",
    multiple_choice_view3: "식곤증",
    correct: "기면증",
  },
  {
    count: "07",
    genre: "",
    question:
      "인슐린의 분비량이 부족하거나 정상적인 기능이 이루어지지 않는 등의 대사질환의 일종으로 혈중 포도당 농도가 높은것이 특징인 이 질환은 무엇인가요?",
    multiple_choice_view1: "정신병",
    multiple_choice_view2: "도벽병",
    multiple_choice_view3: "당뇨병",
    correct: "당뇨병",
  },
  {
    count: "08",
    genre: "",
    question:
      "목의 한가운데에서 앞으로 튀어나온 물렁뼈의 아래쪽 기도의 주위를 감싸고 있는 날개를 편 나비모양의 내분비선인 이 조직의 이름은 무엇인가요?",
    multiple_choice_view1: "갑상선",
    multiple_choice_view2: "설편도",
    multiple_choice_view3: "구개편도",
    correct: "갑상선",
  },
  {
    count: "09",
    genre: "",
    question:
      "일정 기간 동안 사용한 전력의 양을 전력량이라고 한다, 다음 중 우리가 실생활에서 전기료를 측정하는 데 사용하는 전력량의 단위는 무엇인가요?",
    multiple_choice_view1: "Wh(와트아워)",
    multiple_choice_view2: "A(암페어)",
    multiple_choice_view3: "AV(암페어볼트)",
    correct: "Wh(와트아워)",
  },
  {
    count: "10",
    genre: "",
    question:
      "조선시대 조정에서 일본에 보낸 사신을 '통신사'라고 명했었습니다, 그렇다면 조선이 중국 베이징에 보냈던 외교사절의 이름은 무엇일까요?",
    multiple_choice_view1: "비변사",
    multiple_choice_view2: "수신사",
    multiple_choice_view3: "연행사",
    correct: "연행사",
  },
  {
    count: "11",
    genre: "",
    question: "세계 최초로 안락사를 합법화한 국가는 어디일까요?",
    multiple_choice_view1: "미국",
    multiple_choice_view2: "스위스",
    multiple_choice_view3: "네덜란드",
    correct: "네덜란드",
  },
  {
    count: "12",
    genre: "",
    question:
      "처음에는 점원이나 비서직에 종사하는 여성들을 뜻하였으나 현재는 가정의 생계를 위하여 사회로 진출하는 주부 전체를 의미하는 이 용어는 무엇인가요?",
    multiple_choice_view1: "화이트칼라",
    multiple_choice_view2: "핑크칼라",
    multiple_choice_view3: "그레이칼라",
    correct: "핑크칼라",
  },
  {
    count: "13",
    genre: "",
    question:
      "근로기준법에서 모성 보호에 관련된 내용중 '여성'과 '18세 미만자'에게 시킬 수 없는 업무는 무엇인가요?",
    multiple_choice_view1: "생산 관리, 감독 업무",
    multiple_choice_view2: "갱 내 근로 업무",
    multiple_choice_view3: "학술 연구 조사 업무",
    correct: "갱 내 근로 업무",
  },
  {
    count: "14",
    genre: "",
    question:
      "대기층에서 더운 공기로 인해 그 아래로 찬 공기가 누적되는 현상을 무엇이라고 하나요?",
    multiple_choice_view1: "스모그 현상",
    multiple_choice_view2: "역전층 현상",
    multiple_choice_view3: "푄 현상",
    correct: "역전층 현상",
  },
  {
    count: "15",
    genre: "",
    question: "리콜제도에 대한 설명으로 적절하지 않은 것은 무엇인가요?",
    multiple_choice_view1: "적극적 소비자 보호 제도",
    multiple_choice_view2: "피해 재발 방지",
    multiple_choice_view3: "손해 배상 책임 제도",
    correct: "손해 배상 책임 제도",
  },
  {
    count: "16",
    genre: "",
    question:
      "조국의 이익을 위해서는 수단과 방법을 가리지 않으며 국제 정의조차 부정하는 맹목적 애국주의를 뜻하는 말은 무엇인가요?",
    multiple_choice_view1: "니헐리즘",
    multiple_choice_view2: "쇼비니즘",
    multiple_choice_view3: "페시미즘",
    correct: "쇼비니즘",
  },
  {
    count: "17",
    genre: "",
    question:
      "현대인들의 기호식품 가운데 신경조직이나 심장 근육을 자극하여 피로를 일으키는 것으로 '커피', '홍차', '각종 드링크제'에 들어있는 중독성 물질은 무엇일까요?",
    multiple_choice_view1: "암페타민",
    multiple_choice_view2: "니코틴",
    multiple_choice_view3: "카페인",
    correct: "카페인",
  },
  {
    count: "18",
    genre: "",
    question:
      "우리나라는 여름에는 '남동풍'이 불고 겨울에는 '북서풍'이 주로 붑니다, 이렇게 1년을 주기로 반복되는 바람을 무엇이라고 부르나요?",
    multiple_choice_view1: "계절풍",
    multiple_choice_view2: "산곡풍",
    multiple_choice_view3: "해륙풍",
    correct: "계절풍",
  },
  {
    count: "19",
    genre: "",
    question: "다음 중 식물이 아닌 것은 무엇일까요?",
    multiple_choice_view1: "동충하초",
    multiple_choice_view2: "두릅",
    multiple_choice_view3: "미더덕",
    correct: "미더덕",
  },
  {
    count: "20",
    genre: "",
    question:
      "스프레이 방식으로 만들어진 페인트의 경우 스프레이통 안에서 구슬이 들어 있어 흔들면 소리가 납니다, 스프레이 통 안에 구슬을 넣는 이유는 무엇일까요?",
    multiple_choice_view1: "잘 섞이라고",
    multiple_choice_view2: "폭발방지 작용",
    multiple_choice_view3: "남은 양 측정",
    correct: "잘 섞이라고",
  },
  {
    count: "21",
    genre: "",
    question:
      "유교의 도덕적 사상에서 기본이 되는 3가지의 강령과 5가지의 인륜은 무엇이라고 하나요?",
    multiple_choice_view1: "삼강오륜",
    multiple_choice_view2: "삼천리",
    multiple_choice_view3: "삼한사온",
    correct: "삼강오륜",
  },
  {
    count: "22",
    genre: "",
    question:
      "그리스 신화에서 나오는 타이탄족 이아페토스의 아들이며 '먼저 생각하는 사람' 이라는 뜻의 이름인 인물은 누구일까요?",
    multiple_choice_view1: "헤라클레스",
    multiple_choice_view2: "아테나",
    multiple_choice_view3: "프로메테우스",
    correct: "프로메테우스",
  },
  {
    count: "23",
    genre: "",
    question:
      "한 입 크기로 만든 중국의 만두로 3,000년 전 중국 남부 광동지방에서 만들어 먹기 시작한 이 음식의 이름은 무엇일까요?",
    multiple_choice_view1: "딤채",
    multiple_choice_view2: "딤섬",
    multiple_choice_view3: "딤딤",
    correct: "딤섬",
  },
  {
    count: "24",
    genre: "",
    question:
      "1627년(인조) 만주에 본거를 둔 후금의 침입으로 일어난 조선과 후금 사이의 전쟁은 무엇일까요?",
    multiple_choice_view1: "정묘호란",
    multiple_choice_view2: "임진왜란",
    multiple_choice_view3: "병인양요",
    correct: "정묘호란",
  },
  {
    count: "25",
    genre: "",
    question:
      "노벨상 분야는 총6개로 '생리의학상', '물리학상', '화학상', '문학상', '경제학상', 그리고 나머지 ○○○이 있습니다, 이것은 무엇일까요?",
    multiple_choice_view1: "대상",
    multiple_choice_view2: "평화상",
    multiple_choice_view3: "개근상",
    correct: "평화상",
  },
  {
    count: "26",
    genre: "",
    question:
      "용액의 산성, 염기성을 판단하는데 쓰이는 종이의 이름으로 산성은 붉은색, 염기성은 푸른색을 띠우는 이 종이의 이름은?",
    multiple_choice_view1: "리트머스 종이",
    multiple_choice_view2: "프링글스 종이",
    multiple_choice_view3: "리트리버 종이",
    correct: "리트머스 종이",
  },
  {
    count: "27",
    genre: "",
    question:
      "신축 건물안에서 거주자들이 느끼는 건강상 문제 및 불쾌감을 이르는 이 용어의 정확한 명칭은 무엇일까요?",
    multiple_choice_view1: "새집증후군",
    multiple_choice_view2: "헌집증후군",
    multiple_choice_view3: "신축증후군",
    correct: "새집증후군",
  },
  {
    count: "28",
    genre: "",
    question:
      "눈 앞에 먼지나 벌레같은 무언가가 떠다니는 것처럼 느끼는 증상이며, 시선위치에 따라 따라다니기도 하는 이 증상은 무엇일까요?",
    multiple_choice_view1: "비염증",
    multiple_choice_view2: "비문증",
    multiple_choice_view3: "안구건조증",
    correct: "비문증",
  },
  {
    count: "29",
    genre: "",
    question:
      "전설에 나오는 신령스러운 새이며 죽음과 부활을 반복하여 불사조라고도 불리는 이 전설의 새는 무엇일까요?",
    multiple_choice_view1: "주작",
    multiple_choice_view2: "피닉스",
    multiple_choice_view3: "호아킨 피닉스",
    correct: "피닉스",
  },
  {
    count: "30",
    genre: "",
    question:
      "이탈리아 베네치아 시내에 있는 운하를 운항하는 배로 이탈리아 말로 '흔들리다'라는 뜻의 이것은 무엇일까요?",
    multiple_choice_view1: "아망떼(amante)",
    multiple_choice_view2: "곤도라(gondola)",
    multiple_choice_view3: "피오꼬(fioco)",
    correct: "곤도라(gondola)",
  },
];

export default quiz;
