// copmonents
import Typography from "@mui/material/Typography";

// data
import keywordsData from "../../data/keywords.json";

// hooks
import { useTranslation } from "react-i18next";

const Keywords = () => {
  const { t } = useTranslation();
  return (
    <section id="keywords" data-testid="keywords">
      <header>
        <Typography variant="h3">{t("title", { ns: "keywords" })}</Typography>
      </header>
      <ul>
        {keywordsData.map(k => (
          <Typography variant="body1" component="li" key={k}>
            {k}
          </Typography>
        ))}
      </ul>
    </section>
  );
};

export default Keywords;
