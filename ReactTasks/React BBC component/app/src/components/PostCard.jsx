

const PostCard = ({ title, desc, categoryName, imgSrc }) => {
    return <div className="post">
        <div className="post-img cursor-pointer" >
            <img src={imgSrc} alt="" />
        </div>
        <div className="post-content">
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
        <span className="post-category">
            {categoryName}
        </span>
    </div>
}
export default PostCard