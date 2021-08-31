<template>
<div class="dialog" v-if="show">
      <div class="dialog__main">
          <slot></slot>
      </div>
</div>
</template>

<script>
export default {
    name: 'my-modal',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
    .dialog {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0%;
        background: rgba(0,0,0, 0.5);
        position: fixed;
        display: flex;
        .dialog__main {
            margin: auto;
            background: white;
            border-radius: 15px;
            min-height: 50px;
            min-width: 300px;
        }
    }
</style>