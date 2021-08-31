<template>
    <div class="books">
        <TheHeader></TheHeader>
        <BookList></BookList>
    </div>
</template>

<script>
import BookList  from '@/components/BookList.vue'
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'Books',
  components: {
      TheHeader,
      BookList
  }
}
</script>

<style lang="scss">

</style>
