<template>
<div>
    <v-row>
        <v-col cols="12">
        <h1>Simple Page</h1>
        <h1 v-if="condition_name">{{ name }}</h1>
        <v-btn color="success" @click="condition_name = !condition_name">Switch</v-btn>
        </v-col>
        <v-col cols="4" v-for="(item, index) in items" :key="index">
        <v-card>
            <v-img :src="item.img" />
            <v-card-title primary-title>
                {{ item.name }}
            </v-card-title>
            <v-card-title>
                <v-btn color="info" @click="callalertparam(item.name)">Info</v-btn>
            </v-card-title>
        </v-card>
        </v-col>
        <v-col cols="12">
            <v-row no-gutters>
            <v-col cols="4">
            <v-text-field 
            outlined
                v-model="alert_value"
                name="alert_value"
                label="กรอกข้อมูล Alert"
                id="alert_value">
            </v-text-field>
            </v-col>
            <v-col cols="2" class="ma-2">
            <v-btn color="error" @click="callalertparam(alert_value)">Alert textfield</v-btn>
            </v-col>
            </v-row>
            <v-btn color="success" @click="callalert(Danger)">Click It</v-btn>
        </v-col>
    </v-row>
</div>
</template>
  
  <script>    
  
    export default {
     data(){
        return{
            name:'Chatchanon Senakul',
            condition_name: false,
            alert_value:'',
            items:[
                {
                    name:'คนถ่ายภาพ',
                    img:'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'
                },
                {
                    name:'คนดื่มกาเเฟ',
                    img:require('../assets/Single7.jpg')
                }

            ],            
        }
     },
     methods:{
        callalert(){
            alert('Hello From the otherside.')
        },
        callalertparam(item){
            alert('สิ่งนี้มีชื่อว่า: '+item)
        },
     }
    }
  </script>