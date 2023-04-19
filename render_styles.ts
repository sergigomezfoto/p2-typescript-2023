export const renderStyles= ()=>`
* {
    margin: 0;
    padding: 0;
}
body{
    background-color: black;
}
.index-title {
    position: absolute;
    top: 450px;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    min-height: 300px;
    max-height: 300px;

    font-size: clamp(10px, 20vw, 300px);
    padding: 0;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    pointer-events: none;
    user-select: none;
    line-height: 1em;
    z-index: 1;
    text-align: center;
    transition:  0.5s all;
mix-blend-mode: difference;

}


.index-main {
    margin: 0;
    display: flex;
    flex-flow: row wrap;
    background-color: black;
}

.index-main>div {
    flex-grow: 1;
    width: 10vw;
    height: 10vw;
    min-width: 300px;
    min-height: 300px;
    overflow: hidden;
    position: relative;
    background-color: black;
}

.index-main>div a{
    display:inline-block;
    width: 100%;
    height: 100%;
}
.index-main>div a>img {
    object-fit: cover;
    transition: all .5s;
}
.gallery-img-caption{
    position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: 0.5s;
	opacity: 0;
	background-color: rgba(0,0,0,0);
	color: white;
    text-transform: capitalize;
    font-size: 90%;
    font-family: 'Poppins', sans-serif;

}
.gallery-img-caption h1{
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
}
.index-main>div:hover .gallery-img-caption {
	opacity: 1;
	background-color: rgba(0,0,0,.5);
} 


.index-main>div:hover .gallery-img {
	transform: scale(1.4) rotate(10deg);
}


`