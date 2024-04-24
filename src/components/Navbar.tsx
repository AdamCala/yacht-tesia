import styles from "@/styles/components/assets/Navbar/index.module.scss";

interface Props {
  isOpen: boolean;
}

const Navbar = ({ isOpen }: Props) => {
  console.log(isOpen);
  return (
    <div
      className={`${styles.main} ${isOpen ? styles.open : styles.closed}`}
    ></div>
  );
};

export default Navbar;
