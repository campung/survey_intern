import React, { useState } from "react";
import { Button } from "antd";
import { Select } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const FifthPage = props => {
  const [isSelected_first, setIsSelected_first] = useState(false);
  const [isSelected_second, setIsSelected_second] = useState(false);

  const options_first = [
    { value: "심볼형" },
    { value: "조합형" },
    { value: "앰블럼형" },
    { value: "이니셜형" },
  ];

  const options_second = [
    { value: "클래식" },
    { value: "모던" },
    { value: "젊은" },
    { value: "단순한" },
  ];

  const handleSelector_first = value => {
    props.FifthPageValueFirst(value);
    if (value.length !== 0) {
      setIsSelected_first(true);
    } else {
      setIsSelected_first(false);
    }
  };

  const handleSelector_second = value => {
    props.FifthPageValueSecond(value);
    if (value.length !== 0) {
      setIsSelected_second(true);
    } else {
      setIsSelected_second(false);
    }
  };

  const prev = () => {
    props.buttonHandler(4);
  };
  const next = () => {
    props.buttonHandler(6);
  };

  return (
    <>
      <h3>원하시는 로고 형태를 선택해주세요. 중복가능</h3>
      <Select
        id="first"
        mode="multiple"
        showArrow
        style={{ width: "100%" }}
        options={options_first}
        onChange={handleSelector_first}
      />
      <h3>원하시는 로고의 스타일을 선택해주세요. 중복가능</h3>
      <Select
        id="select_second"
        mode="multiple"
        showArrow
        style={{ width: "100%" }}
        options={options_second}
        onChange={handleSelector_second}
      />
      <Button type="primary" style={{ width: 140, height: 44 }} onClick={prev}>
        <LeftOutlined />
        이전
      </Button>
      <Button
        type="primary"
        style={{ width: 140, height: 44 }}
        disabled={
          isSelected_first === true && isSelected_second === true ? false : true
        }
        onClick={next}
      >
        다음
        <RightOutlined />
      </Button>
    </>
  );
};

export default FifthPage;
