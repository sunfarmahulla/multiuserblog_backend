import Link from 'next/link'
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';

const SmallCard = ({ blog }) => {


    return (
        <div className="card">
            <section>
                <Link href={`/blogs/${blog.slug}`}>
                    <a>
                        <img className="img img-fluid" style={{ maxHeight: '150px', width: '100%' }} src={`${API}/blog/photo/${blog.slug}`} alt={blog.title}></img>

                    </a>
                </Link>
            </section>
            <div className="card-body">
                <section>
                    <Link href={`/blogs/${blog.slug}`}>
                        <a className="card-title">{blog.title}</a>
                    </Link>
                    <p className="card-text">{renderHTML(blog.excerpt)}</p>
                </section>
            </div>

            <div className="card-body">
                <Link href={`/blogs/${blog.slug}`}>
                    <a >Read more...</a>
                </Link>
                <div>
                    Posted {moment(blog.updatedAt).fromNow()} by {''}
                Written by <Link href={`/profile/${blog.postedBy.username}`}>
                        <a>{blog.postedBy.username}</a></Link>
                                             | Published {moment(blog.updatedAt).fromNow()}


                </div>
            </div>
        </div>

    );
};

export default SmallCard;