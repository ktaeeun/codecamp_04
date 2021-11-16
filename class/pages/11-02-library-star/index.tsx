import { useState } from "react";
import { Rate } from "antd";
export default function LibraryStarPage() {
  const [value, setValue] = useState(3);
  const aaa = 2;

  function handleChange(value: number) {
    console.log(aaa);
    setValue(value);
  }

  return (
    <span>
      <Rate onChange={handleChange} value={value} />
    </span>
  );
}
