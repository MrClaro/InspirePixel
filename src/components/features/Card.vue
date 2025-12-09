<script setup>
import { ref } from "vue";

defineProps(["imagem"]);
const isFavorited = ref(false);

const toggleFavorite = (event) => {
  event.stopPropagation();
  isFavorited.value = !isFavorited.value;
};
</script>

<template>
  <div class="card">
    <img :src="imagem" alt="Imagem do Card" />
    <button
      class="favorite-btn"
      :class="{ favorited: isFavorited }"
      @click="toggleFavorite"
      aria-label="Favoritar"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
    </button>
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

  .favorite-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

    svg {
      transition: all 0.3s ease;
      path {
        fill: #ddd;
        stroke: #999;
        stroke-width: 1px;
      }
    }

    &:hover {
      transform: scale(1.1);
      background: rgba(255, 255, 255, 1);
    }

    &:active {
      transform: scale(0.95);
    }

    &.favorited {
      svg path {
        fill: #e1306c;
        stroke: #e1306c;
        animation: heartBeat 0.3s ease;
      }
    }
  }

  @keyframes heartBeat {
    0%,
    100% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.3);
    }
    50% {
      transform: scale(1.1);
    }
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
