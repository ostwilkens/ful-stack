<template>
  <div class="container sm:px-5">
    <div
      class="phone w-full md:w-auto min-h-screen bg-center shadow-xxl sm:rounded-t-xl sm:mt-5 md:mt-10 xl:mt-16 border sm:border-none border-teal-600"
    >
      <header class="rounded-t-xl">
        <nav
          class="flex justify-around items-center font-bold text-green-300 pt-10 px-4 sm:px-6 h-32 lg:h-40"
        >
          <g-link class="nav-card nav-card-green text-green-900" to="/blog/">
            <div>Blog</div>
          </g-link>
          <g-link class="nav-card nav-card-pink text-pink-1000" to="/#">
            <div>Book</div>
          </g-link>
          <g-link class="mx-3 sm:mx-10" to="/">
            <g-image alt="Logo" src="~/favicon.png" width="96" class="w-8 sm:w-16 lg:w-24 mb-8" />
          </g-link>
          <g-link class="nav-card nav-card-yellow text-yellow-900" to="/#">
            <div>Shop</div>
          </g-link>
          <g-link class="nav-card nav-card-teal text-teal-900" to="/about/">
            <div>About</div>
          </g-link>
        </nav>
      </header>
      <div class="content pl-6 sm:pl-10 md:pl-16 pr-8 sm:pr-12 md:pr-20 py-4 sm:py-6 md:py-10">
        <slot />
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
.phone {
  background: url(~@/assets/img/noise.png),
    linear-gradient(
      210deg,
      rgba(34, 36, 33, 0.8) 0,
      rgba(36, 42, 39, 0.96) 55em
    );
}
header {
  background: linear-gradient(167deg, transparent 25%, rgba(0, 0, 0, 0.35) 85%);
}
.nav-card div {
  transform: rotate(-90deg);
  @screen sm {
    transform: none;
  }
}
.nav-card {
  @apply flex-1;
  @apply rounded-t-lg;
  @apply pt-8;
  @apply h-full;
  @apply text-center;
  @apply mx-1;
  @apply max-w-xs;

  @screen sm {
    @apply px-4;
    @apply text-lg;
  }

  @screen lg {
    @apply pt-10;
    @apply text-3xl;
    @apply mx-2;
  }
}
.nav-card-green {
  background: url(~@/assets/img/noise-weakest.png),
    linear-gradient(
      178deg,
      transparent 30%,
      rgba(0, 0, 0, 0.37) 85%,
      rgba(0, 0, 0, 0.45) 94%
    ),
    #38a169;
}
.nav-card-pink {
  background: url(~@/assets/img/noise-weakest.png),
    linear-gradient(
      185deg,
      transparent 30%,
      rgba(0, 0, 0, 0.39) 85%,
      rgba(0, 0, 0, 0.45) 94%
    ),
    #b83280;
  color: #691d52;
}
.nav-card-teal {
  background: url(~@/assets/img/noise-weakest.png),
    linear-gradient(
      175deg,
      transparent 30%,
      rgba(0, 0, 0, 0.38) 85%,
      rgba(0, 0, 0, 0.45) 94%
    ),
    #319795;
}
.nav-card-yellow {
  background: url(~@/assets/img/noise-weakest.png),
    linear-gradient(
      185deg,
      transparent 30%,
      rgba(0, 0, 0, 0.37) 85%,
      rgba(0, 0, 0, 0.45) 94%
    ),
    #b7791f;
  color: #6f3d0b;
}
.content {
  border-top: 2px solid rgba(0, 0, 0, 0.2);
}
</style>