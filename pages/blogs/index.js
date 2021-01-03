import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import {withRouter} from 'next/router';
import Layout from '../../components/Layout';
import { useState } from 'react';
import { listBlogsWithCategoriesAndTags } from '../../actions/blog';
import Card from '../../components/blog/Card';
import {API, DOMAIN, APP_NAME} from '../../config';

const Blogs = ({ blogs, categories, tags, size, router }) => {
    
    const head = () => {
        <Head>
            <title>Programming blogs | {APP_NAME}</title>
            <meta name="description" content="Programming blogs and tutorial on react node next vue php laravel and web developemnt"></meta>
           
           //
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}></link>
            <meta property="og:title" content={`Latest web development tutorials | ${APP_NAME}`} />
            <meta property="og:description" 
                content="Programming blogs and tutorial on react node next vue php laravel and web developemnt"
            ></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`}></meta>
            <meta property="og:site_name" content={`${APP_NAME}`}></meta>
            <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`}></meta>
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seoblog.jpg`}></meta>
            <meta property="og:image:type" content="image/jpg"></meta>
            <meta property="fb:app_id" content="create your facebook  app id for url etc importtent for seo"></meta>
        
        </Head>
    }
    
 
    const showAllBlogs = () => {
        return blogs.map((blog, i) => {
            return(
            <article key={i}>
              <Card blog={blog} />
              <hr />
            </article>)
        })
    }

    const showAllCategories = () => {
        
        return categories.map((c, i) => (
            <Link href={`/categories/${c.slug}`} key={i}>
                <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ));

    };
    

    const showAllTags = () => {
        
        return tags.map((t, i) => (
            <Link href={`/tags/${t.slug}`} key={i}>
                <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ));

    };

    return (
        <React.Fragment>
            {head()}
            <Layout>
                <main>
                    <div className="container-fluid">
                        <header>
                            <div className="col-md-12 pt-3">
                              <center><h1 className="display-4 font-weight-bold">Programming blogs and tutorial</h1></center> 
                            </div>
                            <section>
                                
                                <div className="pb-5 text-center">
                                {showAllCategories()}
                                <br />
                                {showAllTags()}
                                </div>
                            </section>
                        </header>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                {showAllBlogs()}
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </React.Fragment>
    )

};

Blogs.getInitialProps = () => {

    return listBlogsWithCategoriesAndTags().then(data => {
        if (data.error) {
            console.log(data.error)
        } else {
            return {
                blogs: data.blogs,
                categories: data.categories,
                tags: data.tags,
                size: data.size
            };
        }
    })
}
export default withRouter(Blogs); //getInitialprops for faster serverside rendering
