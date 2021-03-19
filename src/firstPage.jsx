import React, { useState } from "react";
import { Select } from "antd";
import { Input } from "antd";
import { Button } from "antd";

const FirstPage = props => {
  const { Option } = Select;
  const majorCategoryItems = ["디자인", "프로그래밍", "마케팅"];
  const minorCategoryItems = {
    디자인: ["디자인1", "디자인2", "디자인3"],
    프로그래밍: ["프로그래밍1", "프로그래밍2", "프로그래밍3"],
    마케팅: ["마케팅1", "마케팅2", "마케팅3"],
  };

  const [majorCategory, setMajorCategory] = useState(
    minorCategoryItems[majorCategoryItems[0]]
  );
  const [minorCategory, setMinorCategory] = useState(
    minorCategoryItems[majorCategoryItems[0]][0]
  );
  const [isFirstNull, setIsFistNull] = useState(true);
  const [isSecondNull, setIsSecondNull] = useState(true);
  const [isThirdNull, setIsThirdNull] = useState(true);

  const handleMajorChange = value => {
    setMajorCategory(minorCategoryItems[value]);
    setMinorCategory(minorCategoryItems[value][0]);
    if (value !== null) {
      setIsFistNull(false);
    } else {
      setIsFistNull(true);
    }
    props.firstCategory(value);
  };

  const handleMinorChange = value => {
    setMinorCategory(value);
    if (value !== null) {
      setIsSecondNull(false);
    } else {
      setIsSecondNull(true);
    }
    props.secondCategory(value);
  };

  const handleTextArea = e => {
    props.thirdCategory(e.target.value);
    if (e.target.value.length !== 0) {
      setIsThirdNull(false);
    } else {
      setIsThirdNull(true);
    }
  };

  const next = () => {
    props.buttonHandler(2);
  };

  const { TextArea } = Input;

  return (
    <div>
      <div>
        <h3>관련 분야를 선택해주세요.</h3>
        <Select
          defaultValue={"상위 카테고리"}
          style={{ width: 200 }}
          onChange={handleMajorChange}
        >
          {majorCategoryItems.map(province => (
            <Option key={province}>{province}</Option>
          ))}
        </Select>
        <Select
          defaultValue={"하위 카테고리"}
          style={{ width: 200 }}
          onChange={handleMinorChange}
          disabled={isFirstNull}
        >
          {majorCategory.map(city => (
            <Option key={city}>{city}</Option>
          ))}
        </Select>
        <h3>필요한 서비스의 제목을 작성해주세요.</h3>
        <TextArea showCount maxLength={25} onChange={handleTextArea} />
      </div>
      <Button
        type="primary"
        style={{ width: 140, height: 44 }}
        disabled={
          isSecondNull === false && isThirdNull === false ? false : true
        }
        onClick={next}
      >
        다음
      </Button>
    </div>
  );
};

export default FirstPage;
