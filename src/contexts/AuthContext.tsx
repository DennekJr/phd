'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
    institution?: string;
    fieldOfStudy?: string;
    role: 'member' | 'admin' | 'moderator';
    isVerified: boolean;
    createdAt: string;
    lastLogin: string;
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
    register: (userData: RegisterData) => Promise<{ success: boolean; message: string }>;
    logout: () => void;
    updateProfile: (data: Partial<User>) => Promise<{ success: boolean; message: string }>;
    forgotPassword: (email: string) => Promise<{ success: boolean; message: string }>;
    resetPassword: (token: string, newPassword: string) => Promise<{ success: boolean; message: string }>;
}

interface RegisterData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone?: string;
    institution?: string;
    fieldOfStudy?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Check for existing session on mount
    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        try {
            // Check localStorage for existing session
            const token = localStorage.getItem('authToken');
            const userData = localStorage.getItem('userData');
            
            if (token && userData) {
                // In a real app, you'd validate the token with your backend
                const user = JSON.parse(userData);
                setUser(user);
            }
        } catch (error) {
            console.error('Auth check failed:', error);
            // Clear invalid data
            localStorage.removeItem('authToken');
            localStorage.removeItem('userData');
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
        try {
            setIsLoading(true);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Mock validation - in real app, this would be an API call
            if (email === 'demo@example.com' && password === 'password') {
                const mockUser: User = {
                    id: '1',
                    email: 'demo@example.com',
                    firstName: 'Demo',
                    lastName: 'User',
                    phone: '+234 123 456 7890',
                    institution: 'University of Lagos',
                    fieldOfStudy: 'Computer Science',
                    role: 'member',
                    isVerified: true,
                    createdAt: new Date().toISOString(),
                    lastLogin: new Date().toISOString()
                };
                
                // Store in localStorage (in real app, you'd store a JWT token)
                localStorage.setItem('authToken', 'mock-jwt-token');
                localStorage.setItem('userData', JSON.stringify(mockUser));
                
                setUser(mockUser);
                return { success: true, message: 'Login successful!' };
            } else {
                return { success: false, message: 'Invalid email or password' };
            }
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, message: 'An error occurred during login' };
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (userData: RegisterData): Promise<{ success: boolean; message: string }> => {
        try {
            setIsLoading(true);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Mock registration - in real app, this would be an API call
            const newUser: User = {
                id: Date.now().toString(),
                email: userData.email,
                firstName: userData.firstName,
                lastName: userData.lastName,
                phone: userData.phone,
                institution: userData.institution,
                fieldOfStudy: userData.fieldOfStudy,
                role: 'member',
                isVerified: false, // Would be verified via email in real app
                createdAt: new Date().toISOString(),
                lastLogin: new Date().toISOString()
            };
            
            // Store in localStorage
            localStorage.setItem('authToken', 'mock-jwt-token');
            localStorage.setItem('userData', JSON.stringify(newUser));
            
            setUser(newUser);
            return { success: true, message: 'Registration successful! Please check your email to verify your account.' };
        } catch (error) {
            console.error('Registration error:', error);
            return { success: false, message: 'An error occurred during registration' };
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        setUser(null);
    };

    const updateProfile = async (data: Partial<User>): Promise<{ success: boolean; message: string }> => {
        try {
            if (!user) {
                return { success: false, message: 'User not authenticated' };
            }
            
            const updatedUser = { ...user, ...data };
            localStorage.setItem('userData', JSON.stringify(updatedUser));
            setUser(updatedUser);
            
            return { success: true, message: 'Profile updated successfully!' };
        } catch (error) {
            console.error('Profile update error:', error);
            return { success: false, message: 'An error occurred while updating profile' };
        }
    };

    const forgotPassword = async (email: string): Promise<{ success: boolean; message: string }> => {
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            return { success: true, message: 'Password reset instructions sent to your email' };
        } catch (error) {
            console.error('Forgot password error:', error);
            return { success: false, message: 'An error occurred while processing your request' };
        }
    };

    const resetPassword = async (token: string, newPassword: string): Promise<{ success: boolean; message: string }> => {
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            return { success: true, message: 'Password reset successfully!' };
        } catch (error) {
            console.error('Reset password error:', error);
            return { success: false, message: 'An error occurred while resetting password' };
        }
    };

    const value: AuthContextType = {
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        updateProfile,
        forgotPassword,
        resetPassword
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
} 