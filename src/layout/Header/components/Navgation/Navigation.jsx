'use client'
import Link from "next/link";
import styles from "./Navigation.module.css";
import { IoIosArrowDown } from "react-icons/io";

export default function Navigation({ isOpen, onClose }) {
  const dt_links = [
    {
      label: "Quem Somos",
      href: "/#quem-somos"
    },
    {
      label: "Soluções",
      href: "/#cards-services",
      dropdown: [
        { label: "Landing Page - Empresarial", href: "/service" },
        { label: "Aplicativos", href: "/service" },
        { label: "Sistemas Empresariais", href: "/service" },
        { label: "E-commerce", href: "/service" },
      ],
    },
    {
      label: "Sistemas Desenvolvidos",
      href: "/#cards-services",
      },
    {
      label: "Comunidade",
      href: "/#quem-somos"
    },
  ];

  const handleLinkClick = () => {
    onClose?.();
  };

  return (
    <nav className={`${styles.nav_Container} ${isOpen ? styles.navOpen : ""}`}>
      <ul className={styles.list_links}>
        {dt_links.map((link, index) => (
          <li
            key={index}
            className={`${styles.navItem} ${link.dropdown ? styles.hasDropdown : ""}`}
          >
            {link.dropdown ? (
              <div className={styles.dropdownWrapper}>
                <Link
                  className={`${styles.link} ${styles.dropdownLink}`}
                  href={link.href}
                  onClick={() => handleLinkClick()}
                >
                  {link.label}
                  <IoIosArrowDown className={styles.arrowIcon} />
                </Link>

                <ul className={styles.dropdownMenu}>
                  {link.dropdown.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        className={styles.dropdownItem}
                        href={item.href}
                        onClick={() => handleLinkClick()}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                className={styles.link}
                href={link.href}
                onClick={() => handleLinkClick()}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}