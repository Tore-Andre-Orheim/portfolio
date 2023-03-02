import { Props } from "../types/components";
import Header from "./Header";
import Footer from "./Footer";

const Container = ({children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Container;