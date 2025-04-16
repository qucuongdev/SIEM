'use client';

import { useThemeConfig } from '@/components/active-theme';
import { Label } from '@/components/ui/label';
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
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';

const LOCALES = [
  {
    name: 'EN',
    value: 'en'
  },
  {
    name: 'VI',
    value: 'vi'
  }
];

export function LocaleSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleLocaleChange(locale: string) {
    startTransition(() => {
      setCookie('NEXT_LOCALE', locale, { path: '/' });
      router.refresh(); // Force re-render to load đúng messages
    });
  }

  return (
    <div className='flex items-center gap-2'>
      <Label htmlFor='theme-selector' className='sr-only'>
        Theme
      </Label>
      <Select onValueChange={handleLocaleChange}>
        <SelectTrigger
          id='theme-selector'
          className='justify-start *:data-[slot=select-value]:w-12'
        >
          <span className='text-muted-foreground hidden sm:block'>test</span>
          {/* <span className='text-muted-foreground block sm:hidden'>Theme</span> */}
          <SelectValue placeholder='Select a theme' />
        </SelectTrigger>
        <SelectContent align='end'>
          <SelectGroup>
            {/* <SelectLabel>Default</SelectLabel> */}
            {LOCALES.map((locale) => (
              <SelectItem key={locale.name} value={locale.value}>
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
