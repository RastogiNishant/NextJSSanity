import PageLayout from "components/PageLayout";
import { getBlogBySlug } from "lib/api";

const BlogDetail = ({ blogs }) => {
  return (
    <PageLayout>
      <h1>Hello Details {blogs?.slug}</h1>
    </PageLayout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const blogs = await getBlogBySlug(params.slug);
  return {
    props: {
      blogs,
    },
  };
};

export default BlogDetail;
