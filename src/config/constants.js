import { swatch, fileIcon, ai, logoShirt, stylishShirt, edit, setting } from "../assets";
import logo from "/music.png"

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: logo,
  },
  {
    name: "edit",
    icon: edit,
  },

];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  // {
  //   name: "stylishShirt",
  //   icon: stylishShirt,
  // },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
