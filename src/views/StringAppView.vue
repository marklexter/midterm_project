<script >
export default {
data(){
    return {
    word:"",
   vow:0,
   num:0,
   con:0,
   conv:0,
  }
}, methods: {
    compute:function(){
   this.vow = this.word.match(/[aeiou]/gi).length;
   this.num = this.word.match(/\d/g)?.length||0;
   this.con = this.word.match(/[bcdfghjklmnpqrstvwxz]/gi).length;
   this.conv = this.word.replace(/[aeiou]/gi, '*');
    }
}
}

</script>


<template >

<v-card-title> STRING MANIPULATOR </v-card-title>
  <v-card
    class="ma-20"
    max-width="544"
    color="primary"
    
 > </v-card>  


    <WelcomeItem>
       

        <div class="card">

            <div class="container">
                <p>
Enter a String: {{word}}
</p>
<input type="word" v-model="word">
<p>
     <br>
     <v-btn
          color="primary"
         @click="compute"
        >
         RESULT
        </v-btn>
</p>
<br>


<p>
Vowels: {{vow}}
</p>
<br>
<p>
Numbers: {{num}}
</p>
<br>
<p>
Consonants {{con}}
</p>
<br>
<p>
Converted vowels: {{conv}}
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