"use client"
import { useState } from 'react';
import { Drawer } from 'vaul';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  }

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <Drawer.Trigger asChild>
        <button className="lg:hidden block">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-neutral-900 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0 z-[99999999]">
          <Drawer.Title>&nbsp;</Drawer.Title>
          <div className="p-4 bg-neutral-900 rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-700 mb-8" />

            <nav className="flex flex-col gap-6 items-center text-lg font-medium text-white/80">
              <a
                href="#about"
                onClick={close}
                className="py-2 w-full text-center hover:text-amber-300 transition-colors"
              >
                About Us
              </a>
              <a
                href="#services"
                onClick={close}
                className="py-2 w-full text-center hover:text-amber-300 transition-colors"
              >
                Services
              </a>
              <a
                href="#testimonials"
                onClick={close}
                className="py-2 w-full text-center hover:text-amber-300 transition-colors"
              >
                Testimonials
              </a>
              <a href="#contact" onClick={close}>
                <button  className="w-full px-7 py-4 font-bold text-amber-300 rounded-lg border-2 border-amber-300 border-solid hover:bg-amber-300 hover:text-neutral-800 transition-colors">
                  Contact Us
                </button>
              </a>
            </nav>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
} 