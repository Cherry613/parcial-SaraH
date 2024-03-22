import { PageProps } from "$fresh/server.ts";

const layout = (props: PageProps) => {
    const Component = props.Component;

    return(
        <div>
            <div class="fondo-enlaces">
                <a href="/wordcsr" class="enlaces">Client Side</a>
                <a href="/wordssr" class="enlaces">Server Side</a>
            </div>
            
            <h1>My Dictionary</h1>
            <Component/>
        </div>
    )
}

export default layout;