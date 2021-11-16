import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalBasicPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");

  const [myZoneCode, setMyZoneCode] = useState("");
  // const showModal = () => {
  //   setIsOpen((prev) => !prev);
  //   // false를 true로 바꿔줌
  // };

  // const handleOk = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // const handleCancel = () => {
  //   setIsOpen((prev) => !prev);
  // };

  const onToggleModal = () => {
    setIsOpen((prev) => prev);
  };
  const handleComplete = (data: any) => {
    setMyAddress(data.address);
    setMyZoneCode(data.zonecode);
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={onToggleModal}>우편번호 검색</Button>
      <div>내 주소: {myAddress}</div>
      <div>내 우편번호: {myZoneCode}</div>
      {isOpen && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />;
        </Modal>
      )}
    </>
  );
}
