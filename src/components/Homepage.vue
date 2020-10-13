<template>
  <div class="container">
      <table class="story-list">
        <tbody>
          <template v-for="story in stories" >
            <tr :key="story.id">
              <td colspan="3">{{ story.title }}</td>
            </tr>
            <tr :key="story.id">
              <td>{{ story.score }} points by {{ story.by }} {{story.time}} ago</td>
              <td>hide</td>
              <td>{{ story.descendants }} comments</td>
            </tr>
          </template>
        </tbody>
      </table>
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

.story-list {
  text-align: left;
}

</style>