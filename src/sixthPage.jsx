import React, { useState } from "react";
import { Button } from "antd";
import { Select } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const SixthPage = props => {
  const [isSelected, setIsSelected] = useState(false);

  const options = [
    { value: "인쇄물" },
    { value: "인터넷" },
    { value: "외부간판" },
    { value: "기타" },
  ];

  const handleSelector = value => {
    props.sixthPageValue(value);
    if (value.length !== 0) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };

  const prev = () => {
    props.buttonHandler(5);
  };
  const next = () => {
    props.buttonHandler(7);
  };

  return (
    <>
      <h3>원하시는 로고 형태를 선택해주세요. 중복가능</h3>
      <Select
        id="first"
        mode="multiple"
        showArrow
        style={{ width: "100%" }}
        options={options}
        onChange={handleSelector}
      />
      <Button type="primary" style={{ width: 140, height: 44 }} onClick={prev}>
        <LeftOutlined />
        이전
      </Button>
      <Button
        type="primary"
        style={{ width: 140, height: 44 }}
        disabled={isSelected === true ? false : true}
        onClick={next}
      >
        다음
      </Button>
    </>
  );
};

export default SixthPage;
