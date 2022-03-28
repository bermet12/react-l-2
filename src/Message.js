import './Message.css'

function Message(props) {
    console.log(props.author);
    return (
        <div className='post'>
            <p>{props.text}</p>
            <p className='author'>Имя автора: {props.author}</p>
            <p className='text'>{ }</p>
        </div>
    )
}
export default Message;