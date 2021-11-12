import styled from '@emotion/styled'

export const MyInput = styled.input`

`
interface IStylesProps {
    qqq: boolean
}

export const MyButton = styled.button`
    background-color: ${(props: IStylesProps) => props.qqq === true ? "yellow" : "gray"};
    font-size: 30px;
`