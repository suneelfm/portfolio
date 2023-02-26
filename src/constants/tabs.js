import {
  ContactPageTwoTone,
  EngineeringTwoTone,
  FolderSharedTwoTone,
  HistoryEduTwoTone,
  InfoTwoTone,
  TimelineTwoTone,
  WebTwoTone,
} from "@mui/icons-material";

export const TABS = [
  {
    label: (
      <>
        <InfoTwoTone className="tabIcon" /> About
      </>
    ),
    route: "/about",
  },
  {
    label: (
      <>
        <EngineeringTwoTone className="tabIcon" /> Skills
      </>
    ),
    route: "/skills",
  },
  {
    label: (
      <>
        <TimelineTwoTone className="tabIcon" /> Experience
      </>
    ),
    route: "/experience",
  },
  {
    label: (
      <>
        <WebTwoTone className="tabIcon" /> Projects
      </>
    ),
    route: "/projects",
  },
  {
    label: (
      <>
        <HistoryEduTwoTone className="tabIcon" /> Education
      </>
    ),
    route: "/education",
  },
  {
    label: (
      <>
        <ContactPageTwoTone className="tabIcon" /> Contacts
      </>
    ),
    route: "/contacts",
  },
  {
    label: (
      <>
        <FolderSharedTwoTone className="tabIcon" /> Resume
      </>
    ),
    route: "",
  },
];
