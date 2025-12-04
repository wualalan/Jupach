import React from 'react';
import { Head } from '@inertiajs/react';
import WikiLayout from '@/Layouts/WikiLayout';

export default function Simbolos({ auth }) {
    return (
        <WikiLayout user={auth.user}>
            <Head title="Símbolos de Jupach" />

            {/* Modern Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-gray-100">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                        Símbolos de Jupach
                    </h1>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-bold">Símbolos</span>
                        <span>•</span>
                        <span>Identidad y significado de nuestros emblemas</span>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="prose prose-base max-w-none text-gray-700 leading-relaxed">
                <div className="space-y-8">
                    {/* Introduction */}
                    <section className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8 shadow-sm border-l-4 border-yellow-500">
                        <p className="text-lg leading-relaxed text-gray-800 font-medium">
                            Los <strong>símbolos</strong> de JUPACH representan nuestra identidad como movimiento
                            y nos permiten reconocernos como parte de una gran familia jupachina. Cada símbolo
                            tiene un significado profundo que nos conecta con nuestra misión y valores.
                        </p>
                    </section>

                    {/* Torque */}
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-500 shadow-lg">
                        <div className="flex items-start mb-3">
                            <span className="text-3xl mr-3">🔵</span>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1">TORQUE</h3>
                        </div>
                        <div className="mb-4 rounded-lg overflow-hidden shadow-md">
                            <img
                                src="/images/torque.jpg"
                                alt="Torque"
                                className="w-full h-64 object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'flex';
                                }}
                            />
                            <div className="hidden w-full h-64 bg-gradient-to-br from-yellow-100 to-orange-100 items-center justify-center">
                                <span className="text-gray-600 font-semibold">Imagen del Torque</span>
                            </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            <strong>El torque:</strong> no solo sirve para sujetarnos el corbatín, sino que también para
                            identificar a qué familia pertenecemos de acuerdo al color.
                        </p>
                    </div>

                    {/* Cristograma */}
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-500 shadow-lg">
                        <div className="flex items-start mb-3">
                            <span className="text-3xl mr-3">✝️</span>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1">CRISTOGRAMA</h3>
                        </div>
                        <div className="mb-4 rounded-lg overflow-hidden shadow-md">
                            <img
                                src="/images/cristograma.jpg"
                                alt="Cristograma"
                                className="w-full h-64 object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'flex';
                                }}
                            />
                            <div className="hidden w-full h-64 bg-gradient-to-br from-blue-100 to-cyan-100 items-center justify-center">
                                <span className="text-gray-600 font-semibold">Imagen del Cristograma</span>
                            </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            <strong>El Cristograma:</strong> Símbolo que significa <strong>"Cristo con Nosotros"</strong>,
                            presente en la Bandera, el corbatín, el torque, el manual y en donde queramos que esté Jesús,
                            nuestro Hermano Mayor.
                        </p>
                    </div>

                    {/* Pito */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500 shadow-lg">
                        <div className="flex items-start mb-3">
                            <span className="text-3xl mr-3">📢</span>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1">PITO</h3>
                        </div>
                        <div className="mb-4 rounded-lg overflow-hidden shadow-md">
                            <img
                                src="/images/pito.jpg"
                                alt="Pito"
                                className="w-full h-64 object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'flex';
                                }}
                            />
                            <div className="hidden w-full h-64 bg-gradient-to-br from-green-100 to-emerald-100 items-center justify-center">
                                <span className="text-gray-600 font-semibold">Imagen del Pito</span>
                            </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            <strong>El pito:</strong> su sonido es el símbolo con el cual entendemos diversas actividades
                            según sea su forma de soplarlo. Pito largo, pito largo + pito corto y tres pitos.
                        </p>
                    </div>

                    {/* Corbatín */}
                    <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-500 shadow-lg">
                        <div className="flex items-start mb-3">
                            <span className="text-3xl mr-3">👔</span>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1">CORBATÍN</h3>
                        </div>
                        <div className="mb-4 rounded-lg overflow-hidden shadow-md">
                            <img
                                src="/images/corbatin.jpg"
                                alt="Corbatín"
                                className="w-full h-64 object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'flex';
                                }}
                            />
                            <div className="hidden w-full h-64 bg-gradient-to-br from-red-100 to-pink-100 items-center justify-center">
                                <span className="text-gray-600 font-semibold">Imagen del Corbatín</span>
                            </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            <strong>El corbatín:</strong> símbolo que usamos todas las semanas y que nos identifica como
                            Jupachinos con un torque de color verde, rojo, azul, naranjo o de dirigente según corresponda.
                        </p>
                    </div>

                    {/* Bandera */}
                    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-600 shadow-lg">
                        <div className="flex items-start mb-3">
                            <span className="text-3xl mr-3">🚩</span>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1">BANDERA</h3>
                        </div>
                        <div className="mb-4 rounded-lg overflow-hidden shadow-md">
                            <img
                                src="/images/bandera.jpg"
                                alt="Bandera"
                                className="w-full h-64 object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'flex';
                                }}
                            />
                            <div className="hidden w-full h-64 bg-gradient-to-br from-yellow-100 to-amber-100 items-center justify-center">
                                <span className="text-gray-600 font-semibold">Imagen de la Bandera</span>
                            </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            <strong>La Bandera:</strong> Icono de nuestro movimiento, encabeza todo tipo de actividad que
                            realicemos. Sus colores son amarillo y blanco pues, son los colores de la bandera del Vaticano.
                        </p>
                    </div>
                </div>
            </div>
        </WikiLayout>
    );
}
