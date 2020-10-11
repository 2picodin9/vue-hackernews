<template>
  <div class="container">
      <ul class="story-list" v-for="story in stories" :key="story.id">
        <li class="story-item">
          <p>{{ story.title }}</p>
          <p>{{ story.descendants }}</p>
          <p>{{ story.score }}</p>
          <p>{{ story.by }}</p>
        </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Homepage',
    data: function() {
      return {
        err: '',
        stories: []
      }
    },
    created: function() {
      axios
        .get('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(result => {
          this.results = result.data.slice(0, 10);
          this.results.forEach(element => {
            axios
            .get('https://hacker-news.firebaseio.com/v0/item/' + element + '.json')
            .then(result => {
              this.stories.push(result.data);
            })
            .catch(err => {
              this.err = err;
            })
          });
        })
        .catch(err => {
          this.err = err;
        })
    }
}
</script>

<style>

</style>