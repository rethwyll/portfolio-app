import React, { ReactElement } from "react";
import { DateTime } from "luxon";

// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// hooks
import { useTranslation } from "react-i18next";
import { EducationItem } from "../../types/education";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

// types
type Props = {
  educationItem: EducationItem;
};

const EducationListItem = ({ educationItem }: Props): ReactElement => {
  const { t } = useTranslation();
  const testId = `education-list-item-${educationItem.id}`;
  return (
    <div data-testid={testId} key={educationItem.college}>
      <Typography variant="h4">
        {educationItem.degree}, {educationItem.major}
      </Typography>
      {educationItem.minor ? (
        <Typography
          variant="body1"
          component="p"
          data-testid={`${testId}-minor`}
        >
          {t("title.minor", { ns: "education" })}: {educationItem.minor}
        </Typography>
      ) : null}
      {educationItem["degree-honor"] ? (
        <Typography
          variant="body1"
          component="i"
          data-testid={`${testId}-degree-honor`}
        >
          {educationItem["degree-honor"]}
        </Typography>
      ) : null}
      <Typography variant="body1" component="p">
        <time dateTime={educationItem["graduation-date"]}>
          {DateTime.fromISO(educationItem["graduation-date"]).year}
        </time>
      </Typography>
      {educationItem["college-url"] ? (
        <Typography
          className="college-url"
          variant="body1"
          component="p"
          data-testid={`${testId}-college-url`}
        >
          <Link
            className="animateable"
            href={educationItem["college-url"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {educationItem.college}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </Typography>
      ) : null}
      <Typography variant="body1" component="p">
        {educationItem["college-location"]}
      </Typography>
    </div>
  );
};

export default EducationListItem;
