<script setup>
import Card from "./Card.vue";
import { onMounted } from "vue";
import { useImagens } from "../../composables/useImagens";

const { imagens, loading, erro, carregarImagens } = useImagens();

onMounted(() => {
  carregarImagens();
});
</script>

<template>
  <section>
    <h2>Inspire-se</h2>

    <div v-if="loading" class="loading">Carregando imagens...</div>
    <div v-else-if="erro" class="erro">{{ erro }}</div>

    <section v-else class="inspire">
      <Card v-for="img in imagens" :key="img.id" :imagem="img.download_url" />
    </section>
  </section>
</template>

<style scoped lang="scss">
section {
  margin: 2rem;
  padding: 1rem;

  h2 {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin: 2rem 0;
    font-size: 2.5rem;
    font-weight: 400;
    color: #262626;
  }

  .inspire {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin: 0 0 2rem 0;
  }

  .loading,
  .erro {
    margin: 2rem 0;
    padding: 1rem;
    text-align: center;
  }

  .erro {
    color: #e1306c;
    background: #ffe5ee;
    border-radius: 8px;
  }
}
</style>
