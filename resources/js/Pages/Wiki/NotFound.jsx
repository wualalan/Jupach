import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from '@/Layouts/GuestLayout';

export default function NotFound({ auth, title }) {
    const Layout = auth.user ? AuthenticatedLayout : GuestLayout;

    return (
        <Layout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{title}</h2>}>
            <Head title={title} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <p className="mb-4">This page does not exist yet.</p>
                            <Link href={route('wiki.edit', title)} className="text-blue-600 hover:underline font-bold">
                                Create this page
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
