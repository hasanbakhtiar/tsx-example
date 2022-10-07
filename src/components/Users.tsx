type UserTypes={
    info:string,
    messageCount:number,
    isLoggedIn:boolean
}

const Users = (props:UserTypes) => {
  return (
    <div>
        {props.isLoggedIn ? `Welcome ${props.info}!You have ${props.messageCount} message
        `:"Welcome Guest!"}
    </div>
  )
}

export default Users