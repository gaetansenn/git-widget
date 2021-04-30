<template>
  <div v-if="show" class="git-hash">
    {{ hash }}
    <svg xmlns="http://www.w3.org/2000/svg" class="git-hash-icon" viewBox="0 0 20 20" fill="currentColor" @click="show = false">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
    </svg>
  </div>
</template>

<script>
export default {
  hash: {
    type: String,
    required: true
  },
  data () {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
.git-hash {
  display: inline-flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: black;
  color: white;
  margin: 10px;
  padding: 5px 10px;
  border-radius: 5px;
}

.git-hash-icon {
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-left: 5px;
}

.git-hash-icon:hover {
  color: rgb(235, 235, 235);
}
</style>
