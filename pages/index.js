import { Row, Col } from "react-bootstrap";
import PageLayout from "components/PageLayout";
import AuthorIntro from "components/AuthorIntro";
// import CardListItem from "components/CardListItem";
import CardItem from "components/CardItem";
import { getAllBlogs } from "lib/api";

const Home = ({ blogs }) => {
  // debugger;
  return (
    <PageLayout className="">
      <AuthorIntro />
      <hr />
      <Row className="mb-5">
        {/* <Col md="10">
          <CardListItem />
        </Col> */}
        {blogs.map((blog) => {
          console.log("blog", blog);
          return (
            <Col md="4" key={blog.title}>
              <CardItem
                title={blog.title}
                subTitle={blog.subtitle}
                date={blog.date.toLocaleString()}
                image={blog.coverImage}
                authorName={blog.author?.name}
                authorImage={blog.author?.avatar}
                link={{
                  href: "/blogs/[slug]",
                  as: `/blogs/${blog.slug}`,
                }}
              />
            </Col>
          );
        })}
      </Row>
    </PageLayout>
  );
};

export default Home;

/**
 * @description - this will be called during the build time, will only be called on server and provide props to component, and will create static pages
 */
export const getStaticProps = async () => {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
};
