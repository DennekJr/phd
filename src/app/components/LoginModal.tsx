'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const { login, register } = useAuth();
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        phone: '',
        institution: '',
        fieldOfStudy: '',
        agreeToTerms: false
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');
        setSuccessMessage('');
        
        try {
            if (activeTab === 'register') {
                if (formData.password !== formData.confirmPassword) {
                    setErrorMessage('Passwords do not match');
                    return;
                }
                
                const result = await register({
                    email: formData.email,
                    password: formData.password,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    phone: formData.phone,
                    institution: formData.institution,
                    fieldOfStudy: formData.fieldOfStudy
                });
                
                if (result.success) {
                    setSuccessMessage(result.message);
                    setTimeout(() => {
                        onClose();
                        setSuccessMessage('');
                    }, 2000);
                } else {
                    setErrorMessage(result.message);
                }
            } else {
                const result = await login(formData.email, formData.password);
                
                if (result.success) {
                    setSuccessMessage(result.message);
                    setTimeout(() => {
                        onClose();
                        setSuccessMessage('');
                    }, 2000);
                } else {
                    setErrorMessage(result.message);
                }
            }
        } catch (error) {
            console.error('Authentication error:', error);
            setErrorMessage('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSocialLogin = (provider: string) => {
        console.log(`${provider} login clicked`);
        // Implement social login logic here
        alert(`${provider} login functionality would be implemented here`);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl !max-w-[1000px] w-full max-h-[90vh] overflow-y-auto !p-4">
                {/* Header */}
                <div className="flex items-center justify-between !py-4 border-b">
                    <div className="flex items-center space-x-3">
                        <Image 
                            src="/images/text-logo.svg" 
                            alt="Logo" 
                            width={120} 
                            height={30}
                        />
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b">
                    <button
                        onClick={() => setActiveTab('login')}
                        className={`flex-1 py-3 !p-4 text-sm hover:cursor-pointer font-medium transition-colors ${
                            activeTab === 'login'
                                ? 'text-[#EFB025] border-b-2 border-[#EFB025]'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => setActiveTab('register')}
                        className={`flex-1 py-3 !p-4 text-sm hover:cursor-pointer font-medium transition-colors ${
                            activeTab === 'register'
                                ? 'text-[#EFB025] border-b-2 border-[#EFB025]'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Create Account
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="!p-6 !space-y-4">
                    {/* Error Message */}
                    {errorMessage && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                            {errorMessage}
                        </div>
                    )}
                    
                    {/* Success Message */}
                    {successMessage && (
                        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                            {successMessage}
                        </div>
                    )}
                    {activeTab === 'register' && (
                        <>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block !text-[16px] font-medium text-gray-700 mb-1">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 !py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EFB025] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block !text-[16px] font-medium text-gray-700 mb-1">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 !py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EFB025] focus:border-transparent"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block !text-[16px] font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-3 !py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EFB025] focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block !text-[16px] font-medium text-gray-700 mb-1">
                                    Institution/Organization
                                </label>
                                <input
                                    type="text"
                                    name="institution"
                                    value={formData.institution}
                                    onChange={handleInputChange}
                                    className="w-full px-3 !py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EFB025] focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block !text-[16px] font-medium text-gray-700 mb-1">
                                    Field of Study
                                </label>
                                <select
                                    name="fieldOfStudy"
                                    value={formData.fieldOfStudy}
                                    onChange={handleInputChange}
                                    className="w-full px-3 !py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EFB025] focus:border-transparent"
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
                            </div>
                        </>
                    )}

                    <div>
                        <label className="block !text-[16px] font-medium text-gray-700 mb-1">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 !py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EFB025] focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block !text-[16px] font-medium text-gray-700 mb-1">
                            Password *
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 !py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EFB025] focus:border-transparent pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? '👁️' : '👁️‍🗨️'}
                            </button>
                        </div>
                    </div>

                    {activeTab === 'register' && (
                        <div>
                            <label className="block !text-[16px] font-medium text-gray-700 mb-1">
                                Confirm Password *
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 !py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EFB025] focus:border-transparent pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'register' && (
                        <div className="flex items-center !space-x-2">
                            <input
                                type="checkbox"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleInputChange}
                                required
                                className="mt-1"
                            />
                            <label className="!text-[16px] text-gray-600">
                                I agree to the{' '}
                                <a href="#" className="text-[#EFB025] hover:underline">
                                    Terms of Service
                                </a>{' '}
                                and{' '}
                                <a href="#" className="text-[#EFB025] hover:underline">
                                    Privacy Policy
                                </a>
                            </label>
                        </div>
                    )}

                    {activeTab === 'login' && (
                        <div className="flex items-center justify-between">
                            <label className="flex items-center !space-x-2 !text-[16px]">
                                <input type="checkbox" className="rounded" />
                                <span className="!text-[16px] text-gray-600">Remember me</span>
                            </label>
                            <a href="#" className="!text-[16px] text-[#EFB025] hover:underline">
                                Forgot password?
                            </a>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[#EFB025] text-white !py-3 !px-4 rounded-md font-medium hover:bg-[#d4a020] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                {activeTab === 'login' ? 'Signing In...' : 'Creating Account...'}
                            </div>
                        ) : (
                            activeTab === 'login' ? 'Sign In' : 'Create Account'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
} 