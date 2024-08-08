import { FC } from "react";
import { IIconProps } from "./interfaces";

export const RefreshCircleIcon: FC<IIconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.83334 13.6C8.25804 14.4031 8.97945 15.0676 9.88888 15.4934C10.7983 15.9191 11.8465 16.083 12.8755 15.9604C13.9045 15.8378 14.8586 15.4353 15.594 14.8136L17 13.7451M17 16V13.6H14.5M16.1667 10.4C15.742 9.59687 15.0206 8.93238 14.1111 8.50664C13.2017 8.08091 12.1535 7.91699 11.1245 8.03959C10.0955 8.16219 9.1414 8.56467 8.40599 9.18637L7 10.2549M7 8V10.4H9.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
