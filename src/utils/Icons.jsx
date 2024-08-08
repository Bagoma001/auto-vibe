export default function Icons({
  children,
 lightIcon,
  BackgroundIcon,
  ...props
}) {
  return (
    <>
      <i
        className={
          BackgroundIcon ? "material-icons icons" : "light-icons material-icons"
        }
        props
      >
        {children}
      </i>
    </>
  );
}
