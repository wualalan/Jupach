import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function WikiLayout({ user, children }) {
    const { url } = usePage();

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            {/* Modern Navbar */}
            <nav className="bg-white shadow-md sticky top-0 z-50 border-t-4 border-blue-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-28">
                        <div className="flex items-center">
                            <Link href={route('wiki.show', 'Jupach')} className="flex-shrink-0 flex items-center">
                                <img src="/images/jupach_logo.png" alt="Jupach Logo" className="h-24 w-auto" />
                            </Link>
                            <div className="hidden md:ml-8 md:flex md:space-x-8">
                                <Link href={route('wiki.show', 'Jupach')} className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    Inicio
                                </Link>
                                <Link href={route('actividades')} className="text-gray-500 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    Actividades
                                </Link>
                                <Link href={route('historia')} className="text-gray-500 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    Historia
                                </Link>
                                <Link href="#" className="text-gray-500 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    Contacto
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            {/* Search Bar */}
                            <div className="relative hidden md:block">
                                <input
                                    type="text"
                                    placeholder="Buscar..."
                                    className="bg-gray-100 border-none rounded-full py-1.5 px-4 text-sm focus:ring-2 focus:ring-blue-400 w-48 transition-all focus:w-64"
                                />
                                <span className="absolute right-3 top-1.5 text-gray-400">🔍</span>
                            </div>

                            {/* User Menu */}
                            <div className="flex items-center space-x-2">
                                {user ? (
                                    <>
                                        <Link href={route('profile.edit')} className="text-sm font-medium text-gray-700 hover:text-blue-600">
                                            {user.name}
                                        </Link>
                                        <Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                            className="bg-red-100 text-red-600 hover:bg-red-200 px-3 py-1.5 rounded-full text-xs font-bold transition-colors"
                                        >
                                            Salir
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link href={route('login')} className="text-gray-600 hover:text-blue-600 text-sm font-medium">Ingresar</Link>
                                        <Link href={route('register')} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-0.5">
                                            Registrarse
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Content Column */}
                    <div className="flex-1">
                        <div className="bg-white rounded-2xl shadow-xl shadow-gray-100 overflow-hidden border border-gray-100 min-h-[600px]">
                            {/* Colorful Top Border for Card */}
                            <div className="h-2 bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400"></div>
                            <div className="p-8">
                                {children}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Column (Optional Widgets) */}
                    <div className="w-full lg:w-80 space-y-6">
                        {/* Widget 1: Quick Links */}
                        <div className="bg-white rounded-xl shadow-lg shadow-orange-50 p-6 border border-orange-100">
                            <h3 className="text-lg font-bold text-orange-600 mb-4 flex items-center">
                                <span className="bg-orange-100 p-2 rounded-lg mr-2">🌟</span>
                                Destacados
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="#" className="block p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors text-orange-800 text-sm font-medium">
                                        Próximos Campamentos
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block p-3 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors text-yellow-800 text-sm font-medium">
                                        Cancionero 2025
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors text-green-800 text-sm font-medium">
                                        Guía del Voluntario
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Widget 2: Community */}
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg shadow-blue-200 p-6 text-white">
                            <h3 className="text-lg font-bold mb-2">Comunidad</h3>
                            <p className="text-blue-100 text-sm mb-4">¡Únete a nuestro servidor de Discord para chatear con otros miembros!</p>
                            <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors">
                                Conectar Ahora
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} Wiki Jupach. Creado con ❤️ y Laravel.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
