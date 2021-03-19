import React, { useState } from "react";
import { Button } from "antd";
import { Input } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const EighthPage = props => {
  const [isSelected, setIsSelected] = useState(false);
  const handleTextArea = e => {
    props.eighthPageValue(e.target.value);
    if (e.target.value.length !== 0) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };

  const prev = () => {
    props.buttonHandler(7);
  };
  const next = () => {
    props.buttonHandler(9);
  };

  return (
    <h3>
      <h3>명함에 기재되어야 할 내용을 작성해주세요.</h3>
      <TextArea
        showCount
        maxLength={100}
        placeholder="예) 이름/직급"
        onChange={handleTextArea}
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
    </h3>
  );
};

export default EighthPage;
