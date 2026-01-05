'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Input, Select, Button, Heading } from '@andisds/ui';

// Tipagem do Dado
export interface UserData {
  id?: number; // Opcional pois no create não tem ID ainda
  name: string;
  email: string;
  role: { idForm: string; fieldName: string } | null;
}

interface UserFormProps {
  initialData?: UserData; // Se vier, é Edição. Se não, é Criação.
}

const roles = [
  { idForm: 'admin', fieldName: 'Administrador' },
  { idForm: 'user', fieldName: 'Usuário Comum' },
];

export function UserForm({ initialData }: UserFormProps) {
  const router = useRouter();
  const isEditing = !!initialData;

  // Estados
  const [formData, setFormData] = useState<UserData>({
    name: '',
    email: '',
    role: null,
  });

  // Popula o form se for edição
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Simulação de API Call
    console.log(isEditing ? 'Atualizando...' : 'Criando...', formData);
    
    // TODO: Adicionar lógica de POST/PUT aqui
    await new Promise(r => setTimeout(r, 500)); 

    alert(isEditing ? 'Usuário atualizado!' : 'Usuário criado!');
    router.push('/users'); // Volta para a lista
  };

  return (
    <div style={{ background: 'white', padding: 24, borderRadius: 8, maxWidth: 800 }}>
      <Heading>{isEditing ? `Editar Usuário #${initialData?.id}` : 'Novo Usuário'}</Heading>

      <form onSubmit={handleSubmit}>
        <Input
          label="Nome Completo"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        
        <Input
          label="E-mail"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <Select
          label="Perfil de Acesso"
          options={roles}
          value={formData.role}
          onChange={(val) => setFormData({ ...formData, role: val })}
          valueKey="idForm"
          labelKey="fieldName"
        />

        <div style={{ marginTop: 24, display: 'flex', gap: 16, justifyContent: 'flex-end' }}>
          <Button variant="outline" type="button" onClick={() => router.back()}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            {isEditing ? 'Salvar Alterações' : 'Criar Usuário'}
          </Button>
        </div>
      </form>
    </div>
  );
}