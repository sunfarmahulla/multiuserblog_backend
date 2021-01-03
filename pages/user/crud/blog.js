import Layout from '../../../components/Layout';
import Link from 'next/link';
import Private from '../../../components/auth/Private';
import BlogCreate from '../../../components/crud/BlogCreate';


const CreateBlog = () => {
    return (
        <Layout>
            <Private>
                <div className="col-md-12 pt-5 pd-5">
                    

                </div>
                <div className="row col-sm-12">
                    <div className="col-md-12">
                        <BlogCreate />
                    </div>
                   
                    
                </div>
            </Private>
        </Layout>

    );
};

export default CreateBlog;