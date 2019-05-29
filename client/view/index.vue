<template>
  <div class="test">
    <div class="">
        首页
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        ss: 333,
        testUrl: '/v3/assistant/coordinate/convert?key=ff0bcf778c5eeb93bd8b068b6e3f7781&locations=116.481499,39.990475|116.481499,39.990375',
        result: '',
      }
    },
    methods: {
      /**
       * 测试
       */
      sendGet () {
        this.log('开始请求')
        this.info('开始请求')
        this.warn('开始请求')
        this.error('开始请求')
        this.result = ''
        this.http.get(this.testUrl)
          .then((resp) => {
            this.result = resp
          })
          .catch(() => {
            this.error('出错了')
          })
      },
    },
  }
</script>
