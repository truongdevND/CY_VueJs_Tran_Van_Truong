<script >
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { userService } from '@/services/userService.js'
export default {
  setup(){
    return{

    }

  }
}
const data = ref({
  email: '',
  password: '',
})

const router = useRouter()

async function submit() {
  try {
    const { token } = await userService.login({
      email: data.value.email,
      password: data.value.password,
    })

    localStorage.setItem('token', token)
    console.log("ok")
    alert("Đăng nhập thành công!!!!!")

    router.push('/profile')
  } catch (error) {
    alert('Lỗi khi đăng nhập')
    console.error(error)
  }
}
</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="submit" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-balance">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" v-model="data.email" required class="p-3 block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6">
          </div>
        </div>
        <div>
          <label for="password" class="block text-sm font-medium leading-6 text-black">Password</label>
          <div class="mt-2">
            <input v-model="data.password" id="password" name="password" type="password" autocomplete="current-password" required class="p-3 block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6">
          </div>
        </div>
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
</style>
