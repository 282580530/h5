<template>
  <div class="views">
    <div class="menu">
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>

<style>
.views {
  display: flex;
}

.content {
  flex: 1;
}
</style>