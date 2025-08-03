'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfilePage() {
    const { user, isAuthenticated, updateProfile, logout } = useAuth();
    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        phone: user?.phone || '',
        institution: user?.institution || '',
        fieldOfStudy: user?.fieldOfStudy || ''
    });

    // Redirect if not authenticated
    if (!isAuthenticated) {
        router.push('/');
        return null;
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = async () => {
        setIsLoading(true);
        setMessage('');
        
        try {
            const result = await updateProfile(formData);
            if (result.success) {
                setMessage(result.message);
                setIsEditing(false);
            } else {
                setMessage(result.message);
            }
        } catch (error) {
            setMessage('An error occurred while updating profile');
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    return (
        <div className="min-h-screen bg-[#FBF7ED]">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link 
                        href="/" 
                        className="inline-flex items-center text-[#232427] hover:text-[#EFB025] transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Profile Header */}
                    <div className="bg-gradient-to-r from-[#EFB025] to-[#F4C430] px-6 py-8">
                        <div className="flex items-center space-x-6">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-[#EFB025]">
                                {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white">
                                    {user?.firstName} {user?.lastName}
                                </h1>
                                <p className="text-white/90">{user?.email}</p>
                                <div className="flex items-center space-x-2 mt-2">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                        user?.isVerified 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {user?.isVerified ? 'Verified' : 'Pending Verification'}
                                    </span>
                                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                        {user?.role?.toUpperCase()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Profile Content */}
                    <div className="p-6">
                        {/* Message */}
                        {message && (
                            <div className={`mb-6 p-4 rounded-md ${
                                message.includes('success') 
                                    ? 'bg-green-50 border border-green-200 text-green-700'
                                    : 'bg-red-50 border border-red-200 text-red-700'
                            }`}>
                                {message}
                            </div>
                        )}

                        {/* Profile Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    First Name
                                </label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EFB025] focus:border-transparent"
                                    />
                                ) : (
                                    <p className="text-gray-900">{user?.firstName}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Last Name
                                </label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EFB025] focus:border-transparent"
                                    />
                                ) : (
                                    <p className="text-gray-900">{user?.lastName}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <p className="text-gray-900">{user?.email}</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                {isEditing ? (
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EFB025] focus:border-transparent"
                                    />
                                ) : (
                                    <p className="text-gray-900">{user?.phone || 'Not provided'}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Institution/Organization
                                </label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="institution"
                                        value={formData.institution}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EFB025] focus:border-transparent"
                                    />
                                ) : (
                                    <p className="text-gray-900">{user?.institution || 'Not provided'}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Field of Study
                                </label>
                                {isEditing ? (
                                    <select
                                        name="fieldOfStudy"
                                        value={formData.fieldOfStudy}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EFB025] focus:border-transparent"
                                    >
                                        <option value="">Select Field</option>
                                        <option value="arts">Arts</option>
                                        <option value="sciences">Sciences</option>
                                        <option value="engineering">Engineering</option>
                                        <option value="medicine">Medicine</option>
                                        <option value="business">Business</option>
                                        <option value="education">Education</option>
                                        <option value="law">Law</option>
                                        <option value="other">Other</option>
                                    </select>
                                ) : (
                                    <p className="text-gray-900">{user?.fieldOfStudy || 'Not specified'}</p>
                                )}
                            </div>
                        </div>

                        {/* Account Information */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Account Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Member Since
                                    </label>
                                    <p className="text-gray-900">
                                        {new Date(user?.createdAt || '').toLocaleDateString()}
                                    </p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Last Login
                                    </label>
                                    <p className="text-gray-900">
                                        {new Date(user?.lastLogin || '').toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-4">
                            {isEditing ? (
                                <>
                                    <button
                                        onClick={handleSave}
                                        disabled={isLoading}
                                        className="bg-[#EFB025] text-white px-6 py-2 rounded-md font-medium hover:bg-[#d4a020] transition-colors disabled:opacity-50"
                                    >
                                        {isLoading ? 'Saving...' : 'Save Changes'}
                                    </button>
                                    <button
                                        onClick={() => setIsEditing(false)}
                                        className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md font-medium hover:bg-gray-400 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="bg-[#EFB025] text-white px-6 py-2 rounded-md font-medium hover:bg-[#d4a020] transition-colors"
                                    >
                                        Edit Profile
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors"
                                    >
                                        Logout
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 