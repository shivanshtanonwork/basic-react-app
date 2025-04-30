export default function MsgBox({ userName, txtColor }) {
    // let styles = {color: textColor}
    return (
        <h1 style={{ color: txtColor }}>Hello, {userName}</h1>
    )
}