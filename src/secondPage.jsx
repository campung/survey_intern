import React, { useState } from "react";
import { Radio } from "antd";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const SecondPage = props => {
  const [value, setValue] = useState("");
  const [isSelected, setIsSelected] = useState(true);

  const onChange = e => {
    setValue(e.target.value);
    setIsSelected(false);
    props.secondPageValue(e.target.value);
  };

  const prev = () => {
    props.buttonHandler(1);
  };
  const next = () => {
    props.buttonHandler(3);
  };

  return (
    <>
      <h3>프로젝트 의뢰 전, 현재 준비된 상황을 선택해주세요.</h3>
      <Radio.Group onChange={onChange} value={value}>
        <Radio
          style={{ display: "block", height: "30px", lineHeight: "30px" }}
          value={"아이디어만 있음"}
        >
          아이디어만 있음
        </Radio>
        <Radio
          style={{ display: "block", height: "30px", lineHeight: "30px" }}
          value={"초안(손 그림) 보유"}
        >
          초안(손 그림) 보유
        </Radio>
        <Radio
          style={{ display: "block", height: "30px", lineHeight: "30px" }}
          value={"기획서 보유"}
        >
          기획서 보유
        </Radio>
        <Radio
          style={{ display: "block", height: "30px", lineHeight: "30px" }}
          value={"시안 보유"}
        >
          시안 보유
        </Radio>
      </Radio.Group>
      <Button type="primary" style={{ width: 140, height: 44 }} onClick={prev}>
        <LeftOutlined />
        이전
      </Button>
      <Button
        type="primary"
        style={{ width: 140, height: 44 }}
        disabled={isSelected === false ? false : true}
        onClick={next}
      >
        다음
        <RightOutlined />
      </Button>
    </>
  );
};

export default SecondPage;
