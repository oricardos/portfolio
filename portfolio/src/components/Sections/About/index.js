import { Section } from "../../Layout/Section";
import { SectionTitle } from "../../Text/SectionTitle";
import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={styles.wrapper}>
      <Section bg>
        <SectionTitle title="Sobre Mim" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          velit velit, volutpat semper dignissim dictum, imperdiet ut lacus.
          Quisque gravida ex a mattis pretium. Suspendisse potenti. Ut semper
          sagittis ligula et lacinia. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pellentesque velit velit, volutpat semper dignissim
          dictum, imperdiet ut lacus. Quisque gravida ex a mattis pretium.
          Suspendisse potenti. Ut semper sagittis ligula et lacinia. Aenean sit
          amet felis venenatis, egestas metus vitae, aliquet metus.
        </p>
      </Section>
    </div>
  );
};
