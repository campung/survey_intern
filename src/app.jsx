import React, { useState } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.css";
import { Progress } from "antd";
import FirstPage from "./firstPage";
import SecondPage from "./secondPage";
import ThirdPage from "./thirdPage";
import FourthPage from "./fourthPage";
import FifthPage from "./fifthPage";
import SixthPage from "./sixthPage";
import SeventhPage from "./seventhPage";
import EighthPage from "./eighthPage";
import NinthPage from "./ninthPage";
import TenthPage from "./tenthPage";

function App() {
  const [firstCategory, setFirstCategory] = useState("");
  const [secondCategory, setSecondCategory] = useState("");
  const [thirdCategory, setThirdCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [secondPageValue, setSecondPageValue] = useState("");
  const [thirdPageValue, setThirdPageValue] = useState("");
  const [fourthPageValueFirst, setFourthPageValueFirst] = useState("");
  const [fourthPageValueSecond, setFourthPageValueSecond] = useState("");
  const [fifthPageValueFirst, setFifthPageValueFirst] = useState("");
  const [fifthPageValueSecond, setFifthPageValueSecond] = useState("");
  const [sixthPageValue, setSixthPageValue] = useState("");
  const [seventhPageValue, setSeventhPageValue] = useState("");
  const [eighthPageValue, setEighthPageValue] = useState("");
  const [ninthPageValue, setNinthPageValue] = useState(null);
  const [tenthPageValueFirst, setTenthPageValueFirst] = useState("");
  const [tenthPageValueSecond, setTenthPageValueSecond] = useState("");

  const leftPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <FirstPage
            firstCategory={value => setFirstCategory(value)}
            secondCategory={value => setSecondCategory(value)}
            thirdCategory={value => setThirdCategory(value)}
            buttonHandler={nextPage => setCurrentPage(nextPage)}
          />
        );
      case 2:
        return (
          <SecondPage
            secondPageValue={value => setSecondPageValue(value)}
            buttonHandler={nextPage => setCurrentPage(nextPage)}
          />
        );
      case 3:
        return (
          <ThirdPage
            ThirdPageValue={value => setThirdPageValue(value)}
            buttonHandler={nextPage => setCurrentPage(nextPage)}
          />
        );
      case 4:
        return (
          <FourthPage
            FourthPageValueFirst={value => setFourthPageValueFirst(value)}
            FourthPageValueSecond={value => setFourthPageValueSecond(value)}
            buttonHandler={nextPage => setCurrentPage(nextPage)}
          />
        );
      case 5:
        return (
          <FifthPage
            FifthPageValueFirst={value => setFifthPageValueFirst(value)}
            FifthPageValueSecond={value => setFifthPageValueSecond(value)}
            buttonHandler={nextPage => setCurrentPage(nextPage)}
          />
        );
      case 6:
        return (
          <SixthPage
            sixthPageValue={value => setSixthPageValue(value)}
            buttonHandler={nextPage => setCurrentPage(nextPage)}
          />
        );
      case 7:
        return (
          <SeventhPage
            seventhPageValue={value => setSeventhPageValue(value)}
            buttonHandler={nextPage => setCurrentPage(nextPage)}
          />
        );
      case 8:
        return (
          <EighthPage
            eighthPageValue={value => setEighthPageValue(value)}
            buttonHandler={nextPage => setCurrentPage(nextPage)}
          />
        );
      case 9:
        return (
          <NinthPage
            ninthPageValue={value => setNinthPageValue(value)}
            buttonHandler={nextPage => setCurrentPage(nextPage)}
          />
        );
      case 10:
        return (
          <TenthPage
            tenthPageValueFirst={value => setTenthPageValueFirst(value)}
            tenthPageValueSecond={value => setTenthPageValueSecond(value)}
            buttonHandler={nextPage => setCurrentPage(nextPage)}
            submit={() => submit()}
          />
        );
      default:
        break;
    }
  };

  const submit = () => {};

  const lineDivider = lineNum => {
    return (
      <div
        style={{
          backgroundColor: "grey",
          height: 0.4,
          display: currentPage > lineNum ? null : "none",
        }}
      ></div>
    );
  };

  return (
    <div style={{ backgroundColor: "skyblue", width: 900 }}>
      <h2>필요한 업무를 설명해주세요, 전문가가 견적을 보내드립니다!</h2>
      <Progress
        strokeColor={{
          "0%": "#108ee9",
          "100%": "#87d068",
        }}
        percent={currentPage * 10}
      />
      <div style={{ display: "flex", height: 400 }}>
        <div style={{ backgroundColor: "green", flex: 5 }}>{leftPage()}</div>
        <div style={{ backgroundColor: "yellow", flex: 5 }}>
          <div>상위 카테고리</div>
          <div>{firstCategory}</div>
          <div>하위 카테고리</div>
          <div>{secondCategory}</div>
          <div>서비스 제목</div>
          <div>{thirdCategory}</div>
          {lineDivider(1)}
          {currentPage > 1 ? <div>프로젝트 준비 상황</div> : null}
          <div>{secondPageValue}</div>
          {lineDivider(2)}
          {currentPage > 2 ? <div>브랜드 명</div> : null}
          <div>{thirdPageValue}</div>
          {lineDivider(3)}
          {currentPage > 3 ? <div>업종</div> : null}
          <div>{fourthPageValueFirst}</div>
          {currentPage > 3 ? <div>타겟고객</div> : null}
          <div>{fourthPageValueSecond}</div>
          {lineDivider(4)}
          {currentPage > 4 ? <div>로고 형태</div> : null}
          <div>{fifthPageValueFirst}</div>
          {currentPage > 4 ? <div>로고 스타일</div> : null}
          <div>{fifthPageValueSecond}</div>
          {lineDivider(5)}
          {currentPage > 5 ? <div>활용목적</div> : null}
          <div>{sixthPageValue}</div>
          {lineDivider(6)}
          {currentPage > 6 ? <div>구체적인 내용 설명</div> : null}
          <div>{seventhPageValue}</div>
          {lineDivider(7)}
          {currentPage > 7 ? <div>명함 기재 내용</div> : null}
          <div>{eighthPageValue}</div>
          {lineDivider(8)}
          {currentPage > 8 ? <div>프로젝트 예산</div> : null}
          <div>{ninthPageValue}</div>
          {lineDivider(9)}
          {currentPage > 9 ? <div>게재 마감 기한</div> : null}
          <div>{tenthPageValueFirst}</div>
          {currentPage > 9 ? <div>프로젝트 작업 기한</div> : null}
          <div>{tenthPageValueSecond}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
