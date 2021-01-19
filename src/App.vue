<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html {
  font-size: 100px;
  // font-size: 0.3rem;
}
ol,ul{
  list-style: none;
}
i{
  font-style: normal;
}
#app,html,body {
    width: 100%;
    height: 100%;
}
</style>
