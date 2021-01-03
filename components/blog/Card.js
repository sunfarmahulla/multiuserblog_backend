import Link from 'next/link'
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';

const Card = ({ blog }) => {

    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <a key={i} href={`/categories/${c.slug}`}>
                <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
            </a>
        ));

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <a key={i} href={`/tags/${t.slug}`}>
                <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
            </a>
        ));



    return (
        <div className="lead pd-4">
            <header>
                <a href={`/blogs/${blog.slug}`}>
                    <a><h3 className="pt-3 pd-3 font-weight-bold">{blog.title}</h3></a>
                </a>
            </header>
            <section>
                <p className="mark ml-1 pt-2 pd-2">
                    Written by<a href={`/profile/${blog.postedBy.username}`}>
                        <a>{blog.postedBy.username}</a></a>
                                             | Published {moment(blog.updatedAt).fromNow()}

                </p>
            </section>
            <section>
                {showBlogCategories(blog)}
                {showBlogTags(blog)}
                <br />

            </section>

            <div className="row">
                <div className="col-md-4">
                    <section>
                        <img className="img img-fluid" style={{ maxHeight: '150px', width: '100%', padding: '15px' }} src={`${API}/blog/photo/${blog.slug}`} alt={blog.title}></img>
                    </section>
                </div>


                <div className="col-md-8">
                    <section>
                        <div className="pd-3">{renderHTML(blog.excerpt)}</div>

                        <a href={`/blogs/${blog.slug}`}>
                            <a className="btn btn-primary pt-2">Read more...</a>
                        </a>
                    </section>
                </div>
            </div>
        </div>

    )
};

export default Card;