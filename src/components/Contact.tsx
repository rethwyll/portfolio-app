import { ReactElement } from "react";
import parse from "html-react-parser";
import { styled } from "@mui/material/styles";

// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "@mui/material/Link";

// data
import socials from "../data/socials.json";

// hooks
import { useTranslation } from "react-i18next";
import { useLocationStore } from "../stores/locationStore";

// icons
import {
  faFlickr,
  faGithub,
  faInstagram,
  faMastodon,
  IconDefinition
} from "@fortawesome/free-brands-svg-icons";
const iconMap = {
  flickr: faFlickr,
  github: faGithub,
  instagram: faInstagram,
  mastodon: faMastodon
} as { [key: string]: IconDefinition };

// styled components
const Socials = styled("ul")`
  align-items: baseline;
  display: flex;
  gap: 0.5em;
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 2em;
`;

const Contact = (): ReactElement => {
  const { t } = useTranslation();
  const locationStore = useLocationStore();

  return (
    <section id="contact">
      <div>
        <p>{parse(t("availability", { ns: "contact", ...locationStore }))}</p>
        <figure>
          <a
            data-flickr-embed="true"
            href="https://www.flickr.com/photos/aprilbingham/14508920464/in/photolist-o771z7-5BQGnC-5BQFZE-21HSaQL-5BLzzr-o77mbm-o78BKU-o91fDi-nPJWxc-o5bUxm-o7ee6r-o6VTj2-o5bApN-o77f3Q-o91hwX-o77k4G-o91gW8-o91jCk-o91m6a-nPJPff-4RFA8h-21Fh9xd-4RBxeZ-21Cieeh-21FfHS3-nPKy9a-o78oCG-ZCN5Ao-nPJkgG-nPJKR2-o76XMJ-DAcA7d-4RBqSn-nPJG7s-o5bAVs-DAceeS-ZCMJ6f-21FguJC-6kP6dT-o78htY-o913xK-ZCMKVN-ZnCAFe-ZCLYVC-21D5mv1-21FgHwS-21J34Ft-o78hVQ-DAbEvL-ZnBddR"
            title="IMG_2415.jpg"
          >
            <img
              src="https://live.staticflickr.com/2909/14508920464_61c9d75f38_o.jpg"
              width="3888"
              alt="IMG_2415.jpg"
            />
          </a>
          <script
            async
            src="//embedr.flickr.com/assets/client-code.js"
            charSet="utf-8"
          ></script>
        </figure>
      </div>
      <aside>
        <Link
          className="animateable"
          color="warning.main"
          href={`mailto:${t("email", { ns: "contact" })}`}
        >
          {t("email", { ns: "contact" })}
        </Link>
        <Socials>
          {socials.map(s => (
            <Link href={s.url} target="_blank" rel="noopener noreferrer">
              <Icon icon={iconMap[s.icon]} />
            </Link>
          ))}
        </Socials>
      </aside>
    </section>
  );
};

export default Contact;
