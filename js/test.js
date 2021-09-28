const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = response.json()

  return users
}

getUsers().then(users => console.log(users))
