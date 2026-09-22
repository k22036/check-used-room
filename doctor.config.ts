import type { ReactDoctorConfig } from "react-doctor/api";

export default {
  verbose: true,
  scope: "full",
  ignore: {
    files: [".unlighthouse/**"],
  },
} satisfies ReactDoctorConfig;
