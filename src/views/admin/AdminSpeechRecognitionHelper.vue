<!-- PageAbout.vue -->
<template>
<br>
<br>
<br>
  <div align="center">
    <button class="btn3 btn-blue" type="button" onclick="location.href='/admin/counsellingCenter'">
    상담센터리스트</button>
      &nbsp;&nbsp;
    <button class="btn3 btn-blue" type="button" onclick="location.href='/admin/speechRecognitionHelper'">
    음성인식도우미관리</button>
  </div> 
      
<br>
<br>
<div class="admin_box">      
<div class= "counting_user">
<br>
  <h3>음성인식도우미관리 현황</h3>
  <div>
    <div class="title">오늘의 사용자수</div>
		<div>22명</div> 
  </div>
   <div>
    <div class="title">이번달 사용자수</div>
		<div>33명</div> 
  </div>
   <div>
    <div class="title">월평균 사용자수</div>
		<div>44명</div> 
  </div>
</div>
</div>
<br>
<br>
<br>
<table align="center" class="board-table">
<thead>
  <h3>1주일간 이용내역이 없는 회원 리스트</h3>
	<tr>
		<th scope="col" class="th-num">아이디</th> 
		<th scope="col" class="th-title">이름</th> 
		<th scope="col" class="th-title">전화번호</th>
    <th scope="col" class="th-title">생일</th>  
    <th scope="col" class="th-title">이메일</th>  
    <th scope="col" class="th-title">가입일</th>    
	</tr>
	</thead>
<tbody>
		<tr align="center">
			<td align="center">user01</td>
			<td align="center">홍길동</td>
      <td align="center">010-1234-5678</td>
      <td align="center">19650902</td>
			<td align="center">user01@gmail.com</td>
      <td align="center">20230501</td>
		</tr>
	</tbody>
</table>

</template>

<style scoped>
img{
  width: 200px;
}

.title{
  background: gold;
}

.admin_box {
  display: flex;
}

.counting_user {
  width: 40%;
  height: 200px;
  margin: auto;;
}
.counting_user > div {
  display: flex;
  margin: auto;
  justify-content: center;
  height: 30%;  
}

.counting_user > div div {
border: 1px solid black;
width: 30%;
height: 40px;
border-radius: 10px;
}

.counting_emotion {
  width: 50%;
  border: 1px solid black;
  margin: auto;
  height: 300px;
}
.counting_emotion > div {
  display: flex;
  margin: auto;
  
}

.counting_emotion > div div {
border: 1px solid black;
width: 40%;
margin: auto;
height: 30%;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
section.notice {
  padding: 80px 0;
}

.page-title {
  margin-bottom: 60px;
}
.page-title h3 {
  font-size: 28px;
  color: #333333;
  font-weight: 400;
  text-align: center;
}


.board-table {
  font-size: 13px;
  width: 50%;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.board-table a {
  color: #333;
  display: inline-block;
  line-height: 1.4;
  word-break: break-all;
  vertical-align: middle;
}
.board-table a:hover {
  text-decoration: underline;
}
.board-table th {
  text-align: center;
}

.board-table .th-num {
  width: 100px;
  text-align: center;
}

.board-table .th-date {
  width: 200px;
}

.board-table th, .board-table td {
  padding: 14px 0;
}

.board-table tbody td {
  border-top: 1px solid #e7e7e7;
  text-align: center;
}

.board-table tbody th {
  padding-left: 28px;
  padding-right: 14px;
  border-top: 1px solid #e7e7e7;
  text-align: left;
}

.board-table tbody th p{
  display: none;
}

.btn3 {
  display: inline-block;
  padding: 0 30px;
  font-size: 15px;
  font-weight: 400;
  background: transparent;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  text-transform: uppercase;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 10px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

.btn-blue{
  background: #4285f4;
color: #fff;
}
</style>

