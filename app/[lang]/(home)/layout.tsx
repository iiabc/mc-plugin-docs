import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { HomeLayout } from 'fumadocs-ui/layouts/home';


import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Minecraft 插件学术',
}

export default async function Layout({
    params,
    children,
}: {
    params: Promise<{ lang: string }>;
    children: ReactNode;
}) {
    const { lang } = await params;

    return <HomeLayout {...baseOptions(lang)}>{children}</HomeLayout>;
}