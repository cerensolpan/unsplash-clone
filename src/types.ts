export type ButtonProps = {
  children: React.ReactNode;
  backgroundColor: string;
  textColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export type Photo = {
  id: string;
  alt_description: string;
  description: string;
  urls: {
    full: string;
  };
  user: {
    name: string;
  };
  likes: number;
  height: number;
};

export type ModalProps = {
  handleClose: () => void;
  open: boolean;
  selectedPhoto?: Photo;
};
