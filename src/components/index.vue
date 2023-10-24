<script setup>
import { ref } from 'vue'
import ContactForm from './forms/Contact.vue'

/*defineProps({
  msg: String,
})

const count = ref(0)*/
</script>

<template>
  <header class="w-full h-auto bg-web py-5">
    <div class="flex flex-col sm:flex-row gap-2 md:gap-5 justify-center items-center">
      <img class="max-w-[100px]" src="/icons/ximerIcono.png" alt="Ximer" />
      <div class="flex flex-col">
        <img class="h-min" src="/icons/ximer.png" alt="Ximer" />
        <h2 class="hidden md:block font-bold text-base">Conectacto experiencias únicas </h2>
      </div>
    </div>

  </header>
  <main>
    <article class="max-w-3xl mx-auto text-center">
      <p class="text-3xl font-bold mt-24 mb-16">
        ¿Ofreces una experiencia turística única y quieres que todos vivan la escencia de tu negocio ?
      </p>
      <a class="bg-website-pink text-website-white rounded-xl px-10 py-5 hover:bg-website-pink-dark cursor-pointer"
        href="#formulario">
        Registrarme
      </a>
    </article>

    <article>
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150 lg:-mt-72">
        <path
          d="M 0,700 C 0,700 0,350 0,350 C 128,322.1531100478469 256,294.3062200956938 334,292 C 412,289.6937799043062 440,312.92822966507174 527,339 C 614,365.07177033492826 760,393.98086124401914 876,379 C 992,364.01913875598086 1078,305.14832535885165 1167,293 C 1256,280.85167464114835 1348,315.42583732057415 1440,350 C 1440,350 1440,700 1440,700 Z"
          stroke="none" stroke-width="0" fill="#dd4184" fill-opacity="0.53"
          class="transition-all duration-300 ease-in-out delay-150 path-1"></path>
        <path
          d="M 0,700 C 0,700 0,525 0,525 C 94.06698564593302,553.0574162679426 188.13397129186603,581.1148325358852 270,561 C 351.86602870813397,540.8851674641148 421.53110047846906,472.5980861244019 532,465 C 642.468899521531,457.4019138755981 793.7416267942583,510.4928229665072 892,529 C 990.2583732057417,547.5071770334928 1035.5023923444976,531.4306220095693 1118,525 C 1200.4976076555024,518.5693779904307 1320.248803827751,521.7846889952153 1440,525 C 1440,525 1440,700 1440,700 Z"
          stroke="none" stroke-width="0" fill="#dd4184" fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-2"></path>
      </svg>
      <div class="bg-website-pink text-website-white text-center px-10 lg:-mt-16">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-5xl font-bold uppercase">¡Te presentamos ximer!</h2>
          <p class="pt-5 bg-website-pink-dark">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos numquam reprehenderit blanditiis dolores
            sapiente porro consectetur harum perferendis odio ab dolorum eligendi libero nesciunt eaque dicta molestias,
            doloribus natus earum.
          </p>
          <p class="pt-5 bg-website-pink-dark">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos numquam reprehenderit blanditiis dolores
            sapiente porro consectetur harum perferendis odio ab dolorum eligendi libero nesciunt eaque dicta molestias,
            doloribus natus earum.
          </p>
        </div>
      </div>
    </article>
    <article class="mx-auto text-center bg-website-pink py-28 px-10 text-website-white">
      <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-1-auto gap-10 bg-website-white rounded-3xl text-website-gray p-10 items-center">
          <h2 class="col-span-2 text-4xl">Subtitulo de esta sección</h2>
          <p class="max-w-[500px] mx-auto text-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis nostrum obcaecati tenetur est aperiam.
            Consequatur iusto nihil necessitatibus quod excepturi obcaecati optio magnam maiores corrupti atque rerum
            impedit, repudiandae ducimus?
          </p>
          <img class="max-h-[500px]" src="/mobile/mockupwhite.png" alt="Ximer" />
        </div>
      </div>
    </article>
    <article class="bg-website-white text-website-black my-20">
      <div class="max-w-4xl mx-auto gap-10 grid px-10">
        <div class="grid grid-cols-1-auto items-center gap-10">
          <i class="fa-solid fa-check text-7xl"></i>
          <p class="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis nostrum obcaecati tenetur est aperiam.
            Consequatur iusto nihil necessitatibus quod excepturi obcaecati optio magnam maiores corrupti atque rerum
            impedit, repudiandae ducimus?
          </p>
        </div>
        <div class="grid grid-cols-1-auto items-center gap-10">
          <i class="fa-solid fa-check text-7xl"></i>
          <p class="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis nostrum obcaecati tenetur est aperiam.
            Consequatur iusto nihil necessitatibus quod excepturi obcaecati optio magnam maiores corrupti atque rerum
            impedit, repudiandae ducimus?
          </p>
        </div>
        <div class="grid grid-cols-1-auto items-center gap-10">
          <i class="fa-solid fa-check text-7xl"></i>
          <p class="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis nostrum obcaecati tenetur est aperiam.
            Consequatur iusto nihil necessitatibus quod excepturi obcaecati optio magnam maiores corrupti atque rerum
            impedit, repudiandae ducimus?
          </p>
        </div>
        <div class="grid grid-cols-1-auto items-center gap-10">
          <i class="fa-solid fa-check text-7xl"></i>
          <p class="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis nostrum obcaecati tenetur est aperiam.
            Consequatur iusto nihil necessitatibus quod excepturi obcaecati optio magnam maiores corrupti atque rerum
            impedit, repudiandae ducimus?
          </p>
        </div>
        <div class="grid grid-cols-1-auto items-center gap-10">
          <i class="fa-solid fa-check text-7xl"></i>
          <p class="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis nostrum obcaecati tenetur est aperiam.
            Consequatur iusto nihil necessitatibus quod excepturi obcaecati optio magnam maiores corrupti atque rerum
            impedit, repudiandae ducimus?
          </p>
        </div>
      </div>
    </article>
    <article class="bg-website-pink py-20" id="formulario">
      <ContactForm />
    </article>

  </main>
  <footer class="bg-website-black py-14">
    <img class="max-w-[100px] mx-auto" src="/icons/ximerIcono.png" alt="Ximer" />
    <p class="text-website-white mx-auto max-w-xs text-center mt-10">Siguenos en:</p>
    <div class="flex max-w-min mx-auto gap-10 mt-5 text-website-pink-dark">
      <a class="mx-auto" href="https://www.facebook.com/ximerApp" target="_blank">
        <i class="fab fa-facebook-f text-2xl "></i>
      </a>
      <a class="mx-auto" href="https://www.instagram.com/ximeroficial/" target="_blank">
        <i class="fab fa-instagram text-2xl"></i>
      </a>
    </div>
  </footer>
</template>
