import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../config/supabaseClient'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log('AuthProvider: Initializing...')

        // Check active sessions and sets the user
        supabase.auth.getSession().then(({ data: { session }, error }) => {
            console.log('AuthProvider: Session check:', { session, error })
            if (error) {
                console.error('AuthProvider: Session error:', error)
            }
            setUser(session?.user ?? null)
            setLoading(false)
        })

        // Listen for changes on auth state (logged in, signed out, etc.)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            console.log('AuthProvider: Auth state changed:', { event: _event, session })
            setUser(session?.user ?? null)
            setLoading(false)
        })

        return () => subscription.unsubscribe()
    }, [])

    const value = {
        signUp: async (data) => {
            console.log('AuthProvider: Attempting sign up...')
            const result = await supabase.auth.signUp(data)
            console.log('AuthProvider: Sign up result:', result)
            return result
        },
        signIn: async (data) => {
            console.log('AuthProvider: Attempting sign in...')
            const result = await supabase.auth.signInWithPassword(data) 
            console.log('AuthProvider: Sign in result:', result)
            return result
        },
        signOut: async () => {
            console.log('AuthProvider: Attempting sign out...')
            const result = await supabase.auth.signOut()
            console.log('AuthProvider: Sign out result:', result)
            return result
        },
        user,
    }

    console.log('AuthProvider: Current state:', { user, loading })

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
} 