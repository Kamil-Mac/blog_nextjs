import styles from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          alt="profile"
          src="https://images.unsplash.com/photo-1628336684329-aa791a057540?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          width={300}
          height={300}
        />
      </div>
      <h1>Lorem Ipsum</h1>
      <p>Some description</p>
    </section>
  );
};

export default Hero;
