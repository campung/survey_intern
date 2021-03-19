import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { Button } from "antd";
import { Input } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const { Option } = Select;

const FourthPage = props => {
  const [isSelected, setIsSelected] = useState(false);
  const [isInput, setIsInput] = useState(false);

  const children = ["요식업", "프랜차이즈", "식품", "숙박", "문화"];

  const handleSelector = value => {
    props.FourthPageValueFirst(value);
    setIsSelected(true);
  };

  const handleTextArea = e => {
    props.FourthPageValueSecond(e.target.value);
    if (e.target.value.length !== 0) {
      setIsInput(true);
    } else {
      setIsInput(false);
    }
  };

  const prev = () => {
    props.buttonHandler(3);
  };

  const next = () => {
    props.buttonHandler(5);
  };

  return (
    <>
      <h3>해당되는 업종을 선택해주세요.</h3>
      <Select
        // size={}
        defaultValue="선택해주세요."
        onChange={handleSelector}
        style={{ width: 200 }}
      >
        {children.map(option => {
          return <Option value={option}>{option}</Option>;
        })}
      </Select>
      <h3>브랜드 타겟고객을 기재해주세요.</h3>
      <TextArea
        showCount
        maxLength={100}
        placeholder="예) 30대 여성, 직장을 다니는 기혼여성"
        onChange={handleTextArea}
      />
      <Button type="primary" style={{ width: 140, height: 44 }} onClick={prev}>
        <LeftOutlined />
        이전
      </Button>
      <Button
        type="primary"
        style={{ width: 140, height: 44 }}
        disabled={isSelected === true && isInput === true ? false : true}
        onClick={next}
      >
        다음
        <RightOutlined />
      </Button>
    </>
  );
};

export default FourthPage;
