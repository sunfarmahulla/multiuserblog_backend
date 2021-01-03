import Layout from '../../components/Layout';
import Link from 'next/link';
import Admin from '../../components/auth/Admin';

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
                <div>
                    <div className="col-md-12 pt-5 pd-5">
                        <h2 className>Admin Dashboard</h2>

                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <ul class="list-group">
                                <li className="list-group-item">
                                    <a href="/admin/crud/category-tag">
                                        Create Category and Tags
                                </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="/admin/crud/blog">
                                        Create Blog
                                </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="/admin/crud/blogs">
                                        <a>Update/Delete Blogs</a>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8">
                            
                        </div>

                    </div>
                </div>
            </Admin>
        </Layout>

    );
};

export default AdminIndex;