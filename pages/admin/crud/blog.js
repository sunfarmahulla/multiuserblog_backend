import Layout from '../../../components/Layout';
import Link from 'next/link';
import Admin from '../../../components/auth/Admin';
import BlogCreate from '../../../components/crud/BlogCreate';


const Blog = () => {
    return (
        <Layout>
            <Admin>
                <div className="col-md-12 pt-5 pd-5">
                    <h2 className>Manage Categories and Tag</h2>

                </div>
                <div className="row col-sm-12">
                    <div className="col-md-12">
                        <BlogCreate />
                    </div>
                   
                    
                </div>
            </Admin>
        </Layout>

    );
};

export default Blog;