import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Translations } from 'fumadocs-ui/i18n';

const inter = Inter({
    subsets: ['latin'],
});

const locales = [
    {
        name: '简体中文',
        locale: 'cn',
    },
    {
        name: 'English',
        locale: 'en',
    },
];

const cn: Partial<Translations> = {
    search: '搜索',
    toc: '目录',
    searchNoResult: '找不到结果',
    lastUpdate: '更新时间',
    chooseLanguage: '选择语言',
    nextPage: '下一页',
    previousPage: '上一页',
    chooseTheme: '选择主题',
    editOnGithub: '在 GitHub 上编辑此页面',
    tocNoHeadings: '无标题'
};

export default async function Layout({
    params,
    children,
}: {
    params: { lang: string };
    children: ReactNode;
}) {
    const lang = (await params).lang;

    return (
        <html lang={lang} className={inter.className} suppressHydrationWarning>
            <body>
                <RootProvider
                    i18n={{
                        locale: lang,
                        locales,
                        translations: { cn }[lang],
                    }}
                >
                    {children}
                </RootProvider>
            </body>
        </html>
    );
}