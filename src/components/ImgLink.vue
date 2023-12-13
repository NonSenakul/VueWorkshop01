<template>
    <div>
        <h1>Hello! My name is non</h1>
        <v-img
            width="400"
            height="200"
            contain
            :src="img1"
        />
        <v-img
            width="400"
            height="200"
            contain
            :src="img2"
        />
    </div>
</template>

<script>
export default{
    data(){
        return{
            img1:'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
            img2: require('../assets/Single7.jpg')
        }
    },
}

</script>

<style>

</style>