/* eslint-disable */
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("departments", [
      {
        name: "가정의학과",
        description:
          "가정의학과는 성별, 연령, 건강문제 등에 관계없이 가족을 대상으로 포괄적이고 지속적인 의료를 제공합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "결핵과",
        description:
          "결핵과는 내과적인 영역에서 발생하는 결핵감염질환 즉 폐결핵, 결핵성 늑막염, 결핵성 임파선염 등을 진료하고 있습니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "내과",
        description:
          "내과는 신체의 기관에 생긴 병을 외과적 수술에 의존하지 않고 물리 요법이나 약물 등으로 치료합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "소화기내과",
        description:
          "소화기내과에서는 식도, 위, 십이지장, 대장, 간, 담도 및 췌장 등의 장기에 발생하는 각종 질환에 대한 진단과 치료를 시행합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "순환기내과",
        description:
          "순환기내과는 고혈압, 고지혈증, 심부전, 동맥경화증, 협심증, 심근경색, 부정맥 등의 다양한 심장 및 혈관 질환을 다룹니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "호흡기내과",
        description:
          "호흡기내과는 기관지와 폐, 그리고 폐를 둘러싸고 있는 흉막에 발생하는 질환을 진단하고 치료하는 내과의 한 분야입니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "내분비내과",
        description:
          "내분비대사내과는 호르몬 이상, 대사이상, 내분비기관에서 발생하는 종양 등을 진단하고 치료합니다. ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "류마티스내과",
        description:
          "류마티스내과란 인체를 보호하는 면역계의 이상으로 유발되는 자가 면역 질환 및 관절과 관절주위 조직에서 발생하는 근골격계 질환을 다룹니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "감염내과",
        description:
          "감염내과는 미생물에 의해 발생하는 감염질환을 진단하고 치료합니다. 또한 타 진료과에서 발생하는 각종 감염질환 및 항생제 사용에 관한 자문을 시행합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "신장내과",
        description:
          "신장내과는 신장과 비뇨기계의 여러 질환 중 내과적인 치료가 필요한 환자분들을 돌보는 진료과로, 부종, 혈뇨, 단백뇨, 당뇨병과 고혈압으로 인한 신장 질환 등을 진료합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "심장혈관내과",
        description:
          "심장혈관내과는 심혈관계통의 질환을 진단하고 치료하는 내과의 한 영역입니다. 고혈압, 허혈성 심장질환, 선천성 심장질환, 부정맥, 심부전증 등을 다루고 있습니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "혈액종양내과",
        description:
          "혈액종양내과는 위암, 폐암, 대장암, 간암, 유방암, 두경부암 등 다양한 내부장기에 발생한 악성종양에 대한 항암치료를 전문적으로 시행하는 과입니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "마취통증의학과",
        description:
          "마취통증의학과는 수술을 위한 마취, 중환자관리 그리고 통증치료를 다룹니다. 마취통증의학과 의사들의 역할은 크게 수술 시 마취, 중환자관리, 그리고 통증치료의 세가지로 나누어 집니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "비뇨의학과",
        description:
          "비뇨의학과는 콩팥(신장), 요관, 방광, 요도 등 요로계 장기들과 음경, 고환, 정관 및 전립선 등 남성생식과 관련된 장기를 다루는 진료과로서 관련 질환들을 진단하고 주로 수술적인 방법으로 치료합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "방사선종양학과",
        description:
          "방사선종양학과는 방사선을 이용하여 질병을 치료하는 임상 진료과 입니다. 방사선 치료는 수술, 항암화학요법과 더불어 종양 치료의 3대 요법 중의 하나입니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "병리과",
        description:
          "병리과는 최단시간에 정확한 병리학적 진단을 내려 임상의사에게 환자치료에 대한 방향을 결정하는 데 도움을 줍니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "산부인과",
        description:
          "산부인과는 모든 여성의 건강을 위해 임신과 출산에 관련된 질환 및 여성의 생식기관에서 발생하는 모든 질환을 전문적으로 진료합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "소아청소년과",
        description:
          "소아청소년과는 임신부터 청소년기에 이르기까지 어린이의 성장과 발달을 다루는 임상분야로 그 시기의 환자를 대상으로 진료 및 치료방법을 연구합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "신경과",
        description:
          "신경과는 뇌와 척수(중추신경), 말초신경 및 근육에 발생하는 질환을 진단하고 치료하며 신경계 질환의 원인을 규명하고 나은 치료방법을 연구합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "안과",
        description:
          "안과는 눈에 관계된 질환을 연구하고 치료하는 의학의 한 분과로 눈에 발생하는 이상들과 눈 외상에 이르기까지 광범위 한 질환들을 연구하고 치료합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "영상의학과",
        description:
          "영상의학과는 여러 최첨단 장비를 이용하여 환자의 질환을 진단하는 과로서 임상의사들이 환자를 진단하고 치료방침을 결정하는데 중요한 역할을 담당하고 있습니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "외과",
        description:
          "외부에서 물리적 충격에 의해 발생한 상처와 내장 기관의 질병을 수술이나 그와 비슷한 방법으로 치료하는 과로, 신경외과, 흉부외과 등의 전문 분야로 독립한 분야를 제외한 나머지 모든 분야를 말합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "성형외과",
        description:
          "성형외과는 구조적 변형 또는 기형의 수정과 기능적 결함의 교정을 주로 하는 외과의 특수분야로 재건성형과, 미용성형 분야를 포함하고 있습니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "신경외과",
        description:
          "신경외과는 뇌와 척수를 포함한 중추신경계와 말초신경계에서 발생하는 질병을 진단하고 수술적인 방법으로 치료합니다. ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "정형외과",
        description:
          "정형외과는 사지와 척추 그리고 그 부속기관의 형태와 기능을 연구·보존·회복·발전시키며 인체의 조화와 균형을 맞추기 위해 정확함과 정밀함이 강조되는 분야입니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "흉부외과",
        description:
          "흉부외과는 인체의 중심인 흉부에 위치한 심장, 폐, 식도, 대동맥, 종격동, 횡격막, 기관 등의 질환에 대한 수술적 치료를 담당합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "소아외과",
        description:
          "소아외과는 태어나면서 기형이나 장애가 있거나 큰 사고를 당해 수술이 필요한 18세 이하 소아와 청소년에 대한 수술을 담당합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "위장관외과",
        description:
          "위장관외과는 위장관에 발생하는 다양한 질환에 대한 치료 및 연구를 시행하는 외과의 세부전공분야입니다. ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "간담췌외과",
        description:
          "간담췌외과는 간, 담도, 췌장에 발생하는 수술적 치료가 요구되는 각종 양성 및 악성 질환의 진단과 치료를 하는 외과의 분과입니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "대장항문외과",
        description:
          "대장항문외과는 하부 위장관에 발생하는 다양한 질환에 대한 기초 연구와 임상 연구, 그리고 외과적 치료를 시행하는 세부 전공 분야입니다. ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "외상외과",
        description:
          "외상외과는 외상을 전문적으로 다루는 외과의 한 분야로 생명에 심각한 위협을 초래하는 중증외상 환자를 주로 치료합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "혈관외과",
        description:
          "혈관외과에서는 동맥과 정맥의 질환, 선천성 기형, 외상 및 림프관의 질병을 진단하고 외과적으로 치료합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "이식외과",
        description:
          "이식외과는 장기이식을 담당하는 외과의 한 분과로, 환자의 질병을 치료할 때 환자의 몸에 직접 시행하는 수술이나 시술과 같은 외과적 방법으로 치료합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "응급의학과",
        description:
          "응급의학과는 급성질환이나 손상으로 인한 신체의 이상에 대한 응급진료를 전문적으로 담당하며, 생명유지를 위한 신속한 응급처치를 시행합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "이비인후과",
        description:
          "이비인후과는 일반적으로 귀, 코, 목의 질병들을 진료하는 과로 알려져 있지만, 눈 아래에서부터 가슴위까지의 광범위한 부분에 발생한 질병들을 치료하는 과입니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "예방의학과",
        description:
          "예방의학은 건강과 건강과 관련된 인자(위험요인 등)의 분포를 조사하고 그들 사이의 관련성을 통해 건강을 증진하는 것을 목표로 합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "재활의학과",
        description:
          "재활의학과는 질병이나 사고 등으로 인하여 장애가 생긴 사람에게 최대한의 기능회복을 도와주는 의학의 한 분야입니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "정신건강의학과",
        description:
          "정신건강의학과에서는 인체의 가장 중요한 부위인 뇌와 관련된 인간의 감정, 사고 그리고 행동 등 신경·정신기능의 문제를 진단하고 치료합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "직업환경의학과",
        description:
          "직업환경의학과는 작업장 내의 소음, 분진, 중금속, 유기용제 등 유해물질을 이용하는 작업장의 환경 평가와 관리를 담당하며, 이로 인한 직업병 및 작업관련성 질환에 대한 진료합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "피부과",
        description:
          "피부과는 피부진균증, 건선 등의 피부질환은 물론 원형탈모증, 비듬 등의 모발과 두피에 발생하는 질환, 손톱, 발톱 등의 피부부속기에 발생하는 질환에 대한 정확한 진단 및 치료를 시행합니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "핵의학과",
        description:
          "핵의학과는 방사선이 나오는 극미량의 방사성동위원소를 추적자로 사용하여 인체에 대한 형태학적인 정보와 아울러 생물학적이고 기능적인 정보를 얻어 각종 질병을 진단하고 치료하는데 도움을 줍니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "치과",
        description:
          "치과는 위턱, 아래턱과 턱관절, 치아 및 치아주위조직(잇몸, 잇몸뼈)과 관련된 선천적, 후천적인 질환 및 장애를 치료하는 분야입니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("departments", null, {});
  },
};
