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
                            En 1965, el Padre Andrés Materne y Marleen Buekens vinieron de Bélgica a Chile
                            e iniciaron sus primeros pasos hacia el movimiento juvenil católico en Chile.
                        </p>
                        <p className="text-base leading-relaxed text-gray-700">
                            En 1966, el movimiento fue llamado <strong>JUPACH</strong> (Juventud Parroquial Chilena),
                            nombre dado por los mismos integrantes. Los primeros grupos se fundaron en
                            <strong> Talcahuano</strong> y <strong>Santa María de Los Ángeles</strong>.
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
                                    Llegan desde Bélgica el Padre Andrés Materne y Marleen Buekens e inician sus primeros pasos hacia el movimiento.
                                </p>
                            </div>
                            <div className="border-l-4 border-green-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1966</h3>
                                <p className="text-gray-700">
                                    El movimiento comienza a denominarse JUPACH (Juventud Parroquial Chilena), nombre dado por los mismos integrantes. Comienza el movimiento en Talcahuano y en Santa María de Los Angeles.
                                </p>
                            </div>
                            <div className="border-l-4 border-purple-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1968</h3>
                                <p className="text-gray-700">
                                    Se dan las primeras experiencias sobre Campamentos Jupachinos.
                                </p>
                            </div>
                            <div className="border-l-4 border-pink-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1971</h3>
                                <p className="text-gray-700">
                                    Año de renovación del Movimiento. Se afirma el trabajo dirigido a niños y jóvenes en su tiempo libre, para dar una formación integral a la persona.
                                </p>
                            </div>
                            <div className="border-l-4 border-orange-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1973</h3>
                                <p className="text-gray-700">
                                    Se crea el Consejo Nacional de JUPACH en Concepción. Nuevos grupos nacen en la diócesis de Santiago, Concepción y Los Angeles. A la vez se toman los primeros contactos en Iquique y Linares.
                                </p>
                            </div>
                            <div className="border-l-4 border-red-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1974</h3>
                                <p className="text-gray-700">
                                    Primera edición del "Manual de JUPACH" como orientación para los dirigentes. Primer encuentro jupachino en Concepción con delegaciones de Santiago y Los Angeles.
                                </p>
                            </div>
                            <div className="border-l-4 border-yellow-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1975</h3>
                                <p className="text-gray-700">
                                    JUPACH es reconocido y afiliado a la FIMCAP.
                                </p>
                            </div>
                            <div className="border-l-4 border-indigo-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1976</h3>
                                <p className="text-gray-700">
                                    Monseñor Sergio Contreras inaugura en Concepción la casa zonal para JUPACH, en las Heras 1546.
                                </p>
                            </div>
                            <div className="border-l-4 border-teal-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1978</h3>
                                <p className="text-gray-700">
                                    Monseñor Manuel Sanchez reconoce oficialmente a JUPACH como movimiento de la arquidiócesis de Concepción.
                                </p>
                            </div>
                            <div className="border-l-4 border-cyan-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1979</h3>
                                <p className="text-gray-700">
                                    Primer campamento Nacional de dirigentes en Trupán.
                                </p>
                            </div>
                            <div className="border-l-4 border-lime-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1980</h3>
                                <p className="text-gray-700">
                                    Primer Coypulli: Campamento general de secciones que se realiza cada 5 años. Primera asamblea nacional en Pinares.
                                </p>
                            </div>
                            <div className="border-l-4 border-emerald-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1981</h3>
                                <p className="text-gray-700">
                                    Publicación de la segunda Edición del Manual de JUPACH a cargo del equipo diocesano de Concepción. Primera reunión general de FIMCAP en Londres, siendo representado el movimiento por 2 integrantes.
                                </p>
                            </div>
                            <div className="border-l-4 border-rose-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1983</h3>
                                <p className="text-gray-700">
                                    Primera Jornada Nacional de jefes de Grupos, en Los Angeles. Primer campamento Nacional de azules en Tomé. Se establece en Concepción el Equipo Coordinador Nacional. Segunda reunión general de FIMCAP en Marselle. JUPACH se hace presente nuevamente con 2 representantes. Se inicia la experiencia Jupachina en el extremo Norte del País: Arica.
                                </p>
                            </div>
                            <div className="border-l-4 border-amber-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1984</h3>
                                <p className="text-gray-700">
                                    Por vez primera se celebra a nivel Nacional el "Día Nacional del Jupachino".
                                </p>
                            </div>
                            <div className="border-l-4 border-fuchsia-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1985</h3>
                                <p className="text-gray-700">
                                    Se realiza el segundo Coypulli en Los Angeles.
                                </p>
                            </div>
                            <div className="border-l-4 border-violet-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1986</h3>
                                <p className="text-gray-700">
                                    Asamblea general de FIMCAP. Primer campamento Nacional de Jefes de grupo. El pañolín es reemplazado por el uso del corbatín, nuestro principal símbolo Jupachino. Se toman los primeros contactos con los amigos de Paraguay.
                                </p>
                            </div>
                            <div className="border-l-4 border-sky-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1987</h3>
                                <p className="text-gray-700">
                                    Nace JUPACH en Valparaíso y Ancud.
                                </p>
                            </div>
                            <div className="border-l-4 border-slate-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1988</h3>
                                <p className="text-gray-700">
                                    JUPACH es reconocido a nivel Nacional como un "Movimiento Apostólico de la Iglesia Chilena" por la conferencia episcopal. Monseñor Alejandro Goic K. inaugura las nuevas oficinas Nacionales de JUPACH en Concepción. El movimiento es visitado por representantes de la FIMCAP. Se realiza un segundo contacto con Paraguay, donde se formaliza el naciente movimiento NIPPAC.
                                </p>
                            </div>
                            <div className="border-l-4 border-stone-500 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900">1989</h3>
                                <p className="text-gray-700">
                                    Se publica la Tercera Edición del Manual de JUPACH, a cargo del equipo coordinador Nacional. Reunión General de FIMCAP en Bélgica.
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
                        En 1986 el pañolín fue reemplazado por el corbatín, que se convirtió en el
                        principal símbolo jupachino que utilizamos hasta hoy. También se realizó el
                        primer contacto internacional con Paraguay.
                    </p>
                </div>

                {/* International Connection */}
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 shadow-md border-2 border-blue-300">
                    <div className="text-3xl mb-3">🌍</div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Conexión Internacional</h3>
                    <p className="text-gray-700">
                        En 1988, JUPACH fue reconocido oficialmente como "Movimiento Apostólico de la
                        Iglesia Chilena" por la conferencia episcopal. Ese mismo año, se inauguraron las
                        oficinas nacionales en Concepción y se formalizó el contacto con Paraguay (NIPPAC).
                    </p>
                </div>
            </div>
        </WikiLayout>
    );
}
