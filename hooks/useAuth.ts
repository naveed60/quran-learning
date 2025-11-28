"use client"

import { useCallback, useEffect, useState } from "react"
import {
  CURRENT_USER_STORAGE_KEY,
  getCurrentUser,
  logoutUser,
  type PublicUser,
} from "@/lib/auth"

export function useAuth() {
  const [user, setUser] = useState<PublicUser | null>(null)

  useEffect(() => {
    setUser(getCurrentUser())

    const handleStorage = (event: StorageEvent) => {
      if (event.key === CURRENT_USER_STORAGE_KEY || event.key === null) {
        setUser(getCurrentUser())
      }
    }

    window.addEventListener("storage", handleStorage)
    return () => window.removeEventListener("storage", handleStorage)
  }, [])

  const logout = useCallback(() => {
    logoutUser()
    setUser(null)
  }, [])

  return {
    user,
    logout,
    isAuthenticated: Boolean(user),
  }
}
