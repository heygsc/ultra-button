<template>
    <button class="btn" :class="[size, type]">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "UbLight",
    props: {
        size: {
            type: String,
            default: 'middle'
        },
        type: {
            type: String,
            default: 'btn-1'
        }
    }
};
</script>

<style scoped>
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-style:none;
    cursor:pointer;
}
.large {
  width: 150px;
  height: 50px;
  font-size: 16px;
}
.middle {
  width: 100px;
  height: 40px;
  font-size: 16px;
}
.small {
  width: 60px;
  height: 32px;
  font-size: 14px;
}
.mini {
  width: 50px;
  height: 25px;
  font-size: 14px;
}
.btn {
  flex: 1 1 auto;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
 /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
 }

/* Demo Stuff End -> */

/* <- Magic Stuff Start */

.btn:hover {
  background-position: right center; /* change the direction of the change here */
}

.btn-1 {
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);
}

.btn-2 {
  background-image: linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%);
}

.btn-3 {
  background-image: linear-gradient(to right, #84fab0 0%, #8fd3f4 51%, #84fab0 100%);
}

.btn-4 {
  background-image: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 51%, #a1c4fd 100%);
}

.btn-5 {
  background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 51%, #ffecd2 100%);
}

</style>