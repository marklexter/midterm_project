<template>
    <v-card
    class="ma-15"
    max-width="500"
    color="#FFC">
    <v-card-title > Question and Answer</v-card-title>
    <v-card-title > True or False</v-card-title>
    <v-card-subtitle>Category: SPORTS</v-card-subtitle>
    <v-divider></v-divider>
    <br/>

    <div id="container">
    <v-btn @click="getQuestions" >ENTER</v-btn>
    </div>
    <br>
    
    <v-list-item
            v-for="question in questions"
            :key="question.id">
            
            <v-list-item>{{ question.question }}</v-list-item>
            <v-list-item>
                {{question.correct_answer}}
            
            </v-list-item>
    </v-list-item>
    </v-card>
    <br/>
    
    </template>
    
    <script setup>
        import { ref } from 'vue';
        import axios from 'axios'
    
        const questions=ref([])
    
        async function getQuestions () {
            axios.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=medium').then( response => {
                questions.value=(response.data.results)
            })
            
        }
    
        function resetInput(){
            questions.value=""
        }
    
    </script>
    
    <style scoped>
    
    #container{
        text-align: center;
        border: 10px gray;
        width: 20%;
        height: 10;
        font-weight: lighter;
        font-family: 'Courier New', Courier, monospace;
        background-color: black;
        
        
    }
    
   
    </style>