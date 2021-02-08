const BASE_URL = 'http://localhost:8080/api/v1/pets'

export const fetchPet = async (id: string) => {
  const url = `${BASE_URL}/${id}`
  const res = await fetch(url)
  const convertedData = await res.json()
  const pet = convertedData.data
  return pet
}

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

export const editPets = async (id: string, token: string, petData: string) => {
  const url = `${BASE_URL}/${id}`

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'authorization': `Bearer ${token}`
  }

  const res = await fetch(url, {
    method: 'PUT',
    mode: 'cors',
    credentials: 'include',
    headers: headers,
    body: petData,
  })

  return res
}

export const deletePet = async (id: string, token: string) => {
  const url = `${BASE_URL}/${id}`

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'authorization': `Bearer ${token}`
  }

  const res = await fetch(url, {
    method: 'DELETE',
    mode: 'cors',
    credentials: 'include',
    headers: headers,
  })

  return res
}