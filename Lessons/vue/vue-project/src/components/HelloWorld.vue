<script setup>
import { computed, ref, watch } from "vue";
defineProps({
  msg: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["change", "delete"]);
// const txt = 'Hello'
const txt = ref("Hello");
const name = ref("");
const lastName = ref("");
const number = ref(0);
// let result = ref()
const flag = ref(true)

const callback = () => {
  emit("change");
  txt.value = "click1";
};
const callback2 = () => {
  txt.value = "click2";
};

const fullName = computed(() => {
  return name.value + " " + lastName.value;
});

const result = computed(() => {
  return flag.value ? Number(number.value) * 5 : Number(number.value)
})

watch(name, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})

// watch(number, (newVal, oldVal) => {
//   return result = newVal * 5
// })
</script>

<template>
  <div class="greetings">
    <h1 v-html="msg" class="green"></h1>
    <h1 class="green" v-bind:title="txt" v-if="txt.length > 3">
      length &gt; 3 {{ txt }}
    </h1>
    <h1 class="green" v-bind:title="txt" v-else>length &lt; 3 {{ txt }}</h1>
    <input v-model="txt" />
    <div>
      <div>name: <input v-model="name" /></div>
      <div>lastName: <input v-model="lastName" /></div>

      {{ fullName }}
    </div>
        <div>
          <h2>Задание</h2>
      <div>number: <input v-model="number" /></div>
      <div><input type="checkbox" v-model="flag"/></div>
      <div>result: {{ result }} </div>
    </div>
    <input v-model="txt" />
    <button v-on:click="callback">click me</button>
    <button @click="callback2">click me @</button>

    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
