
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact',
    description:
        'Wij horen graag van je! Neem contact met ons op voor vragen over software op maat, digitale strategie of een samenwerking.',
    openGraph: {
        title: 'Contact - JSTACK',
        description:
            'Wij horen graag van je! Neem contact met ons op voor vragen over software op maat, digitale strategie of een samenwerking.',
        images: [
            {
                url: '/jstackicon.png',
                width: 320,
                height: 320,
                alt: 'JSTACK Contact',
            },
        ],
    },
};

export default function ContactPage() {
    return (
        <>
           
        </>
    );
}
