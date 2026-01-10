// src/pages/Dashboard.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Plus, LogOut, User, BarChart2, Book, Settings } from 'lucide-react';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Navbar */}
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-600 p-2 rounded-lg text-white shadow-md">
                                <BookOpen className="w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold text-gray-900">Bookyard</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full border border-gray-200">
                                <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                    <User className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-sm font-semibold text-gray-700">{user?.name}</span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                title="Sign Out"
                            >
                                <LogOut className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-500 mt-1">Welcome back, here's what's happening today.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                        <div className="bg-blue-50 p-4 rounded-xl text-blue-600">
                            <Book className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Total Books</p>
                            <h3 className="text-2xl font-bold text-gray-900">128</h3>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                        <div className="bg-green-50 p-4 rounded-xl text-green-600">
                            <BarChart2 className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm font-medium">This Month</p>
                            <h3 className="text-2xl font-bold text-gray-900">+12</h3>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                        <div className="bg-purple-50 p-4 rounded-xl text-purple-600">
                            <Settings className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm font-medium">System Status</p>
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                                <h3 className="text-lg font-bold text-gray-900">Active</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link
                        to="/books"
                        className="group bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg shadow-blue-200 hover:shadow-xl hover:scale-[1.02] transition-all"
                    >
                        <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Manage Library</h3>
                        <p className="text-blue-100 text-sm leading-relaxed">
                            View, search, edit, and delete books in your collection. Access the full library management system.
                        </p>
                    </Link>

                    <Link
                        to="/books/create"
                        className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all"
                    >
                        <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                            <Plus className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Add New Book</h3>
                        <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600">
                            Register a new book to the database. Add details like title, author, ISBN, and description.
                        </p>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
