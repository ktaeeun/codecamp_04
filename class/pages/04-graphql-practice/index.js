import { useMutation } from "@apollo/client"
import { __Directive } from "graphql"
import { useState } from "react"

const CREATE_BOARD = gql`
    mutation{
    createBoard(writer:"나", title:"제목데스", contents:"나이요데스"){
        __id
        number
        message
         }
    }
`
export default function GraphqlMutationBoard1Page(){
    const [aaa, setAaa] = useState("안녕하세요") 
    const [createBoard] = useMutation(CREATE_BOARD)     
    
    function zzz(){

        const result = await axios.createBoard()
        console.log(result)
        console.log(result.data.createBoard.message)
    } 

    return(
        <button onClick={zzz}>GRAPHQL-API 요청하기</button>
    )


}