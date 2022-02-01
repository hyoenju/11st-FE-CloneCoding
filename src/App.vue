<template>
  <LNB />
  <TheHeader />
  <Billboard />
  <Direct />
  <HotFocus />
  <TimeDeal />
  <Airlift />
  <PlanBanner />
  <WideBanner />
  <BestProduct />
  <TodaysChance />
  <Promotion />
</template>

<script>
import LNB from '~/components/LNB'
import TheHeader from '~/components/TheHeader'
import Billboard from '~/components/Billboard'
import Direct from '~/components/Direct'
import HotFocus from '~/components/HotFocus'

import TimeDeal from '~/components/TimeDeal'
import Airlift from '~/components/Airlift'
import PlanBanner from '~/components/PlanBanner'
import WideBanner from '~/components/WideBanner'

import BestProduct from '~/components/BestProduct'
import TodaysChance from '~/components/TodaysChance'
import Promotion from '~/components/Promotion'

export default {
  components: {
    LNB, 
    TheHeader,
    Billboard,
    Direct,
    HotFocus,
    TimeDeal,
    Airlift,
    PlanBanner,
    WideBanner,
    BestProduct,
    TodaysChance, 
    Promotion,
  }
}
</script>

<style lang="scss">
@import "~/scss/main.scss";
</style>
