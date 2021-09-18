<template>
  <div class="search">
      <form>
          <input type="text" placeholder="Search">
          <button class="btn__search">Search</button>
      </form>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .search {
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    .btn__search {
        display: flex;
        color: #2c3e50;
        font-weight: bold;
        background: none;
        padding: 10px 15px;
        border-radius: 5px;
        margin-top: 10px;
        margin-bottom: 15px;
        &:hover {
            background: #42b983;    
        }
    } 
  }
</style>