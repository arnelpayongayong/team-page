<template>
    <div>
        <div class="header">
            <div class="title">
                <h1>The creative crew</h1>
            </div>
            <div class="sub-title">
                <h1>WHO WE ARE</h1>
                <p style="font-family: Poppins;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 18px;
                            line-height: 27px;">
                    We are team of creatively diverse,driven.innovative individuals working in various location from the world.
                </p>
            </div>
        </div>

        <div class="main">
                <div class="grid-group">
                    <div class="grid-item">
                        <div class="grid-image">
                            <img src="./../assets/photo1.png" height="426px"/>
                            <h1 class="name">Bill Mahoney</h1>
                        </div>
                        <div class="position">
                            <p>Product Owner</p>
                        </div>
                    </div>

                    <div class="grid-item">
                        <div style="margin-top:20%" class="grid-image">
                            <img src="./../assets/photo2.png" height="426px"/>
                            <h1 class="name">Saba Cabrera</h1>
                        </div>
                        <div class="position" style="margin-top:20%">
                            <p>Art Director</p>
                        </div>
                    </div>

                    <div class="grid-item">
                        <div class="grid-image">
                            <img src="./../assets/photo3.png" height="426px"/>
                            <h1 class="name">Shae Lee</h1>
                        </div>
                        <div class="position">
                            <p>Tech Lead</p>
                        </div>
                    </div>

                    <div class="grid-item">
                        <div class="grid-image">
                            <img src="./../assets/photo4.png" height="426px"/>
                            <h1 class="name">Skylah Lu</h1>
                        </div>
                        <div class="position">
                            <p>UX Designer</p>
                        </div>
                    </div>

                    <div class="grid-item">
                        <div style="margin-top:20%" class="grid-image">
                            <img src="./../assets/photo5.png" height="426px"/>
                            <h1 class="name">Griff Richards</h1>
                        </div>
                        <div class="position" style="margin-top:20%">
                            <p>Developer</p>
                        </div>
                    </div>

                    <div class="grid-item">
                        <div class="grid-image">
                            <img src="./../assets/photo6.png" height="426px"/>
                            <h1 class="name">Stan John</h1>
                        </div>
                        <div class="position">
                            <p>Developer</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<style>
.header{
    display: flex;
    padding: 10px;
}
.header .title{
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -0.045em;
    margin-right: 5%;
}
.header .sub-title{
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    text-transform: uppercase;
}
.main{
    display: block;
    margin-top: 10% ;
}
.main .grid-group{
    display: grid;
    grid-template-columns: auto auto auto;
}
.grid-group .grid-item{
    display: flex;
}
.grid-item .position{
    text-orientation:sideways;
    writing-mode: vertical-rl;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    text-transform: uppercase;
}
.grid-item .name{
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
}

@media screen and (max-width: 1366px) {
    .grid-item .grid-image img{
        height: 250px;
    }
}

@media screen and (max-width: 1000px) {
    .grid-item .grid-image img{
        height: 200px;
    }
}

@media screen and (max-width: 600px) {
    .grid-item .grid-image img{
        height: 150px;
    }
    .grid-item{
        font-size: smaller;
    }
    .grid-item .name{
        font-size: 10px;
    }
    .grid-item .position{
        font-size: 10px;
    }
    
    footer{
        font-size: 10px;
    }
}

@media screen and (max-width: 600px) {
    .header{
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
    }
    .main .grid-group{
        grid-template-columns: auto auto;
    }

    .grid-group :nth-child(3){
        margin-top: 20%;
    }
}
</style>