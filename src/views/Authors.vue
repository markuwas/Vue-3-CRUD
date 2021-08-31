<template>
    <div class="authors">
        <TheHeader></TheHeader>
        <div class="container">
            <AuthorSearch></AuthorSearch>
            <AuthorAdd></AuthorAdd>
            <AuthorList></AuthorList>
        </div>
    </div>
</template>

<script>
import AuthorList  from '@/components/AuthorList.vue'
import AuthorAdd from '@/components/AuthorAdd.vue'
import AuthorSearch from '@/components/AuthorSearch.vue'
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'Authors',
  components: {
      AuthorList,
      AuthorAdd,
      AuthorSearch,
      TheHeader
  }
}
</script>

<style lang="scss">
    .container {
        border: 2px solid grey;
        margin: 15px 20px;
        padding: 10px;
    }        
</style>