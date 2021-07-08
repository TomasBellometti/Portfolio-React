import './post.css'

function Post() {
    
    return (        
    <div className="post">
        <img className="post-img" src="https://tomasbellometti.com.ar/img/projects/project-tattoo.jpg" alt="" />
        <div className="post-info">
            <div className="post-categorias">
                <span className="post-cat">Adobe Xd</span>
                <span className="post-cat">UI/UX</span>
                <span className="post-cat">Diseño Web</span>
            </div>
            <span className="post-title">
                Lorem ipsum dolor sit amet.
            </span>
        </div>
        <p className="post-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos ad voluptatum neque cupiditate non! Unde hic vitae harum nisi quia facere saepe soluta iure quam laudantium pariatur totam similique magnam fugit, illum ullam natus.
        </p>
        <a className="post-link" href="https://youtu.be/aZfrflVacaI" target="_blank" rel="noreferrer"><i className="fab fa-youtube post-link_icon"></i>Video del sitio</a>
      
    </div>
    )
}

export default Post
