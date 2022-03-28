import './App.css';
import Message from './Message';
import { useState, useEffect } from 'react';
import PostList from './PostList'

let newAuthor = '', newText = '';

function App() {
  const [post, setPost] = useState('');
  const [state, setState] = useState([]);
  useEffect(() => {
    if (state.length > 0 && state[state.length - 1].author !== 'robot') {
      setState(
        (prev) => {
          let newState = [...prev]
          newState.push({ author: 'robot', text: 'Сообщение приято!' })
          return newState
        }
      )
    }
  }, [state])
  return (
    <div className="App">
      <PostList post={post} title='Список постов' />
      <Message text="Введите сообщение:" />
      {state.map((value, index) => {
        return (
          <Message author={value.author} text={value.text} key={index} />
        )
      })}

      <form className='send-form' action='#' onSubmit={(event) => {
        event.preventDefault();
        setState(prev => {
          let newState = [...prev]
          newState.push({ author: newAuthor, text: newText })
          return newState;
        });
      }}>
        <input className='myInput' type="text" placeholder='Имя' onChange={(event) => {
          newAuthor = event.target.value;
        }} />
        <textarea
          className='myInput'
          rows="5"
          placeholder='Сообщение' onChange={(event) => {
            newText = event.target.value;
          }}></textarea>
        <button className='myBtn' type='submit'>Отправить</button>
      </form>
    </div>
  );
}
export default App;