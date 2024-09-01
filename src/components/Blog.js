import Link from "next/link";
import Image from "next/image";
import ProjectList from "./ProjectData";

const Blog = () => {
  return (

    <section
      id="work"
      data-nav-tooltip="Work"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Recent Projects.</h3>
        </div>
        <div className="row">
          {ProjectList.map((data, index) => (
            <div className="col-md-6 m-15px-tb" key={data.id}>
              <div className="blog-grid">
                <div className="blog-img">
                  <Link href={data.link} target="_blank" rel="noreferrer">
                    <Image
                      src={`/static/img/projects/${data.image}`}
                      title=""
                      alt="" width={450} height={250} layout="intrinsic"
                    />
                  </Link>
                </div>
                <div className="blog-info">
                  <div className="meta">{data.tags}</div>

                  <h6>
                    <Link href={data.link} target="_blank" rel="noreferrer">
                      {data.name} {data.status === 'Under Development' && (
                        <span className="custom-badge">Under Development</span>
                      )}
                      {/* <span className="badge badge-pill m-1 underdev">Under Development</span> */}
                    </Link>
                    <div className="meta mt-2" style={{ fontWeight: "200" }}>
                      {data.meta}
                    </div>
                  </h6>
                  {
                    data.made_at != '' ?
                      <div className="meta">
                        Made at : {data.made_at}
                      </div>
                      :
                      ''
                  }
                  <div className="meta2 mt-2">
                    {Object.keys(data.techstack).map((key) =>
                      data.techstack[key]
                        .split(',')
                        .map((tech, index) => (
                          <span
                            key={index}
                            className="badge badge-pill m-1 techstack1"
                          >
                            {tech.trim()}
                          </span>
                        ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Load More Btn */}
          {/* <div className="col-12 read-more-blog text-center">
            <Link href="/blog" className="px-btn px-btn-theme">
              Load More
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Blog;
