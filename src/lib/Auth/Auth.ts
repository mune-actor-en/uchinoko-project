const BASE_URL = 'http://localhost:8080/api/v1/auth'

export const siginIn = async (email: string, password: string) => {
  const url = BASE_URL
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }

  const body = {
    email: email,
    password: password,
  }

  const res = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: headers,
    body: JSON.stringify(body),
  })

  return res
}