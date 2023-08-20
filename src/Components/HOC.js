const styles = {
  dark: {
    background: "black",
    color: "white",
  },
  light: {
    background: "yellow",
    color: "red",
  },
};
export default function HOC(WrappedComp) {
  return function (props) {
    // console.log(props);
    let temp = {};
    if (props.dark) {
      temp = { ...styles.dark };
    } else if (props.light) {
      temp = { ...styles.light };
    }
    // console.log(temp);
    return <WrappedComp style={temp} />;
  };
}
