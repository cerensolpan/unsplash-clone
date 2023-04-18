export type ButtonProps = {
  children: React.ReactNode;
  backgroundColor: string;
  textColor: string;
  size?: "small" | "medium" | "large";
  onClick: any;
  selectedBorder: string;
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
  likes: Number;
  height: Number;
};

export type ModalProps = {
  handleClose: () => void;
  open: Boolean;
  selectedPhoto: Photo;
};

export type FilterProps = {
  selectedColor: String;
  setSelectedColor: any;
};
