import axios from "axios";
import { useEffect, useState } from "react";
import { Wrapper, Title, PhotoWrapper, CatPhoto } from "./index.styles";

export default function OpenWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    async function fetchDog() {
      const result = await axios.get("https://thatcopy.pw/catapi/rest/");
      setDogUrl(result.data.url);
    }
    fetchDog();
  }, []);

  return (
    <>
      <Wrapper>
        <Title>고양이 사진전😍</Title>
        <PhotoWrapper>
          <CatPhoto src={dogUrl} />
        </PhotoWrapper>
      </Wrapper>
    </>
  );
}
