const BASE_URL = 'http://localhost:8080/api/v1/users'

export const fetchUser = async (id: string) => {
  const url = `${BASE_URL}/${id}`
  const res = await fetch(url)
  const convertedData = await res.json()
  const user = convertedData.data
  return user
}

export const saveUser = async (
  token: string,
  id: string,
  name: string,
  email: string) => {
  const url = `${BASE_URL}/${id}`

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'authorization': `Bearer ${token}`
  }

  const body = {
    name: name,
    email: email,
  }

  const res = await fetch(url, {
    method: 'PUT',
    mode: 'cors',
    credentials: 'include',
    headers: headers,
    body: JSON.stringify(body),
  })

  return res
}