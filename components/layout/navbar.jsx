"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag, X, ArrowRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {searchOpen ? (
        <div className="border-b bg-gray-100 py-4 px-8">
          <div className="flex items-center max-w-6xl mx-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
              <Input
                type="text"
                placeholder="Ürünleri, kategorileri, markaları ara..."
                className="w-full pl-12 pr-16 py-3 rounded-full border-none outline-none bg-white  focus:ring-green-500"
                autoFocus
              />
              <Button
                type="button"
                size={"icon"}
                className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black rounded-full flex items-center justify-center text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Kapat"
              onClick={() => setSearchOpen(false)}
              className="ml-4 cursor-pointer"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>
      ) : (
        <nav className="flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <div className="text-2xl font-bold font-[Playfair_Display]">
            <Link href="/">Planted</Link>
          </div>

          {/* Navigasyon Menüsü */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/shop">
                  <Button variant={"ghost"}>Tüm Mağaza</Button>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/plants">
                  <Button variant={"ghost"}>Bitkiler</Button>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/accessories">
                  <Button variant="ghost">Aksesuarlar</Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* İkonlar */}
          <div className="flex gap-3">
            {/* Arama */}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Ara"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
            {/* Kullanıcı */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Kullanıcı">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem asChild>
                  <Link href="/login">Giriş Yap</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/register">Kayıt Ol</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Sepet */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost">
                  <ShoppingBag className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Profili Düzenle</SheetTitle>
                  <SheetDescription>
                    Profilinizde değişiklik yapabilirsiniz. Bitirdiğinizde kaydet
                    butonuna basın.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                  <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-name">İsim</Label>
                    <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-username">Kullanıcı Adı</Label>
                    <Input id="sheet-demo-username" defaultValue="@peduarte" />
                  </div>
                </div>
                <SheetFooter>
                  <Button type="submit">Değişiklikleri Kaydet</Button>
                  <SheetClose asChild>
                    <Button variant="outline">Kapat</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      )}
    </>
  );
}