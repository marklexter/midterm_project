<script >
export default {
data(){
    return {
    firstNum:0,
   secondNum:0,
   sum:0,
   diff:0,
   pro:0,
   quo:0,
   ave:0
  }
}, methods: {
    compute:function(){
    this.sum = this.firstNum + this.secondNum;
   this.diff = this.firstNum - this.secondNum;
   this.pro = this.firstNum * this.secondNum;
    this.quo = this.firstNum / this.secondNum;
     this.ave = (this.firstNum + this.secondNum)/2;
    }
}
}

</script>

<template>
<v-card-title> CALCULATOR</v-card-title>
  <v-card
    class="ma-20"
    max-width="544"
    color="primary"
    
 > </v-card>  
    <WelcomeItem>
       
        <div class="card">

            <div class="container">
                 <p>
 Enter first number:
 </p>
 <input type="number" v-model.number="firstNum">
  <p>
 Enter second number:
 </p>
 <input type="number" v-model.number="secondNum">
<br>
<br>
<v-btn
          color="primary"
         @click="compute">
        
          COMPUTE
        </v-btn>
 
<br>
 <p>
  <br>
 Sum: {{sum}}
 </p>
 <br>
 <p>
  Difference: {{diff}}
 </p>
 <br>
 <p>
  Product: {{pro}}
 </p>
 <br>
 <p>
  Quotient: {{quo}}
 </p>
 <br>
 <p>
  Average: {{ave}}
 </p>
 
            </div>
        </div>
    </WelcomeItem>

</template>

<style>


.card {
    border: 1px solid white;
    transition: 0.3s;
    width: 80%;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
    padding: 2px 16px;
}


</style>