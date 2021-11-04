import axios from 'axios' // 요청해서 받은 결과를 useState에 저장
import { useState } from 'react'


export default function RestGetPage(){
    const [aaa, setAaa] = useState("안녕하세요")

    function zzz(){
        const result = axios.get('https://koreanjson.com/posts/1')
        console.log(result)
        console.log(result.data.title)
    }


    return(
    <>
    <div>{aaa}</div>
        <button onClick={zzz}>REST-API 요청하기</button>
    </>
    )
}