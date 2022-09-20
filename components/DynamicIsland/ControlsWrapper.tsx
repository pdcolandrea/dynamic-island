interface ControlsWrapperProps {
  children: React.ReactNode;
}
export default function ControlsWrapper(props: ControlsWrapperProps) {
  const { children } = props;
  return (
    <div className="grid grid-cols-1 items-center justify-center w-full text-white text-xs">
      {children}
    </div>
  );
}
