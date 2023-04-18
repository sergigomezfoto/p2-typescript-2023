export const renderStyles= ()=>`
* {
    margin: 0;
    padding: 0;
}

.index-title {
    position: absolute; /* or absolute */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #07ffba;
    opacity: 0.9;
    filter: blur(2px);
    font-size: 20vw;
    mix-blend-mode: difference;
    font-family: 'Josefin Sans';
    text-transform: uppercase;
}

.index-main {
    margin: 0;
    display: flex;
    flex-flow: row wrap;
}

.index-main>div {
    flex-grow: 1;
    width: 10vw;
    height: 10vw;
    min-width: 300px;
    min-height: 300px;
}

.index-main>div a{
    display:inline-block;
    width: 100%;
    height: 100%;
}
.index-main>div a>img {
    object-fit: cover;
}
`