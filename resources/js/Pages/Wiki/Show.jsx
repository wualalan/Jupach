import React from 'react';
import { Head, Link } from '@inertiajs/react';
import WikiLayout from '@/Layouts/WikiLayout';

export default function Show({ auth, page, content }) {
    const title = page.title.replace(/_/g, ' ');

    return (
        <WikiLayout user={auth.user}>
            <Head title={title} />

            {/* Modern Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-gray-100">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">
                        {title}
                    </h1>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold">Artículo</span>
                        <span>•</span>
                        <span>Actualizado recientemente</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-4 md:mt-0">
                    {auth.user && auth.user.is_sysop && (
                        <Link
                            href={route('wiki.edit', page.title)}
                            className="flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 rounded-lg font-bold transition-colors shadow-sm hover:shadow-md"
                        >
                            <span className="mr-2">✏️</span> Editar
                        </Link>
                    )}
                    <Link
                        href={route('wiki.history', page.title)}
                        className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-bold transition-colors"
                    >
                        <span className="mr-2">🕒</span> Historial
                    </Link>
                </div>
            </div>

            {/* Content Area */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {content ? (
                    <div className="whitespace-pre-wrap font-sans">
                        {/* We can eventually add a markdown parser here */}
                        {content}
                    </div>
                ) : (
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <span className="text-2xl">💡</span>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-bold text-blue-900">Esta página está vacía</h3>
                                <p className="text-blue-700 mt-1">
                                    Este artículo aún no ha sido escrito. Puedes ayudar
                                    <Link href={route('wiki.edit', page.title)} className="font-bold underline ml-1 hover:text-blue-900">
                                        comenzando este artículo
                                    </Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </WikiLayout>
    );
}
