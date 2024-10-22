import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} • Book Vibe`}</title>
    </Helmet>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
