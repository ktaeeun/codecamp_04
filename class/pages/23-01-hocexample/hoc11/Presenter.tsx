const withAuth = (Component) => {
  return (props) => {
    return <Component {...props} />;
  };
};

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default withAuth(Presenter);

function aaa(Component) {}

const aaa = (Component) => {
  return (props) => {
    return "결과물";
  };
};
