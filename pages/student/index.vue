<template>
<b-container fluid>
    <h1 class="section-head white py-4">My COURSES</h1>
    <div class="box-bg">
        <b-row>
            <b-col cols="6">
                <p class="coursedate"> Enrolled On : 2nd September 2021</p>
                <h3 class="courseenrolled"> EVOLVE - Level I {{coursename}}</h3></b-col>
            <b-col>
                <b-row>
                    <b-col>
                        <h3 class="linkhead navic-color">Lecture 1</h3>
            "<p class="courselink"> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><b-button class="white-btn"> Lecture 1 Link</b-button></a><p class="coursedate"> Date: 4th September 2021 </p>
                    </b-col>
                    <b-col>
            <h3 class="linkhead navic-color">Lecture 2</h3>
            "<p class="courselink"> <a href="#"><b-button disabled class="white-btn"> Lecture 2 Link</b-button></a><p class="coursedate"> Date: 6th September 2021 </p>
            </b-col>
            </b-row>
            </b-col>
        </b-row>
    </div>
</b-container>
</template>

<script>
export default {

}
</script>

<style>
.body{

}
.courseenrolled{
    font-family: Brandon Grotesque;
font-size: 24px;
font-style: normal;
font-weight: 900;
line-height: 37px;
letter-spacing: 0em;
text-align: left;
    color:white;
}
.coursedate{
    font-family: NowThin;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 22px;
/* identical to box height, or 122% */

text-transform: capitalize;

color: #FFFFFF;
}
.box-bg{
    border-radius: 10px;
    border: 1px solid;
    border-color: #21E3CE;
    align-content:center;
    height:20%;
    width: 90%;
    text-align: center;
    margin:2rem;
    padding:2rem;
}
</style>
