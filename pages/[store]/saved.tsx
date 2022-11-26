import { ReactElement } from "react";
import StoreLayout from "../../layouts/store";

const Saved = () => {
  return <>Saved</>;
};

Saved.getLayout = (page: ReactElement) => <StoreLayout>{page}</StoreLayout>;

export default Saved;
