import React from 'react';
import { Head, Link } from '@inertiajs/react';
import WikiLayout from '@/Layouts/WikiLayout';

export default function History({ auth, page, revisions }) {
    const displayTitle = page.title.replace(/_/g, ' ');

    return (
        <WikiLayout user={auth.user}>
            <Head title={`Historial: ${displayTitle}`} />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-gray-100">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                        Historial de Revisiones
                    </h1>
                    <p className="text-gray-500">
                        Ver cambios para <Link href={route('wiki.show', page.title)} className="text-blue-600 hover:underline font-bold">{displayTitle}</Link>
                    </p>
                </div>

                <Link
                    href={route('wiki.show', page.title)}
                    className="mt-4 md:mt-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-bold transition-colors text-sm"
                >
                    ← Volver al Artículo
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-bold">
                                <th className="px-6 py-4">Fecha y Hora</th>
                                <th className="px-6 py-4">Usuario</th>
                                <th className="px-6 py-4">Tamaño</th>
                                <th className="px-6 py-4">Resumen</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {revisions.data.map((revision) => (
                                <tr key={revision.id} className="hover:bg-blue-50 transition-colors group">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-bold text-gray-900">
                                            {new Date(revision.created_at).toLocaleDateString()}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            {new Date(revision.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs mr-3">
                                                {revision.user ? revision.user.name.charAt(0).toUpperCase() : '?'}
                                            </div>
                                            <span className="text-sm font-medium text-gray-900">
                                                {revision.user ? revision.user.name : (revision.user_ip || 'Anónimo')}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 text-xs font-bold rounded-full bg-green-100 text-green-800">
                                            {revision.content.length} bytes
                                        </span>
                                        {revision.is_minor && (
                                            <span className="ml-2 px-2 py-1 text-xs font-bold rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                                                Menor
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm text-gray-600 italic">
                                            {revision.summary || <span className="text-gray-400 not-italic">Sin resumen</span>}
                                        </p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {revisions.data.length === 0 && (
                    <div className="p-8 text-center text-gray-500">
                        No se encontraron revisiones para esta página.
                    </div>
                )}
            </div>
        </WikiLayout>
    );
}
