import "./style.scss";

export const Message = ({message}) => {
    return (
        <>
            <h2>Message component</h2>
            <span>props text: <span className="props-message">{message}</span></span>
        </>
    )
}