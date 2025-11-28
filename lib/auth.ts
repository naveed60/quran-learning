"use client"

export type PublicUser = {
  name: string
  email: string
  whatsapp: string
  location: string
}

export type StoredUser = PublicUser & {
  password: string
}

export const USERS_STORAGE_KEY = "quran_learning_users"
export const CURRENT_USER_STORAGE_KEY = "quran_learning_current_user"

const isBrowser = () => typeof window !== "undefined"

const readUsers = (): StoredUser[] => {
  if (!isBrowser()) return []
  try {
    const raw = window.localStorage.getItem(USERS_STORAGE_KEY)
    return raw ? (JSON.parse(raw) as StoredUser[]) : []
  } catch (error) {
    console.error("Failed to parse stored users", error)
    return []
  }
}

const writeUsers = (users: StoredUser[]) => {
  if (!isBrowser()) return
  window.localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users))
}

const setCurrentUser = (user: PublicUser | null) => {
  if (!isBrowser()) return
  if (!user) {
    window.localStorage.removeItem(CURRENT_USER_STORAGE_KEY)
    return
  }
  window.localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(user))
}

export const getCurrentUser = (): PublicUser | null => {
  if (!isBrowser()) return null
  try {
    const raw = window.localStorage.getItem(CURRENT_USER_STORAGE_KEY)
    return raw ? (JSON.parse(raw) as PublicUser) : null
  } catch {
    return null
  }
}

export const logoutUser = () => {
  setCurrentUser(null)
}

export type RegisterUserInput = StoredUser & {
  confirmPassword?: string
}

export const registerUser = async (input: StoredUser): Promise<PublicUser> => {
  if (!isBrowser()) {
    throw new Error("Registration is not available on the server")
  }

  const users = readUsers()
  const email = input.email.toLowerCase()
  const existingUser = users.find((user) => user.email === email)

  if (existingUser) {
    throw new Error("An account with this email already exists.")
  }

  const newUser: StoredUser = {
    ...input,
    email,
  }

  users.push(newUser)
  writeUsers(users)
  const publicUser = stripPassword(newUser)
  setCurrentUser(publicUser)
  return publicUser
}

export const loginUser = async (
  email: string,
  password: string
): Promise<PublicUser> => {
  if (!isBrowser()) {
    throw new Error("Login is not available on the server")
  }

  const users = readUsers()
  const user = users.find((entry) => entry.email === email.toLowerCase())

  if (!user || user.password !== password) {
    throw new Error("Invalid email or password.")
  }

  const publicUser = stripPassword(user)
  setCurrentUser(publicUser)
  return publicUser
}

const stripPassword = (user: StoredUser): PublicUser => ({
  name: user.name,
  email: user.email,
  whatsapp: user.whatsapp,
  location: user.location,
})
