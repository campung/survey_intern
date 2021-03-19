import React, { useState } from "react";
import moment from "moment";
import { DatePicker } from "antd";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
const TenthPage = props => {
  const [isSelected_first, setIsSelected_first] = useState(false);
  const [isSelected_second, setIsSelected_second] = useState(false);

  const disabledDate = current => {
    return current && current < moment().endOf("day");
  };

  const onChangeDate_first = e => {
    if (e !== null) {
      props.tenthPageValueFirst(e.format().slice(0, -15));
      if (e.format() !== null) {
        setIsSelected_first(true);
      } else {
        setIsSelected_first(false);
      }
    } else {
      props.tenthPageValueFirst("");
      setIsSelected_first(false);
    }
  };

  const onChangeDate_second = e => {
    if (e !== null) {
      props.tenthPageValueSecond(e.format().slice(0, -15));
      if (e.format() !== null) {
        setIsSelected_second(true);
      } else {
        setIsSelected_second(false);
      }
    } else {
      props.tenthPageValueSecond("");
      setIsSelected_second(false);
    }
  };
  const prev = () => {
    props.buttonHandler(9);
  };
  const next = () => {
    props.submit();
  };

  return (
    <>
      <h3>전문가 모집 마감 날짜를 지정해주세요.</h3>
      <DatePicker
        format="YYYY-MM-DD"
        disabledDate={disabledDate}
        onChange={onChangeDate_first}
      />
      <h3>프로젝트 작업 기한을 선택해주세요.</h3>
      <DatePicker
        format="YYYY-MM-DD"
        disabledDate={disabledDate}
        onChange={onChangeDate_second}
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
        프로젝트 의뢰하기
      </Button>
    </>
  );
};

export default TenthPage;
