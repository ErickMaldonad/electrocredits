interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
    max-w-[1440px]
    mx-auto 
    xl:px-15 
    md:px-8
    px-2
    "
    >
      {children}
    </div>
  );
};

export default Container;
