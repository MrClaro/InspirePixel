import { ref } from "vue";
import axios from "axios";

export function useImagens() {
  const imagens = ref([]);
  const loading = ref(true);
  const erro = ref(null);

  async function carregarImagens(page = 3, limit = 10) {
    try {
      loading.value = true;
      erro.value = null;
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=${limit}`,
      );
      imagens.value = response.data;
    } catch (error) {
      erro.value =
        error.response?.data?.message ||
        error.message ||
        "Erro ao carregar imagens";
      console.error("Erro ao carregar imagens:", error);
    } finally {
      loading.value = false;
    }
  }

  return {
    imagens,
    loading,
    erro,
    carregarImagens,
  };
}
