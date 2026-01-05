'use client';

import { useRouter } from 'next/navigation';
import { ListLayout, Table, Column } from '@andisds/ui'; // Nossas abstrações
import { useResourceList } from '@/hooks/useResourceList';

// 1. Defina o tipo do dado desta tela
interface User {
  id: number;
  name: string;
  status: string;
}

export default function UsersPage() {
  const router = useRouter();
  
  // 2. Use o Hook Genérico (Lógica inteira em 1 linha)
  const { data, loading, pagination, search, refresh } = useResourceList<User>('/users');

  // 3. Defina as colunas
  const columns: Column<User>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Nome do Usuário', accessorKey: 'name' },
    { 
      header: 'Status', 
      // Exemplo de renderização customizada
      cell: (user) => <span style={{ color: user.status === 'Ativo' ? 'green' : 'red' }}>{user.status}</span> 
    },
  ];

  // 4. Ações
  const handleEdit = (user: User) => router.push(`/users/${user.id}`);
  const handleDelete = (user: User) => {
    if(confirm(`Deletar ${user.name}?`)) {
       console.log('Deletar API', user.id);
       refresh();
    }
  };

  return (
    <ListLayout
      title="Gerenciar Usuários"
      onAddClick={() => router.push('/users/create')}
      onSearch={search.setValue}
      currentPage={pagination.page}
      totalPages={pagination.totalPages}
      onPageChange={pagination.setPage}
    >
      <Table 
        data={data}
        columns={columns}
        isLoading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </ListLayout>
  );
}