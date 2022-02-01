<template>
  <LNB />
  <TheHeader />
  <Billboard />
  <Direct />
</template>

<script>
import LNB from '~/components/LNB'
import TheHeader from '~/components/TheHeader'
import Billboard from '~/components/Billboard'
import Direct from '~/components/Direct'

export default {
  components: {
    LNB, 
    TheHeader,
    Billboard,
    Direct,
  }
}
</script>

<style lang="scss">
@import "~/scss/main.scss";
</style>
