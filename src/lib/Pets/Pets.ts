const BASE_URL = 'http://localhost:8080/api/v1/pets'

export const fetchPets = async () => {
  const url = `${BASE_URL}`
  const res = await fetch(url)
  const convertedData = await res.json()
  const pets = convertedData.data
  return pets
}

export const savePets = async (token: string, petData: string) => {
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
    body: petData,
  })

  return res
}

enum Sex {
  MALE = 'male',
  FEMALE = 'female',
}