interface Props {
  countItems: number;
}
const Navbar = ({ countItems }: Props) => {
  return <div>count Items {countItems}</div>;
};

export default Navbar;
