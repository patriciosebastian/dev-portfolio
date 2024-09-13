import Link from 'next/link'
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { ThemeToggle } from './theme-toggle'

export default function MobileNav() {
  return (
    <div className="sticky top-2 z-20 max-w-lg lg:max-w-3xl xl:max-w-6xl mx-auto">
      <Menubar className="justify-center">
        <MenubarMenu>
          <MenubarTrigger><Link href="/">Home</Link></MenubarTrigger>
          <MenubarTrigger><Link href="/freelance">Freelance</Link></MenubarTrigger>
          <MenubarTrigger><Link href="/blog">Blog</Link></MenubarTrigger>
          <ThemeToggle className="px-3" />
        </MenubarMenu>
      </Menubar>
    </div>
  );
}