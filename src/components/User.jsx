const User = ({user}) => {
  return <li >
  {/* { user.id} */}
  <h2>{user.name}</h2>
  <p>{user.hasJob ? 'Норм чувак :)' : 'Безробітній'}</p>
</li>
}


export default User;