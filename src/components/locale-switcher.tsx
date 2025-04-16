// 'use client';

// import { useEffect, useState, useTransition } from 'react';
// import { useRouter } from 'next/navigation';
// import { getCookie, setCookie } from 'cookies-next';
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectSeparator,
//   SelectTrigger,
//   SelectValue
// } from '@/components/ui/select';
// import { Label } from '@/components/ui/label';
// import {useLocale, useTranslations} from 'next-intl';

// const LOCALES = [
//   { name: 'EN', value: 'en' },
//   { name: 'VI', value: 'vi' }
// ];

// export function LocaleSwitcher() {
//   const router = useRouter();
//   const [isPending, startTransition] = useTransition();
//   const [selectedLocale, setSelectedLocale] = useState<string>('en'); // default fallback

//   useEffect(() => {
//     const cookieLocale = getCookie('NEXT_LOCALE');
//     if (typeof cookieLocale === 'string') {
//       setSelectedLocale(cookieLocale);
//     }
//   }, []);

//   const handleLocaleChange = (locale: string) => {
//     setSelectedLocale(locale);
//     startTransition(() => {
//       setCookie('NEXT_LOCALE', locale, { path: '/' });
//       router.refresh(); // hoặc replace nếu muốn nhẹ hơn
//     });
//   };

//   return (
//     <div className='flex items-center gap-2'>
//       <Label htmlFor='locale-selector' className='sr-only'>
//         Locale
//       </Label>
//       <Select value={selectedLocale} onValueChange={handleLocaleChange}>
//         <SelectTrigger
//           id='locale-selector'
//           className='justify-start *:data-[slot=select-value]:w-12'
//         >
//           <SelectValue />
//         </SelectTrigger>
//         <SelectContent align='end'>
//           <SelectGroup>
//             <SelectLabel>Language</SelectLabel>
//             {LOCALES.map((locale) => (
//               <SelectItem key={locale.value} value={locale.value}>
//                 {locale.name}
//               </SelectItem>
//             ))}
//           </SelectGroup>
//           <SelectSeparator />
//         </SelectContent>
//       </Select>
//     </div>
//   );
// }

'use client';

import { useEffect, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie, setCookie } from 'cookies-next';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useLocale } from 'next-intl';

const LOCALES = [
  { name: 'EN', value: 'en' },
  { name: 'VI', value: 'vi' }
];

export function LocaleSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [selectedLocale, setSelectedLocale] = useState<string>('en');
  const currentLocale = useLocale();

  useEffect(() => {
    const cookieLocale = getCookie('NEXT_LOCALE');
    if (typeof cookieLocale === 'string') {
      setSelectedLocale(cookieLocale);
    } else {
      setSelectedLocale(currentLocale); // fallback từ hệ thống next-intl
    }
  }, [currentLocale]);

  const handleLocaleChange = (locale: string) => {
    if (locale === selectedLocale) return;

    setSelectedLocale(locale);
    startTransition(() => {
      setCookie('NEXT_LOCALE', locale, { path: '/' });
      router.refresh(); // refresh để next-intl reload bản dịch
    });
  };

  return (
    <div className='flex items-center gap-2'>
      <Label htmlFor='locale-selector' className='sr-only'>
        Locale
      </Label>
      <Select value={selectedLocale} onValueChange={handleLocaleChange}>
        <SelectTrigger
          id='locale-selector'
          className='justify-start *:data-[slot=select-value]:w-12'
        >
          <SelectValue placeholder='Select language' />
        </SelectTrigger>
        <SelectContent align='end'>
          <SelectGroup>
            <SelectLabel>Language</SelectLabel>
            {LOCALES.map((locale) => (
              <SelectItem key={locale.value} value={locale.value}>
                {locale.name}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectSeparator />
        </SelectContent>
      </Select>
    </div>
  );
}
