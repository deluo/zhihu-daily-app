<template>
  <div ref="page">

  </div>
</template>

<script>
  import {
    getNewsById
  } from '@/api/api'
  export default {
    name: 'Page',
    data() {
      return {
        stylecss: '',
        body: '',
        holderImg: ''
      }
    },
    beforeCreate() {
      let id = this.$route.params.id;
      getNewsById(id).then(res => {
        this.$refs.page.innerHTML = this.body = res.body.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
        this.holderImg = res.images[0].replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
        if (res.css) {
          this.stylecss = res.css
          this.createStyle()
        }
      })
    },
    methods: {
      createStyle() {
        var style = document.createElement('link')
        style.rel = "stylesheet"
        style.type = 'text/css'
        style.href = this.stylecss[0]
        var head = document.getElementsByTagName('head')[0]
        var link = document.getElementsByTagName('link') || []
        for (let i = 0; i < link.length; i++) {
          if (link.length) {
            head.removeChild(link[i])
          }
        }
        //添加顶部图片
        document.getElementsByClassName("img-place-holder")[0].style.backgroundImage = "url("+this.holderImg+")"
        head.appendChild(style)
      },
    }
  }

</script>

<style lang="scss" scoped>
  img {
    padding: 0 5px;
  }

</style>
