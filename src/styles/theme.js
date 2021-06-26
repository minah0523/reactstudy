const theme = {
  // 페이지에 주요하게 사용되는 컬러들을 모아둠
    background: {
      default: "#E9E9E9", // 웹 자체의 디폴트 배경 컬러
      paper: "#f8f8f8", // 카드 등의 컴포넌트 배경의 페이지를 위한 밝은 컬러
    },
    primary: {
      main: "#e54e2b", // 버튼 등 메인 컬러 (현재 세아 오렌지, 추후 피치 프라이머리 컬러로 변경)
      contrastText: "#f8f8f8", // 메인 컬러를 위한 강조컬러
      hover: "#922412",
      active: "#531006"
    },
    secondary : {
      main: "#101314", // 버튼 등 세컨 컬러 (현재 세아 블랙, 추후 피치 세컨 컬러로 변경)
      constastText:  "#f8f8f8", // 세컨 컬러를 위한 강조컬러
      hover: "#4c4c4c",
      active: "#2e3031"
    },
    gray : {
      main: "##6e6e6e", // 버튼 등 세컨 컬러 (현재 세아 그레이, 추후 피치 필요 컬러로 변경)
      constastText:  "#f8f8f8", // 세컨 컬러를 위한 강조컬러
      hover: "#4c4c4c",
      active: "#6e6e6e"
    },
    text: {
      primary: "#101314",  // 기본 텍스트 컬러
      secondary: "#4c4c4c", // a 태그 등 그레이 컬러
    },
    // 기타 재사용 필요한 컬러
    peachy: {
      bitterSweet: "#ff6666", // 피치 핑크 컬러 (추후 사용)
    },
};

export default theme;
