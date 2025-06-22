



function Card(){
    return <div>
        <Passing innerContent={"hi there"}/>
    </div>
}

function Passing({innerContent}){
    return <div style={{backgroundColor:"black",color:"white",borderRadius:10}}>
        {innerContent}
    </div>
}

export default Card;
