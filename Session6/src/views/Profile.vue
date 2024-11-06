<script>
import {onMounted, ref} from 'vue'
import {userService} from '@/services/userService.js'

export default {
  name: "Profile",

  setup(){

      const user = ref({})
      onMounted(async () => {
        try {
          user.value = await userService.getLoggedUser()
        } catch (error) {
          console.error(error)
        }
      });


    return {
      user
    }
  }
}
</script>
<template>
  <p>{{user.id}}</p>
  <p>{{user.name}}</p>
  <p>{{user.email}}</p>
  <p>{{user.email_verified_at}}</p>
  <p>{{user.created_at}}</p>
  <p>{{user.updated_at}}</p>
</template>

<style scoped></style>
