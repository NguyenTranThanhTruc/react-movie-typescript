import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// styles
import { Wrapper, Content } from "./BreadCrumb.styles";

// type
type Props = {
  movieTitle: string;
};
const BreadCrumb: React.FC<Props> = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

export default BreadCrumb;
