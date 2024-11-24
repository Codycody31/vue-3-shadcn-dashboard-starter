<template>
  <div
    class="absolute left-1/2 top-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center"
  >
    <span
      class="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent"
    >
      404
    </span>
    <h2 class="font-heading my-2 text-2xl font-bold">
      Something's missing
    </h2>
    <p>
      Sorry, the page you are looking for doesn't exist or has been moved.
    </p>
    <div class="mt-8 flex justify-center gap-2">
      <Button variant="default" size="lg"
      @click="router.go(-1)"
      > Go back </Button>
      <Button variant="ghost" size="lg"
      @click="router.push('/dashboard')"
      > Back to Home </Button>
    </div>
  </div>
</template>

<script setup>
import { Button } from "@/common/components/ui/button";
import { useRouter } from "vue-router";
import { Exceptionless } from "@exceptionless/browser";
const router = useRouter();
</script>
