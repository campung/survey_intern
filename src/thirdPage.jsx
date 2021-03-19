import React, { useState } from "react";
import { Input } from "antd";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const ThirdPage = props => {
  const [isSelected, setIsSelected] = useState(false);

  const handleInputChange = e => {
    props.ThirdPageValue(e.target.value);
    if (e.target.value.length !== 0) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };

  const prev = () => {
    props.buttonHandler(2);
  };

  const next = () => {
    props.buttonHandler(4);
  };

  return (
    <>
      <h3>작업하실 브랜드명을 기재해주세요.</h3>
      <Input
        placeholder="브랜드 명 or 회사 명"
        maxLength={20}
        onChange={handleInputChange}
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
        <RightOutlined />
      </Button>
    </>
  );
};

export default ThirdPage;
