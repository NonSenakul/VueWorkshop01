<template class="main">
    <div class="intro">
      <div>
        <ImgLink />
        <v-img
          alt="Photo1"
          class="img1"
          contain
          src="..\src\assets\Single7.jpg"
        />
      </div>
        <div class="mainintro">
                <div class="intro2">
                    <div class="text-a1">ชื่อ-สกุล</div>
                    <div class="text-a2">นายฌัชชานนท์ เสนะกูล</div>
                    <div class="text-a1">ชื่อเล่น</div>
                    <div class="text-a2">นนท์</div>
                    <div class="text-a1">การศึกษา</div>
                    <div class="text-a2">มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตหาดใหญ่</div>
                    <div class="text-a1">สาขาที่เรียน</div>
                    <div class="text-a2"> เทคโนโลยีสารสนเทศและการสื่อสาร</div>
                    <div class="text-a1">งานอดิเรก</div>
                    <div class="text-a2">ฟังเพลง, ออกกำลังกาย</div>
                </div>
                <div class="intro3 text-left">
                    <div class="text-a1">สิ่งที่ชอบ</div>
                    <div class="text-a2">เเมวพันธุ์สีสวาท, ข้าวเเกงกะหรี่, การ์ตูน</div>
                    <div class="text-a1">สิ่งที่ไม่ชอบ</div>
                    <div class="text-a2">งู, ฝุ่น, หนังผี</div>
                    <div class="text-a1">จุดเเข็ง</div>
                    <div class="text-a2">การวางเเผนจัดการ</div>
                    <div class="text-a1">จุดอ่อน</div>
                    <div class="text-a2">การโฟกัสที่บางทีไม่มากพอ</div>
                    <div class="text-a1">คติประจำใจ</div>
                    <div class="text-a2">หากมีไม่มากพอ ก็ต้องหาเติม</div>
                </div>
                            
        </div>            
    </div>
    
  </template>
  
  <script>
  import ImgLink from "../components/ImgLink.vue"
  export default {
    components:{
        ImgLink
    }
  }
  </script>
  
  <style scoped>
  .img1 {
    border-radius: 50%;
    max-width: 250px;
    max-height: 250px;
    margin: 20px auto;
    white-space: nowrap;
  } 
  .img2 {
    border-radius: 20%;
    max-width: 100px;
    max-height: 100px;
    margin: 20px auto;    
  }    
  .intro {
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 15px;
    padding: 2%;
    margin: 2% 20% ;    
    width: 1000px;   
    height: 800px; 
  }
  .mainintro{    
    display: flex;
    align-items:center;
    justify-content: center;
    gap: 100px;    
    
  } 
  
.text-a1{
    font-size: 30px;
    color: #333;
    margin-top: 20px;
  }
  .text-a2{
    font-size: 20px;
    color: #555;
    margin-bottom: 15px
  }
  </style>
  