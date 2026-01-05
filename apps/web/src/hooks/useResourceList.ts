import { useState, useEffect, useCallback } from 'react';

// Interface genérica da resposta da sua API
interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    last_page: number;
  };
}

// O Hook recebe apenas a "função de fetch" ou a "URL"
export function useResourceList<T>(resourceEndpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');

  // Debounce manual simples para a busca não chamar API a cada tecla
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 500); // Espera 500ms após parar de digitar
    return () => clearTimeout(timer);
  }, [page, search]);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Simulação de chamada API:
      // const res = await api.get(`${resourceEndpoint}?page=${page}&q=${search}`);
      
      console.log(`Fetching ${resourceEndpoint}... Page: ${page}, Search: ${search}`);
      
      // MOCK PARA TESTE (Remova isso e use seu fetch real)
      await new Promise(r => setTimeout(r, 800)); // Fake delay
      const mockData = Array.from({ length: 5 }).map((_, i) => ({
        id: i + 1 + (page - 1) * 5,
        name: `Item ${i + 1} da pág ${page} - ${resourceEndpoint}`,
        status: 'Ativo'
      }));
      
      setData(mockData as any);
      setTotalPages(3); // Mock
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const refresh = useCallback(() => fetchData(), []);

  return {
    data,
    loading,
    pagination: {
      page,
      totalPages,
      setPage,
    },
    search: {
      value: search,
      setValue: setSearch,
    },
    refresh,
  };
}