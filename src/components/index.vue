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
        <h2 class="font-bold text-base">Conectacto experiencias únicas</h2>
      </div>
    </div>

  </header>
  <main>
    <article class="max-w-3xl mx-auto text-center">
      <p class="text-3xl font-bold mt-24 mx-5 mb-16">
        ¿Ofreces un servicio turístico único y quieres que todos vivan la escencia de tu negocio ?
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
      <div class="bg-website-pink text-website-white text-center px-10 -mt-1 lg:-mt-16">
        <div class="max-w-4xl mx-auto">
          <h2 class=" text-4xl sm:text-5xl font-bold uppercase">Te presentamos ximer</h2>
          <p class="pt-10 text-3xl">
            Una innovadora aplicación turística que te permite conectar con tu público ideal, ofreciéndoles una
            experiencia única y personalizada.
          </p>
          <p class="pt-5 text-3xl">
            Ximer es una aplicación móvil que promueve el turismo nacional para dar a conocer actividades
            turísticas a personas que disfrutan viajar, brindando oportunidades de crecimiento a pequeños
            negocios y prestadores de servicios, beneficiándose de una herramienta útil, accesible y de bajo
            costo.
          </p>
        </div>
      </div>
    </article>
    <article class="mx-auto text-center bg-website-pink py-28 px-10 text-website-white">
      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1-auto gap-10 bg-website-white rounded-3xl text-website-gray p-10 items-center">
          <h2 class="col-span-2 text-4xl md:px-10">Ayudamos a <span
              class="text-website-pink-dark font-bold">conectar</span> a los turistas con sus preferencias</h2>
          <p class="col-span-2 md:col-auto max-w-[500px] mx-auto text-xl sm:text-3xl lg:-mt-10">
            Ximer incorpora un algoritmo de gustos exclusivo y único que nos permite identificar el tipo de
            negocios y actividades afines al usuario, de esta manera, la aplicación brinda herramientas para
            personalizar su experiencia turística y aumentando así, su satisfacción y disfrute de su viaje.
          </p>
          <img class="max-h-[500px] col-span-2 md:col-auto" src="/mobile/mockupwhite.png" alt="Ximer" />
        </div>
      </div>
    </article>
    <article class="mx-auto bg-website-white text-website-black my-20">
      <div class="max-w-5xl mx-auto gap-10 grid">
        <h3 class="text-4xl text-center px-4">
          Tu negocio podrá disfrutar y aprovechar de cada uno de los beneficios que <span
            class="text-website-pink-dark font-bold">ximer</span> ofrece, cómo lo son:
        </h3>
        <div class="max-w-2xl mx-auto gap-10 grid px-10">
          <div class="flex items-center gap-10">
            <i class="fa-solid fa-shop text-6xl w-16 text-website-pink-dark"></i>
            <p class="text-left text-2xl">
              Creación de un perfil donde podrás subir fotos, videos, stories.
            </p>
          </div>
          <div class="flex items-center gap-10">
            <i class="fa-solid fa-star text-6xl w-16 text-website-pink-dark"></i>
            <p class="text-left text-2xl">
              Tus clientes tienen acceso a aun apartado se reseñas, comentarios y calificaciones con estrellas.
            </p>
          </div>
          <div class="flex items-center gap-10">
            <i class="fa-solid fa-ranking-star text-6xl w-16 text-website-pink-dark"></i>
            <p class="text-left text-2xl">
              Posibilidad de posicionarte dentro del Top 10 de los negocios en el mismo rubro turistico.
            </p>
          </div>
          <div class="flex items-center gap-10">
            <i class="fa-solid fa-bell text-7xl w-16 text-website-pink-dark"></i>
            <p class="text-left text-2xl">
              Espacios especiales para crear ofertas y promociones de las cuales se les notificará a tu publico ideal.
            </p>
          </div>
          <div class="flex items-center gap-10">
            <i class="fa-solid fa-shapes text-7xl w-16 text-website-pink-dark"></i>
            <p class="text-left text-2xl">
              Asesorias técnicas para que los negocios exploten al 100% los beneficios que ximer ofrece
            </p>
          </div>
          <div class="flex items-center gap-10">
            <i class="fa-solid fa-home text-7xl w-16 text-website-pink-dark"></i>
            <p class="text-left text-2xl">
              Que tu negocio aparezca en la página de inicio de las mejores reocmendaciones.
            </p>
          </div>
          <div class="flex items-center gap-10">
            <i class="fa-solid fa-share-nodes text-7xl w-16 text-website-pink-dark"></i>
            <p class="text-left text-2xl">
              Hacer la conexión de tu perfil ximer con las redes sociales alternas.
            </p>
          </div>
          <div class="flex items-center gap-10">
            <i class="fa-solid fa-chart-simple text-7xl w-16 text-website-pink-dark"></i>
            <p class="text-left text-2xl">
              Obtener un seguimiento estadístico sobre el rendimiento de tu negocio.
            </p>
          </div>
          <div class="flex items-center gap-10">
            <i class="fa-solid fa-ticket text-6xl w-16 text-website-pink-dark"></i>
            <p class="text-left text-2xl">
              Hacer reservaciones automáticas dentro de ximer sin necesidad de papeleos ni tiempo extra.
            </p>
          </div>
        </div>

      </div>
    </article>
    <article class="bg-website-pink py-20" id="formulario">
      <ContactForm />
      <div class="px-10 flex flex-col items-center mt-10">
        <h2 class="text-4xl font-bold text-website-white text-center">O contáctanos por whatsapp</h2>
        <a href="https://wa.me/527777903411?text=Hola!%20estoy%20interesado%20en%20ser%20parte%20de%20Ximer"
          target="_blank" class="max-w-xs text-white py-5 px-10 bg-website-green rounded-2xl mt-5 hover:bg-website-green-dark">
          <i class="fa-brands fa-whatsapp"></i> Click aquí
        </a>
      </div>
    </article>

  </main>
  <footer class="bg-website-black py-14">
    <img class="max-w-[100px] mx-auto" src="/icons/ximerIcono.png" alt="Ximer" />
    <p class="text-website-white mx-auto max-w-xs text-center mt-10">Siguenos en:</p>
    <div class="flex max-w-min mx-auto gap-10 mt-5 text-website-pink-dark">
      <a class="mx-auto" href="https://www.facebook.com/ximerApp" target="_blank">
        <i class="fab fa-facebook-f text-5xl "></i>
      </a>
      <a class="mx-auto" href="https://www.instagram.com/ximeroficial/" target="_blank">
        <i class="fab fa-instagram text-5xl"></i>
      </a>
    </div>
  </footer>
</template>
