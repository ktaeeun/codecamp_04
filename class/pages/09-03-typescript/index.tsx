export default function TypescriptPage(){

    let aaa = "안녕하세요"
    // aaa = 3 X

    //문자타입
    let bbb: string;
    bbb = "반갑습니다"
    // bbb = 123 X

    // 숫자타입
    let ccc: any = 5
    // ccc = "aaaaaa" X


    //  배열타입
    let ddd: number[] = [1, 2, 3, 4, 5, 6]
    let eee: string[] = ["a", "b", "c", "d"]
    let fff: number[] | string[] = [1, 2, 3, 4, 5, 6] // union타입
    fff = ["a", "b", "c"]    
    let ggg: (number | string)[] = ["a", 1, 2, "b", 4, 5]
    
    // 객체타입
    interface IProfile {
        name: string
        age: number | string
        school: string
    }

    let profile: IProfile = {
        name: "철수",
        age: 8,
        school: "다람쥐초등학교"
    }

    profile.age = "세살"
    
    
    
    // any 넣어서 아무거나 다 ㄱㅊ아를 만들어주기...
    
    
    return(
        <div>타입스크립트 연습</div>

    )
}