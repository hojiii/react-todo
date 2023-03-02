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