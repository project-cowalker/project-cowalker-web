<!--&lt;!&ndash;<template>&ndash;&gt;-->
  <!--&lt;!&ndash;<v-form>&ndash;&gt;-->
    <!--&lt;!&ndash;<v-container>&ndash;&gt;-->
      <!--&lt;!&ndash;<v-layout>&ndash;&gt;-->
        <!--&lt;!&ndash;<v-flex class="title">&ndash;&gt;-->
          <!--&lt;!&ndash;<p>프로젝트 개설</p>&ndash;&gt;-->
        <!--&lt;!&ndash;</v-flex>&ndash;&gt;-->
      <!--&lt;!&ndash;</v-layout>&ndash;&gt;-->


      <!--&lt;!&ndash;</v-container>&ndash;&gt;-->
    <!--&lt;!&ndash;</v-container>&ndash;&gt;-->
  <!--&lt;!&ndash;</v-form>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->

<!--<script>-->
<!--export default {-->
  <!--methods: {-->
    <!--handleSlideClick (dataset) {-->
      <!--console.log(dataset.index, dataset.name)-->
    <!--},-->
    <!--getImage (file) {-->
      <!--const fileReader = new FileReader()-->
      <!--fileReader.onload = () => { // 파일리더가 뭔가를 로드해왔을 때 함수블록을 실행된다-->
        <!--this.image = fileReader.result-->
      <!--};-->
      <!--fileReader.readAsDataURL(file) // 데이터에서 url을 끌고 오는 것-->
    <!--},-->
    <!--onFileChange (event) {-->
      <!--// if ((event.target.files[0]['type']).split('/')[0] === 'image') {-->
      <!--// for (let i = 0, numFiles = this.file.length; i < numFiles; i++) {-->
      <!--this.file = event.target.files[0]-->
      <!--this.getImage(this.file)-->
    <!--}-->
    <!--// }-->
  <!--}-->
<!--}-->
<!--</script>-->
<!--<style scoped>-->
  <!--.title{-->
    <!--margin-top: 35px;-->
    <!--margin-bottom: 60px;-->
    <!--display: flex;-->
    <!--justify-content: center;-->
    <!--font-weight: bold;-->
  <!--}-->
  <!--.p_title{-->
    <!--font-size: 17px;-->
    <!--margin-bottom: 50px;-->
  <!--}-->
  <!--.input_p {-->
    <!--border-radius: 10px;-->
    <!--width: 80%;-->
    <!--height: 50px;-->
    <!--background-color: #fcfcfc;-->
    <!--border: 1px solid #dbdbdb;-->
  <!--}-->
  <!--.textarea{-->
    <!--resize: none;-->
    <!--width: 80%;-->
    <!--border-radius: 10px;-->
    <!--margin-bottom: 50px;-->
    <!--background-color: #fcfcfc;-->
    <!--border: 1px solid #dbdbdb;-->
  <!--}-->
  <!--.btn-img{-->
    <!--margin-bottom: 60px;-->
    <!--width: 60px;-->
    <!--height: 60px;-->
    <!--margin-top: 10px;-->
    <!--margin-right: 30px;-->
  <!--}-->
  <!--.btn-done{-->
    <!--font-size: 16px;-->
    <!--width: 30%;-->
    <!--height: 65px;-->
    <!--border-radius: 19px;-->
    <!--background-color: #F3FCFE;-->
    <!--border: 1px solid #64DFFF;-->
  <!--}-->
  <!--.imgsize{-->
    <!--margin-right: 15px;-->
  <!--}-->
  <!--.input-image  {-->
    <!--display: flex;-->
    <!--max-width: 100%;-->
    <!--margin-bottom: 70px;-->
    <!--color: transparent;-->
    <!--width: 250px;-->
    <!--height: 250px;-->
    <!--border-radius: 5px;-->
    <!--background-color: #E2E2E2;-->
  <!--}-->
  <!--.newimg{-->
    <!--display: flex;-->
    <!--max-width: 100%;-->
    <!--margin-bottom: 70px;-->
    <!--width: 250px;-->
    <!--height: 250px;-->
    <!--border-radius: 5px;-->
  <!--}-->
<!--</style>-->
