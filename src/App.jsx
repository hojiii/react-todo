import React, { useState } from 'react'
import './App.css'
<link rel="preconnect" href="https://fonts.googleapis.com"></link>

function List(props) {
  if (props.list.isDone == false) {
    return (
      <div className='list-form'>
        <div className='block-style'>{props.list.title}</div>
        <div>{props.list.value}</div>
        <div className='button-style'>
          <button onClick={() => props.deletButton(props.list.id)}>삭제하기</button>
          <button onClick={() => props.changeButton(props.list.id)}>완료</button>
          </div>
      </div>

    )
  }
}

function Donelist(props) {
  if (props.list.isDone == true) {
    return (
      <div className='done-form'>
        <div className='block-style'>{props.list.title}</div>
        <div>{props.list.value}</div>
        <div className='button-style'>
          <button onClick={() => props.deletButton(props.list.id)}>삭제하기</button>
          <button onClick={() => props.changeButton(props.list.id)}>취소</button>
        </div>
      </div>
    )
  }
}

const App= () => {
  //working배열
  const [todos, setTodos] = useState([
    { id: 1, title: "리엑트 공부하기", value: "리엑트기초를 공부해봅시다", isDone: false },
    { id: 2, title: "리엑트를 공부합시다", value: "리엑트 노션보기", isDone: true},
  ]);
  //입력된 제목
  const [name,setName] = useState("");
  //입력된 내용
  const [value,setValue] = useState("");
  //제목 핸들러
  const nameChangeHandler=(event) =>{
    setName(event.target.value)
  }
  //내용 핸들러
  const valueChangeHandler=(event) =>{
    setValue(event.target.value)
  }
  //추가 버튼
  function addButtonHandler(){
    if(todos.length===0){
      const newtodos={
      id: 1,
      title: name,
      value,
      isDone: false,
    }
    setTodos([...todos, newtodos])
    setName('')
    setValue('')
    }else{
      let max_id = todos[todos.length - 1]
      let num = max_id.id
      let max_num = num+1
      const newtodos={
        id: max_num,
        title: name,
        value,
        isDone: false,
      }
      setTodos([...todos,newtodos])
      setName('')
      setValue('')
      console.log(todos)

    }
  };
  //삭제버튼
  const deletButtonHandler=(id)=>{
    const newTodolist = todos.filter((list) => list.id !==id);
    setTodos(newTodolist)
  }
  //완료,취소 버튼
  const changeButtonHandler = (id) => {
    setTodos(todos.map((list) =>
      list.id === id ? { ...list, isDone: !list.isDone } : list

    ))

  }

  
  
  return (
    <div className='main'>
      <div className='todo-form'>
        <div className='header-form'>
          <div>My Todolist</div>
          <div></div>
          <div className='name'>
            Hojji
          </div>
        </div>
        <div className='input-form'>
          <div>
            제목<input value={name} onChange={nameChangeHandler} />
          </div>
          <div>
            내용<input value={value} onChange={valueChangeHandler} />
          </div>
          <div className='add-button'>
            <button onClick={addButtonHandler}>추가하기</button>
          </div>
        </div>
        <div className='working'>
          <h1>
            Working...
          </h1>
          <div className='now-working'>
            {todos.map((list) => {
              return <List list={list} key={list.id} deletButton={deletButtonHandler} changeButton={changeButtonHandler} />
            })}
          </div>
        </div>
        <div className='done'>
          <h1>
            Done..!
          </h1>
          <div className='now-done'>
            {todos.map((list) => {
              return <Donelist list={list} key={list.id} deletButton={deletButtonHandler} changeButton={changeButtonHandler} />
            })}
          </div>
        </div>
      </div>
    </div>

  )
}

export default App