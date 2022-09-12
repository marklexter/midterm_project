<template>
   
    
    <br/><br/> 

<v-card class="mx-auto"
max-width="800"
color="#FFE">
    
    

    <div id="pos"></div>
    
   
    <center>
        <v-card-title>ABOUT APPS</v-card-title>
        <v-btn text @click.stop="dialog= true" class color="#BBD" elevation="2">About Me</v-btn>
      


      <v-dialog v-model="dialog" max-width="800px">
          <v-card>
            
              <v-card-title>
                <img src="/public/1.jpg" width="600" height="400"> 
                  <h2>About Me</h2>
              </v-card-title>
              

          
      
              <v-card-text>

          
                  It displays the information about the Developer
           
              </v-card-text>
          </v-card>
      </v-dialog><br/><br/> 
      <v-btn text @click.stop="dialog2 = true" class color="#BBD" elevation="2">Basic Math</v-btn>

<v-dialog v-model="dialog2" max-width="500px">
  <v-card>
      <v-card-title>
        <img src="/public/3.jpg" width="600" height="400"> 
          <h2>Basic Math</h2>
      </v-card-title>
      <v-card-text>
          A simple calculator that will dipslay the sum, difference,product, quotient and the average.
      </v-card-text>
  </v-card>
</v-dialog><br/><br/> 

<v-btn text @click.stop="dialog3 = true" class color="#BBD" elevation="2">String App</v-btn>

      <v-dialog v-model="dialog3" max-width="500px">
          <v-card>
              <v-card-title>
                <img src="/public/2.jpg" width="600" height="400"> 
                  <h2>String App</h2>
              </v-card-title>
              <v-card-text>
                  It displays the number of vowels the number the consonat and lastly for the converted vowels
              </v-card-text>
          </v-card>
      </v-dialog><br/><br/> 

      <v-btn text @click.stop="dialog4 = true" class color="#BBD" elevation="2">Vuetify</v-btn>

      <v-dialog v-model="dialog4" max-width="500px">
          <v-card>
              <v-card-title>
                <img src="/public/4.jpg" width="600" height="400"> 
                  <h2>Vuetify</h2>
              </v-card-title>
              <v-card-text>
                  It displays information details about Vuetify
              </v-card-text>
          </v-card>
      </v-dialog><br/><br/> 

      <v-btn text @click.stop="dialog5 = true" class color="#BBD" elevation="2">Vue Quiz</v-btn>

      <v-dialog v-model="dialog5" max-width="500px">
          <v-card>
              <v-card-title>
                <img src="/public/5.jpg" width="600" height="400"> 
                  <h2>Vue Quiz</h2>
              </v-card-title>
              <v-card-text>
                  A simple quiz about Sports
              </v-card-text>
              <v-card-subtitle>
                Category: SPORTS
              </v-card-subtitle>
          </v-card>
      </v-dialog><br/><br/> 




   


    </center>

</v-card>
</template>
<script>
    export default {
        data() {
            return {
                dialog: false,
                dialog2: false,
                dialog3: false,
                dialog4: false,
                dialog5: false,
            }
        }
    }
    </script>
    <style scoped>
    #pos{
        margin-top: 30px;
        max-width: 0;
        max-height: 0;
        background-color: #798;
        font-family: 'Courier New', Courier, monospace;
       

    }
    </style>