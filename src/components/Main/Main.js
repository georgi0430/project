import style from './Main.module.css'

const Main = () => {
    return (
        <div>
            <h1>Sale Products</h1>
            <div class={style.cube}>
                <img class={style.cube} src="https://i0.wp.com/themes.svn.wordpress.org/online-store/1.0.6/screenshot.png"></img>
                <p class={style.name}>Test Name</p>
                <span class={style.price}>$250</span>
                <a class="btn" href="/details/{{_id}}">Details</a>
                <a class="btn" href="/{{_id}}/attach">Attach</a>
            </div>
            
        </div>
    )


}

export default Main;