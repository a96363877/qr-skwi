
export const Loader = (props:{show:boolean}) => {
    return (<div style={{display:props.show?"flex":"none",position:'fixed',
    flexDirection:"column",textAlign:'center',justifyItems:"center",justifyContent:'center',top:'40%',bottom:'auto',left:0,right:0,zIndex:1}}>
        <img
        style={{position:'fixed',left:'45%',top:'40%'}}
        className="w-full m-auto py-16"
        src="/spp.gif"
        alt="lsl"
width={90}            color="#0062d9cc"
        />
    </div>)
}