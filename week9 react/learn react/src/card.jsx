



function Card() {
    return <div style={{ display: "flex" }}>
        <Passing children={"hi there"} />
        <Passing>
            <div style={{ color: "green" }}> what do you want to post <br /><input type="text" /></div>
        </Passing>
    </div>
}

function Passing({ children }) {
    return <div style={{ backgroundColor: "black", color: "white", borderRadius: 10, padding: 10, margin: 10 }}>
        {children}
    </div>
}

export default Card;
