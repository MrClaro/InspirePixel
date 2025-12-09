<script setup>
import Logo from "../../assets/logo.png";
import LogoMobile from "../../assets/icon-menu-mobile.png";
import { ref } from "vue";

const openMenu = ref(false);

function toggleMenu() {
  openMenu.value = !openMenu.value;
}
</script>

<template>
  <header>
    <RouterLink to="/" class="logo-link">
      <img :src="Logo" alt="Imagem da Logo Marca" />
    </RouterLink>

    <!-- Desktop Menu -->
    <nav class="nav-desktop">
      <ul>
        <li>
          <a href="#" aria-label="Botão de pesquisa" class="icon-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="search-icon"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M10.783 18.828a8.05 8.05 0 0 0 7.439-4.955a8.03 8.03 0 0 0-1.737-8.765a8.045 8.045 0 0 0-13.735 5.68c0 2.131.846 4.174 2.352 5.681a8.05 8.05 0 0 0 5.68 2.359m5.706-2.337l4.762 4.759"
              />
            </svg>
          </a>
        </li>
        <li><a href="#" class="nav-link">Início</a></li>
        <li><a href="#" class="nav-link">Galeria</a></li>
        <li><a href="#" class="nav-link">Favoritos</a></li>
        <li>
          <a href="#" aria-label="Perfil" class="icon-link profile-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="256"
              height="256"
              viewBox="0 0 256 256"
              class="profile-icon"
            >
              <path
                fill="currentColor"
                d="M227.46 214c-16.52-28.56-43-48.06-73.68-55.09a68 68 0 1 0-51.56 0c-30.64 7-57.16 26.53-73.68 55.09a4 4 0 0 0 6.92 4C55 184.19 89.62 164 128 164s73 20.19 92.54 54a4 4 0 0 0 3.46 2a3.93 3.93 0 0 0 2-.54a4 4 0 0 0 1.46-5.46M68 96a60 60 0 1 1 60 60a60.07 60.07 0 0 1-60-60"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>

    <!-- Mobile Menu Toggle Button -->
    <button
      class="menu-toggle"
      @click="toggleMenu"
      :class="{ active: openMenu }"
      aria-label="Menu"
    >
      <img :src="LogoMobile" alt="Menu" class="logo-mobile" />
    </button>

    <!-- Mobile Menu -->
    <div class="menu-hamburguer" :class="{ aberto: openMenu }">
      <nav>
        <ul>
          <li>
            <a
              href="#"
              aria-label="Botão de pesquisa"
              class="icon-link"
              @click="toggleMenu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="search-icon"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M10.783 18.828a8.05 8.05 0 0 0 7.439-4.955a8.03 8.03 0 0 0-1.737-8.765a8.045 8.045 0 0 0-13.735 5.68c0 2.131.846 4.174 2.352 5.681a8.05 8.05 0 0 0 5.68 2.359m5.706-2.337l4.762 4.759"
                />
              </svg>
            </a>
          </li>
          <li><a href="#" class="nav-link" @click="toggleMenu">Início</a></li>
          <li><a href="#" class="nav-link" @click="toggleMenu">Galeria</a></li>
          <li>
            <a href="#" class="nav-link" @click="toggleMenu">Favoritos</a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Perfil"
              class="icon-link profile-link"
              @click="toggleMenu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="256"
                height="256"
                viewBox="0 0 256 256"
                class="profile-icon"
              >
                <path
                  fill="currentColor"
                  d="M227.46 214c-16.52-28.56-43-48.06-73.68-55.09a68 68 0 1 0-51.56 0c-30.64 7-57.16 26.53-73.68 55.09a4 4 0 0 0 6.92 4C55 184.19 89.62 164 128 164s73 20.19 92.54 54a4 4 0 0 0 3.46 2a3.93 3.93 0 0 0 2-.54a4 4 0 0 0 1.46-5.46M68 96a60 60 0 1 1 60 60a60.07 60.07 0 0 1-60-60"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  margin: 0;
  padding: 3.125rem 4.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  animation: fadeInDown 0.6s ease-out;

  .logo-link {
    display: inline-block;
    transition:
      transform 0.3s ease,
      filter 0.3s ease;

    &:hover {
      transform: scale(1.05) translateY(-2px);
      filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
    }

    &:active {
      transform: scale(0.98);
    }

    img {
      display: block;
      max-height: 50px;
      width: auto;
    }
  }

  .nav-desktop ul {
    display: flex;
    gap: 4.375rem;
    flex-wrap: wrap;
    list-style: none;
    align-items: center;
    margin: 0;
    padding: 0;

    li {
      position: relative;
    }
  }

  .nav-link {
    text-decoration: none;
    color: #000;
    font-weight: 500;
    font-size: 1.5rem;
    position: relative;
    transition:
      color 0.3s ease,
      transform 0.2s ease;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #e1306c, #fd1d1d);
      transition: width 0.3s ease;
    }

    &:hover {
      color: #e1306c;
      transform: translateY(-2px);

      &::after {
        width: 100%;
      }
    }

    &:active {
      transform: translateY(0);
    }
  }

  .icon-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #000;
    transition:
      transform 0.3s ease,
      color 0.3s ease;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(225, 48, 108, 0.1);
      transform: scale(0);
      transition: transform 0.3s ease;
      z-index: -1;
    }

    &:hover {
      transform: scale(1.15) rotate(5deg);
      color: #e1306c;

      &::before {
        transform: scale(1);
      }

      svg {
        filter: drop-shadow(0 2px 4px rgba(225, 48, 108, 0.3));
      }
    }

    &:active {
      transform: scale(1.05) rotate(0deg);
    }

    svg {
      width: 40px;
      height: 40px;
      transition: filter 0.3s ease;
    }
  }

  .profile-link {
    .profile-icon {
      color: #e1306c;

      path {
        stroke-width: 10;
        transition: stroke-width 0.3s ease;
      }
    }

    &:hover {
      .profile-icon path {
        stroke-width: 12;
      }
    }
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    z-index: 1001;
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;

    .logo-mobile {
      width: 40px;
      height: 40px;
      display: block;
      transition: transform 0.3s ease;
    }

    &:hover {
      transform: scale(1.1);

      .logo-mobile {
        filter: drop-shadow(0 2px 6px rgba(225, 48, 108, 0.3));
      }
    }

    &:active {
      transform: scale(0.95);
    }

    // Animação quando menu está aberto
    &.active {
      .logo-mobile {
        transform: rotate(90deg);
      }
    }
  }

  // Menu hambúrguer
  .menu-hamburguer {
    display: none;
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 400px;
    height: 100vh;
    background: #fff;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    padding: 6rem 2rem 2rem;
    transition: right 0.3s ease;
    z-index: 1000;
    overflow-y: auto;

    &.aberto {
      right: 0;
    }

    nav ul {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        text-align: center;
      }
    }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;

    .nav-desktop {
      display: none;
    }

    .menu-toggle {
      display: block;
    }

    .menu-hamburguer {
      display: block;
    }
  }
}
</style>
