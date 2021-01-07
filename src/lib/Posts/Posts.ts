const BASE_URL = 'http://localhost:8080/api/v1/posts'

export const savePost = async (token: string, postData: string) => {
  const url = `${BASE_URL}`

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'authorization': `Bearer ${token}`
  }

  const res = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: headers,
    body: postData,
  })

  return res
}
