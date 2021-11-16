import ReactPlayer from "react-player";
import styled from "@emotion/styled";

const MyYoutube = styled(ReactPlayer)`
  border: 10px solid yellow;
`;
export default function LibraryYoutubePage() {
  return (
    <MyYoutube url="https://youtu.be/moFB-j5iY2E" width={500} height={500} />
  );
}
