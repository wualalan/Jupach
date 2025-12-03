import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import WikiLayout from '@/Layouts/WikiLayout';

export default function Edit({ auth, title, content, page }) {
    const { data, setData, post, processing, errors } = useForm({
        content: content || '',
        summary: '',
        is_minor: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('wiki.update', title));
    };

    const displayTitle = title.replace(/_/g, ' ');

    return (
        <WikiLayout user={auth.user}>
            <Head title={`Editando ${displayTitle}`} />

            <div className="mb-8">
                <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                    Editando <span className="text-blue-600">{displayTitle}</span>
                </h1>
                <p className="text-gray-500">
                    Realiza tus cambios a continuación. ¡Recuerda ser respetuoso y preciso!
                </p>
            </div>

            <form onSubmit={submit} className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex items-center space-x-2 text-sm text-gray-500">
                        <span>Editor Markdown</span>
                        {/* Future toolbar could go here */}
                    </div>
                    <textarea
                        className="w-full h-[500px] border-none p-6 font-mono text-sm focus:ring-0 resize-y text-gray-800 leading-relaxed"
                        value={data.content}
                        onChange={(e) => setData('content', e.target.value)}
                        placeholder="Comienza a escribir tu artículo aquí..."
                    ></textarea>
                </div>
                {errors.content && <div className="text-red-500 text-sm font-medium">{errors.content}</div>}

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Detalles de Publicación</h3>

                    <div className="mb-4">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Resumen de Edición</label>
                        <input
                            type="text"
                            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                            value={data.summary}
                            onChange={(e) => setData('summary', e.target.value)}
                            maxLength="200"
                            placeholder="Describe brevemente tus cambios (ej: 'Corregí errores', 'Agregué nueva sección')"
                        />
                        {errors.summary && <div className="text-red-500 mt-1 text-sm">{errors.summary}</div>}
                    </div>

                    <div className="flex items-center mb-6">
                        <input
                            type="checkbox"
                            id="is_minor"
                            className="rounded border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500 h-4 w-4"
                            checked={data.is_minor}
                            onChange={(e) => setData('is_minor', e.target.checked)}
                        />
                        <label htmlFor="is_minor" className="ml-2 text-sm text-gray-600 select-none cursor-pointer">
                            Esta es una edición menor (corrección ortográfica, formato, etc.)
                        </label>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <Link
                            href={route('wiki.show', title)}
                            className="text-gray-500 hover:text-gray-700 font-medium transition-colors"
                        >
                            Cancelar
                        </Link>
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-6 rounded-lg shadow-lg shadow-green-200 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={processing}
                        >
                            {processing ? 'Publicando...' : 'Publicar Cambios'}
                        </button>
                    </div>
                </div>
            </form>
        </WikiLayout>
    );
}
