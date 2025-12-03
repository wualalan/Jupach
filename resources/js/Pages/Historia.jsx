import React from 'react';
import { Head, Link } from '@inertiajs/react';
import WikiLayout from '@/Layouts/WikiLayout';

export default function Historia({ auth }) {
    return (
        <WikiLayout user={auth.user}>
            <Head title="Historia de Jupach" />

            {/* Modern Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-gray-100">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                        Historia de Jupach
                    </h1>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-bold">Historia</span>
                        <span>•</span>
                        <span>Nuestra trayectoria</span>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="prose prose-base max-w-none text-gray-700 leading-relaxed">
                <div className="space-y-8">
                    {/* Introduction */}
                    <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-sm border-l-4 border-blue-500">
                        <p className="text-lg leading-relaxed text-gray-800 font-medium">
                            Juventud Parroquial Chilena (JUPACH) es una organización juvenil católica en Chile,
                            además es miembro de la organización internacional <strong>FIMCAP</strong> con sede en Bélgica.
                        </p>
                    </section>

                    {/* Timeline Section */}
                    <section className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-orange-900 mb-6 flex items-center">
                            <span className="mr-3">📖</span>
                            Nuestros Orígenes
                        </h2>
                        <p className="text-base leading-relaxed text-gray-700 mb-4">
                            En 1965, el P. Andrés Materne y Felix Eicher vinieron de Bélgica a Chile y
                            ayudaron a construir estructuras para el trabajo juvenil católico en Chile e
                            iniciaron un movimiento juvenil.
                        </p>
                        <p className="text-base leading-relaxed text-gray-700">
                            En 1966, el movimiento juvenil fue llamado <strong>JUPACH</strong> (Abreviación para
                            Juventud Parroquial Chilena). Los primeros grupos se fundaron en <strong>Laja</strong> y
                            <strong> Los Ángeles</strong>, Chile.
                        </p>
                    </section>

                    {/* Milestones Section */}
                    <section className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                            <span className="mr-3">🎯</span>
                            Hitos Importantes
                        </h2>

                        {/* Historical Image 1 */}
                        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                            <img
                                src="/images/imagen 1.jpg"
                                alt="Historia de JUPACH - Primeros años"
                                className="w-full h-auto object-cover"
                            />
                            <div className="bg-blue-900 text-white p-3 text-center text-sm font-medium">
                                Los primeros años de JUPACH
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="border-l-4 border-blue-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1965</h3>
                                <p className="text-gray-700">
                                    El P. Andrés Materne y Felix Eicher llegan desde Bélgica a Chile para
                                    ayudar a construir estructuras para el trabajo juvenil católico.
                                </p>
                            </div>
                            <div className="border-l-4 border-green-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1966</h3>
                                <p className="text-gray-700">
                                    Nace oficialmente JUPACH (Juventud Parroquial Chilena). Los primeros
                                    grupos se fundan en Laja y Los Ángeles.
                                </p>
                            </div>
                            <div className="border-l-4 border-purple-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1968</h3>
                                <p className="text-gray-700">
                                    El nuevo movimiento juvenil organiza sus primeros campamentos para jóvenes,
                                    una tradición que continúa hasta hoy.
                                </p>
                            </div>
                            <div className="border-l-4 border-orange-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1973</h3>
                                <p className="text-gray-700">
                                    Se funda el "Consejo Nacional" de JUPACH en Concepción, Chile, que administra
                                    la organización juvenil a nivel nacional.
                                </p>
                            </div>
                            <div className="border-l-4 border-red-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1974</h3>
                                <p className="text-gray-700">
                                    Se publica el "Manual de JUPACH", un folleto para los líderes de la organización
                                    con la información más importante sobre el movimiento.
                                </p>
                            </div>
                            <div className="border-l-4 border-yellow-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1975</h3>
                                <p className="text-gray-700">
                                    JUPACH es adoptado como miembro de pleno derecho de FIMCAP, consolidando su
                                    presencia a nivel internacional.
                                </p>
                            </div>
                        </div>

                        {/* Historical Image 2 */}
                        <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
                            <img
                                src="/images/imagen 2.jpeg"
                                alt="Historia de JUPACH - Crecimiento"
                                className="w-full h-auto object-cover"
                            />
                            <div className="bg-blue-900 text-white p-3 text-center text-sm font-medium">
                                El crecimiento y consolidación de JUPACH
                            </div>
                        </div>
                    </section>

                    {/* Values Section */}
                    <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
                            <span className="mr-3">💚</span>
                            Nuestra Misión
                        </h2>
                        <p className="text-base leading-relaxed text-gray-700">
                            JUPACH es una comunidad dedicada al desarrollo integral de niños, niñas y
                            jóvenes a través de la recreación, el servicio y la fe. Evangelizar y educar
                            a través de la recreación, formando cristianos comprometidos y ciudadanos honestos.
                        </p>
                    </section>

                    {/* Legacy Section */}
                    <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-purple-900 mb-6 flex items-center">
                            <span className="mr-3">✨</span>
                            Nuestro Legado
                        </h2>
                        <p className="text-base leading-relaxed text-gray-700">
                            Con más de 55 años de historia, JUPACH ha impactado la vida de miles de jóvenes
                            en Chile, formándolos como líderes comprometidos con su fe y su comunidad.
                            Hoy seguimos creciendo y llevando el mensaje de esperanza a nuevas generaciones.
                        </p>
                    </section>
                </div>
            </div>

            {/* Side Widgets */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
                {/* Fun Fact Widget */}
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 shadow-md border-2 border-yellow-300">
                    <div className="text-3xl mb-3">🎉</div>
                    <h3 className="text-xl font-bold text-orange-900 mb-2">Dato Curioso</h3>
                    <p className="text-gray-700">
                        Los primeros campamentos de JUPACH en 1968 sentaron las bases de una tradición
                        que ha formado a generaciones de jóvenes líderes en Chile.
                    </p>
                </div>

                {/* International Connection */}
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 shadow-md border-2 border-blue-300">
                    <div className="text-3xl mb-3">🌍</div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Conexión Internacional</h3>
                    <p className="text-gray-700">
                        Como miembro de FIMCAP desde 1975, JUPACH forma parte de una red global de
                        organizaciones juveniles católicas con presencia en todo el mundo.
                    </p>
                </div>
            </div>
        </WikiLayout>
    );
}
