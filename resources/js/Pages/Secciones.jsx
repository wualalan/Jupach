import React from 'react';
import { Head } from '@inertiajs/react';
import WikiLayout from '@/Layouts/WikiLayout';

export default function Secciones({ auth }) {
    return (
        <WikiLayout user={auth.user}>
            <Head title="Secciones de Jupach" />

            {/* Modern Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-gray-100">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                        Secciones de Jupach
                    </h1>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold">Secciones</span>
                        <span>•</span>
                        <span>Formación por edades</span>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="prose prose-base max-w-none text-gray-700 leading-relaxed">
                <div className="space-y-8">
                    {/* Introduction */}
                    <section className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-sm border-l-4 border-blue-500">
                        <p className="text-lg leading-relaxed text-gray-800 font-medium">
                            JUPACH organiza su trabajo formativo en diferentes <strong>secciones</strong> según
                            la edad de los participantes, permitiendo una formación integral adaptada a cada
                            etapa del desarrollo de niños y jóvenes.
                        </p>
                    </section>

                    {/* Sección 1: Verde */}
                    <section className="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
                        <div className="flex items-center mb-6">
                            <div className="text-4xl mr-4">🌱</div>
                            <div>
                                <h2 className="text-2xl font-bold text-green-900">Sección Verde</h2>
                                <p className="text-sm text-gray-600">6-9 años</p>
                            </div>
                        </div>

                        {/* Aquí puedes agregar imagen */}
                        <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                            <img
                                src="/images/verde.jpg"
                                alt="Sección Verde"
                                className="w-full h-64 object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'flex';
                                }}
                            />
                            <div className="hidden w-full h-64 bg-gradient-to-br from-green-100 to-green-200 items-center justify-center">
                                <span className="text-green-700 text-lg font-semibold">Imagen de Sección Verde</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed">
                                Como su color lo indica, los <strong>Verdes</strong> representan para el movimiento todo un crecimiento.
                                Tal como un fruto que aún no ha madurado, pero que su natural alegría nos promete y alienta la
                                esperanza de un mundo mejor. El JUPACH les ofrece un lugar donde su infancia pueda ser vivida sin
                                manipulaciones.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Por eso los jóvenes dirigentes se encuentran muy atentos a su especial modo de vida y les ayudarán
                                a transitar desde el <strong>YO</strong>, centro del mundo, al <strong>NOSOTROS</strong>, comunitario.
                                La sección verde es en el movimiento el <strong>primer paso a la vida social del niño</strong>.
                            </p>

                            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                                <h3 className="font-bold text-green-900 mb-3 text-lg">Es importante considerar que un Verde:</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Necesita mucho cariño</li>
                                    <li>• Recién se inicia en los primeros contactos de vida grupal</li>
                                    <li>• Posee rica fantasía e imaginación</li>
                                    <li>• Es muy vulnerable y de escasa concentración</li>
                                    <li>• Asocia la imagen (letras-dibujos-símbolos) al concepto del lema</li>
                                    <li>• Requiere de juegos psicomotores y de integración</li>
                                    <li>• El valor que los caracteriza en el movimiento es su <strong>Esperanza y Alegría</strong></li>
                                </ul>
                            </div>

                            {/* El Juego */}
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-lg">
                                <h3 className="font-bold text-green-900 mb-3 text-lg flex items-center">
                                    <span className="mr-2">🎮</span>
                                    EL JUEGO
                                </h3>
                                <p className="text-gray-700 mb-3 font-medium">Puntos a considerar al jugar con Verdes:</p>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Juegos sencillos y de reglas fáciles</li>
                                    <li>• Importante es una buena presentación y motivación del juego (a través de cuentos cortos y personajes)</li>
                                    <li>• Se interesan por juegos de movimiento y en que pongan de manifiesto su destreza física (equilibrio, saltar en un pie, etc.)</li>
                                    <li>• Juegos no muy largos, pero cansadores, sí con mucha fantasía</li>
                                </ul>
                            </div>

                            {/* El Lema */}
                            <div className="bg-gradient-to-r from-yellow-50 to-green-50 p-5 rounded-lg">
                                <h3 className="font-bold text-green-900 mb-3 text-lg flex items-center">
                                    <span className="mr-2">📖</span>
                                    EL LEMA
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    A los verdecitos, se le debe enseñar el lema a través de juegos con <strong>rompecabezas</strong>,
                                    relaciones de figuras y conceptos o cuentos con personajes o títeres, ya que el verde es muy
                                    retraído y todo le entra por la vista y recuerda mejor cosas, personajes, figuras que las
                                    lindas palabras que pueda decir el tío.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    No hay que olvidar que el juego es un efectivo método de enseñanza del lema para todas las
                                    familias. Por último, el primer lugar donde debe vivirse el lema es en la familia jupachina,
                                    luego en la casa, el colegio y con los amigos, esa es la cadena que debe seguirse para dar
                                    por cumplido este objetivo.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Sección 2: Roja */}
                    <section className="bg-white rounded-2xl p-8 shadow-lg border border-red-200">
                        <div className="flex items-center mb-6">
                            <div className="text-4xl mr-4">🔥</div>
                            <div>
                                <h2 className="text-2xl font-bold text-red-900">Sección Roja</h2>
                                <p className="text-sm text-gray-600">10-12 años</p>
                            </div>
                        </div>

                        {/* Aquí puedes agregar imagen */}
                        <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                            <img
                                src="/images/roja.jpg"
                                alt="Sección Roja"
                                className="w-full h-64 object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'flex';
                                }}
                            />
                            <div className="hidden w-full h-64 bg-gradient-to-br from-red-100 to-red-200 items-center justify-center">
                                <span className="text-red-700 text-lg font-semibold">Imagen de Sección Roja</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed">
                                Con su color lleno de energía, los <strong>Rojos</strong> impulsan la marcha del movimiento.
                                Su fuerza creadora va a requerir de un grupo de "iguales", con quienes formarán su pequeña
                                comunidad de juego. Esta les ayudará progresivamente a dejar su etapa infantil, potenciando
                                su propia naturaleza.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                En esta sección el relacionarse con otros es una necesidad, sin embargo, aceptar al otro con
                                todas sus diferencias partiendo de su propia aceptación, será tarea difícil para él ante lo
                                cual el dirigente deberá ayudarlo.
                            </p>

                            <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                                <h3 className="font-bold text-red-900 mb-3 text-lg">Es importante considerar que el Rojo:</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Distingue ya entre la realidad y la fantasía</li>
                                    <li>• Se interesa por lo oculto y misterioso, creando símbolos, signos y claves que tan solo él puede manejar</li>
                                    <li>• Es leal y crítico, pudiendo crear normas que se esmera por cumplir</li>
                                    <li>• Son celosos en "sus cosas", dándose este aspecto en las niñas de una forma mucho más reservada, reflejado en sus sueños y secretos</li>
                                    <li>• El valor que los caracteriza en el movimiento es su <strong>Fuerza Creadora</strong></li>
                                </ul>
                            </div>

                            {/* El Lema */}
                            <div className="bg-gradient-to-r from-yellow-50 to-red-50 p-5 rounded-lg">
                                <h3 className="font-bold text-red-900 mb-3 text-lg flex items-center">
                                    <span className="mr-2">📖</span>
                                    EL LEMA
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Lo vivencian a través de <strong>propósitos bien concretos</strong>, planteados y asumidos
                                    por ellos mismos.
                                </p>
                            </div>

                            {/* El Juego */}
                            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-5 rounded-lg">
                                <h3 className="font-bold text-red-900 mb-3 text-lg flex items-center">
                                    <span className="mr-2">🎮</span>
                                    EL JUEGO
                                </h3>
                                <p className="text-gray-700 mb-3 font-medium">Puntos a considerar al jugar con Rojos:</p>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Los juegos deben tener más reglas y cierto grado de dificultad, de manera que tengan la posibilidad de demostrar sus habilidades y liderazgo</li>
                                    <li>• Gustan de juegos de competencias y en equipo, de relevo, de pista, con pelota</li>
                                    <li>• Juegos animados, de mucha fuerza</li>
                                </ul>
                            </div>

                            {/* Modo de Trabajo */}
                            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-5 rounded-lg">
                                <h3 className="font-bold text-red-900 mb-3 text-lg flex items-center">
                                    <span className="mr-2">🔧</span>
                                    MODO DE TRABAJO
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    A los rojos, con un buen juego, encuestas o entrevistas realizadas por ellos, luego se
                                    discuten las respuestas y verán como el lema es aprendido casi por instinto por los rojitos.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Sección 3: Azul */}
                    <section className="bg-white rounded-2xl p-8 shadow-lg border border-blue-200">
                        <div className="flex items-center mb-6">
                            <div className="text-4xl mr-4">💙</div>
                            <div>
                                <h2 className="text-2xl font-bold text-blue-900">Sección Azul</h2>
                                <p className="text-sm text-gray-600">13-14 años</p>
                            </div>
                        </div>

                        {/* Aquí puedes agregar imagen */}
                        <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                            <img
                                src="/images/azul.jpg"
                                alt="Sección Azul"
                                className="w-full h-64 object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'flex';
                                }}
                            />
                            <div className="hidden w-full h-64 bg-gradient-to-br from-blue-100 to-blue-200 items-center justify-center">
                                <span className="text-blue-700 text-lg font-semibold">Imagen de Sección Azul</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed">
                                Como un cielo profundo o llevando el color del vasto océano, nuestros <strong>Azules</strong> comienzan
                                a internarse definitivamente en el mundo real. Pero este mundo social no siempre se ajusta a lo que
                                ellos habían soñado. Por eso sus amigos dirigentes les acompañan en sus constantes búsquedas,
                                experimentando la vida desde la comunidad jupachina.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Su entrega sincera hace posible asumir ya algunos desafíos concretos, los cuales se alternarán
                                con juegos acordes a sus necesidades.
                            </p>

                            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-900 mb-3 text-lg">Es importante considerar que un Azul:</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Se encuentra en la etapa de la pubertad, es decir, el tiempo de la niñez ha terminado, confirmando con ello su naturaleza sexual</li>
                                    <li>• Gusta llamar la atención, siendo muy vulnerable ante el juicio de los demás</li>
                                    <li>• Emocionalmente es muy inestable</li>
                                    <li>• Requiere que sus cuestionamientos sean satisfechos en forma real y alejado de toda "cátedra moralista o de buenas costumbres"</li>
                                    <li>• Espera que el juego sea dirigido más a su naturaleza interior que a su desarrollo físico</li>
                                    <li>• Asume con mayor facilidad el lema si este es propuesto a partir de hechos concretos</li>
                                    <li>• El valor que les caracteriza en el movimiento es su <strong>Amistad</strong></li>
                                </ul>
                            </div>

                            {/* El Juego */}
                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-3 text-lg flex items-center">
                                    <span className="mr-2">🎮</span>
                                    EL JUEGO
                                </h3>
                                <p className="text-gray-700 mb-3 font-medium">Puntos a considerar al jugar con Azules:</p>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Juegos orientados hacia una presentación personal, más todos los juegos de equipo</li>
                                    <li>• Todos los juegos que exigen mucho esfuerzo, perseverancia, táctica y atrevimiento</li>
                                    <li>• Juegos con reglas más difíciles y donde uno tiene que tomar la iniciativa</li>
                                    <li>• Juegos que requieran un esfuerzo intelectual y de iniciación a los deportes</li>
                                </ul>
                            </div>

                            {/* El Lema */}
                            <div className="bg-gradient-to-r from-yellow-50 to-blue-50 p-5 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-3 text-lg flex items-center">
                                    <span className="mr-2">📖</span>
                                    EL LEMA
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    A los azules ya le puedes conversar el lema, dando ejemplos puntuales y reales, ellos
                                    también te pueden ayudar con sus vivencias personales.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    No hay que olvidar que el juego es un efectivo método de enseñanza del lema para todas
                                    las familias. Por último, el primer lugar donde debe vivirse el lema es en la familia
                                    jupachina, luego en la casa, el colegio y con los amigos, esa es la cadena que debe
                                    seguirse para dar por cumplido este objetivo.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Sección 4: Aspirantes */}
                    <section className="bg-white rounded-2xl p-8 shadow-lg border border-purple-200">
                        <div className="flex items-center mb-6">
                            <div className="text-4xl mr-4">🌟</div>
                            <div>
                                <h2 className="text-2xl font-bold text-purple-900">Sección Aspirante</h2>
                                <p className="text-sm text-gray-600">15 años</p>
                            </div>
                        </div>

                        {/* Aquí puedes agregar imagen */}
                        <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                            <img
                                src="/images/aspirantes.jpg"
                                alt="Sección Aspirante"
                                className="w-full h-64 object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'flex';
                                }}
                            />
                            <div className="hidden w-full h-64 bg-gradient-to-br from-purple-100 to-purple-200 items-center justify-center">
                                <span className="text-purple-700 text-lg font-semibold">Imagen de Aspirantes</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed">
                                Son jóvenes de <strong>15 años</strong> que forman un <strong>"núcleo de amigos"</strong> el que,
                                en principio estará conformado por los jupachinos provenientes de la sección Azul.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Desde este año los aspirantes pasarán al equipo de dirigentes a los 16 años, es decir,
                                estarán un año como aspirantes.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Han de ser acompañados por un dirigente de vasta experiencia y responsabilidad, quien se
                                ocupará de favorecer el crecimiento personal de cada uno de esos jóvenes, basado en una
                                vivencia en conjunto. Para esto facilitará todos los medios disponibles para llegar a
                                construir, a partir de la unión de todos, una fuerza activa al interior de su grupo y de
                                la comunidad.
                            </p>

                            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-900 mb-3 text-lg">Es importante señalar que su proceso de formación:</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Descansará en dos pilares: por un lado se entenderá que han llegado al punto de descubrir
                                    qué es lo que hay tras las formas y métodos jupachinos, es decir, el aspirante comenzará
                                    a escudriñar en los <strong>"POR QUÉ DEL JUPACH"</strong>, proyectándolos hacia afuera.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Al mismo tiempo y gracias a su relación con los demás, tendrá la posibilidad de experimentar
                                    sus propias formas de servicio, no solo en el grupo, sino en todos los ámbitos que le ofrece
                                    la comunidad.
                                </p>
                                <p className="text-gray-700 leading-relaxed font-medium">
                                    Ellos están integrándose a la sociedad de la cual forman parte y poco a poco irán asumiendo
                                    su responsabilidad en ella.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Metodología */}
                    <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
                            <span className="mr-3">📚</span>
                            Metodología de Trabajo
                        </h2>
                        <p className="text-base leading-relaxed text-gray-700 mb-4">
                            Cada sección trabaja con una <strong>metodología adaptada</strong> a la edad y
                            necesidades de sus integrantes, siempre bajo los principios de:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow">
                                <h3 className="font-bold text-green-900 mb-2">🎯 Aprender haciendo</h3>
                                <p className="text-sm text-gray-700">Actividades prácticas y experienciales</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <h3 className="font-bold text-green-900 mb-2">👥 Vida de grupo</h3>
                                <p className="text-sm text-gray-700">Trabajo en equipo y comunidad</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <h3 className="font-bold text-green-900 mb-2">⛪ Formación cristiana</h3>
                                <p className="text-sm text-gray-700">Valores evangélicos en acción</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <h3 className="font-bold text-green-900 mb-2">🌱 Crecimiento personal</h3>
                                <p className="text-sm text-gray-700">Desarrollo integral del individuo</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </WikiLayout>
    );
}
