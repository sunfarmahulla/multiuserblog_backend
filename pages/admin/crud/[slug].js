import Layout from '../../../components/Layout';
import Link from 'next/link';
import Admin from '../../../components/auth/Admin';
import BlogUpdate from '../../../components/crud/BlogUpdate';


const Blog = () => {
    return (
        <Layout>
            <Admin>
                <div className="col-md-12 pt-5 pd-5">
                    <h2 className>Update Blogs</h2>

                </div>
                <div className="row col-sm-12">
                    <div className="col-md-12">
                        <BlogUpdate />
                    </div>
                   
                    
                </div>
            </Admin>
        </Layout>

    );
};

export default Blog;