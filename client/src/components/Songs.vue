<template>

  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs Weed">
        <v-btn slot="action" @click="navigateTo({name: 'song-create'})" class="cyan accent-2" light medium absolute right middle fab>
          <v-icon>add</v-icon>
        </v-btn>
        <div v-for="song in songs" :key="song.id">
          {{ song.title }}
          {{ song.artist }}
          {{ song.album }}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongService from '@/services/SongService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    // fetch songs from the backend
    this.songs = (await SongService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
