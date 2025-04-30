function handleClick(event) {
    console.log("Hello!");
    console.log(event)

}

function handleMouseOver() {
    console.log("bye!");

}

function handleDblClick() {
    console.log("Double CLicked!!")
}

export default function button() {
    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ut sint similique incidunt ex nesciunt molestias ab laborum aliquid officia ipsam laudantium a, voluptate modi ad vel deleniti nam totam.</p>
            <button onDoubleClick={handleDblClick}>Double click me</button>
        </div>
    )
}