// apps/web/app/page.tsx
import { redirect } from 'next/navigation';

export default function RootPage() {
  // Opção 1: Mandar sempre para login
  redirect('/login');
  
  // Opção 2 (Mais avançada): Verificar cookie no servidor e decidir
  // const session = await getSession();
  // if (session) redirect('/dashboard');
  // else redirect('/login');
}