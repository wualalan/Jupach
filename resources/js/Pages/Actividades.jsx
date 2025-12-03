import React from 'react';
import { Head, Link } from '@inertiajs/react';
import WikiLayout from '@/Layouts/WikiLayout';

export default function Actividades({ auth }) {
    const diocesis = [
        {
            nombre: "Diócesis de Antofagasta",
            region: "Norte de Chile",
            color: "bg-yellow-100 border-yellow-500 hover:bg-yellow-200",
            slug: "antofagasta"
        },
        {
            nombre: "Diócesis de Concepción",
            region: "Centro-Sur de Chile",
            color: "bg-blue-100 border-blue-500 hover:bg-blue-200",
            slug: "concepcion"
        },
        {
            nombre: "Diócesis de Los Ángeles",
            region: "Centro-Sur de Chile",
            color: "bg-green-100 border-green-500 hover:bg-green-200",
            slug: "los-angeles"
        }
    ];

    return (
        <WikiLayout user={auth.user}>
            <Head title="Actividades por Diócesis" />

            {/* Modern Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-gray-100">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                        Actividades por Diócesis
                    </h1>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">Actividades</span>
                        <span>•</span>
                        <span>JUPACH en todo Chile</span>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="space-y-8">
                {/* Introduction */}
                <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 shadow-sm border-l-4 border-green-500">
                    <p className="text-lg leading-relaxed text-gray-800 font-medium">
                        JUPACH está presente en tres diócesis principales de Chile, cada una con sus
                        propias parroquias y comunidades activas. Haz clic en cada diócesis para conocer
                        más sobre sus parroquias y actividades.
                    </p>
                </section>

                {/* Map Section */}
                <section className="bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <span className="mr-3">🗺️</span>
                        Mapa de Chile - Diócesis JUPACH
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Chile Map */}
                        <div className="relative">
                            <div className="rounded-xl overflow-hidden shadow-lg border-4 border-blue-500">
                                <img
                                    src="/images/chile.png"
                                    alt="Mapa de Chile con Diócesis JUPACH"
                                    className="w-full h-auto object-contain bg-white"
                                />
                            </div>
                            <div className="mt-4 text-center text-sm text-gray-600 font-medium">
                                Chile - JUPACH de Norte a Sur
                            </div>
                        </div>

                        {/* Diocesis List */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                📍 Selecciona una Diócesis
                            </h3>
                            <div className="space-y-4">
                                {diocesis.map((diocesis_item, index) => (
                                    <Link
                                        key={index}
                                        href={route('diocesis.show', diocesis_item.slug)}
                                        className={`${diocesis_item.color} border-l-4 rounded-lg p-6 shadow-md transition-all cursor-pointer block`}
                                    >
                                        <h4 className="font-bold text-gray-900 text-xl mb-2">
                                            {diocesis_item.nombre}
                                        </h4>
                                        <p className="text-sm text-gray-600 mb-3">
                                            📍 {diocesis_item.region}
                                        </p>
                                        <div className="text-sm text-blue-600 font-medium">
                                            Ver parroquias y actividades →
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Activities Types Section */}
                <section className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-md border-2 border-blue-300">
                        <div className="text-4xl mb-4">🏕️</div>
                        <h3 className="text-xl font-bold text-blue-900 mb-3">Campamentos</h3>
                        <p className="text-sm text-gray-700">
                            Campamentos de verano e invierno para conectar con la naturaleza y fortalecer
                            la comunidad. Una tradición desde 1968.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-md border-2 border-green-300">
                        <div className="text-4xl mb-4">🤝</div>
                        <h3 className="text-xl font-bold text-green-900 mb-3">Servicio Comunitario</h3>
                        <p className="text-sm text-gray-700">
                            Ayudando a nuestras comunidades locales a través del servicio y la solidaridad,
                            poniendo en práctica nuestra fe.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-md border-2 border-purple-300">
                        <div className="text-4xl mb-4">📚</div>
                        <h3 className="text-xl font-bold text-purple-900 mb-3">Encuentros Semanales</h3>
                        <p className="text-sm text-gray-700">
                            Juegos, reflexión y compartir. Espacios semanales para crecer juntos en la fe
                            y la amistad.
                        </p>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-sm text-center">
                    <h2 className="text-2xl font-bold text-orange-900 mb-4">
                        ¿Quieres participar?
                    </h2>
                    <p className="text-base text-gray-700 mb-6">
                        Encuentra el grupo JUPACH más cercano a tu diócesis y únete a nuestra gran familia.
                    </p>
                    <Link
                        href={route('wiki.show', 'Jupach')}
                        className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold transition-colors shadow-md hover:shadow-lg"
                    >
                        <span className="mr-2">🏠</span> Volver al Inicio
                    </Link>
                </section>
            </div>
        </WikiLayout>
    );
}
