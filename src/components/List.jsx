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