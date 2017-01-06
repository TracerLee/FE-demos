<template>

<p>{{list}}<a href="javascript:" @click="fetchList">点我</a></p>

</template>
<script>
import { mapActions } from 'vuex'

export default {
    data () {
      return {
      }
    },
    computed : {
      list () {
        return this.$store.state.list.data
      }
    },
    methods: {
      ...mapActions([
        'fetchList'
      ])
    }
}
</script>