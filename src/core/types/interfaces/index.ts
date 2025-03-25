import { ColumnDef } from "@tanstack/react-table";
import {
  ButtonHTMLAttributes,
  Dispatch,
  HTMLAttributes,
  HtmlHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction,
} from "react";
import { FieldErrors, FieldValues, UseFormSetValue } from "react-hook-form";
import { Props } from "react-select";
import {
  T_Size,
  T_buttonTags,
  T_ColorModes,
  T_Cols_width,
  T_varientType,
  T_Directions,
  T_NavigationType,
  T_AppDirection,
  T_themeMode,
  T_Position,
} from "../types";
import { SweetAlertIcon } from "sweetalert2";

export interface In_AppSettingsContextSchema {
  themeSchema: T_themeMode;
  appDir: T_AppDirection;
  changeAppDir: (dir: T_AppDirection) => void;
  toggleAppDir: () => void;
  changeThemeSchema: (theme: T_themeMode) => void;
  toggleTheme: () => void;
}

export interface In_AppsSettingProviderProps {
  children: ReactNode;
  theme?: T_themeMode;
  dir?: T_AppDirection;
}

export interface In_TokenCheckState {
  checkToken: string;
  setCheckToken: Dispatch<SetStateAction<string>>;
}

export interface In_ProfileMenuProps {
  childrenMenu: In_ProfileMenuItems | undefined;
  setChildrenMenu: Dispatch<SetStateAction<In_ProfileMenuItems | undefined>>;
}

export interface In_ProfileMenuItems {
  id: number;
  path: string;
  icon: ReactNode;
  title: string;
  caption?: string;
  level?: number;
  children?: In_ProfileMenuItems[];
  parentId?: number;
}

export interface In_StyleConfig {
  default: string;
  dark?: string;
  light?: string;
  before?: string;
  after?: string;
  active?: string;
  deactive?: string;
  hovered?: string;
  className?: string;
  isValidate?: string;
  isInvalid?: string;
}

export interface In_FlexProps extends HTMLAttributes<HTMLDivElement> {
  dir?: "col" | "row";
  gap?: number | { x?: number; y?: number };
  children?: ReactNode;

  justifyContent?:
    | "start"
    | "end"
    | "center"
    | "between"
    | "around"
    | "evenly"
    | "initial"
    | "inherit";

  alignItems?:
    | "normal"
    | "stretch"
    | "start"
    | "end"
    | "baseline"
    | "initial"
    | "inherit"
    | "center";

  alignContent?:
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "between"
    | "around"
    | "evenly"
    | "initial"
    | "inherit";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
}

export interface In_RowProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface In_ColProps extends HtmlHTMLAttributes<HTMLDivElement> {
  def: T_Cols_width;
  sm?: T_Cols_width;
  md?: T_Cols_width;
  lg?: T_Cols_width;
  xl?: T_Cols_width;
  d2xl?: T_Cols_width;
  children?: ReactNode;
}

export interface In_CustomInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isInvalid?: boolean;
  error?: FieldErrors<FieldValues>;
}

export interface In_TinyNumberProps extends In_CustomInputProps {
  InitialNumber: number;
  setInitialNumber: Dispatch<SetStateAction<number>>;
  setValue?: UseFormSetValue<FieldValues>;
}

export interface In_ReactSelectProps extends Props {
  extraClass?: string;
  isMulti?: boolean;
  label?: string;
  option?: any;
}

export interface In_ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: T_varientType;
  tags?: T_buttonTags;
  to?: string;
}

export interface In_TableProps<T> {
  title?: string;
  data: T[];
  columns: ColumnDef<T>[];
  reSizeableCol?: boolean;
}

interface In_Image {
  src?: string;
  alt?: string;
}

export interface In_AvatarProps extends In_Image {
  size?: T_Size;
  isAvatarGrp?: boolean;
  srcGrp?: In_Image[];
}

export interface In_BadgeProps extends HTMLAttributes<HTMLDivElement> {
  component?: string;
  color?: T_ColorModes;
  size?: T_Size;
  children?: ReactNode;
}
export interface In_AccordionProps {
  header: () => ReactNode;
  content: () => ReactNode;
  isOpen?: boolean;
  isSpeatrate?: boolean;
}
export interface In_ModalProps {
  isCenteredChildren?: boolean;
  backBlur?: boolean;
  children?: ReactNode;
  onClose?: () => void;
  isOpen: boolean;
}
export interface In_ModalBoxProps {
  children?: ReactNode;
  className?: string;
  onClose?: () => void;
  bgColor?: string;
  width?: number | string;
  height?: number | string;
  shadow?: boolean;
  rounded?: T_Size;
}
export interface In_FileObject {
  id: number;
  files: File;
}

export interface In_InputFileProps {
  id?: string;
  sizeMb?: number;
  multiple?: boolean;
  handleAddFile?: (files: In_FileObject[]) => void;
  accept?: string;
  limit?: number;
}

export interface In_InputTypeFileStyleConfigs {
  label: In_StyleConfig;
  input: In_StyleConfig;
}

export interface In_IconsPareToExtentions {
  name: string;
  icon: ReactNode;
}
export interface In_AnyStringKey {
  [key: string]: string[];
}
export interface In_WizardSteps {
  stepNum: number;
  title: string;
  subTitle?: string;
  cotent: ReactNode;
  icon?: ReactNode;
}

export interface In_WizardProps {
  activeStep?: number;
  direction?: T_Directions;
  steps: In_WizardSteps[];
  navigationType?: T_NavigationType;
}

export interface In_WizardProviderProps extends In_WizardProps {
  children: ReactNode;
}

export interface In_WizardNavigatorProps {
  direction?: T_Directions;
}

export interface In_WizardDataProviderContext {
  activeStep: number;
  passedSteps: number[];
  steps: In_WizardSteps[];
  navigationType: T_NavigationType;
  direction: T_Directions;
  nextStep: () => void;
  prevStep: () => void;
}
export interface In_TooltipProps {
  children?: ReactNode;
  label: string | (() => JSX.Element) | ReactNode;
  position?: T_Position;
  size?: T_Size;
}
export interface In_TooltipBoxProps {
  label: string | (() => JSX.Element) | ReactNode;
  position: T_Position;
  size: T_Size;
}

export interface In_AlertOptions {
  icon?: SweetAlertIcon;
  title?: string;
  text?: string;
  imageUrl?: string;
  imageHeight?: number;
  imageAlt?: string;
  draggable?: boolean;
  confirmButtonText?: string;
  denyButtonText?: string;
  cancelButtonText?: string;
}

export interface In_Tabs {
  id: number;
  title: string;
  icon?: ReactNode;
  content: ReactNode;
}

export interface In_TabsProps {
  tabs: In_Tabs[];
  width?: number | string;
  height?: number | string;
  activeTab?: number;
}
export interface In_TimeLineData {
  id: number;
  title: string;
  time?: Date;
  icon?: string | ReactNode;
  content: string | ReactNode;
}
export interface In_TimeLineProps {
  data: In_TimeLineData[];
}

export interface In_RegisterStep1 {
  email: string;
}
export interface In_RegisterStep2 {
  email: string;
  verificationCode: string;
}
export interface In_RegisterStep3 {
  email: string;
  username: string;
  password: string;
}

export interface In_RegisterStep1Response {
  success: boolean;
  message: string;
  nextStep: string;
  otpNum: string;
}

export interface In_RegisterStep2Response {
  success: boolean;
  message: string;
}
export interface In_RegisterStep3Response {
  success: boolean;
  message: string;
  userid: string;
  token: string;
}

export interface In_RegisterStep3Opt {
  username?: string;
  email?: string;
  password?: string;
}

export interface RegisterStep1Data {
  email: string;
}

export interface RegisterStep2Data {
  otp: string;
}

export interface RegisterStep3Data {
  username: string;
  password: string;
}

export interface RegisterContextType {
  step1Data: RegisterStep1Data | null;
  step2Data: RegisterStep2Data | null;
  step3Data: RegisterStep3Data | null;
  setStep1Data: (data: RegisterStep1Data) => void;
  setStep2Data: (data: RegisterStep2Data) => void;
  setStep3Data: (data: RegisterStep3Data) => void;
  clearRegistrationData: () => void;
}

export interface In_Login {
  emailOrUsername: string;
  password: string;
  rememberme: boolean;
}

export interface In_LoginResponse {
  success: boolean;
  message: string;
  roles: string[];
  username: string;
  email: string;
  tokens: string;
}
export interface In_Location {
  address: string;
  city: string;
  country: string;
  state: string;
  zipCode: string;
}

export interface In_Profile {
  avatar: string;
  bio: string;
  firstname: string;
  lastname: string;
  createdAt: string;
  updatedAt: string;
  location: In_Location;
}

export interface In_ProfileResponse {
  success: boolean;
  profile: In_Profile;
  profileCompletionPercentage: number;
  message: string;
}

export interface In_EditProfileForm {
  firstname?: string;
  lastname?: string;
  bio?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
}

export interface In_ProfileUpdateResponse {
  success: boolean;
  message: string;
  profile: In_Profile;
}
