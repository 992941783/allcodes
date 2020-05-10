<template>
  <div>
    <h2>个人简介</h2>
      <ul>
        <li>{{$route.query.userName}}</li>
        <li>{{$route.query.age}}</li>
        <li>{{$route.query.height}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name:'Profile'
}
</script>

<style>

</style>