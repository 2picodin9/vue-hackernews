<template>
  <div class="container">
      <table class="story-list">
        <tbody>
          <template v-for="(story, index) in stories">
            <tr :key="story.id" class="title">
              <td class="index">{{ ++index }}.</td>
              <td>
                <a href="#">{{ story.title }}</a>
              </td>
            </tr>
            <tr :key="index" class="subtext">
              <td></td>
              <td>{{ story.score }} points by 
                <a href="#">{{ story.by }}</a>&nbsp;
                <a href="#">{{ story.time }}</a>&nbsp;|&nbsp;
                <a href="#">hide</a>&nbsp;|&nbsp;
                <a href="#">{{ story.descendants }} comments</a>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
    name: 'Homepage',
    data: function() {
      return {
        err: '',
        stories: []
      }
    },
    created: async function() {
      await axios
        .get('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(result => {
          this.results = result.data.slice(0, 30)
          this.results.forEach(async element => {
            await axios
              .get('https://hacker-news.firebaseio.com/v0/item/' + element + '.json')
              .then(result => {
                const story = {
                  ...result.data,
                  time: moment.unix(result.data.time).fromNow()
                }
                this.stories.push(story)
              })
              .catch(err => {
                this.err = err
              })
          });
        })
        .catch(err => {
          this.err = err
        })
    }
}
</script>

<style>

.story-list {
  text-align: left;
}

.title {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 10pt;
  color: #828282;
}

.title .index {
  vertical-align: top;
}

.title a {
  color: black;
  cursor: pointer;
  text-decoration: none;
}

.subtext {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 7pt;
  color: #828282;
}

.subtext a {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
}

.subtext a:hover {
  text-decoration: underline;
}


</style>