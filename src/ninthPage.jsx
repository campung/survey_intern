import React, { useState } from "react";
import { Input } from "antd";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const NinthPage = props => {
  const [isInput, setIsInput] = useState(false);

  const handleInputChange = e => {
    props.ninthPageValue(`${e.target.value} 만원`);
    if (!isNaN(e.target.value) && e.target.value.length !== 0) {
      setIsInput(true);
    } else {
      setIsInput(false);
    }
  };

  const prev = () => {
    props.buttonHandler(8);
  };
  const next = () => {
    props.buttonHandler(10);
  };

  return (
    <>
      <h3>
        작업물 1개(장)당 예상 견적을 참고하여 프로젝트 예산을 기재해주세요.
      </h3>
      <Input suffix="만원" onChange={handleInputChange} maxLength="3" />
      <Button type="primary" style={{ width: 140, height: 44 }} onClick={prev}>
        <LeftOutlined />
        이전
      </Button>
      <Button
        type="primary"
        style={{ width: 140, height: 44 }}
        disabled={isInput === true ? false : true}
        onClick={next}
      >
        다음
        <RightOutlined />
      </Button>
    </>
  );
};

export default NinthPage;
