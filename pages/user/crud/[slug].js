import Layout from '../../../components/Layout';
import Link from 'next/link';
import Private from '../../../components/auth/Private';
import BlogUpdate from '../../../components/crud/BlogUpdate';


const Blog = () => {
    return (
        <Layout>
            <Private>
                <div className="col-md-12 pt-5 pd-5">
                    <h2 className>Update Blogs</h2>

                </div>
                <div className="row col-sm-12">
                    <div className="col-md-12">
                        <BlogUpdate />
                    </div>
                   
                    
                </div>
            </Private>
        </Layout>

    );
};

export default Blog;