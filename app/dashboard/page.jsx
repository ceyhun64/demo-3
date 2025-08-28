"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Lock,
  LogIn,
  CircleUser,
  Settings,
  Wallet,
  Users,
  Bell,
} from "lucide-react"; // lucide-react ikonları
import Navbar from "@/components/layout/navbar";
import CarouselCard from "@/components/modules/home/carousel";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex items-center justify-center bg-muted px-4">
        <form className="w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
          <Card className="p-6 shadow-xl rounded-2xl border">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Giriş Yap</CardTitle>
              <CardDescription className="text-muted-foreground">
                Hesabına erişmek için bilgilerini gir
              </CardDescription>
            </CardHeader>

            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">E-posta</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Şifre</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm text-primary hover:underline"
                  >
                    Şifrenizi mi unuttunuz?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    required
                    className="pl-10"
                  />
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-2">
              <Button
                type="submit"
                className="w-full flex items-center gap-2 justify-center"
              >
                <LogIn className="w-4 h-4" />
                Giriş Yap
              </Button>
              <Button
                variant="outline"
                className="w-full text-center"
                // Buraya özel Google SVG ikonu yerleştirilebilir
              >
                Google ile Giriş Yap
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Henüz hesabın yok mu?{" "}
                <a href="#" className="text-primary hover:underline">
                  Kayıt Ol
                </a>
              </p>
            </CardFooter>
          </Card>
        </form>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Çıkış yap</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Emin misiniz ?</AlertDialogTitle>
              <AlertDialogDescription>
                Bu işlem geri alınamaz. Bu işlem, hesabınızı kalıcı olarak
                silecek ve verilerinizi sunucularımızdan kaldıracaktır.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>İptal</AlertDialogCancel>
              <AlertDialogAction>Evet</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <DropdownMenu variant="destructive">
          <DropdownMenuTrigger>
            <CircleUser />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Hesabım</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {" "}
              <Settings />
              Profil
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Wallet />
              Faturalandırma
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Users />
              Takım
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Bell />
              Abonelikler
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
