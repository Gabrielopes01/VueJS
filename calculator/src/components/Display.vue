<template>
  <div class="display">
      {{ value }}
  </div>
</template>

<script>
export default {
    props: ['value']
}
</script>

<style>
.display {
    grid-column: span 4;
    background-color: #0004;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: flex-end;
    padding: 10px;
    font-size: 25px;
}
</style>