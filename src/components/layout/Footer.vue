<script setup>
import facebook from "../../assets/icons/Facebook.png";
import twitter from "../../assets/icons/Twitter.png";
import linkedin from "../../assets/icons/Linkedin.png";
import instagram from "../../assets/icons/Instagram.png";
</script>

<template>
  <footer>
    <div class="main-content">
      <div class="content-wrapper">
        <div class="contact">
          <h2>Contato</h2>
          <p>contato@inspiralens.com</p>
          <p>Central de ajuda</p>
          <p>Rio de Janeiro – Brasil</p>
        </div>
        <div class="links">
          <h2>Sobre</h2>
          <ul>
            <li><a href="#">Políticas</a></li>
            <li><a href="#">Políticas de privacidade</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </div>
      <div class="newsletter">
        <h2>Assine nossa newsletter</h2>
        <input type="email" placeholder="Seu email" />
        <button>Inscrever-se</button>
      </div>
    </div>
    <div class="social-media">
      <a href="#" aria-label="Facebook">
        <img :src="facebook" alt="Facebook" />
      </a>
      <a href="#" aria-label="LinkedIn">
        <img :src="linkedin" alt="LinkedIn" />
      </a>
      <a href="#" aria-label="Instagram">
        <img :src="instagram" alt="Instagram" />
      </a>
      <a href="#" aria-label="Twitter">
        <img :src="twitter" alt="Twitter" />
      </a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  display: flex;
  flex-direction: column;
  margin: 3rem;
  padding: 2rem;
  background: linear-gradient(to bottom, transparent, rgba(225, 48, 108, 0.02));
  border-radius: 12px;

  .main-content {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;

    h2 {
      margin-bottom: 1rem;
      color: #262626;
      font-weight: 600;
      font-size: 1.5rem;
    }

    p {
      margin: 0.5rem 0;
      font-size: 1rem;
      font-weight: 400;
      color: #666;
      transition: color 0.3s ease;

      &:hover {
        color: #e1306c;
      }
    }

    .content-wrapper {
      display: flex;
      gap: 4rem;
      flex-wrap: wrap;

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin: 0.5rem 0;

          a {
            text-decoration: none;
            color: #666;
            transition: all 0.3s ease;
            display: inline-block;

            &:hover {
              color: #e1306c;
              transform: translateX(5px);
            }
          }
        }
      }
    }

    .newsletter {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;

      input {
        width: 100%;
        max-width: 26.25rem;
        height: 3.125rem;
        padding: 0.5rem 1rem;
        border: 2px solid transparent;
        background-color: #f5f5f5;
        font-size: 1rem;
        border-radius: 8px;
        transition: all 0.3s ease;

        &:focus {
          outline: none;
          border-color: #e1306c;
          background-color: #fff;
        }

        &::placeholder {
          color: #999;
        }
      }

      button {
        width: 8.75rem;
        height: 2.5rem;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        font-weight: 700;
        color: #fff;
        background-color: #e1306c;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: #c9285a;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(225, 48, 108, 0.3);
        }

        &:active {
          transform: translateY(0);
        }
      }
    }
  }

  .social-media {
    display: flex;
    justify-content: center;
    margin-top: 3.75rem;
    gap: 1.5rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: #f5f5f5;
      transition: all 0.3s ease;

      &:hover {
        background-color: #e1306c;
        transform: translateY(-4px) scale(1.1);
        box-shadow: 0 6px 15px rgba(225, 48, 108, 0.3);

        img {
          filter: brightness(0) invert(1);
        }
      }

      img {
        width: 1.5rem;
        height: 1.5rem;
        transition: filter 0.3s ease;
      }
    }
  }
}

@media (max-width: 968px) {
  footer {
    margin: 2rem;
    padding: 1.5rem;

    .main-content {
      flex-direction: column;

      .content-wrapper {
        gap: 2rem;
      }

      .newsletter {
        width: 100%;

        input {
          max-width: 100%;
        }
      }
    }

    .social-media {
      margin-top: 2rem;
    }
  }
}

@media (max-width: 480px) {
  footer {
    margin: 1rem;
    padding: 1rem;

    .main-content {
      .content-wrapper {
        flex-direction: column;
        gap: 1.5rem;
      }

      h2 {
        font-size: 1.25rem;
      }

      .newsletter {
        input {
          height: 2.75rem;
          font-size: 0.938rem;
        }

        button {
          width: 100%;
        }
      }
    }

    .social-media {
      gap: 1rem;

      a {
        width: 2.5rem;
        height: 2.5rem;

        img {
          width: 1.25rem;
          height: 1.25rem;
        }
      }
    }
  }
}
</style>
