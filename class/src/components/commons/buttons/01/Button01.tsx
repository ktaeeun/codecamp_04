import styled from "@emotion/styled";

interface IMyButtonProps {
  isValid: boolean;
}

const MyButton = styled.button`
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "yellow" : "gray"};
`;

export default function Button01(props) {
  return <MyButton isValid={props.isValid}>{props.name}</MyButton>;
}
