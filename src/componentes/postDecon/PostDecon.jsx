// import './post.css'

function Post() {
    
    return (        
    <div className="post">
        <img className="post-img" src="https://tomasbellometti.com.ar/img/projects/project-4.webp" alt="" />
        <div className="post-info">
            <div className="post-categorias">
                <span className="post-cat">HTML</span>
                <span className="post-cat">CSS</span>
                <span className="post-cat">Javascript</span>
            </div>
            <span className="post-title">
                Decon | Desarrollo y Construcción
            </span>
        </div>
        <p className="post-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos ad voluptatum neque cupiditate non! Unde hic vitae harum nisi quia facere saepe soluta iure quam laudantium pariatur totam similique magnam fugit, illum ullam natus.
        </p>
        <a className="post-link" href="https://youtu.be/aZfrflVacaI" target="_blank" rel="noreferrer"><i className="fas fa-globe post-link_icon"></i>Ir al sitio</a>
      
    </div>
    )
}

export default Post
