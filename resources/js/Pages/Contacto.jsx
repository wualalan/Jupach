import React from 'react';
import { Head } from '@inertiajs/react';
import WikiLayout from '@/Layouts/WikiLayout';

export default function Contacto({ auth }) {
    return (
        <WikiLayout user={auth.user}>
            <Head title="Contacto - Jupach" />

            {/* Modern Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-gray-100">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                        Contacto
                    </h1>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-bold">Contacto</span>
                        <span>•</span>
                        <span>Conecta con nosotros</span>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="prose prose-base max-w-none text-gray-700 leading-relaxed">
                <div className="space-y-8">
                    {/* Introduction */}
                    <section className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 shadow-sm border-l-4 border-red-500">
                        <p className="text-lg leading-relaxed text-gray-800 font-medium">
                            ¡Queremos mantenernos en contacto contigo! Síguenos en nuestras <strong>redes sociales</strong> para
                            estar al tanto de todas nuestras actividades, campamentos, eventos y más.
                        </p>
                    </section>

                    {/* Redes Sociales */}
                    <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="mr-3 text-3xl">📱</span>
                            Redes Sociales
                        </h2>

                        <div className="space-y-6">
                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/jupach_diocesisla/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-lg group"
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform">
                                    📸
                                </div>
                                <div className="ml-6 flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                                        Instagram
                                    </h3>
                                    <p className="text-gray-600 mt-1">@jupach_diocesisla</p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        Síguenos para ver fotos de nuestras actividades, campamentos y eventos especiales
                                    </p>
                                </div>
                                <div className="flex-shrink-0 ml-4">
                                    <svg className="w-6 h-6 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </a>

                            {/* Placeholder para más redes sociales */}
                            <div className="bg-gray-50 rounded-xl p-6 border-2 border-dashed border-gray-300">
                                <div className="text-center text-gray-500">
                                    <p className="text-lg font-semibold mb-2">¿Tienes más redes sociales?</p>
                                    <p className="text-sm">
                                        Contáctanos para agregar más formas de conectar con la comunidad jupachina
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Información de Contacto */}
                    <section className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                            <span className="mr-3 text-3xl">💬</span>
                            ¿Quieres ser parte de JUPACH?
                        </h2>
                        <p className="text-base leading-relaxed text-gray-700 mb-4">
                            Si estás interesado en unirte a nuestra comunidad o tienes preguntas sobre nuestras
                            actividades, no dudes en contactarnos a través de nuestras redes sociales.
                        </p>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="font-bold text-blue-900 mb-3 text-lg">Estamos presentes en:</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-center">
                                    <span className="text-blue-500 mr-2">📍</span>
                                    Diócesis de Los Ángeles
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500 mr-2">👥</span>
                                    Grupos en diferentes parroquias
                                </li>
                                <li className="flex items-center">
                                    <span className="text-purple-500 mr-2">⛪</span>
                                    Actividades semanales y campamentos
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 shadow-lg text-white text-center">
                        <h2 className="text-2xl font-bold mb-4">¡Únete a la familia jupachina!</h2>
                        <p className="text-lg mb-6 text-green-50">
                            Somos una comunidad de niños y jóvenes comprometidos con crecer en la fe y el servicio
                        </p>
                        <a
                            href="https://www.instagram.com/jupach_diocesisla/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-green-50 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            Síguenos en Instagram
                        </a>
                    </section>
                </div>
            </div>
        </WikiLayout>
    );
}
