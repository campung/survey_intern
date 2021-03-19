import React, { useState } from "react";
import { Button } from "antd";
import { Input } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const SeventhPage = props => {
  const [isSelected, setIsSelected] = useState(false);
  const handleTextArea = e => {
    props.seventhPageValue(e.target.value);
    if (e.target.value.length !== 0) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };

  const prev = () => {
    props.buttonHandler(6);
  };
  const next = () => {
    props.buttonHandler(8);
  };

  return (
    <h3>
      <h3>전반적인 디자인 요구사항을 기재해주세요.</h3>
      <div>외부 연락처 공개 등 운영정책 위반 시 이용이 제한 됩니다.</div>
      <TextArea
        showCount
        maxLength={1000}
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
        disabled={isSelected === true ? false : true}
        onClick={next}
      >
        다음
        <RightOutlined />
      </Button>
    </h3>
  );
};

export default SeventhPage;
