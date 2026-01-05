'use client';

import { useEffect, useState } from 'react';
import { UserForm, UserData } from '../components/UserForm';

export default function EditUserPage({ params }: { params: { id: string } }) {
  const [user, setUser] = useState<UserData | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula busca na API pelo ID
    // const data = await api.get(`/users/${params.id}`);
    setTimeout(() => {
      setUser({
        id: Number(params.id),
        name: 'Usuário Simulado',
        email: 'simulado@orion.com',
        role: { idForm: 'admin', fieldName: 'Administrador' }
      });
      setLoading(false);
    }, 500);
  }, [params.id]);

  if (loading) return <div>Carregando dados do usuário...</div>;

  return <UserForm initialData={user} />;
}