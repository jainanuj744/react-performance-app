import HOC from "./HOC"

function CompA(props){
    // console.log(props);
    return <>
        <div style={props.style}>
        CompA
        {/* {console.log(props)} */}
        </div>
    </>
}

export default HOC(CompA);