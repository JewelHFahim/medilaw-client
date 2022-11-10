import { Link } from "react-router-dom";

const BlogDetails = ({ blog }) => {


  const { _id, title, image, description } = blog;


  return (
    <div>

      <div className="card h-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {description.length > 250 ? (
              <div>
                {description.slice(0, 150) + "..."}
              </div>
            ) : (
              <p>{description}</p>
            )}
          </p>
          <div className="card-actions justify-end">
          <Link to={`/blog/${_id}`}>
           <button className="btn btn-outline btn-info" >Details</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
