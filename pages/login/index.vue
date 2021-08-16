<template>
  <section class="students container mt-5 d-flex justify-content-center">
    <div class="row">
        <div class="col-md-4">
            <div class="maincard ">
                <div class="thecard">
                    <div class="thefront text-center py-4"> <img src="~/assets/testimonials1.jpg" class="rounded-circle " width="220">
                        <h3 class="mt-2 mb-0">Jane Dae</h3>
                    </div>
                    <div class="theback py-3 px-3">
                        <div class="quote mt-3">
                            <h4><b-icon icon="chat-left-quote" scale="10" variant="info"></b-icon></h4>
                            <p class="quote text-justify p-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="maincard p-3">
                <div class="thecard">
                    <div class="thefront text-center py-4"> <img src="~/assets/testimonials2.jpg" class="rounded-circle mt-5" width="100">
                        <h3 class="mt-2 mb-0">Manor Josa</h3>
                    </div>
                    <div class="theback py-3 px-3">
                        <div class="quote mt-3">
                            <h4><i class="fa fa-quote-left"></i></h4>
                            <p class="about text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="maincard p-3">
                <div class="thecard">
                    <div class="thefront text-center py-4"> <img src="~/assets/testimonials3.jpg" class="rounded-circle mt-5" width="100">
                        <h3 class="mt-2 mb-0">Jimmy Anderson</h3>
                    </div>
                    <div class="theback py-3 px-3">
                        <div class="quote mt-3">
                            <h4><i class="fa fa-quote-left"></i></h4>
                            <p class="about text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.students{
  height: 100%;
  display: flex;
  background: white;
  text-align: center;
}
body {
    background-color: #f7f6f6
}

.maincard {
    position: relative;
    width: 300px;
    height: 300px
}

.thecard {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.8s ease
}

.thecard:hover {
    transform: rotateY(180deg)
}

.thefront {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: hidden;
    background: #242728;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid #eee;
    box-shadow: 5px 6px 6px 2px #e9ecef;
    padding: 10px
}

.theback {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: hidden;
    background: gray;
    color: #fff;
    border-radius: 10px;
    transform: rotateY(180deg);
    border: 1px solid #eee;
    box-shadow: 5px 6px 6px 2px #e9ecef;
    padding: 10px
}

.user_name {
    color: #eee;
    font-size: 10px;
    margin-top: 0px
}

.quote {
    font-size: 12px
}
</style>
