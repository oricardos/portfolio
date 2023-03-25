import styles from './Links.module.css'

export const Links = ({ isFooter }) => {
  const links = [
    {
      name: "Github",
      link: "https://github.com/oricardos",
      icon: "fa-github",
    },
    // {
    //   name: "LinkedIn",
    //   link: "",
    //   icon: "fa-linkedin",
    // },
    {
      name: "Instagram",
      link: "https://www.instagram.com/oricardo.dev/",
      icon: "fa-instagram",
    },
    // {
    //   name: "Currículo",
    //   link: "",
    //   icon: "",
    // },
  ];

  // <i class="fas fa-file-code"></i>

  if (isFooter) {
    return <>footer</>;
  } else {
    return (
      <>
        <div className="flex gap-x-4">
          {links.map((link, index) => (
            <a key={index} href={link.link} className={`flex gap-x-1 items-center mb-1 ${styles.links}`}>
              {link.name === "Currículo" ? (
                <i className="fas fa-file-code" />
              ) : (
                <i className={`fab ${link.icon}`} />
              )}
              {link.name}
            </a>
          ))}
        </div>
      </>
    );
  }
};
