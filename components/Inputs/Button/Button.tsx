import { Button, ButtonProps, styled } from "@mui/material";
import { memo, MouseEventHandler, ReactElement } from "react";
import { useState, useEffect } from "react";

const StyledButton = styled(Button)(({ theme }) => ({
  padding: ".4rem 1rem",
  borderRadius: ".3rem",
  textTransform: "capitalize",
  // background: "primary",
  // color: "primary.main",
}));

interface ShopagoButtonProps extends ButtonProps {
  children: ReactElement | ReactElement[];
  onClickFuntion?: MouseEventHandler<HTMLButtonElement>;
}

const ShopagoButton = ({
  children,
  onClickFuntion,
  ...rest
}: ShopagoButtonProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      {width >= 600 ? (
        <StyledButton
          variant="contained"
          disableElevation
          // size="small"
          // disableElevation
          {...rest}
          onClick={onClickFuntion}
        >
          {children}
        </StyledButton>
      ) : (
        <StyledButton
          disableElevation
          {...rest}
          variant="contained"
          // size="small"
          // disableElevation
          // onClick={onClickFuntion}
        >
          {children}
        </StyledButton>
      )}
    </>
  );
};

export default memo(ShopagoButton);
