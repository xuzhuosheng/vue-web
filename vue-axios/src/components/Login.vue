<template xmlns:v-on="http://www.w3.org/1999/xhtml">

  <div class="div_1" id="div_a">
    <h1>Login in</h1>
    <table class="table_1">
      <tr>
        <td>
          Username:
        </td>
        <td>
          <input type="text" name="username">
        </td>
      </tr>
      <tr>
        <td>
          Password:
        </td>
        <td>
          <input type="text" name="password">
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <!--<input type="submit" value="Submit">-->
          <button @click="submitFrom" value="">submitFrom</button>
        </td>
      </tr>

    </table>
  </div>
</template>

<style>
  .div_1 {
    height: 100%;
    width: 100%;
  }

  .table_1 {
    text-align: center;
  }
</style>
<script>


  export default {
    name: 'Login',
    methods: {

      submitFrom: function () {

        this.$axios
          .get('/hello?username=wuyanzu')
          // .then(function (res) {
          //   var result = res;
          //   debugger;
          //   console.log(res.data)
          //   alert(res.data)
          // })
          .then(response => {
            let _data = response.data;
            alert(_data);
          })
          .catch(error => {
            alert(error);

          })
      }


    }
  }


</script>
