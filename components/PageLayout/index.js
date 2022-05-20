import { Container } from "react-bootstrap";
import Head from "next/head";
import NavBar from "components/Navbar";

const PageLayout = ({ children, className }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,400;0,700;1,200;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <NavBar />
        <div className={`page-wrapper ${className}`}>{children}</div>
        <footer className="page-footer">
          <div>
            <a href="#">courses</a>
            {" | "}
            <a href="#">github</a>
            {" | "}
            <a href="#">facebook</a>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default PageLayout;
