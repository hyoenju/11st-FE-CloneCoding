<template>
  <LNB />
  <TheHeader />
  <Billboard />
</template>

<script>
import LNB from '~/components/LNB'
import TheHeader from '~/components/TheHeader'
import Billboard from '~/components/Billboard'

export default {
  components: {
    LNB, 
    TheHeader,
    Billboard,
    
  }
}
</script>

<style lang="scss">
@import "~/scss/main.scss";
</style>
