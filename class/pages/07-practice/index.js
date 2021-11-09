const classmate = [
    { name: "철수", age: 10, school:"토끼초등학교"},
    { name: "영희", age: 13, school:"다람쥐초등학교"},
    { name: "훈이", age: 11, school:"토끼초등학교"},
] 

const a = classmate.filter((db)=>(db.school==="토끼초등학교"))
a.map((db)=>({...db, candy:"10개"}))

