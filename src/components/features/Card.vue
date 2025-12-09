<script setup>
defineProps(["imagem"]);
</script>

<template>
  <div class="card">
    <img :src="imagem" alt="Imagem do Card" />
    <div class="card-overlay">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        class="view-icon"
      >
        <path
          fill="currentColor"
          d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 100%;
  max-width: 291px;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(225, 48, 108, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    .view-icon {
      color: #fff;
      transform: scale(0.8);
      transition: transform 0.3s ease;
    }
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);

    img {
      transform: scale(1.1);
    }

    .card-overlay {
      opacity: 1;

      .view-icon {
        transform: scale(1);
      }
    }
  }

  &:active {
    transform: translateY(-4px);
  }
}

@media (max-width: 768px) {
  .card {
    max-width: 100%;
    height: 400px;

    .card-overlay .view-icon {
      width: 40px;
      height: 40px;
    }
  }
}

@media (max-width: 480px) {
  .card {
    height: 350px;

    .card-overlay .view-icon {
      width: 36px;
      height: 36px;
    }
  }
}
</style>
