export default function HofPage() {
  const onClickChild = (index) => (event) {
    console.log(event.target.id);
  };
  return (
    <>
      <h1>HOF 연습페이지입니다</h1>
      <div>
        {["철수", "영희", "훈이"].map((el, index) => (
          <div key={el} id={String(index)} onClick={onClickChild(index)}>
            {el}
          </div>
        ))}
      </div>
    </>
  );
}

onClickChild(index)(event)