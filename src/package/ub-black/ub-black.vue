<template>
    <button :class="[size,type]">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "UbBlack",
    props: {
        size: {
            type: String,
            default: 'middle'
        },
        type: {
            type: String,
            default: 'red'
        }
    }
};
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.large {
  width: 150px;
  height: 60px;
  font-size: 16px;
}
.middle {
  width: 120px;
  height: 50px;
  font-size: 16px;
}
.small {
  width: 80px;
  height: 36px;
  font-size: 12px;
}
.mini {
  width: 70px;
  height: 30px;
  font-size: 10px;
}
span{
  border-style:none;
}
button{
    border-style:none;
    background-color:black;
    position: relative;
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;
    margin-right: 50px;
    cursor:pointer;
}

.green{
    color:#03f484
}
.red{
    color:#f49c03
}
.blue{
    color: #03e9f4;
}
.green:hover{
    background: #03f484;
    color: #050801;
    box-shadow: 0 0 5px #03f484,
                0 0 25px #03f484,
                0 0 50px #03f484,
                0 0 200px #03f484;
     -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
}
.red:hover{
    background: #f49c03;
    color: #050801;
    box-shadow: 0 0 5px #f49c03,
                0 0 25px #f49c03,
                0 0 50px #f49c03,
                0 0 200px #f49c03;
     -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
}
.blue:hover{
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 200px #03e9f4;
     -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
}
/* button:nth-child(1){
    filter: hue-rotate(270deg);
}
button:nth-child(2){
    filter: hue-rotate(110deg);
} */
button span{
    position: absolute;
    display: block;
}
.green span:nth-child(1){
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,transparent,#03f484);
    animation: animate1 1s linear infinite;
}
@keyframes animate1{
    0%{
        left: -100%;
    }
    50%,100%{
        left: 100%;
    }
}
.green span:nth-child(2){
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg,transparent,#03f484);
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
}
@keyframes animate2{
    0%{
        top: -100%;
    }
    50%,100%{
        top: 100%;
    }
}
.green span:nth-child(3){
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg,transparent,#03f484);
    animation: animate3 1s linear infinite;
    animation-delay: 0.50s;
}
@keyframes animate3{
    0%{
        right: -100%;
    }
    50%,100%{
        right: 100%;
    }
}


.green span:nth-child(4){
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg,transparent,#03f484);
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;
}
@keyframes animate4{
    0%{
        bottom: -100%;
    }
    50%,100%{
        bottom: 100%;
    }
}

.red span:nth-child(1){
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,transparent,#f49c03);
    animation: animate1 1s linear infinite;
}
.red span:nth-child(2){
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg,transparent,#f49c03);
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
}
.red span:nth-child(3){
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg,transparent,#f49c03);
    animation: animate3 1s linear infinite;
    animation-delay: 0.50s;
}
.red span:nth-child(4){
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg,transparent,#f49c03);
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;
}

.blue span:nth-child(1){
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,transparent,#03e9f4);
    animation: animate1 1s linear infinite;
}
.blue span:nth-child(2){
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg,transparent,#03e9f4);
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
}
.blue span:nth-child(3){
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg,transparent,#03e9f4);
    animation: animate3 1s linear infinite;
    animation-delay: 0.50s;
}
.blue span:nth-child(4){
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg,transparent,#03e9f4);
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;
}
</style>