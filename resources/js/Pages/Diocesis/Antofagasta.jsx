import React from 'react';
import { Head, Link } from '@inertiajs/react';
import WikiLayout from '@/Layouts/WikiLayout';

export default function DiocesisAntofagasta({ auth }) {
    return (
        <WikiLayout user={auth.user}>
            <Head title="Diócesis de Antofagasta - JUPACH" />

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-gray-100">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                        Diócesis de Antofagasta
                    </h1>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-bold">Norte de Chile</span>
                        <span>•</span>
                        <span>JUPACH Antofagasta</span>
                    </div>
                </div>
                <Link
                    href={route('actividades')}
                    className="mt-4 md:mt-0 flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-bold transition-colors"
                >
                    ← Volver a Actividades
                </Link>
            </div>

            {/* Content */}
            <div className="space-y-8">
                {/* Introduction */}
                <section className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-sm border-l-4 border-yellow-500">
                    <p className="text-lg leading-relaxed text-gray-800 font-medium">
                        La Diócesis de Antofagasta representa a JUPACH en el norte de Chile,
                        llevando el mensaje de fe, recreación y servicio a las comunidades del desierto.
                    </p>
                </section>

                {/* Parroquias Section - Para agregar fotos después */}
                <section className="bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <span className="mr-3">⛪</span>
                        Parroquias y Comunidades
                    </h2>

                    <div className="space-y-6">
                        {/* Espacio para agregar parroquias con fotos */}
                        <div className="bg-yellow-50 border-2 border-dashed border-yellow-300 rounded-xl p-8 text-center">
                            <div className="text-4xl mb-4">📸</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Parroquias de Antofagasta
                            </h3>
                            <p className="text-gray-600">
                                Aquí se agregarán las fotos y descripciones de cada parroquia
                            </p>
                        </div>
                    </div>
                </section>

                {/* Activities */}
                <section className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-md border-2 border-blue-300">
                        <div className="text-4xl mb-4">🏕️</div>
                        <h3 className="text-xl font-bold text-blue-900 mb-3">Campamentos</h3>
                        <p className="text-sm text-gray-700">
                            Campamentos en el desierto y la costa, experiencias únicas de encuentro con Dios y la naturaleza.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-md border-2 border-green-300">
                        <div className="text-4xl mb-4">🤝</div>
                        <h3 className="text-xl font-bold text-green-900 mb-3">Servicio Comunitario</h3>
                        <p className="text-sm text-gray-700">
                            Apoyo a las comunidades locales a través de actividades de servicio y solidaridad.
                        </p>
                    </div>
                </section>
            </div>
        </WikiLayout>
    );
}
