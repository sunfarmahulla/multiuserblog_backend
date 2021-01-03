import Layout from '../../components/Layout';
import Link from 'next/link';
import Private from '../../components/auth/Private';

const UserIndex = () => {
    return (
        <Layout>
            <Private>
            <div>
                    <div className="col-md-12 pt-5 pd-5">
                        <h2 className>User Dashboard</h2>

                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <ul class="list-group">
                                <li className="list-group-item">
                                    <a href="/user/crud/blog">
                                        Create Blog
                                </a>
                                </li>
                                <li className="list-group-item">
                                    <Link href="/user/crud/blogs">
                                        <a>Update/Delete Blogs</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <a href="/user/update">
                                        Update Profile
                                </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8">
                          
                        </div>

                    </div>
                </div>
            </Private>
        </Layout>
        
    );
};

export default UserIndex;