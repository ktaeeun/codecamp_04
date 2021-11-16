import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { useState } from "react";
import { Modal, Button } from "antd";
import { myAddress, setMyAdreess } = useState("");
import { myZoneCode, setMyZoneCode } = useState("");


export default function ModalBasicPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");

  const [myZoneCode, setMyZoneCode] = useState("");
  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };
  const handleComplete = (data: any) => {

    SetMyAddress(data.address);
    setMyZoneCode(data.zonecode);
    setIsOpen(false);
  };


  return (
    <>
      <Button type="primary" onClick={showModal}>우편번호 검색</Button>
      <div>내 주소: {myAddress}</div>
      <div>내 우편번호: {myZoneCode}</div>
      {isOpen && (
        <Modal visible={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcode onComplete={handleComplete} />;
        </Modal>
      )}
    </>
  );
}
