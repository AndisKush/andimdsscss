'use client';
import { Input, Button, Heading } from '@andisds/ui';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de auth aqui...
    router.push('/home');
  };

  return (
    <div style={{ background: 'white', padding: 40, borderRadius: 8, width: '100%', maxWidth: 400, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <Heading style={{ textAlign: 'center' }}>Orion Login</Heading>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Input label="E-mail" type="email" placeholder="admin@orion.com" />
        <Input label="Senha" type="password" placeholder="******" />
        <Button variant="primary" type="submit" style={{ width: '100%' }}>Entrar</Button>
      </form>
    </div>
  );
}