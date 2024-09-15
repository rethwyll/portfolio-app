import { ReactElement } from "react";
import parse from "html-react-parser";

// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// data
import socials from "../../data/socials.json";

// hooks
import { useTranslation } from "react-i18next";
import { useLocationStore } from "../../stores/locationStore";

// icons
import {
  faFlickr,
  faGithub,
  faLinkedin,
  IconDefinition
} from "@fortawesome/free-brands-svg-icons";
const iconMap = {
  flickr: faFlickr,
  github: faGithub,
  linkedin: faLinkedin
} as { [key: string]: IconDefinition };

const Contact = (): ReactElement => {
  const { t } = useTranslation();
  const locationStore = useLocationStore();

  return (
    <section id="contact" data-testid="contact">
      <header>
        <Typography variant="h2">{t("contact", { ns: "routes" })}</Typography>
      </header>
      <div>
        <Typography variant="body1" component="p">
          {parse(t("availability", { ns: "contact", ...locationStore }))}
        </Typography>
      </div>
      <aside>
        <Typography variant="body1">
          <Link
            className="animateable"
            color="warning.main"
            href={`mailto:${t("email", { ns: "contact" })}`}
          >
            {t("email", { ns: "contact" })}
          </Link>
        </Typography>
        <ul id="contact-socials">
          {socials.map(s => (
            <Typography variant="body1" component="li" key={s.icon}>
              <Link
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-${s.icon}`}
              >
                <FontAwesomeIcon icon={iconMap[s.icon]} />
              </Link>
            </Typography>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default Contact;
