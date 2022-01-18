export const clearStorage = () => {
  localStorage.clear()
}

export const removeStorage = (name: string) => {
  localStorage.removeItem(name)
}

export const getterAuthenticated = () => {
  return localStorage.getItem("authenticated") === "true" || false
}

export const setterAuthenticated = (bool: boolean) => {
  localStorage.setItem("authenticated", `${bool}`)

  return Promise.resolve()
}

export const getterToken = () => {
  return localStorage.getItem("token") || ""
}

export const setterToken = (token: string) => {
  localStorage.setItem("token", token)

  return Promise.resolve()
}

export const getterAddress = () => {
  return localStorage.getItem("gnomes-address") || ""
}

export const setterAddress = (address: string) => {
  localStorage.setItem("gnomes-address", address)

  return Promise.resolve()
}
