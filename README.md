component 정리ㅇ

버튼 컴포넌트

const Button =({addButtonHandler, children}) =>{
  return <button onClick={addButtonHandler}>{children}</button>

}

export default Button

완료 리스트 컴포넌트

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

export default Donelist

투두 리스트 컴포넌트

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

export default List
