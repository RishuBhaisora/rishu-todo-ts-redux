import { FC, HTMLAttributes, memo } from "react";
import cn from "classnames";

type H3Props = HTMLAttributes<HTMLHeadingElement>;

const H3: FC<H3Props> = ({ children, className }) => {
  return <h3 className={cn("text-lg font-bold", className)}>{children}</h3>;
};

H3.defaultProps = {};

export default memo(H3);
