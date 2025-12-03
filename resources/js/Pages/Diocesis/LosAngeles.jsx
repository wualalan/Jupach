import React from 'react';
import { Head, Link } from '@inertiajs/react';
import WikiLayout from '@/Layouts/WikiLayout';

export default function DiocesisLosAngeles({ auth }) {
    return (
        <WikiLayout user={auth.user}>
            <Head title="Diócesis de Los Ángeles - JUPACH" />

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-gray-100">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                        Diócesis de Los Ángeles
                    </h1>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">Centro-Sur de Chile</span>
                        <span>•</span>
                        <span>JUPACH Los Ángeles - Grupo Fundador</span>
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
                <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 shadow-sm border-l-4 border-green-500">
                    <p className="text-lg leading-relaxed text-gray-800 font-medium">
                        La Diócesis de Los Ángeles tiene un lugar especial en la historia de JUPACH,
                        ya que aquí se fundó uno de los primeros grupos del movimiento en 1966,
                        junto con Laja. Es la cuna de nuestra organización.
                    </p>
                </section>

                {/* Parroquias Section */}
                <section className="bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <span className="mr-3">⛪</span>
                        Parroquias y Comunidades
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Parroquia Cristo Rey */}
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                            <div className="relative h-64">
                                <img
                                    src="/images/jupach_cristo_rey.jpg"
                                    alt="JUPACH Cristo Rey"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Parroquia Cristo Rey
                                </h3>
                                <p className="text-sm text-gray-700">
                                    Comunidad activa de JUPACH comprometida con la formación de jóvenes y el servicio comunitario.
                                </p>
                            </div>
                        </div>

                        {/* Parroquia Perpetuo Socorro */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                            <div className="relative h-64">
                                <img
                                    src="/images/jupach_perpetuo_socorro.jpg"
                                    alt="JUPACH Perpetuo Socorro"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Parroquia Perpetuo Socorro
                                </h3>
                                <p className="text-sm text-gray-700">
                                    Espacio de encuentro y crecimiento en la fe para niños, niñas y jóvenes de la comunidad.
                                </p>
                            </div>
                        </div>

                        {/* Parroquia Sagrada Familia */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                            <div className="relative h-64">
                                <img
                                    src="/images/jupach_sagrada_familia.jpg"
                                    alt="JUPACH Sagrada Familia"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Parroquia Sagrada Familia
                                </h3>
                                <p className="text-sm text-gray-700">
                                    Comunidad familiar que vive el evangelio a través de la recreación y el compartir fraterno.
                                </p>
                            </div>
                        </div>

                        {/* Parroquia Santiago Apóstol */}
                        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                            <div className="relative h-64">
                                <img
                                    src="/images/jupach_santiago_apostol.png"
                                    alt="JUPACH Santiago Apóstol"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Parroquia Santiago Apóstol
                                </h3>
                                <p className="text-sm text-gray-700">
                                    Grupo activo que continúa la misión de evangelizar a través del juego y la recreación.
                                </p>
                            </div>
                        </div>

                        {/* Parroquia STM */}
                        <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow md:col-span-2">
                            <div className="flex flex-col md:flex-row">
                                <div className="relative md:w-1/2 h-64">
                                    <img
                                        src="/images/jupach_stm.jpg"
                                        alt="JUPACH STM"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6 md:w-1/2 flex flex-col justify-center">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Parroquia Santa Teresa de los Andes (STM)
                                    </h3>
                                    <p className="text-sm text-gray-700">
                                        Una de las comunidades más activas, organizando campamentos, encuentros semanales
                                        y actividades de servicio para toda la diócesis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Activities */}
                <section className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 shadow-md border-2 border-orange-300">
                        <div className="text-4xl mb-4">⭐</div>
                        <h3 className="text-xl font-bold text-orange-900 mb-3">Grupo Fundador</h3>
                        <p className="text-sm text-gray-700">
                            Uno de los primeros grupos de JUPACH en Chile (1966), manteniendo viva la tradición fundacional.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-md border-2 border-blue-300">
                        <div className="text-4xl mb-4">🏕️</div>
                        <h3 className="text-xl font-bold text-blue-900 mb-3">Campamentos Tradicionales</h3>
                        <p className="text-sm text-gray-700">
                            Continuando la tradición de campamentos que inició el movimiento en 1968.
                        </p>
                    </div>
                </section>
            </div>
        </WikiLayout>
    );
}
