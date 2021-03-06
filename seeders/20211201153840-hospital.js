/* eslint-disable */
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("hospitals", [
      {
        region: "서울",
        name: "강북삼성병원",
        homepage: "https://www.kbsmc.co.kr/",
        phone: "1599-8114",
        address: "서울특별시 종로구 새문안로 29",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "서울",
        name: "건국대학교병원",
        homepage: "http://www.kuh.ac.kr/",
        phone: "1588-1533",
        address: "서울특별시 광진구 능동로 120-1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "서울",
        name: "경희대학교병원",
        homepage: "https://www.khmc.or.kr/kr/main.do",
        phone: "02-958-8114",
        address: "서울특별시 동대문구 경희대로 23",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "서울",
        name: "고려대학교구로병원",
        homepage: "http://guro.kumc.or.kr",
        phone: "02-2626-1114",
        address: "서울시 구로구 구로동로 148",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "서울",
        name: "삼성서울병원",
        homepage: "http://www.samsunghospital.com/",
        phone: "1599-3114",
        address: "서울특별시 강남구 일원로 81",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "서울",
        name: "서울대학교병원",
        homepage: "https://www.snuh.org/",
        phone: "1588-5700",
        address: "서울특별시 종로구 대학로 101",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "서울",
        name: "강남세브란스병원",
        homepage: "https://gs.severance.healthcare/",
        phone: "1599-6114",
        address: "서울특별시 강남구 언주로 211",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "서울",
        name: "이대목동병원",
        homepage: "https://mokdong.eumc.ac.kr/",
        phone: "1666-5000",
        address: "서울특별시 양천구 안양천로",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "서울",
        name: "서울아산병원",
        homepage: "https://www.amc.seoul.kr/asan/",
        phone: "1688-7575",
        address: "서울특별시 송파구 올림픽로 43길 88",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "서울",
        name: "중앙대학교병원",
        homepage: "http://ch.cauhs.or.kr/",
        phone: "1800-1114",
        address: "서울특별시 동작구 흑석로 102",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "서울",
        name: "고려대학교안암병원",
        homepage: "http://anam.kumc.or.kr/",
        phone: "1577-0083",
        address: "서울시 성북구 고려대로 73",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "서울",
        name: "가톨릭대학교 서울성모병원",
        homepage: "https://www.cmcseoul.or.kr/",
        phone: "1588-1511",
        address: "서울시 서초구 반포대로 222",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "서울",
        name: "세브란스병원",
        homepage: "https://sev.severance.healthcare/",
        phone: "1599-1004",
        address: "서울특별시 서대문구 연세로 50-1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "서울",
        name: "한양대학교병원",
        homepage: "https://seoul.hyumc.com/",
        phone: "02-2290-8114",
        address: "서울특별시 성동구 왕십리로 222-1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "경기 서북부",
        name: "가톨릭대학교 인천성모병원",
        homepage: "https://www.cmcism.or.kr/",
        phone: "1544-9004",
        address: "인천광역시 부평구 동수로 56",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "경기 서북부",
        name: "가천대 길병원",
        homepage: "https://www.gilhospital.com/web/www/home",
        phone: "1577-2299",
        address: "인천광역시 남동구 남동대로 774번길 21",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "경기 서북부",
        name: "인하대병원",
        homepage: "https://www.inha.com/page/main",
        phone: "1600-8114",
        address: "인천광역시 중구 인항로 27",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "경기 서북부",
        name: "순천향대학교 부속 부천병원",
        homepage: "https://www.schmc.ac.kr/bucheon/index.do",
        phone: "032-621-5114",
        address: "경기도 부천시 조마루로 170",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "경기 남부",
        name: "고려대학교안산병원",
        homepage: "http://ansan.kumc.or.kr/main/index.do",
        phone: "1577-7516",
        address: "경기도 안산시 단원구 적금로 123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "경기 남부",
        name: "분당서울대학교병원",
        homepage: "https://www.snubh.org/index.do",
        phone: "1588-3369",
        address: "경기도 성남시 분당구 구미로173번길 82",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "경기 남부",
        name: "아주대학교병원",
        homepage: "http://hosp.ajoumc.or.kr/index.aspx",
        phone: "1688-6114",
        address: "경기도 수원시 영통구 월드컵로 164",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "경기 남부",
        name: "한림대학교성심병원",
        homepage: "https://hallym.hallym.or.kr/",
        phone: "031-380-1500",
        address: "경기도 안양시 동안구 관평로170번길 22",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "강원",
        name: "원주세브란스기독병원",
        homepage: "https://www.ywmc.or.kr/web/www/home",
        phone: "033-741-0114",
        address: "강원도 원주시 일산로 20",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "강원",
        name: "강릉아산병원",
        homepage: "http://www.gnah.co.kr/kor/Main.do",
        phone: "033-610-3114",
        address: "강원도 강릉시 사천면 방동길 38",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "충북",
        name: "충북대학교병원",
        homepage: "https://www.cbnuh.or.kr/",
        phone: "043-269-6114",
        address: "충북 청주시 서원구 1순환로 776",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "충남",
        name: "단국대학교병원",
        homepage: "https://www.dkuh.co.kr/html_2016/",
        phone: "1588-0063",
        address: "충남 천안시 동남구 망향로 201",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "충남",
        name: "충남대학교병원",
        homepage: "https://www.cnuh.co.kr/",
        phone: "1599-7123",
        address: "대전광역시 중구 문화로 282",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "충남",
        name: "순청향대학교 부속 천안병원",
        homepage: "https://www.schmc.ac.kr/cheonan/index.do",
        phone: "041-570-2114",
        address: "충청남도 천안시 동남구 순천향6길 31",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "전북",
        name: "원광대학교병원",
        homepage: "https://www.wkuh.org/main/main.do",
        phone: "1577-3773",
        address: "전북 익산시 무왕로 895",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "전북",
        name: "전북대학교병원",
        homepage: "https://www.jbuh.co.kr/cuh/main/",
        phone: "1577-7877",
        address: "전북 전주시 덕진구 건지로 20",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "전남",
        name: "전남대학교병원",
        homepage: "https://www.cnuh.com/main.cs",
        phone: "1899-0000",
        address: "광주 동구 제봉로 42",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "전남",
        name: "조선대학교병원",
        homepage: "https://hosp.chosun.ac.kr/",
        phone: "1811-7474",
        address: "광주광역시 동구 필문대로 365",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "전남",
        name: "화순전남대학교병원",
        homepage: "https://www.cnuhh.com/main.cs",
        phone: "1899-0000",
        address: "전남 화순군 화순읍 서양로 322",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "경북",
        name: "경북대학교병원",
        homepage: "https://www.knuh.kr/index.asp",
        phone: "1666-5114",
        address: "대구광역시 중구 동덕로 130",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "경북",
        name: "계명대학교 동산병원",
        homepage: "https://dongsan.dsmc.or.kr:49870/",
        phone: "1577-6622",
        address: "대구광역시 달서구 달구벌대로 1035",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "경북",
        name: "대구가톨릭대학교병원",
        homepage: "https://www.dcmc.co.kr/index.asp",
        phone: "1688-0077",
        address: "대구광역시 남구 두류공원로 17길 33",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "경북",
        name: "영남대학교병원",
        homepage: "https://yumc.ac.kr:8443/yumc/index.do",
        phone: "1522-3114",
        address: "대구광역시 남구 현충로 170",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "경북",
        name: "칠곡경북대학교병원",
        homepage: "https://www.knuch.kr:442/index.asp",
        phone: "053-200-2114",
        address: "대구광역시 북구 호국로 807",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "경남 동부",
        name: "인제대학교부산백병원",
        homepage: "http://www.paik.ac.kr/busan/#",
        phone: "051-890-6114",
        address: "부산광역시 부산진구 복지로 75",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "경남 동부",
        name: "동아대학교병원",
        homepage: "https://www.damc.or.kr/main/main_2017.php",
        phone: "051-240-2000",
        address: "부산광역시 서구 대신공원로 26",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "경남 동부",
        name: "부산대학교병원",
        homepage: "https://www.pnuh.or.kr/pnuh/main/main.do?rbsIdx=1#none",
        phone: "051-240-7000",
        address: "부산광역시 서구 구덕로 179",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "경남 동부",
        name: "양산부산대학교병원",
        homepage: "https://www.pnuyh.or.kr/pnuh/main/main.do?rbsIdx=1",
        phone: "1577-7512",
        address: "경상남도 양산시 물금읍 금오로 20",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "경남 동부",
        name: "울산대학교병원",
        homepage: "http://www.uuh.ulsan.kr/",
        phone: "052-250-7000",
        address: "울산광역시 동구 방어진순환도로 877",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "경남 서부",
        name: "경상국립대학교병원",
        homepage: "https://www.gnuh.co.kr/",
        phone: "055-750-8000",
        address: "경상남도 진주시 강남로 79",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        region: "경남 서부",
        name: "삼성창원병원",
        homepage: "https://smc.skku.edu:442/",
        phone: "055-233-8899",
        address: "경상남도 창원시 마산회원구 팔용로 158",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("hospitals", null, {});
  },
};
