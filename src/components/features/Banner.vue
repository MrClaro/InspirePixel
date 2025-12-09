<script setup>
import fotografo from "../../assets/fotografo.png";
</script>

<template>
  <section class="banner">
    <div class="text-banner">
      <h1>Onde a paisagem vira <span class="highlight">inspiração</span>.</h1>
      <p class="description">
        Explore paisagens, cores e luzes que inspiram novas histórias através da
        fotografia.
      </p>
    </div>
    <div class="image-container">
      <img
        :src="fotografo"
        alt="Foto de uma fotógrafa"
        class="photographer-image"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
  padding: 3rem;
  gap: 3rem;
  position: relative;
  overflow: hidden;

  .text-banner {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 670px;
    width: 50%;
    color: #262626;
    animation: fadeInLeft 0.8s ease-out;

    h1 {
      font-size: 3.75rem;
      font-weight: 800;
      line-height: 1.5;
      margin: 0;
      animation: fadeInUp 0.8s ease-out 0.2s both;

      .highlight {
        color: #e1306c;
        font-size: 5.313rem;
        font-weight: 800;
        display: inline-block;
        background: linear-gradient(135deg, #e1306c 0%, #fd1d1d 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation:
          gradientShift 3s ease infinite,
          scaleIn 0.8s ease-out 0.4s both;
        position: relative;

        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: shine 3s infinite;
        }
      }
    }

    .description {
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 1.6;
      margin: 0;
      opacity: 0.9;
      animation: fadeInUp 0.8s ease-out 0.4s both;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 1;
      }
    }
  }

  .image-container {
    width: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeInRight 0.8s ease-out 0.3s both;

    .photographer-image {
      position: relative;
      max-width: 100%;
      height: auto;
      z-index: 1;
      filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.15));
      transition:
        transform 0.5s ease,
        filter 0.5s ease;
      animation: imageFloat 4s ease-in-out infinite;

      &:hover {
        transform: scale(1.05) translateY(-10px);
        filter: drop-shadow(0 20px 40px rgba(225, 48, 108, 0.3));
      }
    }
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes shine {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 200%;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.1);
  }
}

@keyframes imageFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

@media (max-width: 1024px) {
  .banner {
    padding: 2rem;
    gap: 2rem;

    .text-banner {
      h1 {
        font-size: 3rem;

        .highlight {
          font-size: 4rem;
        }
      }

      .description {
        font-size: 1.125rem;
      }
    }
  }
}

@media (max-width: 768px) {
  .banner {
    flex-direction: column;
    text-align: center;
    margin: 1rem;
    padding: 2rem 1.5rem;

    .text-banner {
      width: 100%;
      max-width: 100%;
      align-items: center;

      h1 {
        font-size: 2.5rem;

        .highlight {
          font-size: 3.5rem;
        }
      }

      .description {
        font-size: 1rem;
      }
    }

    .image-container {
      width: 100%;
      max-width: 400px;
      margin-top: 2rem;

      .floating-circle {
        filter: blur(40px);
      }

      .circle-1 {
        width: 150px;
        height: 150px;
      }

      .circle-2 {
        width: 120px;
        height: 120px;
      }
    }
  }
}

@media (max-width: 480px) {
  .banner {
    .text-banner {
      h1 {
        font-size: 2rem;

        .highlight {
          font-size: 2.75rem;
        }
      }

      .description {
        font-size: 0.938rem;
      }
    }

    .image-container {
      max-width: 300px;
    }
  }
}
</style>
