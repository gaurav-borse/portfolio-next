import Link from "next/link";

const Blog = () => {
  return (
    <section
      id='work'
      data-nav-tooltip='Work'
      className='pp-section pp-scrollable section'
    >
      <div className='container'>
        <div className='title'>
          <h3>Recent Projects.</h3>
        </div>
        <div className='row'>
          <div className='col-md-6 m-15px-tb'>
            <div className='blog-grid'>
              <div className='blog-img'>
                <Link href='https://b10services.com/' target='_blank'>
                  <img
                    src='static/img/projects/B10-Services.png'
                    title=''
                    alt=''
                  />
                </Link>
              </div>
              <div className='blog-info'>
                <div className='meta'>Web Development | Portfolio</div>
                <h6>
                  <Link href='https://b10services.com/' target='_blank'>
                    B10 Services
                  </Link>
                  <div className='meta mt-2'>
                    Creative Service Agency Portfolio
                  </div>
                </h6>
                <div className='meta2'>
                  <b>Techstack &mdash;</b> Frontend: HTML5, CSS3, BT, JS;
                  Backend: PHP-CodeIgniter; Database: MySQL, PhpMyAdmin
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 m-15px-tb'>
            <div className='blog-grid'>
              <div className='blog-img'>
                <Link href='https://satvikfresh.in/' target='_blank'>
                  <img src='static/img/projects/satvik.png' title='' alt='' />
                </Link>
              </div>
              <div className='blog-info'>
                <div className='meta'>Web Development | E-Commerce</div>
                <h6>
                  <Link href='https://satvikfresh.in/' target='_blank'>
                    Satvik Fresh
                  </Link>
                  <div className='meta mt-2'>
                    Oil Product's E-Commerce Portal
                  </div>
                </h6>
                <div className='meta2'>
                  <b>Techstack &mdash;</b> Frontend: HTML5, CSS3, BT, JS;
                  Backend: PHP-CodeIgniter; Database: MySQL, PhpMyAdmin
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 m-15px-tb'>
            <div className='blog-grid'>
              <div className='blog-img'>
                <Link href='https://poshmarkinteriors.com/' target='_blank'>
                  <img src='static/img/projects/poshmark.png' title='' alt='' />
                </Link>
              </div>
              <div className='blog-info'>
                <div className='meta'>Web Development | Portfolio</div>
                <h6>
                  <Link href='https://poshmarkinteriors.com/' target='_blank'>
                    Poshmark Interiors
                  </Link>
                  <div className='meta mt-2'>
                    An Interior & Exterior Design Agency
                  </div>
                </h6>
                <div className='meta2'>
                  <b>Techstack &mdash;</b> Frontend: HTML5, CSS3, BT, JS;
                  Backend: PHP-CodeIgniter; Database: MySQL, PhpMyAdmin
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 m-15px-tb'>
            <div className='blog-grid'>
              <div className='blog-img'>
                <Link href='https://tourism.nmc.gov.in/' target='_blank'>
                  <img
                    src='static/img/projects/nashik-tourism.png'
                    title=''
                    alt=''
                  />
                </Link>
              </div>
              <div className='blog-info'>
                <div className='meta'>
                  Web Development | Sponsored by Nashik Municipal Corporation
                </div>
                <h6>
                  <Link href='https://tourism.nmc.gov.in/' target='_blank'>
                    Nashik Tourism
                  </Link>
                  <div className='meta mt-2'>
                    Informative Web Portal for Tourists
                  </div>
                </h6>
                <div className='meta2'>
                  <b>Techstack &mdash;</b> Frontend: HTML5, CSS3, BT, JS;
                  Backend: PHP-CodeIgniter; Database: MySQL, PhpMyAdmin
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 m-15px-tb'>
            <div className='blog-grid'>
              <div className='blog-img'>
                <Link href='https://mazabappa.nmc.gov.in/' target='_blank'>
                  <img
                    src='static/img/projects/maza-bappa.png'
                    title=''
                    alt=''
                  />
                </Link>
              </div>
              <div className='blog-info'>
                <div className='meta'>
                  Web Development| E-Commerce | Sponsored by Nashik Municipal
                  Corporation
                </div>
                <h6>
                  <Link href='https://mazabappa.nmc.gov.in/' target='_blank'>
                    Get Bappa @Doorstep
                  </Link>
                  <div className='meta mt-2'>
                    Shadu Mati Ganesh Idol's E-Commerce Portal
                  </div>
                </h6>
                <div className='meta2'>
                  <b>Techstack &mdash;</b> Frontend: HTML5, CSS3, BT, JS;
                  Backend: PHP-CodeIgniter; Database: MySQL, PhpMyAdmin
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 m-15px-tb'>
            <div className='blog-grid'>
              <div className='blog-img'>
                <Link href='https://navamisheetal.com/' target='_blank'>
                  <img src='static/img/projects/Navami.png' title='' alt='' />
                </Link>
              </div>
              <div className='blog-info'>
                <div className='meta'>Web Development | Portfolio</div>
                <h6>
                  <Link href='https://navamisheetal.com/' target='_blank'>
                    Navami Sheetal
                  </Link>
                  <div className='meta mt-2'>
                    Astrologer's Portfolio & Appointment based System
                  </div>
                </h6>
                <div className='meta2'>
                  <b>Techstack &mdash;</b> Frontend: HTML5, CSS3, BT, JS;
                  Backend: PHP-CodeIgniter; Database: MySQL, PhpMyAdmin
                </div>
              </div>
            </div>
          </div>

          {/* <div className='col-12 read-more-blog text-center'>
            <Link href='/blog' className='px-btn px-btn-theme'>
              Load More
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Blog;
