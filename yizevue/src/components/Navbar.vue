<script setup></script>

<template>
  <div>
    <nav class="flex flex-row w-full items-center justify-center h-14">
      <img src="../assets/img/logo.png" />

      <div class="navtext">Home</div>
      <div class="navtext">Project</div>
      <div class="navtext">About Me</div>
      <div class="navtext">Contact</div>
      <div class="navtext">Member</div>
    </nav>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Geo:ital@0;1&family=Roboto&display=swap");

.navtext {
  font-family: "Geo", sans-serif;
  font-style: normal;
  font-size: 1.6rem;
  margin: auto 30px;
  color: blueviolet;
  cursor: pointer;
}
.navtext:hover {
  color: rgb(0, 179, 0);
}
img {
  width: 50px;
  height: 50px;
  margin-right: 100px; /* 相当于 mr-6 的间距 */
}
nav {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
