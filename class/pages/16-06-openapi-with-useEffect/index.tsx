import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    async function fetchDog() {
      const result = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      setDogUrl(result.data.url);
    }
    fetchDog();
  }, []);

  return (
    <>
      <div>오픈API 연습</div>
      <img src={dogUrl} />
    </>
  );
}
