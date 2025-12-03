import React from 'react';
import { Head, Link } from '@inertiajs/react';
import WikiLayout from '@/Layouts/WikiLayout';

export default function DiocesisConcepcion({ auth }) {
    return (
        <WikiLayout user={auth.user}>
            <Head title="Diócesis de Concepción - JUPACH" />

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-gray-100">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                        Diócesis de Concepción
                    </h1>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold">Centro-Sur de Chile</span>
                        <span>•</span>
                        <span>JUPACH Concepción - Consejo Nacional</span>
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
                <section className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-sm border-l-4 border-blue-500">
                    <p className="text-lg leading-relaxed text-gray-800 font-medium">
                        La Diócesis de Concepción es sede del Consejo Nacional de JUPACH desde 1973,
                        siendo un pilar fundamental en la organización y coordinación del movimiento a nivel nacional.
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
                        <div className="bg-blue-50 border-2 border-dashed border-blue-300 rounded-xl p-8 text-center">
                            <div className="text-4xl mb-4">📸</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Parroquias de Concepción
                            </h3>
                            <p className="text-gray-600">
                                Aquí se agregarán las fotos y descripciones de cada parroquia
                            </p>
                        </div>
                    </div>
                </section>

                {/* Activities */}
                <section className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-md border-2 border-purple-300">
                        <div className="text-4xl mb-4">🏛️</div>
                        <h3 className="text-xl font-bold text-purple-900 mb-3">Consejo Nacional</h3>
                        <p className="text-sm text-gray-700">
                            Sede del Consejo Nacional de JUPACH, coordinando las actividades a nivel nacional desde 1973.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-md border-2 border-green-300">
                        <div className="text-4xl mb-4">📚</div>
                        <h3 className="text-xl font-bold text-green-900 mb-3">Formación de Líderes</h3>
                        <p className="text-sm text-gray-700">
                            Programas de formación para líderes juveniles comprometidos con su fe y comunidad.
                        </p>
                    </div>
                </section>
            </div>
        </WikiLayout>
    );
}
