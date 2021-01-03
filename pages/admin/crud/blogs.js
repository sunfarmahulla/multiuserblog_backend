import Layout from '../../../components/Layout';
import Link from 'next/link';
import Admin from '../../../components/auth/Admin';
import BlogRead from '../../../components/crud/BlogRead';


const Blogs = () => {
    return (
        <Layout>
            <Admin>
                <div className="col-md-12 pt-5 pd-5">
                    <h2 className>Manage Blogs</h2>

                </div>
                <div className="row col-sm-12">
                    <div className="col-md-12">
                        <BlogRead />
                    </div>
                   
                    
                </div>
            </Admin>
        </Layout>

    );
};

export default Blogs;